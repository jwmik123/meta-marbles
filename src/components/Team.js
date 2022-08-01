import kev from "../assets/kev.jpeg";
import jalla from "../assets/jalla.png";

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
      <div className="grid gap-4 grid-cols-1 md:grid-cols-3 mt-12">
        <div className="md:col-span-2 team-item">
          <div className="flex">
            <img
              src={kev}
              className="overflow-hidden object-cover w-full h-full"
              alt="team-member"
            />
            <div className="text-black p-4 md:p-8 lg:p-10 flex flex-col gap-2">
              <h3 className="text-4xl font-medium">Kev</h3>
              <h5 className="text-xl font-light text-black/60">
                Head of Design
              </h5>
              <p>
                Small text about how creative and passionate this guy is about
                the project.
              </p>
            </div>
          </div>
        </div>
        <div className="team-item flex items-center p-4 md:p-8 lg:p-10">
          <h3 className="text-4xl text-black font-medium text-center">
            Follow us on{" "}
            <span className="text-purple-700 underline">Discord</span>
          </h3>
        </div>
        <div className="team-item flex items-center p-4 md:p-8 lg:p-10">
          <h3 className="text-4xl text-black font-medium text-center">
            Follow us on{" "}
            <span className="text-blue-500 underline">Twitter</span>
          </h3>
        </div>
        <div className="md:col-span-2 team-item">
          <div className="flex">
            <img
              src={jalla}
              className="overflow-hidden object-cover w-full h-full"
              alt="team-member"
            />
            <div className="text-black p-4 md:p-8 lg:p-10 flex flex-col gap-2">
              <h3 className="text-4xl font-medium">Jalla</h3>
              <h5 className="text-xl font-light text-black/60">
                Head of Development
              </h5>
              <p>
                Small text about how creative and passionate this guy is about
                the project.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
