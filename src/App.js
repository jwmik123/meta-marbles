import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import Navigation from "./components/Navigation";
import Masthead from "./components/Masthead";

function App() {
  useEffect(() => {
    AOS.init();
  });
  return (
    <div
      className="App mx-8 md:mx-12 lg:mx-24"
      data-aos-easing="ease"
      data-aos-duration="100"
      data-aos-delay="0"
    >
      <Navigation />
      <Masthead />
    </div>
  );
}

export default App;
