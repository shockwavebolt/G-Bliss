import { Link, useLocation } from "react-router-dom";
import Cart from "./Cart";
import { useUI } from "./UIContext";

function NavBar() {
  const location = useLocation();

  const { open, setOpen } = useUI();
  return (
    <>
      {/* Desktop */}
      <div className=" hidden w-full relative items-center justify-between  px-[48px] py-[32px] bg-green05 text-green09 md:flex  ">
        {location.pathname !== "/" && (
          <Link to="/" className="cursor-pointer">
            <img src="\public\img\logo(svg).svg"></img>
          </Link>
        )}
        <div
          className={`flex ${
            location.pathname === "/" ? "mx-auto" : ""
          }  justify-center gap-[64px] font-font01`}
        >
          <div>Search</div>
          <Link to="/shop">Shop</Link>
          <div className="cursor-pointer" onClick={() => setOpen(true)}>
            Cart
          </div>
        </div>
        {open && <Cart />}
      </div>

      {/* Mobile */}
      <div className="flex items-center justify-between px-[24px] py-[32px] bg-green05 text-green09 md:hidden ">
        {location.pathname !== "/" && (
          <div>
            <img src="\public\img\logo(svg).svg"></img>
          </div>
        )}
        <div className="flex  justify-between gap-[64px] font-font01 ">
          <div>
            <img src="/public/icons/search.svg" />
          </div>
          <div>
            <img src="/public/icons/cart.svg" />
          </div>
          <div>
            <img src="/public/icons/hamburger.svg" />
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
