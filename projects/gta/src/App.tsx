import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Hero from "./sections/Hero";
import FirstVideo from "./sections/FirstVideo";
import Jason from "./sections/Jason";
import SecondVideo from "./sections/SecondVideo";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
      <nav>
        <img src="/images/nav-logo.svg" className="scale-90" />
        <img src="/images/menu.svg" className="w-10" />
      </nav>
      <Hero />
      <FirstVideo/>
      <Jason />
      
      <SecondVideo />
    </main>
  );
};

export default App;
