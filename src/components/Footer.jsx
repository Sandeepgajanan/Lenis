import React from "react";

const Footer = () => {
  return (
    <footer className="bg-zinc-900 w-full text-white py-12 relative overflow-hidden max-sm:py-4">
      <div className="flex items-center justify-center gap-3 max-sm:gap-1">
        <svg
          viewBox="0 0 24 24"
          fill="red"
          className="w-12 h-12 max-sm:w-4 max-sm:h-4 max-sm:mt-1"
        >
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
        <span className="text-2xl font-extrabold max-sm:text-sm">
          ಇಂದ-ಸಂ"Deep"
        </span>
      </div>
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-96 h-28 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full  blur-3xl"></div>
        <div className="absolute top-0 right-0 w-96 h-28 bg-gradient-to-tl from-blue-500 to-green-500 rounded-full  blur-3xl"></div>
      </div>
    </footer>
  );
};

export default Footer;
