"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const animationDurations = {
  fast: "20s",
  normal: "40s",
  slow: "80s",
};

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
//   pauseOnHover = false,
  className,
}: {
  items: {
    img: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (containerRef.current && scrollerRef.current) {
      initializeScroller();
    }
  }, []);

  const initializeScroller = () => {
    cloneScrollerItems();
    applyAnimationDirection();
    applyAnimationSpeed();
    setStart(true);
  };

  const cloneScrollerItems = () => {
    const scrollerContent = Array.from(scrollerRef.current!.children);
    scrollerContent.forEach((item) => {
      scrollerRef.current!.appendChild(item.cloneNode(true));
    });
  };

  const applyAnimationDirection = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      );
    }
  };

  const applyAnimationSpeed = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-duration",
        animationDurations[speed] || animationDurations.normal
      );
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 w-fit overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-fit shrink-0 gap-16 py-4 w-fit flex-nowrap",
          start && "animate-scroll",
        //   pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            key={idx}
            className="w-fit max-w-fit relative flex-shrink-0"
            style={{
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
            }}
          >
            <img
              src={item.img}
              alt={`Tech logo ${idx}`}
              className="w-full h-auto"
              style={{ maxWidth: "150px" }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
