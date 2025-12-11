"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { AvatarCircles } from "@/components/ui/avatar-circles";
import { Star, StarIcon } from "lucide-react";
import CTAButton from "../General/CTAButton";
import WebsiteCard from "./WebsiteCard";
import WorkCard from "../Work/WorkCard";
import { Marquee } from "@/components/ui/marquee";
import { cn } from "@/lib/utils";
import FromUp from "../General/motion/FromUp";
import FromDown from "../General/motion/FromDown";
import { useInView } from "framer-motion";
const HeroSection = () => {
  const websiteCards = [
    {
      bgColor: "#B23992",
      description: "$1M+ in client revenue",
      image: "/hero/lo.png",
    },
    {
      bgColor: "#9C83FE",
      description: "$3M+ in client revenue",
      image: "/hero/gs.png",
    },
    {
      bgColor: "#145395",
      description: "Leading consultancy firm in the city",
      image: "/hero/jpnr.png",
    },
    {
      bgColor: "#1F2129",
      description: "$3.1M+ sales pipeline generated",
      image: "/hero/tam.png",
    },
    {
      bgColor: "#1A4C95",
      description: "$5M+ in client revenue",
      image: "/hero/gq.png",
    },
    {
      bgColor: "#159B9E",
      description: "Car service aggregator platform",
      image: "/hero/miles.png",
    },
  ];

  const avatars = [
    {
      imageUrl: "/dps/ammeil.png",
    },
    {
      imageUrl: "/dps/papa.png",
    },
    {
      imageUrl: "/dps/adam.png",
    },
    {
      imageUrl: "/dps/george.png",
    },
    {
      imageUrl: "/dps/bobby.png",
    },
  ];

  const heroRef = useRef<HTMLDivElement | null>(null);
  const isHeroInView = useInView(heroRef, { amount: 0.25 });
  const [showMobileCTA, setShowMobileCTA] = useState(false);

  useEffect(() => {
    setShowMobileCTA(!isHeroInView);
  }, [isHeroInView]);

  const firstRow = useMemo(() => websiteCards.slice(0, 3), [websiteCards]);
  const secondRow = useMemo(() => websiteCards.slice(3), [websiteCards]);

  return (
    <div ref={heroRef} id="hero" className="relative pt-32 md:pt-36 min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(255,255,255,0.05),transparent_30%),radial-gradient(circle_at_85%_10%,rgba(255,255,255,0.04),transparent_35%)] opacity-60" />
      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-4">
        <FromDown>
          <div className="flex gap-3 items-center justify-center mx-auto bg-gradient-to-r from-[#1b1b1b] via-[#161616] to-[#141414] w-full max-w-xl py-2 rounded-full px-4 border border-white/10 shadow-[0_20px_50px_-30px_rgba(0,0,0,0.8)]">
            <AvatarCircles avatarUrls={avatars} />
            <div className="flex flex-col gap-px">
              <div className="flex gap-px items-center">
                <StarIcon className="w-5 h-5" fill="orange" strokeWidth={0} />
                <StarIcon className="w-5 h-5" fill="orange" strokeWidth={0} />
                <StarIcon className="w-5 h-5" fill="orange" strokeWidth={0} />
                <StarIcon className="w-5 h-5" fill="orange" strokeWidth={0} />
                <StarIcon className="w-5 h-5" fill="orange" strokeWidth={0} />
              </div>
              <h1 className="font-semibold pr-1 text-sm md:text-base">
                Trusted by Top B2B Founders
              </h1>
            </div>
          </div>
        </FromDown>
        <FromUp delay={0.05} className="w-full">
          <div className="mt-8 text-center space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium clash-display leading-tight">
              Websites that build trust <br className="hidden sm:block" /> with
              your ideal clients
            </h1>
            <p className="text-center text-gray-200 text-lg md:text-xl">
              ICP-specific messaging paired with world-class design
            </p>
          </div>
        </FromUp>
        <FromUp delay={0.1} className="w-full">
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch justify-center mt-6">
            <CTAButton className="mx-0 w-full sm:w-auto justify-center" line="Book a 30-min Strategy Call" />
            <a
              href="#case-studies"
              className={cn(
                "w-full sm:w-auto cursor-pointer border border-white/20 bg-white/5 hover:bg-white/10 transition-all duration-300 text-white px-6 py-2 flex items-center justify-center gap-3 rounded-full shadow-[0_20px_50px_-30px_rgba(0,0,0,0.8)]"
              )}
            >
              <p className="font-semibold text-lg sm:text-xl">
                {"Our Recent Work"}{" "}
              </p>
            </a>
          </div>
        </FromUp>
      </div>

      {/* WorkCard Section */}
      {/* <div className="mt-16 flex justify-center">
        <WorkCard
          title="AuditCue"
          subtitle="$1.5M raised in funding"
          videoThumbnail="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=face"
          testimonial="The new design perfectly captures our brand essence and resonates with our target audience."
          authorName="Gaurav Kulkarni"
          authorTitle="Co-founder & CEO, AuditCue"
          authorAvatar="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face"
          ctaText="Read Case Study"
        />
      </div> */}

      <div className="mt-12 hidden md:flex gap-4">
        <Marquee pauseOnHover className="[--duration:20s]">
          {websiteCards.map((card, index) => (
            <WebsiteCard
              key={index}
              bgColor={card.bgColor}
              description={card.description}
              image={card.image}
            />
          ))}
        </Marquee>
      </div>
      <div className="mt-12 flex flex-col gap-4 md:hidden">
        <Marquee pauseOnHover className="[--duration:18s]">
          {firstRow.map((card, index) => (
            <WebsiteCard
              key={`row1-${index}`}
              bgColor={card.bgColor}
              description={card.description}
              image={card.image}
              compact
            />
          ))}
        </Marquee>
        <Marquee pauseOnHover reverse className="[--duration:18s]">
          {secondRow.map((card, index) => (
            <WebsiteCard
              key={`row2-${index}`}
              bgColor={card.bgColor}
              description={card.description}
              image={card.image}
              compact
            />
          ))}
        </Marquee>
      </div>

      <div
        className={cn(
          "fixed inset-x-0 bottom-4 z-30 px-4 md:hidden transition-all duration-300",
          showMobileCTA ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0 translate-y-4"
        )}
      >
        <CTAButton className="w-full justify-center shadow-[0_20px_50px_-25px_rgba(0,0,0,0.8)]" line="Book a call with Deep" />
      </div>
    </div>
  );
};

export default HeroSection;
