export const Team = () => {
  return (
    <section className="min-h-[400px] px-12 lg:px-44 my-80 text-white">
      <h1 className="text-6xl text-center font-display mb-12">The Team</h1>
      <p className="text-center text-xl">
        We are highly motivated group of human beings - who do not only believe
        in NFT's. We also believe that the technology behind Web3 is the
        frontier of a new generation.
      </p>
      <div className="grid gap-4 grid-cols-2 mt-12">
        <div className="flex col-span-2">
          <div className="bg-[#181818] pl-8 py-8">
            <h3 className="text-4xl">Kev</h3>
            <p className="text-md text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              explicabo, dicta voluptates delectus ad facere optio corporis ex.
            </p>
            <button>Twitter</button>
          </div>
        </div>
        {/* <div className="flex flex-col col-span-1">
          <div className="h-full">
            <img src={teamMember} alt="" />
          </div>
          <div className="bg-[#181818] pl-8 py-8">
            <h3 className="text-4xl">Kev</h3>
            <p className="text-md text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              explicabo, dicta voluptates delectus ad facere optio corporis ex.
            </p>
            <button>Twitter</button>
          </div>
        </div> */}
        <div className="flex col-span-2">
          <div className="bg-[#181818] pl-8 py-8">
            <h3 className="text-4xl">Kev</h3>
            <p className="text-md text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              explicabo, dicta voluptates delectus ad facere optio corporis ex.
            </p>
            <button>Twitter</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
