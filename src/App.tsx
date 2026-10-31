import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoadingScreen from "./components/LoadingScreen";
import Header from "./components/Header";
import Hero from "./components/Hero";
import TrustStrip from "./components/TrustStrip";
import About from "./components/About";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Blog from "./components/Blog";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppFloating from "./components/WhatsAppFloating";
import ReadingProgressBar from "./components/ReadingProgressBar";
import ScrollToTop from "./components/ScrollToTop";
import SEO from "./components/SEO";
import BlogPostPage from "./pages/BlogPostPage";

function HomePage({ isLoading, onLoadingComplete }: { isLoading: boolean; onLoadingComplete: () => void }) {
  return (
    <div className="min-h-screen bg-[#050505] text-[#f5f5f0] selection:bg-[#D4AF37] selection:text-black relative">
      <SEO
        title="Surya Event Management | South Indian Weddings & Event Curation"
        description="Surya Event Management crafts traditional South Indian weddings, grand Muhurtham Mantapams, reception structures, and family ceremonies in Bengaluru and across Karnataka."
        type="website"
        url="https://suryaevent.com"
      />
      {isLoading && <LoadingScreen onComplete={onLoadingComplete} />}
      <ReadingProgressBar />
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <About />
        <Services />
        <Gallery />
        <Blog />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloating />
    </div>
  );
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              isLoading={isLoading}
              onLoadingComplete={() => setIsLoading(false)}
            />
          }
        />
        <Route path="/blog/:id" element={<BlogPostPage />} />
        <Route path="/blogs" element={<Navigate to="/#blog" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
