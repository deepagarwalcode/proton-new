import React from "react";
import { Code2, Figma, Video } from "lucide-react";
import SectionHeader from "../General/SectionHeader";
import FromUp from "../General/motion/FromUp";

type Step = {
  title: string;
  description: string;
  icon: React.ReactNode;
  number: string;
};

const steps: Step[] = [
  {
    number: "01",
    title: "Discovery",
    description:
      "15-minute call to extract goals, surface bottlenecks, and map the exact moves to turn your funnel into a conversion monster.",
    icon: (
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/8 text-white">
        <Video className="h-6 w-6" />
      </div>
    ),
  },
  {
    number: "02",
    title: "Design",
    description:
      "Custom, psychology-driven UX/UI built around your ICP. No templates—every pixel placed to guide visitors straight to the buy button.",
    icon: (
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/8 text-white">
        <Figma className="h-6 w-6" />
      </div>
    ),
  },
  {
    number: "03",
    title: "Develop",
    description:
      "We ship fast, track everything, and keep improving. Blazing load times, flawless across devices, with analytics showing where the money is made.",
    icon: (
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/8 text-white">
        <Code2 className="h-6 w-6" />
      </div>
    ),
  },
];

const ProcessSection = () => {
  return (
    <section id="process" className="bg-[#0f0f0f] px-6 pb-20 text-white md:px-10 lg:px-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-12">
        <div className="flex justify-center text-center">
          <FromUp>
            <SectionHeader tag="Process" title="How we build conversion machines" />
          </FromUp>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, idx) => (
            <FromUp delay={idx * 0.05} key={step.number}>
              <div
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#171717] via-[#131313] to-[#0f0f0f] p-6 shadow-[0_30px_80px_-50px_rgba(0,0,0,0.85)] transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_38px_90px_-55px_rgba(0,0,0,0.9)]"
              >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.05),transparent_30%),radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.04),transparent_30%)] opacity-60" />
                <div className="relative flex items-start justify-between gap-4">
                  <div className="text-4xl font-semibold text-gray-100 clash-display">
                    {step.number}
                  </div>
                  <div className="shrink-0 rounded-full border border-white/15 bg-white/5 p-2 shadow-inner shadow-black/50">
                    {step.icon}
                  </div>
                </div>
                <h3 className="relative uppercase mt-6 text-xl font-semibold text-white clash-display">
                  {step.title}
                </h3>
                <p className="relative mt-3 text-gray-300 flex-1 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </FromUp>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;

