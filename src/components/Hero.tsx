"use client";
import React, { useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { heroVideo, smallHeroVideo } from "@/utils";
import Link from "next/link";

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState("");

  useEffect(() => {
    const updateVideoSrc = () => {
      setVideoSrc(window.innerWidth < 760 ? smallHeroVideo : heroVideo);
    };

    updateVideoSrc();

    window.addEventListener("resize", updateVideoSrc);

    return () => {
      window.removeEventListener("resize", updateVideoSrc);
    };
  }, []);

  useGSAP(() => {
    gsap.to("#hero", { opacity: 1, delay: 2 });
    gsap.to("#cta", { opacity: 1, y: -25, delay: 2 });
  }, []);

  return (
    <section className="w-full nav-height bg-black relative">
      <div className="h-5/6 w-full flex-center flex-col">
        <p id="hero" className="hero-title">
          iPhone 15 Pro
        </p>
        <div className="md:w-10/12 w-9/12">
          <video
            className="pointer-events-none"
            autoPlay
            muted
            playsInline={true}
            key={videoSrc}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
        <div
          id="cta"
          className="flex flex-col items-center opacity-0 translate-y-20"
        >
          <Link href="#highlights" className="btn">
            Buy
          </Link>
          <p className="font-normal text-xl">From $199/month or $999</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
