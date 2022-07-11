import marble1 from "../assets/marblebrown.png";
import marble2 from "../assets/galaxy-marble.jpeg";

const Masthead = () => {
  return (
    <section className="relative flex justify-center h-[300px] lg:h-[550px] items-center">
      <p className="absolute left-0 top-0 text-white font-medium text-md md:text-xl">
        Planets for in your pocket.
      </p>
      <h1 className="flex flex-col text-white text-6xl font-medium lg:text-[200px] font-display lg:leading-[160px]">
        Meta <span className="ml-8 lg:ml-28 -z-20">Marbles.</span>
      </h1>
      <button className="absolute bottom-0 right-0 bg-white py-2 px-6 text-md md:text-lg rounded-sm">
        <strong>Mint</strong>: 16th of August 2022
      </button>

      <div
        data-scroll
        data-scroll-speed="2"
        className="absolute left-12 md:left-4 bottom-2 -z-30 md:-z-10"
      >
        <img src={marble1} alt="meta marble" className="w-72 lg:w-[400px]" />
      </div>
      <div
        data-scroll
        data-scroll-speed="-4"
        className="absolute -right-[300px] top-2 -z-30"
      >
        <img
          src={marble2}
          alt="meta marble"
          className="hidden md:block w-72 lg:w-[800px]"
        />
      </div>
    </section>
  );
};

export default Masthead;
