"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

const FromPage = () => {
  useGSAP(() => {
    gsap.from("#blue-box", {
      x: 250,
      repeat: -1,
      yoyo: true,
      rotation: 360,
      duration: 2,
      ease: "power1.inOut",
    });
  }, []);
  return (
    <div className="p-10">
      <button id="blue-box" className="h-20 w-20 bg-blue-500 rounded-xl">
        From
      </button>
    </div>
  );
};

export default FromPage;
