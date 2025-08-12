"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const FromPage = () => {
  const scrollRef = useRef(null);
  useGSAP(() => {
    const boxes = gsap.utils.toArray(scrollRef.current.children);
    boxes.forEach((box) => {
      gsap.to(box, {
        x: 150,
        rotation: 360,
        borderRadius: "100%",
        scale: 1.5,
        scrollTrigger: {
          trigger: box,
          start: "bottom bottom",
          end: "top 20%",
          scrub: true,
        },
        ease: "power1.inOut",
      });
    });
  }, []);
  return (
    <div className="p-10">
      <div className="h-screen"></div>
      <div className="flex gap-5 h-screen" ref={scrollRef}>
        <button id="blue-box" className="h-20 w-20 bg-blue-500 rounded-xl">
          From
        </button>
        <button id="blue-box" className="h-20 w-20 bg-blue-500 rounded-xl">
          From
        </button>
      </div>
    </div>
  );
};

export default FromPage;
