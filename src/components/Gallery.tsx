import { useState, useEffect, useCallback, MouseEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Sparkles, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  Minimize2, 
  ZoomIn, 
  ZoomOut, 
  MapPin, 
  MessageSquare,
  Share2,
  Check,
  Calendar,
  Layers,
  ArrowUp,
  Home
} from "lucide-react";

export interface GalleryPhoto {
  id: string;
  url: string;
  title: string;
  category: "all" | "muhurtha" | "reception" | "traditional" | "floral";
  categoryLabel: string;
  venue: string;
  year: string;
  description: string;
  featured?: boolean;
}

const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: "g0",
    url: "/images/shubham_convention_reception_stage.jpg",
    title: "Night Reception Stage with Illuminated Canopy",
    category: "reception",
    categoryLabel: "Reception Stage",
    venue: "Shubham Convention, Hubli",
    year: "2024",
    description: "Night Reception Stage with circular floral dome canopy, hanging wisteria flower cascades, crystal chandeliers, glowing crescent light wings, and reflective mirror runway.",
    featured: true
  },
  {
    id: "g1",
    url: "https://cdn0.weddingwire.in/vendor/3890/3_2/960/jpg/wedding-planners-surya-events-stage-decor-7_15_373890-162973430996842.jpeg",
    title: "Grand Royal Stage Architecture",
    category: "reception",
    categoryLabel: "Reception Stage",
    venue: "Bengaluru Palace Grounds",
    year: "2024",
    description: "Multi-tiered illuminated archway stage with warm golden ambient backlighting and royal throne seating.",
    featured: true
  },
  {
    id: "g2",
    url: "https://cdn0.weddingwire.in/vendor/3890/3_2/960/jpg/wedding-planners-surya-events-stage-decor-3_15_373890-162973430113036.jpeg",
    title: "Intricate Floral Backdrop & Canopy",
    category: "floral",
    categoryLabel: "Floral & Decor",
    venue: "Taj West End, Bengaluru",
    year: "2024",
    description: "Handcrafted white mogra and marigold floral lattice with temple bell chandeliers and brass urns.",
    featured: true
  },
  {
    id: "g-mysore-heritage",
    url: "/images/mysore_heritage_destination_wedding.jpg",
    title: "Heritage Mysuru Destination Wedding",
    category: "muhurtha",
    categoryLabel: "Muhurtha Mandapam",
    venue: "Heritage Resort, Mysuru",
    year: "2024",
    description: "Open-air traditional Muhurtha mandapam draped with fresh jasmine garlands, glowing brass deepams, and illuminated heritage architecture.",
    featured: true
  },
  {
    id: "g-traditional-seemantham",
    url: "/images/traditional_seemantham_stage.jpg",
    title: "Traditional Seemantham & Cradle Milestone",
    category: "traditional",
    categoryLabel: "Traditional Ceremonies",
    venue: "Boutique Garden Venue, Bengaluru",
    year: "2024",
    description: "Lush banana leaf backdrop with hanging jasmine and lotus buds, heritage carved throne, and gleaming brass urlis with auspicious fruits.",
    featured: true
  },
  {
    id: "g-ballroom-banquet",
    url: "/images/ballroom_banquet_hall.jpg",
    title: "Grand Ballroom Banquet & Reception Stage",
    category: "reception",
    categoryLabel: "Reception Stage",
    venue: "Grand Convention Hotel Ballroom",
    year: "2024",
    description: "Multi-tiered tray ceiling with crystal chandeliers, polished marble reflective flooring, and elevated VIP sofa stage.",
    featured: true
  },
  {
    id: "g-twilight-lawn",
    url: "/images/twilight_resort_lawn_celebration.jpg",
    title: "Twilight Resort Celebration Lawn & Pavilion",
    category: "reception",
    categoryLabel: "Reception Stage",
    venue: "Celebrations Resort, Bengaluru",
    year: "2024",
    description: "Magical evening open-air wedding lawn with fairy-lit palm trees, candlelit dining centerpieces, and illuminated banquet pavilion.",
    featured: true
  },
  {
    id: "g3",
    url: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=1600",
    title: "Heritage South Indian Muhurtha Mandapam",
    category: "muhurtha",
    categoryLabel: "Muhurtha Mandapam",
    venue: "Leela Palace Convention, Bengaluru",
    year: "2024",
    description: "Traditional four-pillar mandapam with woven marigold drapes, banana saplings, and sacred havan setup."
  },
  {
    id: "g4",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6COl9PHfclJ891zYOu4v_sJMy2Hsc-TdjNIFhogJ3zBoNG1pTEbZ3zkx_&s=10",
    title: "Regal Banquet & Dining Pavilions",
    category: "reception",
    categoryLabel: "Reception Stage",
    venue: "Gayathri Vihar, Bengaluru",
    year: "2023",
    description: "Illuminated glass walkway with synchronized warm amber lighting and 1,200 guest capacity arrangement."
  },
  {
    id: "g5",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp3JUUo27gsiv7sCK9t7hjHkAquUB8wPrJBfzUNTfRyz2aCvq6dDpI-oBj&s=10",
    title: "Seemantha Floral Swings & Jhula",
    category: "traditional",
    categoryLabel: "Traditional Ceremonies",
    venue: "Heritage Garden Club, Mysuru",
    year: "2024",
    description: "Rose petal adorned wooden jhula with brass urli floral carpets and traditional jasmine garlands."
  },
  {
    id: "g6",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY6hWe-ffEia8wORkl8oACfwZxidr0kCnpM0tiB_oIZ_g33GQcMb0kdck&s=10",
    title: "Traditional Gold Muhurtha Mandap",
    category: "muhurtha",
    categoryLabel: "Muhurtha Mandapam",
    venue: "Hubli Convention Center",
    year: "2023",
    description: "Rich gold sculpted pillars with red temple silk drapes and lotus brass lamps."
  },
  {
    id: "g7",
    url: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1600",
    title: "Twilight Lawn & Banquet Illumination",
    category: "reception",
    categoryLabel: "Reception Stage",
    venue: "Golden Palms Resort, Bengaluru",
    year: "2024",
    description: "Open sky fairy light canopy with crystal chandeliers and luxury lounge seating."
  },
  {
    id: "g8",
    url: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=1600",
    title: "Grand Flower Path & Walkway Entry",
    category: "floral",
    categoryLabel: "Floral & Decor",
    venue: "Clarks Exotica, Bengaluru",
    year: "2023",
    description: "Dense flower arches of yellow carnations, orchids, and baby's breath lining the royal entry."
  },
  {
    id: "g9",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROIWsfmZXhgYnXUsAlJnyZnOb_N9Rkyag1BkzIKIWy9TuwBn9P5nBX47k&s=10",
    title: "Namakarana & Cradle Ceremony Backdrop",
    category: "traditional",
    categoryLabel: "Traditional Ceremonies",
    venue: "Radisson Blu, Mysuru",
    year: "2024",
    description: "Heritage brass cradle nestled in pastel blooms, marigold tassels, and subtle fairy backlighting."
  },
  {
    id: "g10",
    url: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&q=80&w=1600",
    title: "Classical Nadaswaram & Ritual Stage",
    category: "muhurtha",
    categoryLabel: "Muhurtha Mandapam",
    venue: "Palace Sheesh Mahal, Bengaluru",
    year: "2023",
    description: "Elevated stage for classical musicians and priest rituals with traditional silk rangoli carpet."
  },
  {
    id: "g11",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw4WyzKT8YUxiQu0SUm57H450DsLQEkH17buN5JYZdi2JyXLea2Z6aToy2&s=10",
    title: "Crystal Chandelier Canopy & Floral Dome",
    category: "floral",
    categoryLabel: "Floral & Decor",
    venue: "ITC Windsor, Bengaluru",
    year: "2024",
    description: "Centerpiece crystal chandelier surrounded by hanging orchids and warm accent spotlights."
  },
  {
    id: "g12",
    url: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&q=80&w=1600",
    title: "Night Reception Stage with LED Glow",
    category: "reception",
    categoryLabel: "Reception Stage",
    venue: "Shubham Convention, Hubli",
    year: "2024",
    description: "Curved 60-foot structural stage with intelligent wash lighting and custom stage backdrop."
  }
];

