const Masthead = () => {
  return (
    <section className="relative flex justify-center h-[550px] items-center">
      <p className="absolute left-0 top-0 text-white font-medium text-xl">
        Planets for in your pockets.
      </p>
      <h1 className="flex flex-col text-white text-[200px] font-serif leading-[160px]">
        Meta <span className="ml-28">Marbles.</span>
      </h1>
      <button className="absolute bottom-0 right-0 bg-white py-2 px-6 text-lg rounded-sm">
        Mint: 16th of August 2022
      </button>
    </section>
  );
};

export default Masthead;
