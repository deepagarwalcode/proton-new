"use client";

import React from "react";
import { Linkedin } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-[#121212] pb-12
     md:pb-0 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          {/* Left block */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <a href="#hero" className="text-2xl font-medium clash-display hover:text-white transition-colors">Proton Labs</a>
            </div>
            <p className="text-lg text-gray-300">
              Webites that build trust with your ideal clients            </p>
            <div>
              <Link
                href="https://www.linkedin.com/in/deep-codes/"
                target="_blank"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 bg-white/5 text-white shadow-inner shadow-black/40 hover:border-white/30 hover:bg-white/10 transition"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Right nav list */}
          <div className="flex flex-col gap-4 text-lg text-gray-300 md:text-right">
            <a href="#solutions" className="hover:text-white transition-colors">
              Solutions
            </a>
            <a href="#case-studies" className="hover:text-white transition-colors">
              Case Studies
            </a>
            <a href="#process" className="hover:text-white transition-colors">
              Process
            </a>
          </div>
        </div>

        <div className="border-t border-white/10" />

        <div className="text-sm text-gray-400">
          <p>Copyright © 2025 Proton Labs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

