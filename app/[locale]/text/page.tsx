"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

const FromPage = () => {
  useGSAP(() => {
    gsap.to("#text", {
      opacity: 1,
      y: 0,
      ease: "power1.inOut",
    });
    gsap.fromTo(
      ".para",
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        delay: 1,
        stagger: 0.5,
      }
    );
  }, []);
  return (
    <div className="p-10">
      <h1 id="text" className="opacity-0 translate-y-10">
        GsapText
      </h1>
      <p className="mt-5 text-gray-500 para">
        We can use some method like
        <code>gsap.to()</code>
        <code>gsap.from()</code> <code>gsap.fromTo()</code> and{" "}
        <code>gsap.timeline()</code>{" "}
      </p>
    </div>
  );
};

export default FromPage;
