import React, { useEffect } from "react";
import Loader from "./components/Loader";
import Home from "./components/Home";
import About from "./components/About";
import Drags from "./components/Drags";
import Footer from "./components/Footer";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
const App = () => {
  useEffect(() => {
    const lenis = new Lenis();

    lenis.on("scroll", (e) => {
      console.log(e);
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return (
    <div className="w-full h-screen ">
      <Loader />
      <Home />
      <About />
      <Drags />
      <Footer />
    </div>
  );
};

export default App;
