export interface InquiryData {
  fullName: string;
  phone: string;
  email?: string;
  eventType: string;
  eventDate?: string;
  guestCount: string;
  venueCity?: string;
  notes?: string;
  submittedAt?: string;
}

export function formatInquiryPlainText(data: InquiryData): string {
  const timestamp = data.submittedAt || new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    dateStyle: "full",
    timeStyle: "medium",
  });

  return `SURYA EVENT MANAGEMENT - OFFICIAL CONSULTATION & BOOKING INQUIRY
======================================================================

An event consultation inquiry has been submitted through the website booking portal.

CLIENT CONTACT DETAILS
----------------------------------------------------------------------
Full Name:           ${data.fullName}
Mobile Phone Number: ${data.phone}
Email Address:       ${data.email?.trim() || "Not provided"}

EVENT SPECIFICATIONS
----------------------------------------------------------------------
Ceremony / Event:    ${data.eventType}
Tentative Date:      ${data.eventDate?.trim() || "To be decided / Flexible"}
Expected Guests:     ${data.guestCount}
Venue / City:        ${data.venueCity?.trim() || "Bengaluru"}

CLIENT REQUIREMENTS AND NOTES
----------------------------------------------------------------------
${data.notes?.trim() ? data.notes.trim() : "No specific notes provided."}

INQUIRY DETAILS
----------------------------------------------------------------------
Submission Time:     ${timestamp} (IST)
Platform Source:     Surya Event Management Web Portal
Action Required:     Contact client to confirm date availability and discuss ceremony arrangements.
======================================================================`;
}

export function formatInquiryHtml(data: InquiryData): string {
  const timestamp = data.submittedAt || new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    dateStyle: "full",
    timeStyle: "medium",
  });

  const escapeHtml = (str?: string) => {
    if (!str) return "";
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  };

  const safeFullName = escapeHtml(data.fullName);
  const safePhone = escapeHtml(data.phone);
  const safeEmail = escapeHtml(data.email?.trim() || "Not provided");
  const safeEventType = escapeHtml(data.eventType);
  const safeEventDate = escapeHtml(data.eventDate?.trim() || "To be decided / Flexible");
  const safeGuestCount = escapeHtml(data.guestCount);
  const safeVenueCity = escapeHtml(data.venueCity?.trim() || "Bengaluru");
  const safeNotes = escapeHtml(data.notes?.trim() || "No specific notes provided.").replace(/\n/g, "<br />");

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>New Event Consultation Inquiry</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      background-color: #f4f4f4;
      font-family: Arial, Helvetica, sans-serif;
      color: #222222;
      line-height: 1.5;
    }
    .wrapper {
      max-width: 650px;
      margin: 25px auto;
      background-color: #ffffff;
      border: 1px solid #d1d5db;
      border-radius: 4px;
      overflow: hidden;
    }
    .header {
      background-color: #0c0c0c;
      padding: 24px 30px;
      border-bottom: 3px solid #b08722;
    }
    .header h1 {
      margin: 0;
      color: #ffffff;
      font-size: 20px;
      letter-spacing: 1px;
      font-weight: 700;
      text-transform: uppercase;
    }
    .header p {
      margin: 6px 0 0 0;
      color: #d4af37;
      font-size: 13px;
      letter-spacing: 0.5px;
    }
    .content {
      padding: 28px 30px;
    }
    .section-title {
      font-size: 13px;
      font-weight: bold;
      color: #555555;
      text-transform: uppercase;
      letter-spacing: 1px;
      margin: 22px 0 10px 0;
      padding-bottom: 6px;
      border-bottom: 1px solid #e5e7eb;
    }
    .section-title:first-of-type {
      margin-top: 0;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 12px;
    }
    td {
      padding: 8px 0;
      vertical-align: top;
      font-size: 14px;
    }
    .label {
      width: 38%;
      color: #666666;
      font-weight: 600;
    }
    .value {
      width: 62%;
      color: #111111;
    }
    .value a {
      color: #8c6b16;
      text-decoration: none;
      font-weight: 600;
    }
    .notes-box {
      background-color: #fafafa;
      border: 1px solid #e5e7eb;
      padding: 14px;
      border-radius: 4px;
      font-size: 14px;
      color: #333333;
      margin-top: 8px;
    }
    .footer {
      background-color: #f9fafb;
      padding: 16px 30px;
      border-top: 1px solid #e5e7eb;
      font-size: 12px;
      color: #6b7280;
    }
  </style>
</head>
<body>
  <div class="wrapper">
    <div class="header">
      <h1>Surya Event Management</h1>
      <p>Official Website Booking &amp; Consultation Request</p>
    </div>
    
    <div class="content">
      <div class="section-title">Client Contact Information</div>
      <table>
        <tr>
          <td class="label">Full Name:</td>
          <td class="value"><strong>${safeFullName}</strong></td>
        </tr>
        <tr>
          <td class="label">Mobile Phone Number:</td>
          <td class="value"><a href="tel:${safePhone}">${safePhone}</a></td>
        </tr>
        <tr>
          <td class="label">Email Address:</td>
          <td class="value">${data.email?.trim() ? `<a href="mailto:${safeEmail}">${safeEmail}</a>` : safeEmail}</td>
        </tr>
      </table>

      <div class="section-title">Event Specifications</div>
      <table>
        <tr>
          <td class="label">Ceremony / Event Type:</td>
          <td class="value">${safeEventType}</td>
        </tr>
        <tr>
          <td class="label">Tentative Event Date:</td>
          <td class="value">${safeEventDate}</td>
        </tr>
        <tr>
          <td class="label">Expected Guest Count:</td>
          <td class="value">${safeGuestCount}</td>
        </tr>
        <tr>
          <td class="label">Venue / City Location:</td>
          <td class="value">${safeVenueCity}</td>
        </tr>
      </table>

      <div class="section-title">Specific Requirements and Notes</div>
      <div class="notes-box">
        ${safeNotes}
      </div>

      <div class="section-title">Submission Details</div>
      <table>
        <tr>
          <td class="label">Submission Timestamp:</td>
          <td class="value">${timestamp}</td>
        </tr>
        <tr>
          <td class="label">Source:</td>
          <td class="value">Web Consultation Booking Form</td>
        </tr>
      </table>
    </div>

    <div class="footer">
      This notification was automatically dispatched from the official Surya Event Management website booking system. Please connect with the client promptly.
    </div>
  </div>
</body>
</html>`;
}
