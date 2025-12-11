import Comparison from "@/components/main/Comparison/Comparison";
import Navbar from "@/components/main/General/Navbar";
import HeroSection from "@/components/main/Hero/HeroSection";
import WorkCard from "@/components/main/Work/WorkCard";
import WorkSection from "@/components/main/Work/WorkSection";
import Solutions from "@/components/main/Solution/Solutions";
import ProcessSection from "@/components/main/Process/ProcessSection";
import Footer from "@/components/main/General/Footer";
import Calendly from "@/components/main/Calendly";

export default function Home() {
  return (
    <div className="bg-[#101010] text-white">
      <h1>
        <Navbar />
        {/* Hero with carousel */}
        <HeroSection />
        {/* client logos with case study badges */}
        {/* Problems */}
        <Solutions />
        {/* <Comparison /> */}
        {/* Testimonials + case studies */}
        <WorkSection  />
        {/* process */}
        <ProcessSection />
        {/* About the founder */}
        {/* CTA */}
        <Calendly />
        <Footer />
      </h1>
    </div>
  );
}
