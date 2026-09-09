import NavBar from '../Components/NavBar';

function PageNotFound() {
  return (
    <div>
      <NavBar />
      <section className="bg-green00 text-resin00 flex h-screen flex-col items-center px-[96px] pt-[35vh]">
        <div className="font-font02 shadow_404 text-[123px] tracking-wide md:text-[200px]">
          404
        </div>
        <div className="font-font01 lg:text-29px text-[20px] tracking-wide sm:text-[26px]">
          Page Not Found
        </div>
      </section>
    </div>
  );
}

export default PageNotFound;
