import { Fragment } from "react";
import { Timeline, Event } from "react-timeline-scribble";

const Roadmap = () => {
  return (
    <section className="min-h-[400px] py-6 md:py-12 px-12 lg:px-44 my-40 bg-white">
      <h1 className="font-oswald text-6xl text-center mb-12">Roadmap.</h1>
      <Fragment>
        <Timeline>
          <Event
            interval={"Phase 1"}
            title={"Mint of collection"}
            subtitle={"1st of September 2022"}
          ></Event>
          <Event
            interval={"Phase 2"}
            title={"Starting the creating of the game"}
            subtitle={"If 75% of the collection is sold"}
          ></Event>
          <Event
            interval={"Phase 3"}
            title={"Launch of the game"}
            subtitle={"Season 1: Milky Way"}
          >
            <ul>
              <li>Everyday a Cup Of The Day at 7PM</li>
              <li>1v1 marbles against other holders</li>
            </ul>
          </Event>
        </Timeline>
      </Fragment>
    </section>
  );
};

export default Roadmap;
