import blackhole from "../assets/blackhole.jpeg";

export const About = () => {
  return (
    <section className="min-h-[800px] mt-80 text-white">
      <h1 className="text-6xl text-center font-display mb-12">
        So, what are Meta Marbles?
      </h1>
      <div className="flex gap-12 flex-col md:flex-row">
        <div className="flex flex-col justify-between text-lg">
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
            pariatur accusantium itaque culpa saepe cum tempora ex veritatis,
            voluptatem autem esse mollitia labore provident enim incidunt nulla
            aliquam, doloremque doloribus.
          </p>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
            pariatur accusantium itaque culpa saepe cum tempora ex veritatis,
            voluptatem autem esse mollitia labore provident enim incidunt nulla
            aliquam, doloremque doloribus.
          </p>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
            pariatur accusantium itaque culpa saepe cum tempora ex veritatis,
            voluptatem autem esse mollitia labore provident enim incidunt nulla
            aliquam, doloremque doloribus.
          </p>
        </div>
        <div>
          <img className="w-full " src={blackhole} alt="meta marble" />
        </div>
      </div>
    </section>
  );
};

export default About;
