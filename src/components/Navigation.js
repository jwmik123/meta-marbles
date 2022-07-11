const Navigation = () => {
  return (
    <div
      role="navigation"
      className="flex justify-between py-12 text-slate-100"
    >
      <h1 className="font-bold">Meta Marbles.</h1>
      <nav>
        <ul className="gap-12 hidden md:flex">
          <li className="uppercase">Home</li>
          <li className="uppercase">Collection</li>
          <li className="uppercase">About</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
