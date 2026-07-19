"use client";

import { motion } from "framer-motion";

const SLASH_COUNT = 5;

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}

      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 9999,
          display: "flex",
          pointerEvents: "none",
        }}
      >
        {Array.from({ length: SLASH_COUNT }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: "0%" }}
            animate={{ y: "-100%" }}
            transition={{
              duration: 0.6,
              delay: i * 0.1,
              ease: [0.76, 0, 0.24, 1],
            }}
            style={{
              width: `${100 / SLASH_COUNT}%`,
              height: "100%",
              backgroundColor: "#FF8342",
            }}
          />
        ))}
      </div>
    </>
  );
}