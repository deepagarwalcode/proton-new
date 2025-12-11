import React from "react";
import FromUp from "../General/motion/FromUp";

type CardItem = {
  title: string;
  description: string;
  icon: string;
};

const ProblemSolutionCard = ({ item }: { item: CardItem }) => {
  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#171717] via-[#131313] to-[#0f0f0f] p-6 shadow-[0_30px_80px_-50px_rgba(0,0,0,0.85)] transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_38px_90px_-55px_rgba(0,0,0,0.9)]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.05),transparent_30%),radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.04),transparent_30%)] opacity-70" />
      <div className="relative mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/10 p-2 shadow-inner shadow-black/40">
        <div className="flex h-full w-full items-center justify-center rounded-full bg-black/40 text-2xl">
          <span aria-hidden>{item.icon}</span>
        </div>
      </div>
      <h3 className="relative mb-2 text-xl font-semibold text-white clash-display leading-tight">
        {item.title}
      </h3>
      <p className="relative text-gray-300 leading-relaxed flex-1">{item.description}</p>
      <div className="pointer-events-none absolute inset-0 rounded-2xl border border-white/5 opacity-0 transition duration-300 group-hover:opacity-100" />
    </div>
  );
};

const Solutions = () => {
  const problems: CardItem[] = [
    {
      title: "BLEEDING MONEY ON TRAFFIC THAT DOESN'T CONVERT",
      description:
        "You're spending thousands on ads and outreach. Traffic's coming in. But your funnel's a graveyard—visitors bounce, leads ghost, and your ROI is in the toilet.",
      icon: "💸",
    },
    {
      title: "YOUR BRAND LOOKS LIKE A WEEKEND PROJECT",
      description:
        "Generic templates. Stock photos. Zero personality. Competitors look like Fortune 500s while you look like you started yesterday. Premium clients scroll right past you.",
      icon: "🗑️",
    },
    {
      title: "GUESSING WHAT WORKS (AND LOSING EVERY TIME)",
      description:
        "No data. No tests. No clue what's converting. You're flying blind, making design decisions on \"what looks nice\" instead of what makes the cash register ring.",
      icon: "🎲",
    },
  ];

  const solutions: CardItem[] = [
    {
      title: "ICP-FOCUSED MESSAGING",
      description:
        "We don't write pretty words—we write words that print money. Every line is engineered to speak directly to your ideal client and make them say \"shut up and take my money.\"",
      icon: "🎯",
    },
    {
      title: "TRUST-FOCUSED DESIGN",
      description:
        "Premium visuals that scream credibility. We build brands that look like they're already winning—because trust converts. Pricing objections disappear when you look world-class.",
      icon: "🏆",
    },
    {
      title: "TEST AND ITERATE",
      description:
        "Launch isn't the finish line—it's the starting gun. We track every click, test what works, kill what doesn't, and optimize until your funnel runs on autopilot.",
      icon: "📊",
    },
  ];

  return (
    <section id="solutions" className="bg-[#0f0f0f] px-6 pt-32 pb-16 text-white md:px-10 lg:px-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-16">
        <div>
          <FromUp>
            <p className="text-sm font-medium uppercase tracking-[0.35em] text-gray-300">
              Problems
            </p>
            <div className="mt-3 flex items-baseline justify-between gap-4 flex-wrap">
              <h2 className="text-3xl font-medium capitalize clash-display md:text-4xl">
                Why your funnel is leaking
              </h2>
              <span className="hidden rounded-full border  border-red-500/30 bg-red-500/10 px-4 py-1 text-xs font-medium uppercase tracking-wide text-red-200 md:inline-block">
                Unoptimized funnel
              </span>
            </div>
          </FromUp>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {problems.map((item, idx) => (
              <FromUp delay={idx * 0.05} key={item.title}>
                <ProblemSolutionCard item={item} />
              </FromUp>
            ))}
          </div>
        </div>

        <div>
          <FromUp>
            <p className="text-sm font-medium uppercase tracking-[0.35em] text-gray-300">
              Solutions
            </p>
            <div className="mt-3 flex items-baseline justify-between gap-4 flex-wrap">
              <h2 className="text-3xl font-medium capitalize clash-display md:text-4xl">
                How we fix it
              </h2>
              <span className="hidden rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1 text-xs font-medium uppercase tracking-wide text-emerald-200 md:inline-block">
                Conversion First
              </span>
            </div>
          </FromUp>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {solutions.map((item, idx) => (
              <FromUp delay={idx * 0.05} key={item.title}>
                <ProblemSolutionCard item={item} />
              </FromUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;