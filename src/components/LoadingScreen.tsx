import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles } from "lucide-react";

interface LoadingScreenProps {
  onComplete?: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    // Lock scroll while loading
    document.body.style.overflow = "hidden";

    // Progress counter animation
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Slightly randomized step for natural, polished feel
        const increment = Math.floor(Math.random() * 8) + 4;
        return Math.min(prev + increment, 100);
      });
    }, 60);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    if (progress === 100) {
      const timer = setTimeout(() => {
        setIsFinished(true);
        document.body.style.overflow = "";
      }, 400);

      return () => clearTimeout(timer);
    }
  }, [progress]);

  const handleSkip = () => {
    setProgress(100);
    setIsFinished(true);
    document.body.style.overflow = "";
  };

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {!isFinished && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.03,
            filter: "blur(8px)",
            transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#050505] text-[#f5f5f0] overflow-hidden select-none"
        >
          {/* Ambient golden glow behind logo */}
          <div className="absolute w-[420px] h-[420px] bg-gradient-to-r from-[#D4AF37]/20 to-[#996515]/20 rounded-full blur-[120px] pointer-events-none animate-pulse" />
          <div className="absolute w-[220px] h-[220px] bg-[#D4AF37]/15 rounded-full blur-[60px] pointer-events-none" />

          {/* Subtle background radial grid pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.06)_0,transparent_70%)] pointer-events-none" />

          {/* Skip button in corner */}
          <button
            onClick={handleSkip}
            className="absolute top-6 right-6 text-xs uppercase tracking-widest text-[#D4AF37]/60 hover:text-[#D4AF37] transition-colors py-1.5 px-3 rounded border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 font-sans z-20 cursor-pointer"
          >
            Skip Intro
          </button>

          {/* Central Logo Container */}
          <div className="relative z-10 flex flex-col items-center max-w-sm px-6 text-center">
            {/* Rotating Decorative Golden Halo Rings */}
            <div className="relative flex items-center justify-center mb-8">
              {/* Outer decorative dashed circle */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                className="absolute w-36 h-36 sm:w-44 sm:h-44 rounded-full border border-dashed border-[#D4AF37]/35 pointer-events-none"
              />

              {/* Inner glowing pulse ring */}
              <motion.div
                animate={{ scale: [1, 1.06, 1], opacity: [0.4, 0.8, 0.4] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute w-32 h-32 sm:w-40 sm:h-40 rounded-full border border-[#D4AF37]/50 shadow-[0_0_30px_rgba(212,175,55,0.25)] pointer-events-none"
              />

              {/* Brand Logo with Shimmer Effect */}
              <motion.div
                initial={{ opacity: 0, scale: 0.88, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative z-10 w-28 h-28 sm:w-36 sm:h-36 rounded-2xl p-2.5 bg-gradient-to-b from-[#141414] to-[#0a0a0a] border border-[#D4AF37]/40 shadow-[0_10px_35px_rgba(0,0,0,0.8),0_0_25px_rgba(212,175,55,0.2)] flex items-center justify-center overflow-hidden"
              >
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQzukht4ZksiqmCw_RALdK-9riDQ428gmtnIh9TKLw7JmFjGcWgAx95YjZ&s=10"
                  alt="Surya Event Management"
                  className="w-full h-full object-contain brightness-110 drop-shadow-[0_2px_10px_rgba(212,175,55,0.3)]"
                  referrerPolicy="no-referrer"
                />

                {/* Light Sweep Shimmer across the logo */}
                <motion.div
                  initial={{ x: "-120%" }}
                  animate={{ x: "180%" }}
                  transition={{
                    repeat: Infinity,
                    duration: 2.2,
                    ease: "easeInOut",
                    repeatDelay: 0.8,
                  }}
                  className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 pointer-events-none"
                />
              </motion.div>
            </div>

            {/* Brand Title with Gold Gradient */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.7 }}
              className="space-y-1.5 mb-8"
            >
              <div className="flex items-center justify-center gap-2 text-[#D4AF37] text-xs font-sans tracking-[0.28em] uppercase">
                <Sparkles className="w-3.5 h-3.5 animate-spin-slow" />
                <span>Premier Wedding & Event Curators</span>
                <Sparkles className="w-3.5 h-3.5 animate-spin-slow" />
              </div>
              <h1 className="font-serif text-2xl sm:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-[#FFF5D0] via-[#D4AF37] to-[#AA7C11] tracking-wider uppercase font-semibold">
                Surya Event
              </h1>
              <p className="text-xs text-[#F5F5F0]/60 tracking-widest uppercase font-sans">
                Bengaluru • Mysuru • Karnataka
              </p>
            </motion.div>

            {/* Gold Progress Bar */}
            <div className="w-64 sm:w-72 space-y-2">
              <div className="relative w-full h-[3px] bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-[#b08722] via-[#D4AF37] to-[#FFE685] rounded-full shadow-[0_0_12px_#D4AF37]"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: "easeOut" }}
                />
              </div>

              {/* Progress and Phase status */}
              <div className="flex justify-between items-center text-[11px] font-sans text-[#D4AF37]/80 tracking-wider">
                <span className="font-light italic text-[#F5F5F0]/60">
                  {progress < 35
                    ? "Designing Royal Experiences..."
                    : progress < 70
                    ? "Curating Bespoke Decor..."
                    : progress < 95
                    ? "Welcoming Celebrations..."
                    : "Ready to Explore"}
                </span>
                <span className="font-mono font-medium text-[#D4AF37]">
                  {progress}%
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
