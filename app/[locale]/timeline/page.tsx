"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

const FromPage = () => {
  const timeline = gsap.timeline({ repeat: -1, yoyo: true, repeatDelay: 1 });

  useGSAP(() => {
    timeline.to("#blue-box", {
      x: 250,
      duration: 2,
      rotation: 360,
      borderRadius: "100%",
      ease: "back.inOut",
    });

    timeline.to("#blue-box", {
      y: 250,
      scale: 2,
      duration: 2,
      rotation: 360,
      borderRadius: "100%",
      ease: "back.inOut",
    });

    timeline.to("#blue-box", {
      x: 500,
      scale: 1,
      duration: 2,
      rotation: 360,
      borderRadius: "8%",
      ease: "back.inOut",
    });
  }, []);

  return (
    <div className="p-10">
      <button
        onClick={() => (timeline.paused() ? timeline.play() : timeline.pause())}
      >
        pause/play
      </button>
      <button id="blue-box" className="h-20 w-20 bg-blue-500 rounded-xl">
        From
      </button>
    </div>
  );
};

export default FromPage;
