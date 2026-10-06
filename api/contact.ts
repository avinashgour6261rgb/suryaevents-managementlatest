import nodemailer from "nodemailer";
import { formatInquiryPlainText, formatInquiryHtml, InquiryData } from "../src/utils/emailTemplate";

const RECIPIENT_EMAIL = "suryaevent.india@gmail.com";
const SENDER_EMAIL = process.env.GMAIL_USER || "suryaevent.india@gmail.com";
const APP_PASSWORD = (process.env.GMAIL_APP_PASSWORD || "wial umme vufz zboz").replace(/\s+/g, "");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: SENDER_EMAIL,
    pass: APP_PASSWORD,
  },
});

export default async function handler(req: any, res: any) {
  // CORS setup
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ success: false, error: "Method not allowed. Use POST." });
  }

  try {
    const data: InquiryData = req.body;

    if (!data || !data.fullName || !data.phone) {
      return res.status(400).json({
        success: false,
        error: "Missing required fields: fullName and phone are required.",
      });
    }

    const plainText = formatInquiryPlainText(data);
    const htmlContent = formatInquiryHtml(data);
    const subject = `New Event Consultation Inquiry - ${data.fullName} - ${data.eventType || "Event"}`;

    const mailOptions = {
      from: `"Surya Event Management Portal" <${SENDER_EMAIL}>`,
      to: RECIPIENT_EMAIL,
      replyTo: data.email && data.email.trim().length > 0 ? data.email.trim() : SENDER_EMAIL,
      subject: subject,
      text: plainText,
      html: htmlContent,
    };

    const info = await transporter.sendMail(mailOptions);

    return res.status(200).json({
      success: true,
      messageId: info.messageId,
      message: "Event consultation inquiry sent successfully to management.",
    });
  } catch (error: any) {
    console.error("Error dispatching email:", error);
    return res.status(500).json({
      success: false,
      error: error?.message || "Internal server error while dispatching email.",
    });
  }
}
