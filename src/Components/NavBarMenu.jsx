import { Link } from "react-router-dom";

function NavBarMenu() {
  return (
    <div className="flex flex-col w-full  py-[64px] self-start  pb-[48px] gap-[32px] font-font01 text-resin00 bg-green00 ">
      <input
        type="text"
        className="flex h-[40px] rounded-sm bg-white font-font03  focus:outline-none placeholder:font-font01 px-[16px] text-[16px] text-green09"
        placeholder="Search..."
        style={{ boxShadow: "inset 0px 4px 4px rgba(0,0,0,0.25)" }}
      />
      <Link
        to="/shop/all"
        className="transition-colors duration-200 ease-in-out cursor-pointer hover:text-orange00"
      >
        Shop
      </Link>
    </div>
  );
}

export default NavBarMenu;
