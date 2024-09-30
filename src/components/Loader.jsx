import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Loader = () => {
  const bodyRef = useRef(document.body);
  const loaderRef = useRef(null);
  const circleRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const body = bodyRef.current;
    const loader = loaderRef.current;
    const circle = circleRef.current;
    const text = textRef.current;

    body.style.overflow = "hidden";
    body.style.height = "100vh";
    body.style.position = "fixed";
    body.style.width = "100%";

    const tl = gsap.timeline();

    tl.to(circle, {
      strokeDasharray: "408, 408",
      duration: 2,
      ease: "power2.inOut",
    });

    tl.fromTo(
      text,
      {
        y: 20,
        opacity: 0,
      },
      {
        opacity: 1,
        y: 0,
        ease: "power2.out",
      },
      "-=1.5" // Start this animation 1.5 seconds before the previous one ends
    );

    tl.to(loader, {
      x: "100%",
      duration: 1.5,
      ease: "power4.inOut",
    }).eventCallback("onComplete", () => {
      body.style.overflow = "";
      body.style.height = "";
      body.style.position = "";
      body.style.width = "";
    });

    return () => {
      body.style.overflow = "";
      body.style.height = "";
      body.style.position = "";
      body.style.width = "";
      tl.kill();
    };
  }, []);

  return (
    <div
      ref={loaderRef}
      className="fixed top-0 left-0 w-full h-full bg-black z-50 flex items-center justify-center select-none pointer-events-none"
    >
      <div className="relative w-52 h-52 sm:w-52  max-sm:w-40 max-sm:h-40">
        <svg className="w-full h-full" viewBox="0 0 140 140">
          <circle
            ref={circleRef}
            cx="70"
            cy="70"
            r="65"
            stroke="#846C64"
            strokeWidth="4"
            fill="none"
            strokeDasharray="0, 408"
          />
        </svg>
        <span
          ref={textRef}
          className="text-[#846C64] text-xl max-sm:text-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold opacity-0 whitespace-nowrap text-center"
        >
          ಆಗೋದೆಲ್ಲ ಆಗುತ್ತೆ
        </span>
      </div>
    </div>
  );
};

export default Loader;
