"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

const FromPage = () => {
  useGSAP(() => {
    gsap.to(".stagger-box", {
      y: 250,
      repeat: -1,
      yoyo: true,
      rotation: 360,
      borderRadius: "100%",
      stagger: {
        amount: 1.5,
        grid: [2, 1],
        axis: "y",
        from: "start",
      },
      ease: "circ.inOut",
    });
  }, []);
  return (
    <div className="flex gap-5 m-20">
      <div className="h-20 w-20 bg-indigo-200 rounded-lg stagger-box" />
      <div className="h-20 w-20 bg-indigo-300 rounded-lg stagger-box" />
      <div className="h-20 w-20 bg-indigo-400 rounded-lg stagger-box" />
      <div className="h-20 w-20 bg-indigo-500 rounded-lg stagger-box" />
      <div className="h-20 w-20 bg-indigo-600 rounded-lg stagger-box" />
      <div className="h-20 w-20 bg-indigo-700 rounded-lg stagger-box" />
      <div className="h-20 w-20 bg-indigo-800 rounded-lg stagger-box" />
      <div className="h-20 w-20 bg-indigo-900 rounded-lg stagger-box" />
    </div>
  );
};

export default FromPage;
