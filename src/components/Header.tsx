import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Phone, MessageSquare, Sparkles } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Gallery", href: "#gallery" },
    { name: "Blog", href: "#blog" },
    { name: "Clients", href: "#clients" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" }
  ];

  const handleLinkClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        id="main-header"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#0a0a0a]/95 backdrop-blur-2xl border-b border-[#D4AF37]/35 py-2 sm:py-2.5 shadow-[0_10px_35px_rgba(0,0,0,0.9)]"
            : "bg-[#050505]/90 backdrop-blur-xl border-b border-[#D4AF37]/20 py-2.5 sm:py-3.5 shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
        }`}
      >
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 flex items-center justify-between">
          {/* Logo / Monogram */}
          <a
            id="logo-brand"
            href="#home"
            className="flex items-center gap-3 group flex-shrink-0"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick("#home");
            }}
          >
            <div
              className={`relative flex items-center transition-all duration-300 ${
                isScrolled ? "h-14 sm:h-16 md:h-18" : "h-16 sm:h-20 md:h-24"
              }`}
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQzukht4ZksiqmCw_RALdK-9riDQ428gmtnIh9TKLw7JmFjGcWgAx95YjZ&s=10"
                alt="Surya Event Management Logo"
                className="h-full w-auto object-contain brightness-110 group-hover:scale-105 transition-transform duration-500 rounded-lg drop-shadow-[0_2px_12px_rgba(212,175,55,0.25)]"
                referrerPolicy="no-referrer"
              />
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav id="desktop-nav" className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="relative text-sm tracking-widest text-[#F5F5F0]/80 hover:text-[#D4AF37] uppercase transition-colors duration-300 py-2 group font-sans"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gradient-to-r from-[#D4AF37] to-[#b08722] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Desktop Call to Actions */}
          <div id="desktop-ctas" className="hidden lg:flex items-center gap-4">
            <a
              id="header-cta-whatsapp"
              href="https://wa.me/919449303946?text=Hello%20Surya%20Event%2C%20I%20would%20like%20to%20plan%20a%20luxury%20event%20with%20you."
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full border border-[#D4AF37]/20 text-[#D4AF37] hover:bg-[#D4AF37]/10 hover:border-[#D4AF37]/50 transition-all duration-300"
              title="Chat on WhatsApp"
            >
              <MessageSquare className="w-4 h-4" />
            </a>
            <a
              id="header-cta-call"
              href="tel:+919449303946"
              className="p-2.5 rounded-full border border-[#D4AF37]/20 text-[#D4AF37] hover:bg-[#D4AF37]/10 hover:border-[#D4AF37]/50 transition-all duration-300"
              title="Call Us Now"
            >
              <Phone className="w-4 h-4" />
            </a>
            <a
              id="header-cta-plan"
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick("#contact");
              }}
              className="relative px-5 py-2.5 overflow-hidden group rounded-sm border border-[#D4AF37]/40"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37] to-[#745414] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="relative text-xs uppercase tracking-widest font-sans font-medium text-[#D4AF37] group-hover:text-[#050505] transition-colors duration-300 flex items-center gap-1.5">
                <Sparkles className="w-3 h-3" />
                Plan Your Event
              </span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            id="mobile-menu-trigger"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-[#D4AF37] hover:text-[#f5f5f0] transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-navigation-overlay"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="fixed inset-0 bg-black/90 backdrop-blur-2xl z-40 flex flex-col pt-28 px-8 pb-12 overflow-y-auto lg:hidden border-b border-[#D4AF37]/20 shadow-2xl"
          >
            {/* Custom Background Ambient Glow */}
            <div className="absolute top-1/4 right-0 w-72 h-72 bg-[#D4AF37]/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-[#745414]/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="flex flex-col gap-6 my-auto text-center">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className="font-serif text-2xl tracking-[0.1em] text-[#f5f5f0] hover:text-[#D4AF37] transition-colors duration-300"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            <div className="mt-auto pt-8 border-t border-[#D4AF37]/10 flex flex-col gap-4">
              <div className="flex justify-center gap-6">
                <a
                  href="https://wa.me/919449303946?text=Hello%20Surya%20Event%2C%20I%20would%20like%20to%20plan%20a%20luxury%20event."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3 rounded-full border border-[#D4AF37]/20 text-[#D4AF37] hover:bg-[#D4AF37]/5 text-sm uppercase tracking-widest font-sans"
                >
                  <MessageSquare className="w-4 h-4" />
                  WhatsApp
                </a>
                <a
                  href="tel:+919449303946"
                  className="flex items-center gap-2 px-5 py-3 rounded-full border border-[#D4AF37]/20 text-[#D4AF37] hover:bg-[#D4AF37]/5 text-sm uppercase tracking-widest font-sans"
                >
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>
              </div>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick("#contact");
                }}
                className="w-full text-center py-4 bg-gradient-to-r from-[#D4AF37] to-[#745414] text-[#050505] rounded-sm font-sans font-bold text-xs uppercase tracking-[0.2em] shadow-[0_5px_15px_rgba(212,175,55,0.2)]"
              >
                Plan Your Event
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
