import { Fragment } from "react";
import { Timeline, Event } from "react-timeline-scribble";

const Roadmap = () => {
  return (
    <section className="min-h-[400px] py-6 md:py-12 px-12 lg:px-44 my-40 bg-white">
      <h1 className="font-oswald text-6xl text-center mb-12">Roadmap.</h1>
      <div className="flex flex-col md:flex-row justify-between">
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
                <li>Every monday a Cup Of The Week at 7PM</li>
                <li>1v1 marbles against other holders at anytime</li>
              </ul>
            </Event>
          </Timeline>
        </Fragment>
        <div className="w-full md:w-1/3 mt-16 md:mt-0">
          <h2 className="text-xl underline mb-2">The game</h2>
          <p>
            The game will be called Meta Marbles and at the start will only be
            playable at our decentralized platform.
          </p>
          <p>
            The first season is called "Milky Way" and consists of 3 tracks.
          </p>
          <p>
            The winners of the Cup Of The Week(COTW) will be shown on a
            leaderboard in the Meta Marbles DAO.
          </p>
          <p>
            At the end of the season, the holder with the most $tokens will win
            the NFT trophy.
          </p>
          <h2 className="text-xl underline mt-4 mb-2">1v1</h2>
          <p>
            Every holder is able to challenge another holder to play a 1v1
            marbles race. The winner takes home the Meta Marble of the loser.
          </p>
          <p>
            <strong>Are you brave enough?</strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
