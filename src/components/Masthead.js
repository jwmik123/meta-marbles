import { Parallax } from "react-scroll-parallax";

import marble1 from "../assets/marblebrown.png";
import marble2 from "../assets/galaxy-marble.jpeg";

const Masthead = () => {
  return (
    <section className="relative flex justify-center h-[300px] lg:h-[550px] items-center">
      <p className="absolute left-0 top-0 text-white font-medium text-md md:text-xl">
        Planets for in your pockets.
      </p>
      <h1
        data-aos="fade-up"
        data-aos-duration="500"
        className="flex flex-col text-white text-6xl lg:text-[200px] font-display lg:leading-[160px]"
      >
        Meta <span className="ml-8 lg:ml-28">Marbles.</span>
      </h1>
      <button className="absolute bottom-0 right-0 bg-white py-2 px-6 text-md md:text-lg rounded-sm">
        <strong>Mint</strong>: 16th of August 2022
      </button>

      <div
        data-scroll
        data-scroll-speed="2"
        className="absolute right-0 top-2 -z-10"
      >
        <img src={marble1} alt="meta marble" width="400px" height="400px" />
      </div>
      <div
        data-scroll
        data-scroll-speed="4"
        className="absolute -left-12 bottom-2 -z-10"
      >
        <img src={marble2} alt="meta marble" width="400px" height="400px" />
      </div>
    </section>
  );
};

export default Masthead;
