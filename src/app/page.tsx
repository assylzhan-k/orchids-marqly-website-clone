"use client";

import Navbar from "@/components/sections/navbar";
import HeroSection from "@/components/sections/hero";
import FeaturesIntro from "@/components/sections/features-intro";
import FeaturesGrid from "@/components/sections/features-grid";
import MobileCTA from "@/components/sections/mobile-cta";
import Testimonials from "@/components/sections/testimonials";
import BrowserSupport from "@/components/sections/browser-support";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesIntro />
        <FeaturesGrid />
        <MobileCTA />
        <Testimonials />
        <BrowserSupport />
      </main>
      <Footer />
    </div>
  );
}
