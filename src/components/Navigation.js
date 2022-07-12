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
          <h1 className="font-bold">Meta Marbles.</h1>
          <nav className="hidden md:block">
            <ul className="gap-12 flex">
              <li className="uppercase">Home </li>
              <li className="uppercase">Collection</li>
              <li className="uppercase">About</li>
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
