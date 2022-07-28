export const Team = () => {
  return (
    <section
      // data-scroll
      // data-scroll-speed="6"
      className="min-h-[400px] px-12 lg:px-44 my-80 text-white"
    >
      <h1 className="font-oswald text-6xl text-center mb-12">The Team.</h1>
      <p className="text-center text-xl">
        We are highly motivated group of human beings - who do not only believe
        in NFT&apos;s. We also believe that the technology behind Web3 is the
        frontier of a new generation.
      </p>
      <div className="grid gap-4 grid-cols-3 mt-12">
        <div className="col-span-2 team-item"></div>
        <div className="team-item"></div>
        <div className="team-item"></div>
        <div className="col-span-2 team-item"></div>
      </div>
    </section>
  );
};

export default Team;
