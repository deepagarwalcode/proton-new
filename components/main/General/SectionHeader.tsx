// import React from "react";

// type SectionHeaderProps = {
//   tag?: string;
//   title: string;
//   subtitle?: string;
//   align?: "left" | "center";
// };

// const SectionHeader: React.FC<SectionHeaderProps> = ({
//   tag,
//   title,
//   subtitle,
//   align = "left",
// }) => {
//   const alignment =
//     align === "center"
//       ? "items-center text-center mx-auto"
//       : "items-start text-left";

//   return (
//     <div
//       className={`flex w-full flex-col gap-3 ${alignment}`}
//       style={{ maxWidth: align === "center" ? "780px" : "100%" }}
//     >
//       {tag && (
//         <span className="inline-flex w-max items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-emerald-100">
//           {tag}
//         </span>
//       )}
//       <h2 className="text-3xl font-semibold capitalize clash-display md:text-4xl">
//         {title}
//       </h2>
//       {subtitle && (
//         <p className="text-base text-gray-300 md:text-lg leading-relaxed">
//           {subtitle}
//         </p>
//       )}
//     </div>
//   );
// };

// export default SectionHeader;
import React from "react";

const SectionHeader = ({
  tag,
  title,
  description,
}: {
  tag: string;
  title: string;
  description?: string;
}) => {
  return (
    <div>
      <p className="text-sm text-center mb-2 font-medium uppercase tracking-wider md:tracking-[0.35em] text-gray-300">{tag}</p>
      <h2 className="text-3xl md:text-5xl font-medium clash-display text-center capitalize">{title}</h2>
      {/* <p className="text-gray-500 clash-display text-xl">{description}</p> */}
    </div>
  );
};

export default SectionHeader;
