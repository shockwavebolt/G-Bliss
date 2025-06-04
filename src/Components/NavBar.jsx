import { Link, useLocation } from "react-router-dom";
import Cart from "./Cart";
import { useUI } from "./UIContext";
import BackButton from "../UI/BackButton";
import { useCart } from "./CartContext";

function NavBar() {
  const location = useLocation();
  const { getCartQuantity } = useCart();
  const cartQt = getCartQuantity();

  const { open, setOpen } = useUI();
  return (
    <>
      {/* Desktop */}
      <div className="hidden  w-full fixed top-0  z-5  px-[48px] py-[32px] gap-auto items-center justify-between bg-green00 text-resin00 lg:flex xl:px-[96px]">
        {location.pathname === "/checkout" && <BackButton />}
        <Link
          to="/"
          className="transition-colors duration-200 ease-in-out cursor-pointer font-font02 hover:text-orange00"
        >
          G-bliss
        </Link>
        {location.pathname !== "/checkout" && (
          <div className="flex justify-center items-center gap-[64px] text-[18px] font-font01 ">
            <div className="transition-colors duration-200 ease-in-out cursor-pointer hover:text-orange00">
              Search
            </div>
            <Link
              to="/shop/all"
              className="transition-colors duration-200 ease-in-out cursor-pointer hover:text-orange00"
            >
              Shop
            </Link>
            <div
              className="flex gap-[4px] cursor-pointer transition-colors duration-200 ease-in-out hover:text-orange00"
              onClick={() => setOpen(true)}
            >
              Cart<span className="cartIndicator">{cartQt}</span>
            </div>
            {open && <Cart />}
          </div>
        )}
      </div>

      {/* Mobile */}
      <div className="flex  w-full fixed top-0  px-[24px] py-[48px] gap-auto items-center justify-between bg-green00 text-resin00 md:px-[48px] md:py-[32px] lg:hidden">
        {location.pathname !== "/checkout" ? (
          <>
            <div className="cursor-pointer">
              <img src="/public/icons/hamburger.svg" />
            </div>
            <Link to="/" className="cursor-pointer font-font02">
              G-bliss
            </Link>

            <div
              className="flex gap-[4px] cursor-pointer"
              onClick={() => setOpen(true)}
            >
              <img src="/public/icons/cart.svg" />{" "}
              <span className="cartIndicator">{cartQt}</span>
            </div>
            {open && <Cart />}
          </>
        ) : (
          <>
            <BackButton />
            <Link to="/" className="cursor-pointer font-font02">
              G-bliss
            </Link>
          </>
        )}
      </div>
    </>
  );
}

export default NavBar;

// {/* Mobile */}
// {/* <div className="flex items-center justify-between px-[24px] py-[32px] bg-green05 text-green09 md:hidden ">
//   {location.pathname !== "/" && (
//     <div>
//       <img src="\public\img\logo(svg).svg"></img>
//     </div>
//   )}
//   <div className="flex  justify-between gap-[64px] font-font01 ">
//     <div>
//       <img src="/public/icons/search.svg" />
//     </div>
//     <div>
//       <img src="/public/icons/cart.svg" />
//     </div>
//     <div>
//       <img src="/public/icons/hamburger.svg" />
//     </div>
//   </div>
// </div> */}

// {/* Desktop */}
// {/* <div className=" hidden w-full relative items-center justify-between  px-[48px] py-[32px] bg-green05 text-green09 md:flex  ">
//   {location.pathname !== "/" && (
//     <Link to="/" className="cursor-pointer">
//       <img src="\public\img\logo(svg).svg"></img>
//     </Link>
//   )}
//   <div
//     className={`flex ${
//       location.pathname === "/" ? "mx-auto" : ""
//     }  justify-center gap-[64px] font-font01`}
//   >
//     <div>Search</div>
//     <Link to="/shop/all">Shop</Link>
//     <div className="cursor-pointer" onClick={() => setOpen(true)}>
//       Cart
//     </div>
//   </div>
//   {open && <Cart />}
// </div> */}
