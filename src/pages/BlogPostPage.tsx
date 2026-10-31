import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import {
  Calendar,
  Clock,
  User,
  Tag,
  Heart,
  Share2,
  Check,
  ArrowLeft,
  ArrowRight,
  Sparkles,
  Instagram,
  Facebook,
  ExternalLink,
  MessageCircle,
  PhoneCall
} from "lucide-react";
import { getBlogPostById, getAllBlogPosts, BlogPost } from "../components/Blog";
import SEO from "../components/SEO";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppFloating from "../components/WhatsAppFloating";
import ReadingProgressBar from "../components/ReadingProgressBar";

export default function BlogPostPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [copied, setCopied] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(0);

  const allPosts = getAllBlogPosts();

  useEffect(() => {
    if (id) {
      const found = getBlogPostById(id);
      if (found) {
        setPost(found);
        setLikesCount(found.likes);
        setIsLiked(false);
        // If visited via an old alias or short slug, upgrade address bar to the full title URL
        if (found.id !== id) {
          navigate(`/blog/${found.id}`, { replace: true });
        }
      } else {
        setPost(null);
      }
    }
  }, [id, navigate]);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleToggleLike = () => {
    if (isLiked) {
      setLikesCount((prev) => prev - 1);
      setIsLiked(false);
    } else {
      setLikesCount((prev) => prev + 1);
      setIsLiked(true);
    }
  };

  if (!post) {
    return (
      <div className="min-h-screen bg-[#050505] text-[#f5f5f0] selection:bg-[#D4AF37] selection:text-black flex flex-col justify-between">
        <Header />
        <main className="flex-1 flex items-center justify-center px-6 py-32">
          <div className="text-center max-w-lg space-y-6 bg-white/5 border border-[#D4AF37]/20 p-8 sm:p-12 rounded-2xl backdrop-blur-xl">
            <span className="text-xs uppercase tracking-[0.3em] text-[#D4AF37] font-sans font-semibold">
              404 • Article Not Found
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-white">
              Blog Post Not Found
            </h1>
            <p className="font-sans text-sm text-[#F5F5F0]/70 font-light leading-relaxed">
              The wedding insight or celebration guide you are looking for may have been moved or updated.
            </p>
            <div className="pt-2">
              <Link
                to="/#blog"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#D4AF37] text-black font-sans font-bold text-xs uppercase tracking-widest rounded-md hover:brightness-110 transition-all shadow-[0_10px_25px_rgba(212,175,55,0.25)]"
              >
                <ArrowLeft className="w-4 h-4" />
                Return to All Blogs
              </Link>
            </div>
          </div>
        </main>
        <Footer />
        <WhatsAppFloating />
      </div>
    );
  }

  // Get index and adjacent posts
  const currentIndex = allPosts.findIndex((p) => p.id === post.id);
  const prevPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;

  // Related posts (same category or recent, excluding current)
  const relatedPosts = allPosts
    .filter((p) => p.id !== post.id)
    .sort((a, b) => (a.category === post.category ? -1 : 1))
    .slice(0, 3);

  const shareUrl = window.location.href;
  const encodedShareUrl = encodeURIComponent(shareUrl);
  const encodedTitle = encodeURIComponent(post.title);

  return (
    <div className="min-h-screen bg-[#050505] text-[#f5f5f0] selection:bg-[#D4AF37] selection:text-black relative flex flex-col justify-between">
      {/* Dynamic SEO Meta Tags & Schema */}
      <SEO
        title={post.title}
        description={post.excerpt}
        image={post.image}
        url={shareUrl}
        type="article"
        publishedDate={post.date}
        author={post.author}
        category={post.category}
      />

      <ReadingProgressBar />
      <Header />

      <main className="flex-1 pt-28 sm:pt-32 md:pt-36 pb-20 px-4 sm:px-6 md:px-12 max-w-5xl mx-auto w-full">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs font-sans text-[#F5F5F0]/60 mb-8 overflow-x-auto whitespace-nowrap">
          <Link to="/" className="hover:text-[#D4AF37] transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link to="/#blog" className="hover:text-[#D4AF37] transition-colors">
            Blogs &amp; Insights
          </Link>
          <span>/</span>
          <span className="text-[#D4AF37] truncate max-w-xs sm:max-w-md">{post.title}</span>
        </nav>

        {/* Back Link Button */}
        <div className="mb-6">
          <button
            onClick={() => navigate("/#blog")}
            className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-widest text-[#D4AF37] hover:text-white transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to All Blogs
          </button>
        </div>

        {/* Article Header */}
        <header className="space-y-6 mb-10">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#D4AF37]/15 border border-[#D4AF37]/40 rounded-full text-xs font-sans uppercase tracking-widest text-[#D4AF37] font-semibold">
              <Tag className="w-3 h-3" />
              {post.category}
            </span>
            <span className="text-xs font-sans text-[#F5F5F0]/50">•</span>
            <span className="inline-flex items-center gap-1.5 text-xs font-sans text-[#F5F5F0]/60">
              <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
              {post.readTime}
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight sm:leading-tight">
            {post.title}
          </h1>

          <p className="font-sans text-base sm:text-lg text-[#F5F5F0]/75 font-light leading-relaxed border-l-2 border-[#D4AF37] pl-4 italic">
            {post.excerpt}
          </p>

          <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-[#D4AF37]/20 text-xs font-sans text-[#F5F5F0]/60">
            <div className="flex items-center gap-5">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-[#D4AF37]" />
                {post.date}
              </span>
              <span className="flex items-center gap-1.5">
                <User className="w-4 h-4 text-[#D4AF37]" />
                {post.author}
              </span>
            </div>

            {/* Social Share & Copy Bar */}
            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyLink}
                title="Copy blog URL"
                className="flex items-center gap-1.5 px-3 py-1.5 bg-white/5 border border-white/10 hover:border-[#D4AF37]/50 rounded-md text-xs font-sans text-white hover:text-[#D4AF37] transition-all cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Share2 className="w-3.5 h-3.5" />}
                <span>{copied ? "Copied!" : "Copy Link"}</span>
              </button>

              <a
                href={`https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedShareUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                title="Share on WhatsApp"
                className="p-1.5 bg-green-500/10 border border-green-500/30 hover:bg-green-500/20 text-green-400 rounded-md transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
              </a>

              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodedShareUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                title="Share on Facebook"
                className="p-1.5 bg-blue-500/10 border border-blue-500/30 hover:bg-blue-500/20 text-blue-400 rounded-md transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>

              <button
                onClick={handleToggleLike}
                className={`flex items-center gap-1.5 text-xs font-sans px-3 py-1.5 rounded-md border transition-colors cursor-pointer ${
                  isLiked
                    ? "bg-rose-500/20 border-rose-500/60 text-rose-400"
                    : "bg-white/5 border-white/10 text-white/70 hover:text-rose-400 hover:border-rose-500/30"
                }`}
              >
                <Heart className={`w-3.5 h-3.5 ${isLiked ? "fill-rose-400" : ""}`} />
                <span>{likesCount}</span>
              </button>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="relative rounded-2xl overflow-hidden border border-[#D4AF37]/30 shadow-2xl mb-12 max-h-[500px]">
          <img
            src={post.image}
            alt={post.imageAlt || post.title}
            className="w-full h-full object-cover max-h-[500px]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/60 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Main Article Content Container */}
        <article
          className="prose prose-invert max-w-none text-base sm:text-lg leading-relaxed text-[#F5F5F0]/85 font-light whitespace-pre-line space-y-6"
          onClick={(e) => {
            const link = (e.target as HTMLElement).closest("a");
            if (link) {
              const href = link.getAttribute("href");
              if (href) {
                if (href.startsWith("#blog-")) {
                  e.preventDefault();
                  const targetBlogId = href.replace("#blog-", "");
                  navigate(`/blog/${targetBlogId}`);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                } else if (href.startsWith("#")) {
                  e.preventDefault();
                  navigate("/" + href);
                }
              }
            }
          }}
        >
          {post.fullContent}
        </article>

        {/* Social Share & Official Channel Banner */}
        <div className="mt-14 p-6 sm:p-8 bg-gradient-to-r from-purple-950/40 via-black to-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-serif text-lg font-bold text-white flex items-center justify-center sm:justify-start gap-2">
              <Instagram className="w-5 h-5 text-pink-400" />
              Follow Surya Event Management
            </h4>
            <p className="text-xs sm:text-sm text-[#F5F5F0]/60 font-light">
              Watch live reels, Muhurtha mandapams, and grand reception setups across Bengaluru &amp; Karnataka.
            </p>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto justify-center sm:justify-end">
            <a
              href="https://www.instagram.com/_surya_event_management._?igsh=aDV5M2c2Mzd4eXNs"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-gradient-to-r from-pink-600 to-amber-500 text-white rounded-md text-xs font-sans uppercase tracking-widest font-bold hover:brightness-110 transition-all flex items-center gap-1.5 whitespace-nowrap shadow-lg"
            >
              Instagram
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://www.facebook.com/share/198yMm2gpF/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-md text-xs font-sans uppercase tracking-widest font-bold transition-all flex items-center gap-1.5 whitespace-nowrap shadow-lg"
            >
              Facebook
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Consultation CTA Banner */}
        <div className="mt-10 p-8 sm:p-10 bg-gradient-to-br from-[#D4AF37]/10 via-black to-[#745414]/20 border border-[#D4AF37]/40 rounded-2xl text-center space-y-6 shadow-[0_15px_35px_rgba(212,175,55,0.1)]">
          <span className="text-xs uppercase tracking-[0.3em] text-[#D4AF37] font-sans font-semibold flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
            PLANNING YOUR CELEBRATION?
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-white max-w-2xl mx-auto leading-tight">
            Craft a Timeless South Indian Wedding with Surya Event Management
          </h3>
          <p className="font-sans text-xs sm:text-sm text-[#F5F5F0]/70 max-w-xl mx-auto font-light leading-relaxed">
            From traditional Muhurtham mandapams to grand architectural reception stages and complete outstation guest hospitality, we curate every milestone with precision.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href="https://wa.me/919449303946?text=Hi%20Surya%20Event%20Management,%20I%20would%20like%20to%20consult%20about%20our%20wedding%20arrangements."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#D4AF37] text-black font-sans font-bold text-xs uppercase tracking-widest rounded-md hover:brightness-110 transition-all flex items-center gap-2 shadow-lg"
            >
              <MessageCircle className="w-4 h-4" />
              Chat on WhatsApp
            </a>
            <Link
              to="/#contact"
              className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-[#D4AF37]/40 text-white font-sans font-bold text-xs uppercase tracking-widest rounded-md transition-all flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-[#D4AF37]" />
              Schedule Event Consultation
            </Link>
          </div>
        </div>

        {/* Previous & Next Article Navigation */}
        <div className="mt-12 pt-8 border-t border-[#D4AF37]/20 grid grid-cols-1 md:grid-cols-2 gap-6">
          {prevPost ? (
            <Link
              to={`/blog/${prevPost.id}`}
              className="p-5 bg-white/5 border border-white/10 hover:border-[#D4AF37]/50 rounded-xl transition-all group flex flex-col justify-between"
            >
              <span className="text-[10px] font-sans uppercase tracking-widest text-[#D4AF37] flex items-center gap-1.5 mb-2 font-bold">
                <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
                Previous Article
              </span>
              <h4 className="font-serif text-sm sm:text-base font-bold text-white group-hover:text-[#D4AF37] transition-colors line-clamp-2">
                {prevPost.title}
              </h4>
            </Link>
          ) : <div />}

          {nextPost ? (
            <Link
              to={`/blog/${nextPost.id}`}
              className="p-5 bg-white/5 border border-white/10 hover:border-[#D4AF37]/50 rounded-xl transition-all group flex flex-col justify-between text-right"
            >
              <span className="text-[10px] font-sans uppercase tracking-widest text-[#D4AF37] flex items-center justify-end gap-1.5 mb-2 font-bold">
                Next Article
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
              <h4 className="font-serif text-sm sm:text-base font-bold text-white group-hover:text-[#D4AF37] transition-colors line-clamp-2">
                {nextPost.title}
              </h4>
            </Link>
          ) : <div />}
        </div>

        {/* Related Posts Section */}
        {relatedPosts.length > 0 && (
          <section className="mt-16 pt-12 border-t border-[#D4AF37]/20 space-y-8">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs uppercase tracking-[0.3em] text-[#D4AF37] font-sans font-semibold">
                  RECOMMENDED READING
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-1">
                  Related Insights &amp; Guides
                </h3>
              </div>
              <Link
                to="/#blog"
                className="hidden sm:inline-flex items-center gap-1.5 text-xs font-sans uppercase tracking-widest text-[#D4AF37] hover:text-white transition-colors"
              >
                View All
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {relatedPosts.map((related) => (
                <Link
                  key={related.id}
                  to={`/blog/${related.id}`}
                  className="bg-white/5 border border-white/10 hover:border-[#D4AF37]/40 rounded-xl overflow-hidden group flex flex-col justify-between transition-all hover:bg-white/[0.08]"
                >
                  <div className="h-40 overflow-hidden relative">
                    <img
                      src={related.image}
                      alt={related.imageAlt || related.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 left-3 px-2.5 py-0.5 bg-black/80 rounded-full text-[10px] font-sans uppercase tracking-wider text-[#D4AF37] border border-[#D4AF37]/30">
                      {related.category}
                    </div>
                  </div>
                  <div className="p-5 space-y-2 flex-1 flex flex-col justify-between">
                    <div className="space-y-1">
                      <span className="text-[11px] font-sans text-[#F5F5F0]/50 block">
                        {related.date}
                      </span>
                      <h4 className="font-serif text-sm font-bold text-white group-hover:text-[#D4AF37] transition-colors line-clamp-2">
                        {related.title}
                      </h4>
                    </div>
                    <span className="text-xs font-sans text-[#D4AF37] font-bold inline-flex items-center gap-1 pt-3">
                      Read Guide
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>

      <Footer />
      <WhatsAppFloating />
    </div>
  );
}

