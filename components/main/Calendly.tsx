"use client";
import React from "react";
import { InlineWidget } from "react-calendly";
import SectionHeader from "./General/SectionHeader";

const Calendly = () => {
  return (
    <div className="mx-6 rounded-2xl pt-16 pb-16 overflow-hidden md:mx-auto md:space-y-0 space-y-12">
        <SectionHeader tag="Schedule a call" title="Let's chat about your project" />
      <InlineWidget
        //   styles={{ backgroundColor: "black" }}
        styles={{height: "690px", width: "100%", borderRadius: "12px", overflow: "hidden"}}
        // LoadingSpinner={true}
        url="https://calendly.com/deepcodep/30min"
      />
    </div>
  );
};

export default Calendly;