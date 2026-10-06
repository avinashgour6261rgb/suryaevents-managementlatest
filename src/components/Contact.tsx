import { useState, useEffect, FormEvent } from "react";
import { 
  Sparkles, 
  Phone, 
  Mail, 
  MapPin, 
  Send, 
  MessageSquare, 
  CheckCircle2, 
  WifiOff, 
  RefreshCw,
  ArrowRight,
  ShieldCheck,
  AlertCircle
} from "lucide-react";
import { formatInquiryPlainText, InquiryData } from "../utils/emailTemplate";

const PENDING_STORAGE_KEY = "surya_pending_consultations";

export default function Contact() {
  const [formData, setFormData] = useState<InquiryData>({
    fullName: "",
    phone: "",
    email: "",
    eventType: "South Indian Wedding & Muhurtha",
    eventDate: "",
    guestCount: "500 - 1,000 Guests",
    venueCity: "Bengaluru",
    notes: ""
  });

  const [submissionState, setSubmissionState] = useState<
    "idle" | "submitting" | "success" | "offline_queued" | "error"
  >("idle");
  const [statusMessage, setStatusMessage] = useState<string>("");
  const [isOnline, setIsOnline] = useState<boolean>(
    typeof navigator !== "undefined" ? navigator.onLine : true
  );

  // Auto-sync pending submissions stored during offline mode
  const syncPendingSubmissions = async () => {
    try {
      const raw = localStorage.getItem(PENDING_STORAGE_KEY);
      if (!raw) return;
      const pendingList: InquiryData[] = JSON.parse(raw);
      if (!Array.isArray(pendingList) || pendingList.length === 0) return;

      const remaining: InquiryData[] = [];
      for (const item of pendingList) {
        try {
          const res = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(item),
          });
          if (!res.ok) {
            remaining.push(item);
          }
        } catch {
          remaining.push(item);
        }
      }

      if (remaining.length > 0) {
        localStorage.setItem(PENDING_STORAGE_KEY, JSON.stringify(remaining));
      } else {
        localStorage.removeItem(PENDING_STORAGE_KEY);
      }
    } catch (e) {
      console.warn("Could not sync pending submissions:", e);
    }
  };

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      syncPendingSubmissions();
    };
    const handleOffline = () => {
      setIsOnline(false);
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    // Initial sync check on mount
    syncPendingSubmissions();

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  const saveToOfflineQueue = (data: InquiryData) => {
    try {
      const raw = localStorage.getItem(PENDING_STORAGE_KEY);
      const list: InquiryData[] = raw ? JSON.parse(raw) : [];
      list.push({
        ...data,
        submittedAt: new Date().toLocaleString("en-IN", {
          timeZone: "Asia/Kolkata",
          dateStyle: "full",
          timeStyle: "medium",
        }),
      });
      localStorage.setItem(PENDING_STORAGE_KEY, JSON.stringify(list));
    } catch (e) {
      console.error("Local storage error:", e);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmissionState("submitting");
    setStatusMessage("");

    const payload: InquiryData = {
      ...formData,
      submittedAt: new Date().toLocaleString("en-IN", {
        timeZone: "Asia/Kolkata",
        dateStyle: "full",
        timeStyle: "medium",
      }),
    };

    // If browser is actively offline, queue immediately
    if (typeof navigator !== "undefined" && !navigator.onLine) {
      saveToOfflineQueue(payload);
      setSubmissionState("offline_queued");
      setStatusMessage(
        "You are currently offline. Your event consultation details have been recorded securely on your device and will be dispatched to suryaevent.india@gmail.com the moment your internet connection reconnects."
      );
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json().catch(() => null);

      if (response.ok && result?.success) {
        setSubmissionState("success");
        setStatusMessage(
          "Your event inquiry has been successfully transmitted via official email to suryaevent.india@gmail.com. Our senior event director will review your requirements and reach out to you shortly."
        );
      } else {
        // Fallback: save to offline queue so lead is never lost
        saveToOfflineQueue(payload);
        setSubmissionState("offline_queued");
        setStatusMessage(
          result?.error ||
            "Unable to reach the mail server directly. Your inquiry has been saved securely on your device and will retry dispatch automatically."
        );
      }
    } catch (error: any) {
      // Network failure / server offline
      saveToOfflineQueue(payload);
      setSubmissionState("offline_queued");
      setStatusMessage(
        "Network connection interrupted. Your inquiry has been preserved locally and will automatically send when connectivity is restored."
      );
    }
  };

  // Build clean, formal plain text for WhatsApp and Mailto fallback (NO EMOJIS)
  const formalTextSummary = formatInquiryPlainText(formData);
  const encodedFormalSummary = encodeURIComponent(formalTextSummary);
  const mailtoUrl = `mailto:suryaevent.india@gmail.com?subject=${encodeURIComponent(
    `Event Consultation Inquiry - ${formData.fullName} - ${formData.eventType}`
  )}&body=${encodedFormalSummary}`;
  const whatsappUrl = `https://wa.me/919449303946?text=${encodedFormalSummary}`;

  return (
    <section
      id="contact"
      className="relative z-20 bg-[#050505] py-24 md:py-32 px-6 md:px-12 border-b border-[#D4AF37]/10 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[400px] h-[400px] bg-[#745414]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/5 border border-[#D4AF37]/30 rounded-full">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37] font-sans font-bold">
              Reserve Your Auspicious Date
            </span>
          </div>
          
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
            Begin Planning Your <br />
            <span className="text-gold-gradient italic font-normal">Royal Family Celebration</span>
          </h2>
          
          <p className="font-sans text-xs md:text-sm text-[#F5F5F0]/70 max-w-xl mx-auto leading-relaxed font-light">
            Share your event vision and dates with our wedding planners. We will craft a bespoke proposal tailored to your family traditions.
          </p>
          
          <div className="w-20 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-6" />
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Details & Trust Cards */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 bg-white/5 backdrop-blur-xl border border-[#D4AF37]/20 rounded-2xl space-y-6 shadow-xl">
              <h3 className="font-serif text-2xl font-bold text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#D4AF37]" />
                Direct Communication Desk
              </h3>
              
              <p className="text-xs md:text-sm text-[#F5F5F0]/70 font-light leading-relaxed">
                Connect directly with our event directors for immediate date availability, venue site visits, or customized pricing.
              </p>

              <div className="space-y-4 pt-4 border-t border-[#D4AF37]/10">
                <a
                  href="tel:+919449303946"
                  className="flex items-center gap-4 p-4 rounded-xl bg-black/40 border border-[#D4AF37]/20 hover:border-[#D4AF37]/60 hover:bg-[#D4AF37]/5 transition-all group"
                >
                  <div className="w-12 h-12 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] group-hover:scale-105 transition-transform flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-bold block">
                      Direct Telephone
                    </span>
                    <span className="font-serif text-base text-white font-bold group-hover:text-[#D4AF37] transition-colors">
                      +91 9449303946
                    </span>
                    <p className="text-[10px] text-[#F5F5F0]/50 mt-0.5">
                      Available Monday to Sunday for auspicious dates
                    </p>
                  </div>
                </a>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-[#25D366]/10 border border-[#25D366]/30 hover:border-[#25D366]/60 hover:bg-[#25D366]/20 transition-all group"
                >
                  <div className="w-12 h-12 rounded-full bg-[#25D366]/20 border border-[#25D366]/40 flex items-center justify-center text-[#25D366] group-hover:scale-105 transition-transform flex-shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-[#25D366] font-bold block">
                      Official WhatsApp
                    </span>
                    <span className="font-serif text-base text-white font-bold">
                      Instant Chat &amp; Stage Portfolio
                    </span>
                    <p className="text-[10px] text-[#F5F5F0]/50 mt-0.5">
                      Direct inquiry channel with management
                    </p>
                  </div>
                </a>

                <a
                  href="mailto:suryaevent.india@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-xl bg-black/40 border border-[#D4AF37]/20 hover:border-[#D4AF37]/60 hover:bg-[#D4AF37]/5 transition-all group"
                >
                  <div className="w-12 h-12 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] group-hover:scale-105 transition-transform flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-bold block">
                      Official Management Email
                    </span>
                    <span className="font-sans text-sm text-white font-medium group-hover:text-[#D4AF37] transition-colors break-all">
                      suryaevent.india@gmail.com
                    </span>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-black/40 border border-[#D4AF37]/20">
                  <div className="w-12 h-12 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-bold block">
                      Regional Coverage
                    </span>
                    <span className="font-serif text-sm text-white font-bold">
                      Bengaluru &amp; Karnataka, India
                    </span>
                    <p className="text-[10px] text-[#F5F5F0]/50 mt-0.5">
                      Hubli Registry &amp; Bengaluru Operational Base
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-8 md:p-10 bg-white/5 backdrop-blur-2xl border border-[#D4AF37]/30 rounded-2xl shadow-2xl relative">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-white">
                  Event Consultation &amp; Booking Form
                </h3>
                {!isOnline && (
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-amber-500/10 border border-amber-500/30 text-amber-300 text-[10px] font-sans uppercase tracking-wider">
                    <WifiOff className="w-3 h-3" /> Offline Mode Enabled
                  </span>
                )}
              </div>
              
              <p className="text-xs md:text-sm text-[#F5F5F0]/70 font-light mb-8">
                Fill in your celebration details below and our team will get in touch promptly.
              </p>

              {/* SUCCESS CONFIRMATION STATE */}
              {submissionState === "success" && (
                <div className="p-8 bg-[#D4AF37]/10 border border-[#D4AF37]/50 rounded-xl text-center space-y-5 animate-fade-in">
                  <div className="w-16 h-16 rounded-full bg-[#D4AF37]/20 flex items-center justify-center mx-auto text-[#D4AF37] border border-[#D4AF37]/40 shadow-[0_0_20px_rgba(212,175,55,0.3)]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  
                  <div className="space-y-2">
                    <span className="text-[11px] font-sans uppercase tracking-widest text-[#D4AF37] font-bold block">
                      Inquiry Dispatched via Email
                    </span>
                    <h4 className="font-serif text-2xl font-bold text-white">
                      Thank You, {formData.fullName}!
                    </h4>
                  </div>

                  <p className="text-xs md:text-sm text-[#F5F5F0]/90 max-w-lg mx-auto font-light leading-relaxed">
                    {statusMessage}
                  </p>

                  <div className="p-4 rounded-lg bg-black/60 border border-[#D4AF37]/20 text-left text-xs space-y-1.5 max-w-md mx-auto text-[#F5F5F0]/80">
                    <div className="flex justify-between border-b border-white/5 pb-1">
                      <span className="text-[#D4AF37]">Recipient:</span>
                      <span className="font-medium text-white">suryaevent.india@gmail.com</span>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-1">
                      <span className="text-[#D4AF37]">Event Type:</span>
                      <span className="font-medium text-white">{formData.eventType}</span>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-1">
                      <span className="text-[#D4AF37]">Tentative Date:</span>
                      <span className="font-medium text-white">{formData.eventDate || "To be decided"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#D4AF37]">Expected Guests:</span>
                      <span className="font-medium text-white">{formData.guestCount}</span>
                    </div>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-6 py-3 bg-[#25D366] text-black font-sans font-bold text-xs uppercase tracking-widest rounded-md hover:brightness-110 flex items-center justify-center gap-2 transition-all"
                    >
                      <MessageSquare className="w-4 h-4" />
                      Optional: Open WhatsApp Chat
                    </a>
                    
                    <button
                      onClick={() => {
                        setSubmissionState("idle");
                        setFormData({
                          fullName: "",
                          phone: "",
                          email: "",
                          eventType: "South Indian Wedding & Muhurtha",
                          eventDate: "",
                          guestCount: "500 - 1,000 Guests",
                          venueCity: "Bengaluru",
                          notes: ""
                        });
                      }}
                      className="w-full sm:w-auto px-6 py-3 border border-[#D4AF37]/40 text-[#D4AF37] hover:bg-[#D4AF37]/10 font-sans font-semibold text-xs uppercase tracking-widest rounded-md transition-all cursor-pointer"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              )}

              {/* OFFLINE QUEUED CONFIRMATION STATE */}
              {submissionState === "offline_queued" && (
                <div className="p-8 bg-amber-950/30 border border-amber-500/40 rounded-xl text-center space-y-5 animate-fade-in">
                  <div className="w-16 h-16 rounded-full bg-amber-500/20 flex items-center justify-center mx-auto text-amber-400 border border-amber-500/30">
                    <ShieldCheck className="w-8 h-8" />
                  </div>
                  
                  <div className="space-y-2">
                    <span className="text-[11px] font-sans uppercase tracking-widest text-amber-400 font-bold block">
                      Saved Securely in Offline Queue
                    </span>
                    <h4 className="font-serif text-2xl font-bold text-white">
                      Inquiry Stored Locally, {formData.fullName}
                    </h4>
                  </div>

                  <p className="text-xs md:text-sm text-[#F5F5F0]/90 max-w-lg mx-auto font-light leading-relaxed">
                    {statusMessage}
                  </p>

                  <div className="p-4 rounded-lg bg-black/60 border border-amber-500/20 text-left text-xs space-y-1.5 max-w-md mx-auto text-[#F5F5F0]/80">
                    <p className="text-amber-300 font-medium pb-1 border-b border-white/5">
                      Immediate Contact Channels (No Internet Required):
                    </p>
                    <p className="text-[11px] text-[#F5F5F0]/70">
                      You can instantly transmit these details via cellular WhatsApp or launch your device email app directly.
                    </p>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-6 py-3 bg-[#25D366] text-black font-sans font-bold text-xs uppercase tracking-widest rounded-md hover:brightness-110 flex items-center justify-center gap-2 transition-all"
                    >
                      <MessageSquare className="w-4 h-4" />
                      Send via WhatsApp
                    </a>

                    <a
                      href={mailtoUrl}
                      className="w-full sm:w-auto px-6 py-3 bg-[#D4AF37] text-black font-sans font-bold text-xs uppercase tracking-widest rounded-md hover:brightness-110 flex items-center justify-center gap-2 transition-all"
                    >
                      <Mail className="w-4 h-4" />
                      Open Device Email
                    </a>

                    <button
                      onClick={() => setSubmissionState("idle")}
                      className="w-full sm:w-auto px-5 py-3 border border-white/20 text-white/80 hover:text-white font-sans text-xs uppercase tracking-widest rounded-md cursor-pointer transition-all"
                    >
                      Back to Form
                    </button>
                  </div>
                </div>
              )}

              {/* ACTIVE FORM */}
              {submissionState !== "success" && submissionState !== "offline_queued" && (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {submissionState === "error" && (
                    <div className="p-4 bg-red-950/40 border border-red-500/40 rounded-lg flex items-start gap-3 text-red-200 text-xs">
                      <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-red-300">Submission Notice</p>
                        <p className="mt-0.5">{statusMessage}</p>
                      </div>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-[#D4AF37] font-sans font-semibold mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Anand Gowda"
                        disabled={submissionState === "submitting"}
                        className="w-full px-4 py-3 bg-black/60 border border-[#D4AF37]/30 rounded-lg text-white text-sm font-sans focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all disabled:opacity-50"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-widest text-[#D4AF37] font-sans font-semibold mb-2">
                        Mobile Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 9449303946"
                        disabled={submissionState === "submitting"}
                        className="w-full px-4 py-3 bg-black/60 border border-[#D4AF37]/30 rounded-lg text-white text-sm font-sans focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all disabled:opacity-50"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-[#D4AF37] font-sans font-semibold mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={formData.email || ""}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="yourname@gmail.com"
                        disabled={submissionState === "submitting"}
                        className="w-full px-4 py-3 bg-black/60 border border-[#D4AF37]/30 rounded-lg text-white text-sm font-sans focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all disabled:opacity-50"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-widest text-[#D4AF37] font-sans font-semibold mb-2">
                        Ceremony / Event Type
                      </label>
                      <select
                        value={formData.eventType}
                        onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                        disabled={submissionState === "submitting"}
                        className="w-full px-4 py-3 bg-black/80 border border-[#D4AF37]/30 rounded-lg text-white text-sm font-sans focus:outline-none focus:border-[#D4AF37] transition-all disabled:opacity-50"
                      >
                        <option value="South Indian Wedding & Muhurtha">South Indian Wedding &amp; Muhurtha</option>
                        <option value="Grand Reception Stage Structure">Grand Reception Stage Structure</option>
                        <option value="End-to-End Complete Wedding Package">End-to-End Complete Wedding Package</option>
                        <option value="Nischayathartha (Engagement)">Nischayathartha (Engagement)</option>
                        <option value="Seemantha (Baby Shower)">Seemantha (Baby Shower)</option>
                        <option value="Namakarana (Naming Ceremony)">Namakarana (Naming Ceremony)</option>
                        <option value="Mehendi & Sangeet Night">Mehendi &amp; Sangeet Night</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-[#D4AF37] font-sans font-semibold mb-2">
                        Tentative Date
                      </label>
                      <input
                        type="date"
                        value={formData.eventDate || ""}
                        onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                        disabled={submissionState === "submitting"}
                        className="w-full px-4 py-3 bg-black/60 border border-[#D4AF37]/30 rounded-lg text-white text-sm font-sans focus:outline-none focus:border-[#D4AF37] transition-all disabled:opacity-50"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-widest text-[#D4AF37] font-sans font-semibold mb-2">
                        Expected Guests
                      </label>
                      <select
                        value={formData.guestCount}
                        onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
                        disabled={submissionState === "submitting"}
                        className="w-full px-4 py-3 bg-black/80 border border-[#D4AF37]/30 rounded-lg text-white text-sm font-sans focus:outline-none focus:border-[#D4AF37] transition-all disabled:opacity-50"
                      >
                        <option value="Under 250 Guests">Under 250 Guests</option>
                        <option value="250 - 500 Guests">250 - 500 Guests</option>
                        <option value="500 - 1,000 Guests">500 - 1,000 Guests</option>
                        <option value="1,000 - 2,500 Guests">1,000 - 2,500 Guests</option>
                        <option value="2,500+ Grand Gathering">2,500+ Grand Gathering</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-widest text-[#D4AF37] font-sans font-semibold mb-2">
                        Venue / City
                      </label>
                      <input
                        type="text"
                        value={formData.venueCity || ""}
                        onChange={(e) => setFormData({ ...formData, venueCity: e.target.value })}
                        placeholder="Bengaluru"
                        disabled={submissionState === "submitting"}
                        className="w-full px-4 py-3 bg-black/60 border border-[#D4AF37]/30 rounded-lg text-white text-sm font-sans focus:outline-none focus:border-[#D4AF37] transition-all disabled:opacity-50"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-widest text-[#D4AF37] font-sans font-semibold mb-2">
                      Specific Requirements / Notes
                    </label>
                    <textarea
                      rows={3}
                      value={formData.notes || ""}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="Tell us about your preferred decor style, Muhurtha timing, catering requirements, or questions..."
                      disabled={submissionState === "submitting"}
                      className="w-full px-4 py-3 bg-black/60 border border-[#D4AF37]/30 rounded-lg text-white text-sm font-sans focus:outline-none focus:border-[#D4AF37] transition-all resize-none disabled:opacity-50"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={submissionState === "submitting"}
                      className="w-full py-4 bg-gradient-to-r from-[#FFDF00] via-[#D4AF37] to-[#AA771C] text-black font-sans font-bold text-xs uppercase tracking-[0.2em] rounded-lg hover:brightness-110 active:scale-98 transition-all shadow-[0_10px_25px_rgba(212,175,55,0.3)] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
                    >
                      {submissionState === "submitting" ? (
                        <>
                          <RefreshCw className="w-4 h-4 animate-spin" />
                          <span>Dispatching Inquiry to Management...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Submit Event Inquiry to suryaevent.india@gmail.com</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                    
                    <p className="text-[11px] text-center text-[#F5F5F0]/50 mt-3 font-sans">
                      All details are securely transmitted to the management team at suryaevent.india@gmail.com.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
