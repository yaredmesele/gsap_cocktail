"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import React, { useRef } from "react";
import { useMediaQuery } from "react-responsive";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const videoRef = useRef<HTMLVideoElement>(null);

  useGSAP(() => {
    const heroSplit = new SplitText(".title", { type: "chars ,words" });
    const paragraphSplit = new SplitText(".subtitle", { type: "lines" });

    heroSplit.chars.forEach((char) => char.classList.add("text-gradient"));

    gsap.from(heroSplit.chars, {
      yPercent: 100,
      duration: 1.8,
      stagger: 0.05,
      ease: "expo.out",
    });

    gsap.from(paragraphSplit.lines, {
      opacity: 0,
      yPercent: 100,
      duration: 1.8,
      stagger: 0.05,
      delay: 1,
      ease: "expo.out",
    });
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      })
      .to(
        ".left-leaf",
        {
          y: -200,
        },
        0
      )
      .to(
        ".right-leaf",
        {
          y: 200,
        },
        0
      );
    const startValue = isMobile ? "top 50%" : "center 60%";
    const endValue = isMobile ? "120% top" : "bottom top";

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "video",
        start: startValue,
        end: endValue,
        scrub: true,
        pin: true,
      },
    });

    const onMeta = () => {
      tl.to(videoRef.current!, {
        currentTime: videoRef.current!.duration,
      });
    };

    if (videoRef.current?.readyState && videoRef.current.readyState >= 1)
      onMeta();
    else videoRef.current?.addEventListener("loadedmetadata", onMeta);

    return () => {
      videoRef.current?.removeEventListener("loadedmetadata", onMeta);
      tl.kill();
    };
  }, []);

  return (
    <>
      <section id="hero" className="noisy">
        <h1 className="title">MOJITO</h1>

        <img
          src="/images/hero-left-leaf.png"
          alt="left-leaf"
          className="left-leaf"
        />
        <img
          src="/images/hero-right-leaf.png"
          alt="right-leaf"
          className="right-leaf"
        />

        <div className="body">
          <div className="content">
            <div className="space-y-5 hidden md:block">
              <p className="subtitle">Cool. Crisp. Classic.</p>
              <p className="subtitle">
                Sip the spirit <br /> of Summer
              </p>
            </div>
            <div className="view-cocktails">
              <p className="subtitle">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Praesentium nesciunt eius quidem? Eius esse doloremque, laborum
                consectetur quo ipsa minima, ea odio architecto sint molestiae.
                Vel fugit nulla vitae dolore.
              </p>
              <a href="#cocktails">View Cocktails</a>
            </div>
          </div>
        </div>
      </section>
      <div className="video absolute inset-0">
        <video
          ref={videoRef}
          src="/videos/output.mp4"
          muted
          playsInline
          preload="auto"
        />
      </div>
    </>
  );
};

export default Hero;
