import express from "express";
import { createServer as createViteServer } from "vite";
import nodemailer from "nodemailer";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import { formatInquiryPlainText, formatInquiryHtml, InquiryData } from "./src/utils/emailTemplate";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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

async function startServer() {
  const app = express();
  const PORT = Number(process.env.PORT) || 3000;

  app.use(express.json());

  // Healthcheck endpoint
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", timestamp: new Date().toISOString() });
  });

  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const data: InquiryData = req.body;

      if (!data || !data.fullName || !data.phone) {
        return res.status(400).json({
          success: false,
          error: "Full Name and Phone Number are required fields.",
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
      console.log(`[Email Dispatch] Inquiry from "${data.fullName}" sent successfully. MessageId: ${info.messageId}`);

      return res.status(200).json({
        success: true,
        messageId: info.messageId,
        message: "Your inquiry has been successfully transmitted to Surya Event Management.",
      });
    } catch (error: any) {
      console.error("[Email Dispatch Error]", error);
      return res.status(500).json({
        success: false,
        error: error?.message || "Failed to dispatch email. Please try again or connect via WhatsApp.",
      });
    }
  });

  // Serve static dist in production, or mount Vite middlewares in development
  if (process.env.NODE_ENV === "production") {
    const distPath = path.resolve(__dirname, "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.resolve(distPath, "index.html"));
    });
  } else {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Surya Event Management server running on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error("Failed to start server:", err);
  process.exit(1);
});
