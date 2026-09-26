import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, ArrowRight, MessageSquare } from "lucide-react";

interface HeroSlide {
  url: string;
  venue: string;
  tagline: string;
}

const HERO_BACKGROUND_IMAGES: HeroSlide[] = [
  {
    url: "/images/shubham_convention_reception_stage.jpg",
    venue: "Shubham Convention, Hubli",
    tagline: "Night Reception Stage with Illuminated Floral Canopy"
  },
  {
    url: "/images/mysore_heritage_destination_wedding.jpg",
    venue: "Heritage Resort, Mysuru",
    tagline: "Royal Heritage Destination Wedding & Mandapam"
  },
  {
    url: "/images/ballroom_banquet_hall.jpg",
    venue: "Grand Ballroom Banquet",
    tagline: "Luxury Reception Hall with Golden Crystal Chandeliers"
  },
  {
    url: "/images/traditional_seemantham_stage.jpg",
    venue: "Boutique Garden Venue, Bengaluru",
    tagline: "Traditional Seemantham & Auspicious Family Ceremony"
  },
  {
    url: "/images/twilight_resort_lawn_celebration.jpg",
    venue: "Celebrations Resort Lawn",
    tagline: "Twilight Open-Air Reception & Fairy-Lit Pavilion"
  },
  {
    url: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=1920",
    venue: "Bengaluru Palace Grounds",
    tagline: "Grand Muhurtha & Royal Wedding Pavilions"
  },
  {
    url: "https://cdn0.weddingwire.in/vendor/3890/3_2/960/jpg/wedding-planners-surya-events-stage-decor-3_15_373890-162973430113036.jpeg",
    venue: "Taj West End, Bengaluru",
    tagline: "Handcrafted Floral Lattice & Brass Bell Chandeliers"
  },
  {
    url: "https://cdn0.weddingwire.in/vendor/3890/3_2/960/jpg/wedding-planners-surya-events-stage-decor-7_15_373890-162973430996842.jpeg",
    venue: "Palace Sheesh Mahal, Bengaluru",
    tagline: "Multi-Tiered Illuminated Stage Architecture"
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6COl9PHfclJ891zYOu4v_sJMy2Hsc-TdjNIFhogJ3zBoNG1pTEbZ3zkx_&s=10",
    venue: "Gayathri Vihar, Bengaluru",
    tagline: "Regal Banquet & Synchronized Warm Light Walkway"
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp3JUUo27gsiv7sCK9t7hjHkAquUB8wPrJBfzUNTfRyz2aCvq6dDpI-oBj&s=10",
    venue: "Heritage Garden Club, Mysuru",
    tagline: "Rose Petal Decorated Wooden Jhula & Brass Urli"
  },
];

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const [windowHeight, setWindowHeight] = useState(1000);
  const [currentImageIdx, setCurrentImageIdx] = useState(0);

  // Background Slideshow changing every 3.2 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIdx((prev) => (prev + 1) % HERO_BACKGROUND_IMAGES.length);
    }, 3200);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const handleResize = () => {
      setWindowHeight(window.innerHeight || 1000);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);
    
    // Initial height
    handleResize();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Calculate scroll ratio normalized between 0 and 1 over the hero section height
  const progress = Math.min(Math.max(scrollY / windowHeight, 0), 1);

  // Scroll animations values
  const textY = progress * -180; // Parallax text movement
  const textOpacity = 1 - progress * 1.5; // Text fades out
  const bgScale = 1 + progress * 0.25; // Main image zooms in
  const portalScale = 1 + progress * 6.5; // Arch portal scales up massively to "fly through"
  const portalOpacity = progress > 0.85 ? 0 : 1 - (progress * 1.1); // Portal fades out near the end
  const darkOverlayOpacity = 0.45 + progress * 0.45; // Gradually darken as user goes down to blend into the next section

  const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative w-full h-[105vh] bg-[#050505] overflow-hidden flex items-center justify-center"
    >
      {/* 1. Underlying Venue Image Slideshow Layer (The Destination) */}
      <div
        className="absolute inset-0 z-0 origin-center transition-transform duration-75 ease-out"
        style={{
          transform: `scale(${bgScale}) translate3d(0, ${progress * -30}px, 0)`,
        }}
      >
        {HERO_BACKGROUND_IMAGES.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              currentImageIdx === idx ? "opacity-100 scale-100" : "opacity-0 scale-105 pointer-events-none"
            }`}
          >
            <img
              src={slide.url}
              alt={`${slide.venue} - ${slide.tagline}`}
              className="w-full h-full object-cover object-center contrast-[1.05] saturate-[1.15] brightness-[0.96] filter"
              referrerPolicy="no-referrer"
            />
          </div>
        ))}

        {/* Soft Darkening Overlay for Visibility + Readability */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#050505]/55 via-black/40 to-[#050505]/90 transition-opacity duration-75"
          style={{ opacity: darkOverlayOpacity }}
        />
        {/* Balanced Radial Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.25)_0%,rgba(5,5,5,0.8)_100%)] pointer-events-none" />
        {/* Ambient Gold Bottom Tint */}
        <div className="absolute bottom-0 left-0 right-0 h-80 bg-gradient-to-t from-[#050505] to-transparent" />
      </div>

      {/* Slide Indicators & Venue Badge */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 pointer-events-auto">
        <div className="flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#D4AF37]/30 shadow-lg">
          <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
          <span className="text-[11px] text-[#F5F5F0]/90 font-sans tracking-wide">
            {HERO_BACKGROUND_IMAGES[currentImageIdx].venue}
          </span>
          <span className="text-[10px] text-[#D4AF37]/60 px-1 hidden sm:inline">•</span>
          <span className="text-[10px] text-[#D4AF37]/90 font-serif italic hidden sm:inline">
            {HERO_BACKGROUND_IMAGES[currentImageIdx].tagline}
          </span>
        </div>

        <div className="flex items-center gap-1.5 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full border border-[#D4AF37]/30">
          {HERO_BACKGROUND_IMAGES.map((slide, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentImageIdx(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                currentImageIdx === idx
                  ? "w-6 bg-[#D4AF37]"
                  : "w-1.5 bg-white/40 hover:bg-white/70"
              }`}
              title={`${slide.venue} - ${slide.tagline}`}
              aria-label={`Go to slide ${idx + 1}: ${slide.venue}`}
            />
          ))}
        </div>
      </div>

      {/* 2. Overarching Palace Portal Frame (The Doorway Mask) */}
      <div
        className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none origin-center transition-transform duration-100 ease-out"
        style={{
          transform: `scale(${portalScale})`,
          opacity: portalOpacity,
        }}
      >
        {/* Custom Arched Doorway Frame in Gold Metal & Deep Charcoal Shadows */}
        <div className="w-[85vw] h-[80vh] md:w-[70vw] md:h-[75vh] border-[12px] md:border-[24px] border-[#D4AF37] border-double rounded-t-[100vw] relative shadow-[0_0_80px_rgba(212,175,55,0.25)_inset,0_0_100px_rgba(0,0,0,0.95)]">
          {/* Gold Filigree Corner Accents */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-[#f5f5f0] -mt-1 -ml-1 rounded-tl-sm" />
          <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-[#f5f5f0] -mt-1 -mr-1 rounded-tr-sm" />
          {/* Subtle Royal Grid Pattern overlaying outer margins */}
          <div className="absolute -inset-12 border border-[#D4AF37]/10 rounded-t-[100vw]" />
        </div>
      </div>

      {/* 3. Hero Foreground Content (Parallax Depth) */}
      <div
        className="relative z-20 max-w-5xl mx-auto px-6 text-center select-none flex flex-col items-center justify-center h-full pt-20 md:pt-24 pb-12 transition-transform duration-75"
        style={{
          transform: `translate3d(0, ${textY}px, 0)`,
          opacity: textOpacity,
        }}
      >
        {/* Royal Champagne Accent */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-black/60 border border-[#D4AF37]/50 rounded-full mb-5 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.8)]">
          <Sparkles className="w-4 h-4 text-[#D4AF37]" />
          <span className="text-[10px] md:text-[11px] tracking-[0.3em] text-[#F5F5F0] uppercase font-sans font-bold">
            Decades of South Indian Wedding Excellence
          </span>
        </div>

        {/* Cinematic Heading - High Contrast & Crisp Visibility */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-[1.1] mb-6 max-w-4xl drop-shadow-[0_6px_20px_rgba(0,0,0,1)]">
          Curators of <br />
          <span className="text-[#FFDF00] drop-shadow-[0_4px_15px_rgba(0,0,0,0.9)] italic font-semibold tracking-wide">
            South Indian Weddings
          </span> <br className="hidden md:inline" />
          &amp; Grand Celebrations
        </h1>

        {/* Elegant Supporting Statement - Encased in subtle dark frosted backdrop for 100% legibility */}
        <div className="max-w-2xl mx-auto mb-8 bg-black/50 backdrop-blur-md px-6 py-4 rounded-xl border border-[#D4AF37]/20 shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
          <p className="font-sans text-xs sm:text-sm md:text-base text-white tracking-wide leading-relaxed font-normal drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
            Crafting traditional South Indian Muhurtha, grand reception structures, and complete end-to-end wedding packages in Bengaluru and across Karnataka. We also handle traditional family ceremonies (Engagement, Baby Shower, Naming Ceremony).
          </p>
        </div>

        {/* Luxury CTAs */}
        <div className="flex flex-col sm:flex-row gap-5 items-center justify-center">
          <button
            onClick={() => scrollToSection("#services")}
            className="w-full sm:w-auto px-8 py-4 bg-[#D4AF37] text-black font-sans font-bold text-xs uppercase tracking-[0.2em] rounded-sm hover:brightness-110 active:scale-95 transition-all duration-300 shadow-[0_10px_25px_rgba(212,175,55,0.4)] flex items-center justify-center gap-2 cursor-pointer"
          >
            Explore Services
            <ArrowRight className="w-4.5 h-4.5 stroke-[2.5]" />
          </button>
          
          <button
            onClick={() => scrollToSection("#gallery")}
            className="w-full sm:w-auto px-8 py-4 bg-black/60 border border-white/30 text-[#f5f5f0] font-sans font-bold text-xs uppercase tracking-[0.2em] rounded-sm hover:bg-white/20 hover:border-[#D4AF37]/60 active:scale-95 transition-all duration-300 backdrop-blur-md flex items-center justify-center gap-2 shadow-xl cursor-pointer"
          >
            View Gallery
          </button>

          <a
            href="https://wa.me/919449303946?text=Hello%20Surya%20Event%20Management%2C%20I%20am%20interested%20in%20planning%20a%20luxury%20event."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 bg-[#25D366]/20 border border-[#25D366]/60 text-[#25D366] hover:bg-[#25D366]/30 font-sans font-bold text-xs uppercase tracking-[0.2em] rounded-sm transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-md shadow-xl"
          >
            <MessageSquare className="w-4.5 h-4.5 fill-[#25D366]/20" />
            WhatsApp Us
          </a>
        </div>
      </div>

      {/* Decorative Interactive Bottom Scroll Hint */}
      <div className="absolute bottom-6 left-0 right-0 mx-auto w-12 h-12 flex flex-col items-center justify-center z-20 pointer-events-none">
        <span className="text-[8px] tracking-[0.3em] text-[#D4AF37] uppercase mb-1 font-sans opacity-60">
          Scroll
        </span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-[#D4AF37] to-transparent relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-[#f5f5f0] animate-[scrollHint_2.5s_infinite_ease-in-out]" />
        </div>
      </div>

      {/* Background Frame Borders representing luxury room layouts */}
      <div className="absolute inset-x-8 top-28 bottom-8 border border-white/[0.02] pointer-events-none hidden md:block z-10" />
    </section>
  );
}
