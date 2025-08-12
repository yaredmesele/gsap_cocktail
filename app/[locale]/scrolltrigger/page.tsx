"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

const FromPage = () => {
  useGSAP(() => {
    gsap.fromTo(
      "#blue-box",
      {
        x: 0,
        rotation: 0,
        borderRadius: "0%",
      },
      {
        x: 250,
        repeat: -1,
        yoyo: true,
        rotation: 360,
        borderRadius: "100%",
        duration: 2,
        ease: "bounce.out",
      }
    );
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
