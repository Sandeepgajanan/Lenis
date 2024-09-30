import React from "react";
import Card from "./Card";
import { cardData } from "../constants";
const About = () => {
  return (
    <div className="w-full min-h-screen bg-zinc-900 z-10 relative flex flex-col items-center gap-8 py-[15vh] max-sm:px-5">
      {cardData.map((item, index) => (
        <Card key={index} val={item} />
      ))}
    </div>
  );
};

export default About;
