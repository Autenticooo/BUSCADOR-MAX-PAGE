import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { StickyCta } from "@/components/layout/StickyCta";
import { Hero } from "@/components/sections/Hero";
import { SignalTicker } from "@/components/sections/SignalTicker";
import { Problem } from "@/components/sections/Problem";
import { BeforeAfter } from "@/components/sections/BeforeAfter";
import { Solution } from "@/components/sections/Solution";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { ProductDemo } from "@/components/sections/ProductDemo";
import { FeatureShowcase } from "@/components/sections/FeatureShowcase";
import { Benefits } from "@/components/sections/Benefits";
import { Pricing } from "@/components/sections/Pricing";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <SignalTicker />
        <Problem />
        <BeforeAfter />
        <Solution />
        <HowItWorks />
        <ProductDemo />
        <FeatureShowcase />
        <Benefits />
        <Pricing />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <StickyCta />
    </>
  );
}
