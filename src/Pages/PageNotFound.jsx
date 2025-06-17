import NavBar from "../Components/NavBar";

function PageNotFound() {
  return (
    <div>
      <NavBar />
      <section className="flex flex-col h-screen pt-[35vh]  px-[96px] bg-resin00 text-green00 items-center">
        <div className="font-font02 text-[123px] tracking-wide md:text-[200px] lg:text-[231px] ">
          404
        </div>
        <div className="font-font01 text-[20px] tracking-wide sm:text-[26px] lg:text-29px">
          Page Not Found
        </div>
      </section>
    </div>
  );
}

export default PageNotFound;
