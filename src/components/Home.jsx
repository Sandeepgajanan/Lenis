import React, { useRef } from "react";
import { data } from "../constants";
import Heading from "./Heading";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const elemRef = useRef([]);

  useGSAP(() => {
    elemRef.current.forEach((elem) => {
      const im = elem.querySelector("img");
      let tl = gsap.timeline();
      let xTransform = gsap.utils.random(-100, 100);
      tl.set(im, {
        transformOrigin: `${xTransform < 0 ? 0 : "100%"}`,
      })
        .to(im, {
          scale: 0,
          scrollTrigger: {
            trigger: elem,
            start: "top top",
            end: "bottom top",
            scrub: true,
            pin: true,
          },
        })
        .to(elem, {
          xPercent: xTransform,

          scrollTrigger: {
            trigger: elem,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
    });
  });

  return (
    <div className="w-full min-h-screen bg-[#846C64] overflow-hidden">
      <div className="grid grid-cols-8 grid-rows-7 w-full h-full p-2 max-sm:grid-flow-row-14 ">
        {data.map((item, index) => (
          <div
            key={index}
            style={{
              gridRow: `${item.row}`,
              gridColumn: `${item.col}`,
            }}
            className=" rounded-md overflow-hidden  w-52 h-52  max-sm:w-20 max-sm:h-20"
            ref={(el) => (elemRef.current[index] = el)}
          >
            <img src={item.src} alt="" className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
      <Heading />
    </div>
  );
};

export default Home;
