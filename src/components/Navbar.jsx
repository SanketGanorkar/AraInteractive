const Navbar = () => {
  return (
    <div className="bg-navbg w-screen min-h-[100px] bg-no-repeat bg-cover overflow-x-hidden flex justify-center items-center">
      <div className="res-width flex flex-row items-center justify-between gap-x-16">
        <div className="flex flex-col">
          <h1 className="text-white font-Comme font-semibold md:text-3xl max-sm:text-2xl max-sm:w-48">
            ARA Interactive
          </h1>
          <h3 className="text-white font-Comme font-light">
            Attract Retain Achieve
          </h3>
        </div>
        <div className="list-none flex flex-row gap-x-8 text-white font-Conne font-light">
          <li className="uppercase">Home</li>
          <li className="uppercase">Services</li>
          <li className="uppercase">About us</li>
          <li className="uppercase">Blogs</li>
          <li className="uppercase">Contact Us</li>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
