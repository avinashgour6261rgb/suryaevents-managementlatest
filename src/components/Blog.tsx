import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Sparkles,
  Instagram,
  FolderOpen,
  ExternalLink,
  Calendar,
  User,
  Clock,
  ArrowRight,
  BookOpen,
  Share2,
  Heart,
  X,
  Tag,
  Facebook,
  ArrowLeft
} from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  fullContent: any;
  category: "Wedding Trends" | "Decor & Styling" | "Behind The Scenes";
  date: string;
  readTime: string;
  author: string;
  image: string;
  likes: number;
  instagramTag?: string;
}

const BLOG_POSTS: BlogPost[] = [
  {
    id: "best-wedding-venues-dream-wedding",
    title: "Best Wedding Venues and Ideas for Your Dream Wedding",
    excerpt: "From luxury hotels and royal palaces to intimate garden settings, discover the perfect venue and décor ideas for your special day.",
    fullContent: (
      <article className="space-y-4">
        <p>Your wedding day is one of the most special days of your life. From choosing the right venue to planning the décor, every little detail matters. The venue sets the mood for the entire celebration, so choosing the right place is an important decision.</p>
        <p>Today, couples have many options when it comes to wedding venues. You can choose a luxury hotel, a beautiful resort, a palace, a garden, a villa, or even a private bungalow. With the right planning and décor, any place can be turned into a beautiful wedding venue.</p>
        <p>If you are looking for an experienced team to help plan and manage your wedding, you can learn more about <strong>Surya Event and its event planning services</strong> through our <a href="#about" className="text-[#D4AF37] no-underline hover:text-white transition-colors">About Us</a> page.</p>

        <h2 className="text-2xl font-serif text-[#D4AF37] mt-8 mb-4">Destination Wedding – Celebrate Your Special Day in Style</h2>
        <p>A <strong>Destination Wedding</strong> is a great choice for couples who want something different from a traditional wedding. You can invite your family and close friends to a beautiful location and enjoy the wedding celebrations together.</p>
        <p>Destination weddings can be planned at resorts, hotels, villas, palaces, or other beautiful locations. The location, décor, food, entertainment, and guest experience can all be planned according to your wedding theme.</p>

        <h2 className="text-2xl font-serif text-[#D4AF37] mt-8 mb-4">Wedding at 5-Star Hotels</h2>
        <p>For couples looking for a luxury wedding experience, <strong>5-star hotels</strong> are a popular choice. These venues offer comfortable rooms, beautiful banquet spaces, professional services, and excellent hospitality.</p>
        <p>A 5-star hotel can be a good option when you want your guests to stay at the same place where the wedding functions are happening. From engagement and mehendi to sangeet and the main wedding ceremony, multiple functions can be planned under one roof.</p>

        <h2 className="text-2xl font-serif text-[#D4AF37] mt-8 mb-4">Wedding at 3-Star Hotels</h2>
        <p>If you are looking for a comfortable venue with a more practical budget, <strong>3-star hotels</strong> can also be considered.</p>
        <p>These hotels can offer banquet halls, accommodation, food services, and basic event facilities. With creative décor and proper planning, a simple hotel space can be transformed into an attractive wedding venue.</p>

        <h2 className="text-2xl font-serif text-[#D4AF37] mt-8 mb-4">Convention Halls for Large Weddings</h2>
        <p>For weddings with a large number of guests, <strong>Convention Halls</strong> can be a convenient option. They provide spacious areas where you can arrange seating, dining, stage setup, entertainment, and other wedding activities.</p>
        <p>Convention halls are especially useful when you want everything to be organised at one location and need enough space for your guests.</p>

        <h2 className="text-2xl font-serif text-[#D4AF37] mt-8 mb-4">Palace Grounds for a Royal Wedding</h2>
        <p>Want your wedding to feel grand and royal?</p>
        <p><strong>Palace Grounds</strong> can create a beautiful setting for a traditional or royal-themed wedding. Large open spaces, elegant décor, traditional elements, and beautiful lighting can give the entire celebration a royal feel.</p>
        <p>A palace-style wedding is perfect for couples who want their wedding photographs and celebrations to have a timeless look.</p>

        <h2 className="text-2xl font-serif text-[#D4AF37] mt-8 mb-4">Bungalow Wedding – Simple and Personal</h2>
        <p>A <strong>Bungalow Wedding</strong> can be a wonderful choice for a small and private celebration. It gives you more freedom to design the space according to your personal style.</p>
        <p>You can create different areas for mehendi, haldi, dining, music, and the wedding ceremony. It can also give your guests a more comfortable and personal experience.</p>

        <h2 className="text-2xl font-serif text-[#D4AF37] mt-8 mb-4">Resort Wedding for a Relaxed Celebration</h2>
        <p>A <strong>Resort Wedding</strong> combines the wedding celebration with a relaxing stay. It can be a great option for couples who want their guests to enjoy the wedding as well as some quality time together.</p>
        <p>Resorts usually provide open spaces, rooms, gardens, pools, and other facilities. This gives you more flexibility when planning different wedding functions.</p>

        <h2 className="text-2xl font-serif text-[#D4AF37] mt-8 mb-4">Garden and Water Pond Weddings</h2>
        <p>Outdoor weddings are becoming a popular choice for couples who love natural surroundings.</p>
        <p><strong>Garden and water pond weddings</strong> can create a fresh and beautiful atmosphere. Floral decorations, fairy lights, candles, seating arrangements, and a beautiful stage can make the outdoor space look magical.</p>
        <p>The natural background can also add a special touch to wedding photography.</p>

        <h2 className="text-2xl font-serif text-[#D4AF37] mt-8 mb-4">Villa Wedding – A Private Celebration</h2>
        <p>A <strong>Villa Wedding</strong> is another option for couples who want an intimate and private celebration.</p>
        <p>Villas can work well for small weddings, pre-wedding functions, family gatherings, and destination celebrations. The space can be decorated according to your theme, giving the wedding a more personal feel.</p>

        <h2 className="text-2xl font-serif text-[#D4AF37] mt-8 mb-4">Beautiful Décor Does Not Always Mean a Huge Budget</h2>
        <p>Many people think that beautiful wedding décor requires a very high budget. However, the right planning can make a big difference.</p>
        <p>At Surya Event, <strong>decor starts from ₹1.25 lakhs</strong>, giving couples an option to plan attractive wedding décor while keeping their requirements and budget in mind.</p>
        <p>The décor can be planned according to the venue, number of guests, wedding theme, and type of function. From floral arrangements and lighting to stage décor and entry setups, every element can be planned to match the overall wedding style.</p>

        <h2 className="text-2xl font-serif text-[#D4AF37] mt-8 mb-4">Plan Your Wedding with the Right Team</h2>
        <p>Choosing the right venue is only the first step. A successful wedding also needs proper planning, creative décor, guest management, and attention to small details.</p>
        <p>Whether you are planning a <strong>Destination Wedding, 5-star hotel wedding, 3-star hotel wedding, convention hall wedding, palace wedding, bungalow wedding, resort wedding, garden wedding, water pond wedding, or villa wedding</strong>, the right event planning team can help bring your idea to life.</p>
        <p>Your wedding should feel personal, beautiful, and memorable. With the right venue, décor, and planning, you can create a celebration that you and your guests will remember for years.</p>
        <p>If you are ready to discuss your wedding requirements, venue, décor, or event planning needs, <strong><a href="#contact" className="text-[#D4AF37] no-underline hover:text-white transition-colors">contact Surya Event</a></strong> and start planning your celebration.</p>
        <p className="font-bold text-lg text-[#D4AF37] mt-6">Start planning your dream wedding with Surya Event and turn your wedding vision into a beautiful celebration.</p>
      </article>
    ),
    category: "Wedding Trends",
    date: "September 23, 2026",
    readTime: "4 min read",
    author: "Surya Team",
    image: "https://images.unsplash.com/photo-1774025108494-3e596e9b9683?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    likes: 154,
    instagramTag: "@_surya_event_management._"
  },
  {
    id: "royal-heritage-weddings-2026",
    title: "Top South Indian Wedding Trends: Muhurtha & Stage Structures",
    excerpt: "Discover how traditional weddings in Bengaluru and across South India are blending authentic ritual spaces with modern lighting and floral arches.",
    fullContent: `South Indian wedding celebrations are evolving into beautifully detailed experiences. Couples and families seeking elegance in Bengaluru and Karnataka are creating unforgettable memories rooted in deep heritage.

Key highlights shaping current South Indian celebrations:
1. Traditional Muhurtha: Creating sacred spaces adorned with fresh marigolds, fragrant jasmine (mogra), banana trees, and handcrafted brass oil lamps.
2. Grand Reception Structures: Building illuminated 50-foot backdrops featuring crystal canopies, glass walkways, and lush orchid overlays.
3. Live Nadaswaram & Carnatic Music: Pairing classical live musical ensembles with balanced acoustics for a divine ceremony ambience.
4. Authentic Dining Experiences: Serving traditional grand feasts on fresh banana leaves with complete warm hospitality.

At Surya Event Management, our decades of hands-on experience enable us to plan, design, and manage every ceremony seamlessly.`,
    category: "Wedding Trends",
    date: "July 28, 2026",
    readTime: "5 min read",
    author: "Surya Editorial Team",
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=800",
    likes: 342,
    instagramTag: "@_surya_event_management._"
  },
  {
    id: "pan-india-destination-logistics",
    title: "End-to-End Wedding Management in Bengaluru: Stress-Free Family Celebrations",
    excerpt: "How Surya Event Management manages priest scheduling, hall decor, guest hospitality, and dining logistics with complete care.",
    fullContent: `Managing a South Indian wedding requires thorough organization and warm hospitality. From the morning Muhurtha to the evening Reception, every timing must be handled carefully.

Our End-to-End Management Includes:
• Dedicated Host Coordinators for family elders and arriving guests.
• Complete venue styling including stage backdrops, entrance arches, and dining arrangements.
• Generator power backups and professional audio-visual setups for Sangeet and Reception.
• Full support for family milestone ceremonies including Engagement (Nischayathartha), Seemantha, and Namakarana.

Surya Event Management takes full responsibility so that families can stay relaxed and cherish every ritual together.`,
    category: "Behind The Scenes",
    date: "July 20, 2026",
    readTime: "4 min read",
    author: "Operations Desk",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800",
    likes: 289,
    instagramTag: "@_surya_event_management._"
  },
  {
    id: "bespoke-floral-decor-mastery",
    title: "Fresh Floral Styling for Muhurtha & Sangeet Stages",
    excerpt: "An inside look into our floral design process—combining traditional marigolds, mogra, and lotus urlis with contemporary elegance.",
    fullContent: `Floral decoration is central to traditional South Indian celebrations. It provides a fragrant, welcoming atmosphere for every guest.

In our recent Bengaluru celebrations, thousands of fresh marigolds and jasmine garlands were crafted on custom wooden and brass structures overnight.

Key Floral Touchpoints:
• Welcoming Entrances: Banana sapling arches paired with lotus brass urlis and floating petals.
• Sacred Muhurtha Framing: Elegant draping in gold and temple red with dense marigold borders.
• Fresh Scent Experience: Sourcing fresh blooms directly from regional Karnataka growers to ensure pristine beauty.`,
    category: "Decor & Styling",
    date: "July 12, 2026",
    readTime: "3 min read",
    author: "Design Studio",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=800",
    likes: 415,
    instagramTag: "@_surya_event_management._"
  }
];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [likesMap, setLikesMap] = useState<Record<string, number>>(
    BLOG_POSTS.reduce((acc, post) => ({ ...acc, [post.id]: post.likes }), {})
  );
  const [userLikedMap, setUserLikedMap] = useState<Record<string, boolean>>({});

  const categories = ["All", "Wedding Trends", "Decor & Styling", "Behind The Scenes"];

  // Close on ESC key and lock body scroll
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedPost(null);
      }
    };

    if (selectedPost) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedPost]);

  const filteredPosts = activeCategory === "All"
    ? BLOG_POSTS
    : BLOG_POSTS.filter((post) => post.category === activeCategory);

  const toggleLike = (postId: string) => {
    setUserLikedMap((prev) => {
      const isLiked = prev[postId];
      setLikesMap((likes) => ({
        ...likes,
        [postId]: isLiked ? likes[postId] - 1 : likes[postId] + 1
      }));
      return { ...prev, [postId]: !isLiked };
    });
  };

  return (
    <section
      id="blog"
      className="relative z-20 bg-[#050505] py-24 md:py-32 px-6 md:px-12 border-b border-[#D4AF37]/10 overflow-hidden"
    >
      {/* Background Glows */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-[#745414]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16">

        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-[0.4em] text-[#D4AF37] font-sans font-semibold flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
            INSIGHTS &amp; SOCIAL JOURNAL
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
            Surya Event Management <br />
            <span className="text-gold-gradient italic font-normal">Blogs &amp; Live Updates</span>
          </h2>
          <p className="font-sans text-xs md:text-sm text-[#F5F5F0]/70 max-w-xl mx-auto leading-relaxed font-light">
            Explore South Indian wedding ideas, stage design insights, and official social channels from Surya Event Management.
          </p>
          <div className="w-20 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-6" />
        </div>

        {/* Featured Reference Links Banner (Instagram, Facebook & Google Media Drive) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Instagram Official Handle Box */}
          <motion.a
            href="https://www.instagram.com/_surya_event_management._?igsh=aDV5M2c2Mzd4eXNs"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="p-6 bg-gradient-to-br from-purple-950/30 via-black to-pink-950/20 border border-pink-500/30 hover:border-pink-500/60 rounded-xl flex items-center justify-between gap-4 shadow-[0_10px_30px_rgba(236,72,153,0.1)] transition-all group"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 p-[2px] shadow-lg flex-shrink-0">
                <div className="w-full h-full bg-black rounded-full flex items-center justify-center text-white group-hover:scale-105 transition-transform">
                  <Instagram className="w-6 h-6 text-pink-400" />
                </div>
              </div>
              <div>
                <span className="text-[10px] font-sans uppercase tracking-widest text-pink-400 font-bold block">
                  Instagram
                </span>
                <h3 className="font-serif text-base font-bold text-white group-hover:text-pink-200 transition-colors">
                  @_surya_event_management._
                </h3>
                <p className="text-[11px] text-[#F5F5F0]/60 font-light mt-0.5">
                  Live reels &amp; stage videos
                </p>
              </div>
            </div>
            <div className="p-2.5 rounded-full bg-pink-500/10 text-pink-400 group-hover:bg-pink-500 group-hover:text-white transition-colors flex-shrink-0">
              <ExternalLink className="w-4 h-4" />
            </div>
          </motion.a>

          {/* Facebook Official Handle Box */}
          <motion.a
            href="https://www.facebook.com/share/198yMm2gpF/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="p-6 bg-gradient-to-br from-blue-950/30 via-black to-indigo-950/20 border border-blue-500/30 hover:border-blue-500/60 rounded-xl flex items-center justify-between gap-4 shadow-[0_10px_30px_rgba(59,130,246,0.1)] transition-all group"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-blue-600 via-blue-500 to-indigo-600 p-[2px] shadow-lg flex-shrink-0">
                <div className="w-full h-full bg-black rounded-full flex items-center justify-center text-white group-hover:scale-105 transition-transform">
                  <Facebook className="w-6 h-6 text-blue-400" />
                </div>
              </div>
              <div>
                <span className="text-[10px] font-sans uppercase tracking-widest text-blue-400 font-bold block">
                  Facebook Page
                </span>
                <h3 className="font-serif text-base font-bold text-white group-hover:text-blue-200 transition-colors">
                  Surya Event Management
                </h3>
                <p className="text-[11px] text-[#F5F5F0]/60 font-light mt-0.5">
                  Photo albums &amp; updates
                </p>
              </div>
            </div>
            <div className="p-2.5 rounded-full bg-blue-500/10 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors flex-shrink-0">
              <ExternalLink className="w-4 h-4" />
            </div>
          </motion.a>

          {/* Google Share Assets Drive Box */}
          <motion.a
            href="https://share.google/XzoqUIxxXwynxX8Fn"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="p-6 bg-gradient-to-br from-[#D4AF37]/10 via-black to-[#745414]/20 border border-[#D4AF37]/30 hover:border-[#D4AF37]/70 rounded-xl flex items-center justify-between gap-4 shadow-[0_10px_30px_rgba(212,175,55,0.1)] transition-all group"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#D4AF37] via-amber-200 to-[#745414] p-[2px] shadow-lg flex-shrink-0">
                <div className="w-full h-full bg-black rounded-full flex items-center justify-center text-[#D4AF37] group-hover:scale-105 transition-transform">
                  <FolderOpen className="w-6 h-6" />
                </div>
              </div>
              <div>
                <span className="text-[10px] font-sans uppercase tracking-widest text-[#D4AF37] font-bold block">
                  Media Drive
                </span>
                <h3 className="font-serif text-base font-bold text-white group-hover:text-[#D4AF37] transition-colors">
                  Google Drive Gallery
                </h3>
                <p className="text-[11px] text-[#F5F5F0]/60 font-light mt-0.5">
                  High-res photo portfolio
                </p>
              </div>
            </div>
            <div className="p-2.5 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black transition-colors flex-shrink-0">
              <ExternalLink className="w-4 h-4" />
            </div>
          </motion.a>
        </div>

        {/* Category Navigation Pills */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-sans tracking-wider uppercase transition-all duration-300 cursor-pointer ${activeCategory === cat
                  ? "bg-[#D4AF37] text-black font-bold shadow-[0_4px_20px_rgba(212,175,55,0.4)]"
                  : "bg-white/5 border border-white/10 text-[#F5F5F0]/70 hover:text-white hover:border-[#D4AF37]/40"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredPosts.map((post, idx) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white/5 backdrop-blur-xl border border-[#D4AF37]/20 rounded-xl overflow-hidden hover:border-[#D4AF37]/50 hover:bg-white/[0.08] transition-all duration-500 group flex flex-col justify-between shadow-xl"
            >
              <div>
                {/* Blog Image Header */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-black/30" />

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 bg-black/75 border border-[#D4AF37]/40 rounded-full text-[10px] font-sans uppercase tracking-widest text-[#D4AF37] backdrop-blur-md font-bold">
                    <Tag className="w-3 h-3" />
                    {post.category}
                  </div>

                  {/* Read Time & Likes */}
                  <div className="absolute bottom-4 right-4 flex items-center gap-3">
                    <span className="text-[10px] font-sans uppercase tracking-wider text-white/80 bg-black/60 px-2.5 py-1 rounded-md backdrop-blur-sm flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#D4AF37]" />
                      {post.readTime}
                    </span>
                  </div>
                </div>

                {/* Article Body */}
                <div className="p-8 space-y-4">
                  <div className="flex items-center gap-4 text-xs text-[#F5F5F0]/50 font-sans">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
                      {post.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <User className="w-3.5 h-3.5 text-[#D4AF37]" />
                      {post.author}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl md:text-2xl font-bold text-white group-hover:text-[#D4AF37] transition-colors leading-snug">
                    {post.title}
                  </h3>

                  <p className="font-sans text-xs md:text-sm text-[#F5F5F0]/70 font-light leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="px-8 pb-8 pt-2 flex items-center justify-between border-t border-[#D4AF37]/10 mt-4">
                <button
                  onClick={() => setSelectedPost(post)}
                  className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-widest text-[#D4AF37] font-bold group-hover:translate-x-1 transition-transform cursor-pointer"
                >
                  Read Article
                  <ArrowRight className="w-4 h-4" />
                </button>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => toggleLike(post.id)}
                    className={`flex items-center gap-1.5 text-xs font-sans px-3 py-1.5 rounded-full border transition-colors cursor-pointer ${userLikedMap[post.id]
                        ? "bg-rose-500/20 border-rose-500/60 text-rose-400"
                        : "bg-white/5 border-white/10 text-white/70 hover:text-rose-400 hover:border-rose-500/30"
                      }`}
                  >
                    <Heart className={`w-3.5 h-3.5 ${userLikedMap[post.id] ? "fill-rose-400" : ""}`} />
                    <span>{likesMap[post.id]}</span>
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

      </div>

      {/* Full Article Modal */}
      <AnimatePresence>
        {selectedPost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-2xl flex items-end sm:items-center justify-center p-0 sm:p-4 md:p-8 overflow-y-auto"
            onClick={() => setSelectedPost(null)}
          >
            <motion.div
              drag="y"
              dragConstraints={{ top: 0, bottom: 0 }}
              dragElastic={{ top: 0, bottom: 0.6 }}
              onDragEnd={(_e, info) => {
                if (info.offset.y > 75 || info.velocity.y > 400) {
                  setSelectedPost(null);
                }
              }}
              initial={{ scale: 0.95, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 40 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="bg-[#0a0a0a] border border-[#D4AF37]/40 rounded-t-3xl sm:rounded-2xl max-w-3xl w-full max-h-[92vh] sm:max-h-[90vh] overflow-y-auto shadow-2xl relative flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Sticky Top Header with Swipe Bar and Exit Options */}
              <div className="sticky top-0 left-0 right-0 z-40 bg-[#0a0a0a]/95 backdrop-blur-md border-b border-[#D4AF37]/30 px-4 py-3 flex items-center justify-between shadow-lg">
                <button
                  onClick={() => setSelectedPost(null)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-sans uppercase font-bold tracking-wider cursor-pointer transition-all active:scale-95"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back</span>
                </button>

                {/* Mobile Drag / Swipe Pill */}
                <div className="flex flex-col items-center cursor-grab active:cursor-grabbing">
                  <div className="w-12 h-1.5 bg-[#D4AF37]/60 hover:bg-[#D4AF37] rounded-full mb-0.5" />
                  <span className="text-[9px] uppercase tracking-widest text-[#F5F5F0]/50 font-sans hidden xs:inline">
                    Swipe down to close
                  </span>
                </div>

                <button
                  onClick={() => setSelectedPost(null)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#D4AF37] hover:brightness-110 text-black text-xs font-sans uppercase font-bold tracking-wider cursor-pointer transition-all shadow-md active:scale-95"
                  title="Close (Esc or swipe down)"
                >
                  <span>Exit</span>
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Modal Cover Image */}
              <div className="relative h-60 sm:h-72 md:h-96 w-full overflow-hidden flex-shrink-0">
                <img
                  src={selectedPost.image}
                  alt={selectedPost.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-black/40" />
                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 space-y-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-black/75 border border-[#D4AF37]/50 rounded-full text-[10px] font-sans uppercase tracking-widest text-[#D4AF37] font-bold">
                    {selectedPost.category}
                  </span>
                  <h2 className="font-serif text-xl sm:text-2xl md:text-4xl font-bold text-white leading-tight drop-shadow-md">
                    {selectedPost.title}
                  </h2>
                </div>
              </div>

              {/* Modal Details & Content */}
              <div className="p-5 sm:p-6 md:p-10 space-y-8 flex-1">
                <div className="flex flex-wrap items-center justify-between gap-4 py-3 border-y border-[#D4AF37]/20 text-xs font-sans text-[#F5F5F0]/60">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 text-[#D4AF37]" />
                      {selectedPost.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <User className="w-4 h-4 text-[#D4AF37]" />
                      {selectedPost.author}
                    </span>
                  </div>
                  <span className="flex items-center gap-1.5 text-[#D4AF37]">
                    <Clock className="w-4 h-4" />
                    {selectedPost.readTime}
                  </span>
                </div>

                {/* Main Article Text */}
                <div 
                  className="prose prose-invert max-w-none text-sm md:text-base leading-relaxed text-[#F5F5F0]/85 font-light whitespace-pre-line"
                  onClick={(e) => {
                    const target = e.target as HTMLElement;
                    if (target.tagName === 'A') {
                      const href = target.getAttribute('href');
                      if (href && href.startsWith('#')) {
                        e.preventDefault();
                        setSelectedPost(null);
                        setTimeout(() => {
                          const element = document.querySelector(href);
                          if (element) {
                            element.scrollIntoView({ behavior: 'smooth' });
                          }
                        }, 300);
                      }
                    }
                  }}
                >
                  {selectedPost.fullContent}
                </div>

                {/* Social Share & Instagram / Facebook Action Card */}
                <div className="p-5 sm:p-6 bg-gradient-to-r from-purple-950/40 via-black to-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <h4 className="font-serif text-base font-bold text-white flex items-center gap-2">
                      <Instagram className="w-5 h-5 text-pink-400" />
                      Follow Official Event Stories
                    </h4>
                    <p className="text-xs text-[#F5F5F0]/60 font-light mt-1">
                      See daily grand decor setups &amp; live video highlights on Instagram and Facebook.
                    </p>
                  </div>
                  <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
                    <a
                      href="https://www.instagram.com/_surya_event_management._?igsh=aDV5M2c2Mzd4eXNs"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 sm:flex-none justify-center px-4 py-2 bg-gradient-to-r from-pink-600 to-amber-500 text-white rounded-md text-xs font-sans uppercase tracking-widest font-bold hover:brightness-110 transition-all flex items-center gap-1.5 whitespace-nowrap shadow-lg"
                    >
                      Instagram
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href="https://www.facebook.com/share/198yMm2gpF/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 sm:flex-none justify-center px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-md text-xs font-sans uppercase tracking-widest font-bold transition-all flex items-center gap-1.5 whitespace-nowrap shadow-lg"
                    >
                      Facebook
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* Bottom Exit Bar */}
                <div className="pt-4 border-t border-[#D4AF37]/20 flex justify-end">
                  <button
                    onClick={() => setSelectedPost(null)}
                    className="w-full sm:w-auto px-6 py-3 bg-white/10 hover:bg-[#D4AF37] hover:text-black border border-[#D4AF37]/40 text-white font-sans font-bold text-xs uppercase tracking-widest rounded-md transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back / Exit Article
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

