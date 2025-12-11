"use client"
import React, { useState } from "react";
import CTAButton from "./CTAButton";
import FromDown from "./motion/FromDown";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed left-0 top-0 z-20 w-full bg-[#0d0d0d]/70 backdrop-blur-lg border-b border-white/10">
      <FromDown>
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 gap-3">
          {/* Left - Logo */}
          <a
            href="#hero"
            className="text-2xl md:text-3xl font-medium clash-display flex-1 flex items-center justify-start hover:text-white transition-colors"
          >
            Proton Labs
          </a>

          {/* Middle - Navigation Links */}
          <div className="hidden md:flex items-center justify-center gap-6 text-sm">
            <a href="#solutions" className="text-gray-300 hover:text-white transition-colors">
              Solutions
            </a>
            <a href="#case-studies" className="text-gray-300 hover:text-white transition-colors">
              Case Studies
            </a>
            <a href="#process" className="text-gray-300 hover:text-white transition-colors">
              Process
            </a>
          </div>

          {/* Right - CTA Button / Mobile Menu */}
          <div className="flex flex-1 items-center justify-end">
            <div className="hidden md:block">
              <CTAButton className="mx-0" />
            </div>
            <div className="md:hidden relative">
              <button
                aria-label="Menu"
                onClick={() => setOpen((p) => !p)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white shadow-inner shadow-black/40"
              >
                <div className="flex flex-col gap-[5px]">
                  <span className="block h-[2px] w-5 bg-white rounded" />
                  <span className="block h-[2px] w-5 bg-white rounded" />
                  <span className="block h-[2px] w-5 bg-white rounded" />
                </div>
              </button>
              {open && (
                <div className="absolute right-0 mt-3 w-48 rounded-xl border border-white/10 bg-[#111] p-3 shadow-[0_18px_40px_-20px_rgba(0,0,0,0.85)]">
                  <a href="#solutions" className="block rounded-lg px-3 py-2 text-sm text-gray-200 hover:bg-white/5" onClick={() => setOpen(false)}>
                    Solutions
                  </a>
                  <a href="#case-studies" className="block rounded-lg px-3 py-2 text-sm text-gray-200 hover:bg-white/5" onClick={() => setOpen(false)}>
                    Case Studies
                  </a>
                  <a href="#process" className="block rounded-lg px-3 py-2 text-sm text-gray-200 hover:bg-white/5" onClick={() => setOpen(false)}>
                    Process
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </FromDown>
    </nav>
  );
};

export default Navbar;