const CATEGORIES = [
  { id: "all", label: "All Previous Events" },
  { id: "muhurtha", label: "Muhurtha & Mandapam" },
  { id: "reception", label: "Grand Reception Stages" },
  { id: "traditional", label: "Family Ceremonies" },
  { id: "floral", label: "Floral & Lighting" }
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  // Filtered photos based on active tab
  const filteredPhotos = activeCategory === "all"
    ? GALLERY_PHOTOS
    : GALLERY_PHOTOS.filter((p) => p.category === activeCategory);

  const currentPhoto = selectedPhotoIndex !== null ? filteredPhotos[selectedPhotoIndex] : null;

  // Handlers for Next/Prev inside Lightbox
  const handleNext = useCallback(() => {
    if (selectedPhotoIndex === null) return;
    setIsZoomed(false);
    setSelectedPhotoIndex((prev) => (prev! + 1) % filteredPhotos.length);
  }, [selectedPhotoIndex, filteredPhotos.length]);

  const handlePrev = useCallback(() => {
    if (selectedPhotoIndex === null) return;
    setIsZoomed(false);
    setSelectedPhotoIndex((prev) => (prev! - 1 + filteredPhotos.length) % filteredPhotos.length);
  }, [selectedPhotoIndex, filteredPhotos.length]);

  const handleClose = useCallback(() => {
    setSelectedPhotoIndex(null);
    setIsZoomed(false);
  }, []);

  const scrollToMainScreen = useCallback(() => {
    setSelectedPhotoIndex(null);
    setIsZoomed(false);
    const homeEl = document.querySelector("#home");
    if (homeEl) {
      homeEl.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedPhotoIndex === null) return;
      if (e.key === "Escape") handleClose();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedPhotoIndex, handleNext, handlePrev, handleClose]);

  // Lock body scroll when modal open
  useEffect(() => {
    if (selectedPhotoIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedPhotoIndex]);

  const copyPhotoLink = (url: string) => {
    navigator.clipboard.writeText(url);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <section
      id="gallery"
      className="relative z-20 bg-[#060606] py-24 md:py-32 px-4 sm:px-6 md:px-12 border-b border-[#D4AF37]/15 overflow-hidden"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[450px] h-[450px] bg-[#AA771C]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-12 md:space-y-16">
        
        {/* Header Section */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/5 border border-[#D4AF37]/30 rounded-full shadow-[0_2px_15px_rgba(212,175,55,0.15)]">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37] font-sans font-bold">
              Celebration Gallery
            </span>
          </div>
          
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
            High-Resolution <br />
            <span className="text-gold-gradient italic font-normal">Event Portfolio</span>
          </h2>
          
          <p className="font-sans text-xs md:text-sm text-[#F5F5F0]/70 max-w-xl mx-auto leading-relaxed font-light">
            Explore authentic moments, custom stage structures, and floral creations crafted by Surya Event Management across Karnataka. Click any photograph to open the full-screen lightbox.
          </p>
          
          <div className="w-20 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-6" />
        </div>

        {/* Filter Tabs & Back to Main Screen */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  setSelectedPhotoIndex(null);
                }}
                className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs font-sans tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-[#D4AF37] text-black font-bold shadow-[0_4px_20px_rgba(212,175,55,0.35)] scale-102"
                    : "bg-white/5 border border-white/10 text-[#F5F5F0]/70 hover:text-white hover:border-[#D4AF37]/40 hover:bg-white/10"
                }`}
              >
                {cat.label}
              </button>
            );
          })}

          {/* Quick Back to Main Screen in filter bar */}
          <button
            onClick={scrollToMainScreen}
            className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs font-sans tracking-wider uppercase bg-white/5 border border-[#D4AF37]/40 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all duration-300 cursor-pointer flex items-center gap-1.5 shadow-md"
            title="Return to top hero view"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Main Screen</span>
          </button>
        </div>

        {/* Responsive Gallery Grid - Pure Visual Showcase, No Names */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6"
        >
          {filteredPhotos.map((photo, idx) => (
            <motion.div
              layout
              key={photo.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10px" }}
              transition={{ duration: 0.4, delay: (idx % 4) * 0.08 }}
              className="group relative h-72 sm:h-80 rounded-xl overflow-hidden cursor-pointer bg-black border border-[#D4AF37]/25 hover:border-[#D4AF37] hover:shadow-[0_10px_35px_rgba(212,175,55,0.3)] transition-all duration-500"
              onClick={() => setSelectedPhotoIndex(idx)}
            >
              {/* Image - Pure Image with subtle zoom-in animation on hover, No Text Overlays */}
              <img
                src={photo.url}
                alt="Surya Event Management"
                loading="lazy"
                className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-700 ease-out will-change-transform"
                referrerPolicy="no-referrer"
              />

              {/* Sleek hover indicator with expand icon - absolutely no text or names */}
              <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                <div className="w-11 h-11 rounded-full bg-black/80 border border-[#D4AF37] flex items-center justify-center text-[#D4AF37] shadow-[0_4px_25px_rgba(0,0,0,0.9)] transform scale-75 group-hover:scale-100 transition-transform duration-300">
                  <Maximize2 className="w-5 h-5" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Gallery Statistics & Return Banner */}
        <div className="p-6 sm:p-8 bg-gradient-to-r from-black via-white/5 to-black border border-[#D4AF37]/30 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left shadow-2xl">
          <div className="space-y-1.5">
            <h4 className="font-serif text-lg sm:text-xl font-bold text-white">
              Need a Tailored Stage &amp; Ceremony Design?
            </h4>
            <p className="text-xs sm:text-sm text-[#F5F5F0]/70 font-light">
              We create customized 3D layout renderings and fabrications for weddings of any guest size.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={scrollToMainScreen}
              className="px-6 py-3.5 bg-white/10 border border-[#D4AF37]/40 text-white hover:text-black hover:bg-[#D4AF37] font-sans font-bold text-xs uppercase tracking-widest rounded-md active:scale-98 transition-all flex items-center gap-2 whitespace-nowrap shadow-lg cursor-pointer"
            >
              <ArrowUp className="w-4 h-4" />
              Back to Main Screen
            </button>
            
            <a
              href="https://wa.me/919449303946?text=Hello%20Surya%20Event%20Management%2C%20I%20am%20browsing%20your%20Event%20Gallery%20and%20would%20like%20to%20inquire%20about%20a%20similar%20stage%20setup."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 bg-[#D4AF37] text-black font-sans font-bold text-xs uppercase tracking-widest rounded-md hover:brightness-110 active:scale-98 transition-all flex items-center gap-2 whitespace-nowrap shadow-lg"
            >
              <MessageSquare className="w-4 h-4" />
              Inquire on WhatsApp
            </a>
          </div>
        </div>

      </div>

      {/* ================= FULL-SCREEN LIGHTBOX MODAL ================= */}
      <AnimatePresence>
        {currentPhoto && selectedPhotoIndex !== null && (
          <motion.div
            drag="y"
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={{ top: 0, bottom: 0.6 }}
            onDragEnd={(_e, info) => {
              if (info.offset.y > 80 || info.velocity.y > 400) {
                handleClose();
              }
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-black/98 backdrop-blur-2xl flex flex-col justify-between"
            onClick={handleClose}
          >
            {/* 1. Top Control Bar */}
            <div 
              className="px-4 sm:px-8 py-3.5 bg-black/80 border-b border-[#D4AF37]/20 flex items-center justify-between z-30"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Left: Counter & Category */}
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-[#D4AF37]/15 border border-[#D4AF37]/40 rounded-full text-xs font-sans font-bold text-[#D4AF37]">
                  {selectedPhotoIndex + 1} / {filteredPhotos.length}
                </span>
                <div className="hidden sm:flex items-center gap-2 text-xs text-[#F5F5F0]/70 font-sans">
                  <Layers className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>{currentPhoto.categoryLabel}</span>
                </div>
              </div>

              {/* Center: Title on desktop & mobile swipe pill */}
              <div className="flex flex-col items-center cursor-grab active:cursor-grabbing">
                <div className="w-12 h-1 bg-[#D4AF37]/60 hover:bg-[#D4AF37] rounded-full mb-0.5 sm:hidden" />
                <span className="font-serif text-sm font-bold text-white hidden md:block max-w-md truncate">
                  {currentPhoto.title}
                </span>
              </div>

              {/* Right: Actions (Back to Main Screen, Zoom, Share, Close) */}
              <div className="flex items-center gap-2 sm:gap-3">
                {/* Back to Main Screen from Lightbox */}
                <button
                  onClick={scrollToMainScreen}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 border border-[#D4AF37]/40 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all text-xs font-sans uppercase tracking-wider font-semibold cursor-pointer"
                  title="Return to Main Screen"
                >
                  <Home className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Main Screen</span>
                </button>

                {/* Zoom Toggle */}
                <button
                  onClick={() => setIsZoomed(!isZoomed)}
                  className="p-2 sm:p-2.5 rounded-full bg-white/10 border border-white/15 text-white hover:text-[#D4AF37] hover:border-[#D4AF37]/50 transition-all cursor-pointer"
                  title={isZoomed ? "Zoom Out" : "Zoom In"}
                >
                  {isZoomed ? <ZoomOut className="w-4 h-4" /> : <ZoomIn className="w-4 h-4" />}
                </button>

                {/* Share/Copy link */}
                <button
                  onClick={() => copyPhotoLink(currentPhoto.url)}
                  className="p-2 sm:p-2.5 rounded-full bg-white/10 border border-white/15 text-white hover:text-[#D4AF37] hover:border-[#D4AF37]/50 transition-all cursor-pointer"
                  title="Copy Image URL"
                >
                  {copiedLink ? <Check className="w-4 h-4 text-[#D4AF37]" /> : <Share2 className="w-4 h-4" />}
                </button>

                {/* Close Button */}
                <button
                  onClick={handleClose}
                  className="px-3.5 py-1.5 rounded-full bg-[#D4AF37] text-black hover:brightness-110 transition-all cursor-pointer font-bold shadow-lg flex items-center gap-1.5 text-xs uppercase tracking-wider"
                  title="Close Lightbox (Esc or swipe down)"
                >
                  <span>Exit</span>
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* 2. Main Stage (Image Area + Navigation Arrows) */}
            <div 
              className="relative flex-1 flex items-center justify-center p-2 sm:p-6 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Previous Button */}
              <button
                onClick={handlePrev}
                className="absolute left-2 sm:left-6 z-30 p-3 sm:p-4 rounded-full bg-black/70 border border-[#D4AF37]/40 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black hover:scale-110 active:scale-95 transition-all cursor-pointer shadow-2xl"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
              </button>

              {/* Main Photo Display with Animation */}
              <div 
                className="max-w-6xl max-h-[70vh] sm:max-h-[75vh] w-full flex items-center justify-center relative cursor-zoom-in"
                onClick={() => setIsZoomed(!isZoomed)}
              >
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentPhoto.id}
                    src={currentPhoto.url}
                    alt={currentPhoto.title}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: isZoomed ? 1.25 : 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className={`max-w-full max-h-[68vh] sm:max-h-[72vh] object-contain rounded-lg border border-[#D4AF37]/30 shadow-[0_20px_50px_rgba(0,0,0,0.9)] transition-transform duration-300 select-none ${
                      isZoomed ? "cursor-zoom-out" : ""
                    }`}
                    referrerPolicy="no-referrer"
                  />
                </AnimatePresence>
              </div>

              {/* Next Button */}
              <button
                onClick={handleNext}
                className="absolute right-2 sm:right-6 z-30 p-3 sm:p-4 rounded-full bg-black/70 border border-[#D4AF37]/40 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black hover:scale-110 active:scale-95 transition-all cursor-pointer shadow-2xl"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
              </button>
            </div>

            {/* 3. Bottom Information & Thumbnail Filmstrip Bar */}
            <div 
              className="bg-[#0c0c0c] border-t border-[#D4AF37]/20 p-4 sm:p-5 space-y-4 z-30"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Photo Meta & Actions */}
              <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-3">
                    <span className="font-serif text-lg sm:text-xl font-bold text-white">
                      {currentPhoto.title}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-white/10 text-[10px] font-sans text-[#D4AF37] border border-[#D4AF37]/30">
                      {currentPhoto.year}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-xs text-[#F5F5F0]/70 font-sans">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                      {currentPhoto.venue}
                    </span>
                    <span className="hidden sm:inline text-white/30">•</span>
                    <span className="hidden sm:inline font-light">
                      {currentPhoto.description}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 flex-shrink-0">
                  {/* Back to Main Screen in Lightbox Bottom */}
                  <button
                    onClick={scrollToMainScreen}
                    className="px-4 py-2.5 rounded-md bg-white/10 hover:bg-[#D4AF37] hover:text-black border border-[#D4AF37]/30 text-white text-xs font-sans font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all shadow-lg cursor-pointer"
                  >
                    <Home className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Back to Main Screen</span>
                    <span className="sm:hidden">Main Screen</span>
                  </button>

                  {/* Direct WhatsApp CTA for this specific photo */}
                  <a
                    href={`https://wa.me/919449303946?text=${encodeURIComponent(
                      `Hello Surya Event Management, I am inquiring about the stage decor setup for "${currentPhoto.title}" at ${currentPhoto.venue}.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-md bg-[#25D366]/20 hover:bg-[#25D366]/30 border border-[#25D366]/50 text-[#25D366] text-xs font-sans font-bold uppercase tracking-wider flex items-center gap-2 transition-all shadow-lg"
                  >
                    <MessageSquare className="w-4 h-4" />
                    Inquire This Decor
                  </a>
                </div>
              </div>

              {/* Thumbnail Strip */}
              <div className="max-w-5xl mx-auto flex gap-2.5 overflow-x-auto py-1 scrollbar-thin">
                {filteredPhotos.map((photo, idx) => {
                  const isActive = idx === selectedPhotoIndex;
                  return (
                    <button
                      key={photo.id}
                      onClick={() => {
                        setIsZoomed(false);
                        setSelectedPhotoIndex(idx);
                      }}
                      className={`relative w-16 h-12 sm:w-20 sm:h-14 rounded-md overflow-hidden flex-shrink-0 border-2 transition-all cursor-pointer ${
                        isActive
                          ? "border-[#D4AF37] scale-105 shadow-[0_0_12px_rgba(212,175,55,0.6)]"
                          : "border-transparent opacity-50 hover:opacity-100"
                      }`}
                    >
                      <img
                        src={photo.url}
                        alt={photo.title}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </button>
                  );
                })}
              </div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
