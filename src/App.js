import { useEffect, useRef } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import { LocomotiveScrollProvider } from "react-locomotive-scroll";

import Navigation from "./components/Navigation";
import Masthead from "./components/Masthead";
import About from "./components/About";

function App() {
  useEffect(() => {
    AOS.init();
  });

  const containerRef = useRef(null);

  return (
    <LocomotiveScrollProvider
      options={{ smooth: true }}
      watch={[]}
      containerRef={containerRef}
    >
      <div
        className="App mx-8 md:mx-12 lg:mx-24"
        data-aos-easing="ease"
        data-aos-duration="100"
        data-aos-delay="0"
        data-scroll-container
        ref={containerRef}
      >
        <Navigation />
        <Masthead />
        <About />
      </div>
    </LocomotiveScrollProvider>
  );
}

export default App;
