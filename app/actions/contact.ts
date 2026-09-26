// src/app/actions/contact.ts
"use server";

import { Resend } from "resend";
import { createClient } from "@supabase/supabase-js";

const resend = new Resend(process.env.RESEND_API_KEY);

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey =
  process.env.SUPABASE_SERVICE_ROLE_KEY ||
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

const supabase = createClient(supabaseUrl, supabaseKey);

export interface ContactFormState {
  success: boolean;
  error?: string;
  invalidField?: "fullName" | "email" | "phone";
}

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export async function submitContactLead(formData: FormData): Promise<ContactFormState> {
  const name = (formData.get("fullName") as string)?.trim();
  const email = (formData.get("email") as string)?.trim();
  const phone = (formData.get("phone") as string)?.trim() || "";
  const company = (formData.get("companyName") as string)?.trim() || "";
  const service = (formData.get("service") as string)?.trim() || "Project Management";
  const timeline = (formData.get("timeline") as string)?.trim() || "Within 1 Month";
  const rawMessage = (formData.get("message") as string)?.trim() || "";

  // 1. Validation
  if (!name || name.length < 2) {
    return {
      success: false,
      error: "Please enter your full name (minimum 2 characters).",
      invalidField: "fullName",
    };
  }

  if (!email || !EMAIL_REGEX.test(email)) {
    return {
      success: false,
      error: "Please provide a valid email address.",
      invalidField: "email",
    };
  }

  const cleanDigits = phone.replace(/\D/g, "");
  if (!phone || cleanDigits.length < 7) {
    return {
      success: false,
      error: "Please enter a valid contact phone number.",
      invalidField: "phone",
    };
  }

  try {
    // 2. Structured context message
    const messageParts: string[] = [];
    if (company) messageParts.push(`Company: ${company}`);
    if (timeline) messageParts.push(`Timeline: ${timeline}`);
    if (rawMessage) messageParts.push(`\nMessage:\n${rawMessage}`);
    const formattedMessage = messageParts.length > 0 ? messageParts.join("\n") : null;

    // 3. Insert plain phone directly into public.leads
    const { error: dbError } = await supabase.from("leads").insert([
      {
        site_origin: "bricketx.ae",
        form_type: "contact_page",
        name,
        email,
        phone, // Saved exactly as entered
        service,
        capital: timeline,
        message: formattedMessage,
        status: "new",
      },
    ]);

    if (dbError) {
      console.error("Supabase insert error:", dbError);
      return {
        success: false,
        error: "Database error. Please try again.",
      };
    }

    // 4. Send Emails via Resend
    if (process.env.RESEND_API_KEY) {
      const internalAlert = resend.emails.send({
        from: "BricketX Portal <info@bricketx.ae>",
        to: ["bricketxglobal@gmail.com"],
        replyTo: email,
        subject: `New Lead: ${service} - ${name}`,
        html: `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 8px; color: #1e293b;">
            <div style="border-bottom: 2px solid #c39967; padding-bottom: 12px; margin-bottom: 20px;">
              <span style="font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; color: #c39967; font-weight: 700;">BricketX Dubai Portal</span>
              <h2 style="margin: 6px 0 0 0; color: #0b0f17; font-size: 20px;">New Consultation Request</h2>
            </div>
            
            <table style="width: 100%; border-collapse: collapse; font-size: 14px; line-height: 1.6;">
              <tr><td style="padding: 8px 0; color: #64748b; width: 140px;"><strong>Client Name:</strong></td><td style="padding: 8px 0; color: #0f172a;">${name}</td></tr>
              <tr><td style="padding: 8px 0; color: #64748b;"><strong>Email:</strong></td><td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #c39967; text-decoration: none;">${email}</a></td></tr>
              <tr><td style="padding: 8px 0; color: #64748b;"><strong>Phone:</strong></td><td style="padding: 8px 0; color: #0f172a;">${phone}</td></tr>
              <tr><td style="padding: 8px 0; color: #64748b;"><strong>Company:</strong></td><td style="padding: 8px 0; color: #0f172a;">${company || "Not Provided"}</td></tr>
              <tr><td style="padding: 8px 0; color: #64748b;"><strong>Practice Area:</strong></td><td style="padding: 8px 0; color: #0f172a;"><strong>${service}</strong></td></tr>
              <tr><td style="padding: 8px 0; color: #64748b;"><strong>Timeline:</strong></td><td style="padding: 8px 0; color: #0f172a;">${timeline}</td></tr>
            </table>

            <div style="margin-top: 20px; padding-top: 16px; border-top: 1px solid #f1f5f9;">
              <strong style="color: #0f172a; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Message Details:</strong>
              <div style="margin-top: 8px; padding: 12px; background: #f8fafc; border-radius: 6px; font-size: 13px; color: #334155; line-height: 1.6; white-space: pre-wrap;">${rawMessage || "No additional notes provided."}</div>
            </div>
          </div>
        `,
      });

      const clientConfirmation = resend.emails.send({
        from: "BricketX Dubai <info@bricketx.ae>",
        to: [email],
        subject: `Consultation Request Received - BricketX Dubai`,
        html: `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 32px 24px; border: 1px solid #1e293b; background-color: #07090e; color: #cbd5e1; border-radius: 12px;">
            <div style="border-bottom: 1px solid #334155; padding-bottom: 16px; margin-bottom: 24px;">
              <span style="font-size: 10px; font-family: monospace; letter-spacing: 2px; text-transform: uppercase; color: #c39967; font-weight: bold;">BRICKETX UAE · BUSINESS BAY</span>
              <h1 style="color: #ffffff; font-size: 22px; font-weight: 800; margin: 8px 0 0 0;">Consultation Request Received</h1>
            </div>

            <p style="font-size: 14px; line-height: 1.6; color: #e2e8f0; margin-bottom: 16px;">
              Dear ${name},
            </p>

            <p style="font-size: 14px; line-height: 1.6; color: #94a3b8; margin-bottom: 20px;">
              Thank you for contacting <strong>BricketX Project Management L.L.C</strong>. We have securely registered your inquiry regarding <strong>${service}</strong>.
            </p>

            <div style="background-color: #0f141f; border: 1px solid #1e293b; border-radius: 8px; padding: 16px; margin-bottom: 24px;">
              <h3 style="color: #c39967; font-size: 11px; font-family: monospace; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 12px 0;">Inquiry Overview</h3>
              <table style="width: 100%; border-collapse: collapse; font-size: 13px; line-height: 1.6;">
                <tr><td style="color: #64748b; padding: 4px 0; width: 130px;">Practice:</td><td style="color: #ffffff;">${service}</td></tr>
                <tr><td style="color: #64748b; padding: 4px 0;">Target Timeline:</td><td style="color: #ffffff;">${timeline}</td></tr>
                <tr><td style="color: #64748b; padding: 4px 0;">Phone:</td><td style="color: #ffffff;">${phone}</td></tr>
                ${company ? `<tr><td style="color: #64748b; padding: 4px 0;">Company:</td><td style="color: #ffffff;">${company}</td></tr>` : ""}
              </table>
            </div>

            <p style="font-size: 13px; line-height: 1.6; color: #94a3b8; margin-bottom: 24px;">
              A senior engagement lead from our Dubai Mainland office will review your specifications and contact you within <strong>1 business day</strong>.
            </p>

            <div style="border-top: 1px solid #1e293b; padding-top: 20px; font-size: 12px; color: #64748b; font-family: monospace;">
              <div>BricketX Project Management L.L.C</div>
              <div>Business Bay, Dubai, United Arab Emirates</div>
              <div style="margin-top: 4px;">Direct Desk: +971 54 166 2352 · <a href="https://www.bricketx.ae" style="color: #c39967; text-decoration: none;">www.bricketx.ae</a></div>
            </div>
          </div>
        `,
      });

      await Promise.allSettled([internalAlert, clientConfirmation]);
    }

    return { success: true };
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : "An unexpected server error occurred.";
    console.error("Action exception:", err);
    return { success: false, error: errorMsg };
  }
}