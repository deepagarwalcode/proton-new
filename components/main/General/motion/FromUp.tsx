"use client";


import { motion } from "framer-motion";
import React from "react";

type Props = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
};

const FromUp = ({ children, delay = 0, className }: Props) => {
  return (
    <motion.div
      className={className}
      initial={{ y: 24, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
};

export default FromUp;



