import { Sparkles, MessageSquare, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (href: string) => {
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer
      id="main-footer"
      className="relative z-20 bg-[#050505] border-t border-[#D4AF37]/20 pt-20 pb-10 px-6 md:px-12 overflow-hidden"
    >
      {/* Background ambient gold gradient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-[#D4AF37]/3 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Top Section: Brand & Mini CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pb-12 border-b border-[#D4AF37]/10">
          <div className="lg:col-span-6 space-y-6">
            <div className="relative h-14 md:h-18 flex items-center">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQzukht4ZksiqmCw_RALdK-9riDQ428gmtnIh9TKLw7JmFjGcWgAx95YjZ&s=10"
                alt="Surya Event Management Logo"
                className="h-full w-auto object-contain brightness-105 rounded-md"
                referrerPolicy="no-referrer"
              />
            </div>
            <p className="font-sans text-sm md:text-base text-[#F5F5F0]/70 max-w-xl font-light leading-relaxed">
              Curators of traditional South Indian weddings, grand Muhurtha, and bespoke celebrations. Backed by decades of trusted operations in Bengaluru and Karnataka, we build milestones that echo in memory.
            </p>
          </div>

          <div className="lg:col-span-6 lg:text-right space-y-6">
            <h4 className="font-serif text-xl md:text-2xl lg:text-3xl text-white font-medium leading-tight">
              Craft your next unforgettable event with Surya Event Management.
            </h4>
            <div className="inline-flex">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick("#contact");
                }}
                className="px-8 py-4 bg-[#D4AF37] text-black font-sans font-bold text-sm uppercase tracking-widest rounded-md hover:brightness-110 active:scale-98 transition-all duration-300 shadow-[0_10px_25px_rgba(212,175,55,0.25)] cursor-pointer"
              >
                Plan An Event Now
              </a>
            </div>
          </div>
        </div>

        {/* Middle Section: Columns of links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          
          {/* Quick Links Column */}
          <div className="space-y-6">
            <h5 className="font-serif text-base md:text-lg font-bold text-[#D4AF37] uppercase tracking-wider">
              Quick Links
            </h5>
            <ul className="space-y-3 flex flex-col">
              {["Home", "About", "Services", "Gallery", "Blog", "Clients", "Contact"].map((link) => {
                const href = `#${link.toLowerCase().replace(/\s+/g, "")}`;
                return (
                  <a
                    key={link}
                    href={href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(href);
                    }}
                    className="text-sm md:text-base text-[#F5F5F0]/65 hover:text-[#D4AF37] transition-colors font-sans py-1"
                  >
                    {link}
                  </a>
                );
              })}
            </ul>
          </div>

          {/* Services Offered Column */}
          <div className="space-y-6 col-span-1">
            <h5 className="font-serif text-base md:text-lg font-bold text-[#D4AF37] uppercase tracking-wider">
              Specialized Offerings
            </h5>
            <ul className="space-y-3 flex flex-col">
              {["South Indian Weddings", "Muhurtha", "Grand Reception Structures", "End-to-End Packages"].map((item) => (
                <span key={item} className="text-sm md:text-base text-[#F5F5F0]/60 font-sans">
                  {item}
                </span>
              ))}
            </ul>
          </div>

          {/* More Services Offered Column */}
          <div className="space-y-6 col-span-1">
            <h5 className="font-serif text-base md:text-lg font-bold text-[#D4AF37] uppercase tracking-wider">
              Family Ceremonies
            </h5>
            <ul className="space-y-3 flex flex-col">
              {["Nischayathartha (Engagement)", "Seemantha (Baby Shower)", "Namakarana (Naming Ceremony)", "Mehendi & Sangeet", "Milestone Functions"].map((item) => (
                <span key={item} className="text-sm md:text-base text-[#F5F5F0]/60 font-sans">
                  {item}
                </span>
              ))}
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="space-y-6 col-span-2 md:col-span-1">
            <h5 className="font-serif text-base md:text-lg font-bold text-[#D4AF37] uppercase tracking-wider">
              HQ Registry Address
            </h5>
            <ul className="space-y-4">
              <li className="flex gap-3 items-start text-sm md:text-base text-[#F5F5F0]/60 font-sans font-light">
                <MapPin className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <span>Bengaluru & Karnataka, India.</span>
              </li>
              <li className="flex gap-3 items-center text-sm md:text-base text-[#F5F5F0]/60 font-sans font-light">
                <Phone className="w-4.5 h-4.5 text-[#D4AF37] flex-shrink-0" />
                <a href="tel:+919449303946" className="hover:text-[#D4AF37] transition-colors">+91 9449303946</a>
              </li>
              <li className="flex gap-3 items-center text-sm md:text-base text-[#F5F5F0]/60 font-sans font-light">
                <Mail className="w-4.5 h-4.5 text-[#D4AF37] flex-shrink-0" />
                <a href="mailto:suryaevent.india@gmail.com" className="hover:text-[#D4AF37] transition-colors break-all">suryaevent.india@gmail.com</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Section: Copyright & Schema Markup Tags */}
        <div className="pt-10 border-t border-[#D4AF37]/10 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-1.5">
            <p className="text-xs md:text-sm text-[#F5F5F0]/50 font-sans font-light">
              &copy; {currentYear} Surya Event Management. All Rights Reserved. Crafted with Royal Pride in Bengaluru.
            </p>
            <p className="text-xs md:text-sm text-[#F5F5F0]/60 font-sans font-light">
              Designed by : <span className="text-[#D4AF37] font-medium tracking-wider">Digitara</span>
            </p>
          </div>
          
          {/* Quick social display & reference links */}
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-6">
            <a
              href="https://www.instagram.com/_surya_event_management._?igsh=aDV5M2c2Mzd4eXNs"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs md:text-sm uppercase tracking-wider font-sans font-bold text-pink-400/80 hover:text-pink-300 transition-colors"
            >
              Instagram @_surya_event_management._
            </a>
            <a
              href="https://share.google/XzoqUIxxXwynxX8Fn"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs md:text-sm uppercase tracking-wider font-sans font-bold text-[#D4AF37]/80 hover:text-[#D4AF37] transition-colors"
            >
              Google Asset Drive
            </a>
          </div>
        </div>

      </div>

      {/* Embedded Event/Local Business Schema Markup inside custom JSON-LD script block */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Surya Event Management",
          "image": "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=1200",
          "telephon": "+91-9449303946",
          "email": "suryaevent.india@gmail.com",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "IN",
            "addressRegion": "Karnataka"
          },
          "priceRange": "$$$$",
          "description": "Surya Event Management crafts luxury weddings, corporate gatherings, destination celebrations, and bespoke events with over 16 decades of trusted experience."
        })}
      </script>
    </footer>
  );
}
