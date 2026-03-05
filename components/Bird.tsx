"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";

const Bird = () => {
  const pathname = usePathname();
  const getRandomPosition = useCallback(() => {
    const xPositions = ["left-[5%]", "right-[5%]"];
    const yPositions = ["top-[5%]", "bottom-[5%]"];
    const xPosition = xPositions[Math.floor(Math.random() * xPositions.length)];
    const yPosition = yPositions[Math.floor(Math.random() * yPositions.length)];
    return `${xPosition} ${yPosition}`;
  }, []);

  const getRandomBird = useCallback(() => {
    const birds = Array.from({ length: 6 }).map(
      (_, index) => "/birds/bird" + index + ".png"
    );
    const randomIndex = Math.floor(Math.random() * birds.length);
    return birds[randomIndex];
  }, []);

  const [bird, setBird] = useState(getRandomBird());
  const [position, setPosition] = useState(getRandomPosition());
  const firstRender = useRef(true);
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    setBird(getRandomBird());
    setPosition(getRandomPosition());
  }, [pathname, getRandomBird, getRandomPosition]);

  return (
    <div>
      <Image
        src={bird}
        alt="Mavi Makav Papağanı"
        width={160}
        loading="eager"
        height={160}
        quality={100}
        className={cn("fixed z-50", position)}
      />
    </div>
  );
};

export default Bird;
