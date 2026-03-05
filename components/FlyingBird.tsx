"use client";

import { Easing, motion, Variants } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function FlyingBird() {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 800,
    height: typeof window !== "undefined" ? window.innerHeight : 600,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Calculate the center and dimensions of the infinity path
  const centerX = windowSize.width / 2;
  const centerY = windowSize.height / 2;
  const pathWidth = Math.min(windowSize.width * 0.4, 400);
  const pathHeight = Math.min(windowSize.height * 0.3, 200);

  // Create the infinity path using custom variants
  const infinityPath = {
    animate: {
      offsetPath: `path('M ${centerX - pathWidth} ${centerY} C ${
        centerX - pathWidth
      } ${centerY - pathHeight}, ${centerX - pathWidth / 2} ${
        centerY - pathHeight
      }, ${centerX} ${centerY} C ${centerX + pathWidth / 2} ${
        centerY + pathHeight
      }, ${centerX + pathWidth} ${centerY + pathHeight}, ${
        centerX + pathWidth
      } ${centerY} C ${centerX + pathWidth} ${centerY - pathHeight}, ${
        centerX + pathWidth / 2
      } ${centerY - pathHeight}, ${centerX} ${centerY} C ${
        centerX - pathWidth / 2
      } ${centerY + pathHeight}, ${centerX - pathWidth} ${
        centerY + pathHeight
      }, ${centerX - pathWidth} ${centerY}')`,
      offsetDistance: ["0%", "100%"],
      transition: {
        duration: 10,
        ease: "linear" as Easing,
        repeat: Number.POSITIVE_INFINITY,
      },
    },
  };

  // Bird flapping animation
  const flapWings: Variants = {
    animate: {
      transition: {
        duration: 0.8,
        repeat: Number.POSITIVE_INFINITY,
        times: [0, 0.4, 0.5, 0.9, 1],
      },
    },
  };

  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-10 overflow-hidden">
      <motion.div
        className="absolute"
        variants={infinityPath}
        animate="animate"
        style={{ offsetPath: "path('M 0 0 L 0 0')" }}
      >
        <motion.div variants={flapWings} animate="animate">
          <Image
            src="/birds/flying-bird.png"
            alt="Bird"
            width={80}
            height={80}
            quality={100}
            className="drop-shadow-md"
            priority
            loading="eager"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
