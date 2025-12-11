import { cn } from "@/lib/utils";
import React from "react";

export interface WebsiteCardProps {
  bgColor: string;
  description: string;
  image: string;
  compact?: boolean;
}

const WebsiteCard = ({ bgColor, description, image, compact }: WebsiteCardProps) => {
  return (
    <div
      className={cn(
        "relative rounded-xl border border-white/10 bg-gradient-to-br from-[#181818] via-[#141414] to-[#0f0f0f] p-3 shadow-[0_30px_70px_-45px_rgba(0,0,0,0.85)] transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_36px_90px_-50px_rgba(0,0,0,0.9)] flex flex-col gap-2 overflow-hidden",
        compact ? "max-w-[400px] w-[400px]" : "max-w-lg"
      )}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.05),transparent_30%),radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.04),transparent_30%)] opacity-70" />
      {/* <h3 className='text-white text-lg font-bold'>{title}</h3> */}
      <div
        style={{ backgroundColor: bgColor }}
        className={cn(
          "relative rounded-lg border border-white/10 p-3 md:p-6 shadow-inner shadow-black/40 overflow-hidden"
        )}
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.05),transparent_35%)] opacity-60" />
        <img src={image} className="w-full h-full object-cover rounded-md" loading="eager" />
      </div>
      <p className="relative text-white text-xl font-medium border border-white/10 bg-white/5 rounded-lg p-3 text-center clash-display leading-snug">
        {description}
      </p>
    </div>
  );
};

export default WebsiteCard;
