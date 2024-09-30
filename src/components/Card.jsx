import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Card = ({ val }) => {
  const cardRef = useRef(null);

  useGSAP(() => {
    if (cardRef.current) {
      gsap.to(cardRef.current, {
        scale: 0.85,
        opacity: 0,
        duration: 1, // Add duration for smoother animation
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 15%",
          end: "bottom 15%",
          scrub: true,
          ease: "ease.inOut",
        },
      });
    }
  }, []);

  return (
    <div
      className="w-[27vw] h-[27vw] rounded-xl bg-[#846C64] py-8 px-3 flex flex-col items-center text-center sticky top-[15vh] max-sm:w-full max-sm:h-full max-sm:py-12  max-sm:px-2"
      ref={cardRef}
    >
      <div className="w-[13vw] aspect-square">
        <img src={val.image} alt="" />
      </div>
      <h2 className="mt-2 text-4xl font-bold max-sm:text-2xl">{val.heading}</h2>
      <h3 className="mt-2 text-5xl font-extrabold max-sm:text-2xl">
        {val.subHeading}
      </h3>
    </div>
  );
};

export default Card;
