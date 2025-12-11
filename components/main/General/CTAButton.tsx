import { cn } from "@/lib/utils";
import React from "react";

const CTAButton = ({
  className,
  line,
  href = "https://calendly.com/deepcodep/30min",
  target = "_blank",
}: {
  className?: string;
  line?: string;
  href?: string;
  target?: string;
}) => {
  return (
    <a
      href={href}
      target={target}
      rel="noopener noreferrer"
      className={cn(
        "bg-white cursor-pointer hover:bg-gray-100 transition-all duration-300 border-gray-400 border-2 text-black px-6 py-2 mx-auto flex items-center gap-4 rounded-full",
        className
      )}
    >
      <p className="font-semibold text-xl">
        {line || "Book a Call with Deep"}{" "}
      </p>
      <img src={"/deep.jpg"} className="w-8 h-8 object-contain rounded-md" />
    </a>
  );
};

export default CTAButton;
