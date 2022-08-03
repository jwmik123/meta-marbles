export const About = () => {
  return (
    <section
      // data-scroll
      // data-scroll-delay="1"
      // data-scroll-speed="4"
      className="min-h-[400px] px-12 lg:px-44 mt-80 mb-40 text-white"
    >
      <h1 className="text-6xl text-center font-oswald mb-12">
        So, what are Meta Marbles?
      </h1>
      <div className="flex gap-12 flex-col lg:flex-row">
        <div className="flex flex-col justify-between text-xl">
          <p className="text-center">
            MetaMarbles is a collection of spheres with each an unique
            appearance. Their sizes are immeasurable and their use is limitless.
            They are located somewhere in the Milky Way and are floating in deep
            space, until they are discovered and collected by you.
            <br />
            <br />
            If all the MetaMarbles are discovered, a portal will open back to
            their own world.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
