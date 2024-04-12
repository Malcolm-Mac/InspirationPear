"use client";
import { animateWithGsap } from "@/utils/animations";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import React, { useState } from "react";

//https://res.cloudinary.com/ds3etgheh/image/upload/v1711227942/frame2_ubtuvp.png

const routes = [
  {
    id: 0,
    icon: "https://res.cloudinary.com/ds3etgheh/image/upload/v1711227834/silencemode_ghr9zg.png",
    title: "Silent mode",
    imgUrl: "",
    isActive: true,
  },
  {
    id: 1,
    icon: "https://res.cloudinary.com/ds3etgheh/image/upload/v1711228101/focus_ochism.png",
    title: "Focus",
    imgUrl: "",
    isActive: false,
  },
  {
    id: 2,
    icon: "https://res.cloudinary.com/ds3etgheh/image/upload/v1711261654/camera_tifjs7.png",
    title: "Camera",
    imgUrl: "",
    isActive: false,
  },
  {
    id: 3,
    icon: "https://res.cloudinary.com/ds3etgheh/image/upload/v1711261791/torch_uxrit0.png",
    title: "Torch",
    imgUrl: "",
    isActive: false,
  },
  {
    id: 4,
    icon: "https://res.cloudinary.com/ds3etgheh/image/upload/v1711261983/voice_memo_bm4uqu.png",
    title: "Voice Memo",
    imgUrl: "",
  },
  {
    id: 5,
    icon: "https://res.cloudinary.com/ds3etgheh/image/upload/v1711262136/magnifier_xkblys.png",
    title: "Magnifier",
    imgUrl: "",
    isActive: false,
  },
  {
    id: 6,
    icon: "https://res.cloudinary.com/ds3etgheh/image/upload/v1711262137/shortcut_rjfivb.png",
    title: "Shortcut",
    imgUrl: "",
    isActive: false,
  },
  {
    id: 7,
    icon: "https://res.cloudinary.com/ds3etgheh/image/upload/v1711262133/accessibility_gaapnd.png",
    title: "Accesibility",
    imgUrl: "",
    isActive: false,
  },
];

const GetInOnAction = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [routesState, setRoutesState] = useState(routes);

  const handleScreenChange = (index: number) => {
    const updatedRoutes = routesState.map((route, i) => ({
      ...route,
      isActive: i === index ? true : false,
    }));
    setRoutesState(updatedRoutes);
  };

  useGSAP(() => {
    animateWithGsap(".g_text2", {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.inOut",
    });
  }, []);
  return (
    <section className="h-full common-padding relative overflow-hidden">
      <div className="screen-max-width">
        <div className="flex flex-col items-start">
          <h2 className="hiw-title-2">
            Get in on the
            <br /> Action button&#46;
          </h2>
        </div>
        <div className="mt-10 flex justify-between">
          <div className="my-12">
            <p className="feature-text_2 w-5/6 mb-20">
              The all-new Action button is{" "}
              <span className="text-white">
                a fast track to your favourite feature&#46;
              </span>{" "}
              <br />
              Once you set the one you want, <br />
              just press and hold to launch the action&#46;
            </p>

            <div className="flex justify-end items-center mt-24">
              <div className="border border-gray w-full" />
              <div className="p-1 rounded-full bg-gray" />
            </div>

            <div className="my-12">
              {routesState.map((route, i) => (
                <div
                  key={route.title}
                  onClick={() => handleScreenChange(i)}
                  className={`"flex items-center mx-auto gap-2 p-2 my-2 text-gray w-1/2 cursor-pointer" ${
                    route.isActive
                      ? "border border-white rounded-3xl text-white"
                      : "border-none hover:bg-gray hover:rounded-3xl hover:text-white"
                  }`}
                >
                  <div className="mx-3">
                    <Image
                      src={route.icon}
                      width={30}
                      height={30}
                      alt={route.title}
                    />
                  </div>
                  <div className="-ml-2">
                    <p>{route.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <Image
              src="https://res.cloudinary.com/ds3etgheh/image/upload/v1711227942/frame2_ubtuvp.png"
              width={500}
              height={300}
              alt="frame"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInOnAction;
