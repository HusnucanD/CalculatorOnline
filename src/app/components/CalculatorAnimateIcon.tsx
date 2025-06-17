"use client";

import React from "react";
import { motion } from "framer-motion";
import { CalculatorIconMap } from "@/app/model/types";

export function CalculatorAnimateIcon({ icon, size = 100 }: { icon?: string; size?: number }) {
  const IconComponent = CalculatorIconMap[icon as keyof typeof CalculatorIconMap];

  if (!IconComponent) {
    console.warn(`Icon "${icon}" not found`);
    return null;
  }

  const iconRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (iconRef.current) {
      const svg = iconRef.current.querySelector("svg");
      if (!svg) return;

      const paths = svg.querySelectorAll("path, line, rect, circle, polyline, polygon");
      paths.forEach((path, index) => {
        const element = path as SVGElement;
        let length = 1000;

        if ("getTotalLength" in element) {
          length = (element as SVGPathElement).getTotalLength();
        }

        element.style.strokeDasharray = `${length}`;
        element.style.strokeDashoffset = `${length}`;
        element.style.animation = `draw 0.6s ease-in-out ${index * 0.1}s forwards`;
      });
    }
  }, []);

  return (
    <>
      <style jsx global>{`
        @keyframes draw {
          to {
            stroke-dashoffset: 0;
          }
        }
      `}</style>

      <motion.div
        ref={iconRef}
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 150 }}
        style={{ width: size, height: size, display: "inline-block" }}
      >
        <IconComponent size={size} strokeWidth={2} />
      </motion.div>
    </>
  );
}
