import { useState } from "react";
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

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="min-h-screen bg-[#050505] text-[#f5f5f0] selection:bg-[#D4AF37] selection:text-black relative">
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
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
