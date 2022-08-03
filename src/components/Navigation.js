import { useState } from "react";

const Navigation = () => {
  const [closed, setClosed] = useState(true);
  return (
    <>
      {!closed ? (
        <div className="fixed bg-slate-600 w-full h-full z-20">
          <span
            className="uppercase font-medium border-2 p-2 rounded-sm cursor-pointer py-8"
            onClick={() => setClosed(false)}
          >
            Menu
          </span>
        </div>
      ) : (
        <div
          role="navigation"
          className="flex justify-between py-12 text-slate-100 mx-8 md:mx-12 lg:mx-24 z-30"
        >
          <h1 className="font-oswald font-bold text-xl">Meta Marbles.</h1>
          <nav className="hidden md:flex divide-x items-center">
            <ul className="gap-12 flex px-4">
              <li className="uppercase">Home</li>
              <li className="uppercase">Roadmap</li>
              <li className="uppercase">About</li>
            </ul>
            <ul className="flex justify-between px-4">
              <li>D</li>
              <li>T</li>
              <li>ME</li>
            </ul>
          </nav>
          <div className="block md:hidden">
            <span
              className="uppercase font-medium border-2 p-2 rounded-sm cursor-pointer"
              onClick={() => setClosed(false)}
            >
              Menu
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
