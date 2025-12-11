import React from "react";
import { Play, ExternalLink, Maximize2, Quote, CircleArrowOutUpLeft, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface WorkCardProps {
  title: string;
  subtitle: string;
  videoThumbnail?: string;
  testimonialUrl?: string;
  testimonialText?: string;
  bgColor: string;
  authorName: string;
  authorTitle: string;
  authorAvatar: string;
  image: string;
  ctaText: string;
  ctaLink: string;
}

const WorkCard: React.FC<WorkCardProps> = ({
  title,
  subtitle,
  testimonialText,
  videoThumbnail,
  testimonialUrl,
  authorName,
  authorTitle,
  authorAvatar,
  bgColor,
  image,
  ctaText,
  ctaLink,
}) => {
  return (
    <div className="relative w-full max-w-6xl mx-auto mb-12 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#151515] via-[#121212] to-[#0c0c0c] p-5 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.75)] transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_38px_90px_-45px_rgba(0,0,0,0.85)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.04),transparent_25%),radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.04),transparent_25%)] pointer-events-none" />
      <div className="relative flex flex-col lg:flex-row gap-6 lg:min-h-[320px]">
        <div className="flex-1 lg:flex-[3] overflow-hidden rounded-xl border border-white/5 bg-[#0f0f0f]/60 h-full">
          <div
            style={{ backgroundColor: `${bgColor}` }}
            className={cn(
              "h-full rounded-lg border border-white/10 p-4 md:p-8 shadow-inner shadow-black/40"
            )}
          >
            <img
              src={image}
              alt={title}
              className="w-full h-full lg:min-h-[320px]  rounded-md object-cover"
            />
          </div>
          {/* <p className="font-medium text-white">{authorName}</p> */}
        </div>
        <div className="flex-1 lg:flex-[2] flex flex-col pt-2 pr-2 min-h-full ">
          {/* Title and Subtitle */}
          <div className="mb-4 flex items-center justify-between">
            <div>
              
            <h3 className="text-2xl clash-display font-medium text-white">
              {title}
            </h3>
            <p className="text-gray-300">{subtitle}</p>
            </div>
            <Link href={ctaLink} target="_blank">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/10 p-2 shadow-inner shadow-black/40 hover:border-white/30 hover:bg-white/15 transition">
              <ArrowUpRight className="w-7 h-7 text-gray-100 hover:rotate-45 cursor-pointer transition-transform duration-300" />
            </div>
            </Link>
          </div>

          {/* Video Testimonial */}
          
              <div className="overflow-hidden rounded-xl border border-white/10 bg-black/40 shadow-inner shadow-black/40 aspect-[16/9] lg:aspect-auto md:min-h-[200px]">
                <iframe
                  src={testimonialUrl}
                  className="w-full h-full object-cover"
                />
              </div>
            {/* <div className="relative rounded-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="bg-gray-800 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-700 transition-colors">
                  <Play className="w-4 h-4" />
                  Play Testimonial
                </button>
              </div>
              <button className="absolute bottom-4 right-4 bg-gray-800 text-white p-2 rounded-lg hover:bg-gray-700 transition-colors">
                <Maximize2 className="w-4 h-4" />
              </button>
            </div> */}

          {/* Testimonial Quote */}
          <div className="mt-4 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/10 p-2 shadow-inner shadow-black/40">
              <Quote className="text-gray-100 w-6 h-6"  fill="white" stroke="transparent" />
            </div>
            <p className="text-white text-sm">&quot;{testimonialText}&quot;</p>
          </div>

          {/* Author Profile */}
          <div className="flex mt-4 md:mt-auto items-center gap-3">
            <img
              src={authorAvatar}
              alt={authorName}
              className="w-10 h-10 rounded-md object-cover"
            />
            <div>
              <p className="font-medium text-white">{authorName}</p>
              <p className="text-sm text-gray-400">{authorTitle}</p>
            </div>
          </div>

          {/* CTA Button */}
        </div>
      </div>
      {/* <div className="flex gap-0 mt-4">
        <div className="flex-[2] flex gap-4 items-center">
          <p className="bg-white/5 rounded-md p-2 px-4 w-max border-1 border-white/5 shadow-inner">
            Cold Outreach
          </p>
          <p className="bg-white/5 rounded-md p-2 px-4 w-max border-1 border-white/5 shadow-inner">
            B2B
          </p>
        </div>
        <div className="flex-[1]">
          <button className="w-full bg-white/5 text-white py-3 px-4 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors">
            {ctaText}
            <ExternalLink className="w-4 h-4" />
          </button>
        </div>
      </div> */}
    </div>
  );
};

export default WorkCard;
