import { Link, useLocation } from "react-router-dom";
import Cart from "./Cart";
import BackButton from "../UI/BackButton";
import { useCart } from "./CartContext";
import { useEffect, useState } from "react";
import NavBarMenu from "./NavBarMenu";

function NavBar() {
  const location = useLocation();
  const { getCartQuantity, openCart, setOpenCart } = useCart();
  const cartQt = getCartQuantity();
  const [hideNav, setHideNav] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setHideNav(currentScrollY > lastScrollY);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const [toggleNavMenu, setToggleNavMenu] = useState(true);

  return (
    <>
      {/* Desktop */}
      <div
        className={`hidden  w-full fixed top-0  z-5 transition-transform duration-300 ${
          hideNav ? "-translate-y-full shadow-none" : "translate-y-0 "
        } px-[48px] py-[32px] gap-auto items-center justify-between bg-green00  text-resin00 lg:flex xl:px-[96px] shadow-[0px_5px_3px_0px_rgba(0,0,0,0.25)]`}
      >
        {location.pathname === "/checkout" && <BackButton />}
        <Link
          to="/"
          className="tracking-wider transition-colors duration-200 ease-in-out logoShadow text-shadow-lg font-font02 hover:text-orange00"
        >
          G-Bliss
        </Link>
        {location.pathname !== "/checkout" && (
          <div className="flex justify-center items-center gap-[64px] text-[18px] font-font01 ">
            <div className="transition-colors duration-200 ease-in-out cursor-pointer hover:text-orange00">
              Search
            </div>
            <Link
              to="/shop"
              className="transition-colors duration-200 ease-in-out cursor-pointer hover:text-orange00"
            >
              Shop
            </Link>
            <div
              className="flex gap-[4px] cursor-pointer transition-colors duration-200 ease-in-out hover:text-orange00"
              onClick={() => setOpenCart(true)}
            >
              Cart<span className="cartIndicator">{cartQt}</span>
            </div>
            {openCart && <Cart />}
          </div>
        )}
      </div>

      {/* Mobile */}
      <div
        className={`flex max-h-60 z-5  ${
          toggleNavMenu
            ? ""
            : "flex-col transition-all duration-300 overflow-hidden max-h-100"
        } w-full fixed top-0  px-[24px] py-[48px] items-center justify-between bg-green00  text-resin00 md:px-[48px] md:py-[32px] lg:hidden shadow-[0px_5px_3px_0px_rgba(0,0,0,0.25)]`}
      >
        {location.pathname !== "/checkout" ? (
          <>
            <div className="self-start hamburger-container">
              <button
                type="button"
                onClick={() => setToggleNavMenu(!toggleNavMenu)}
                className={`hamburger ${!toggleNavMenu ? "open" : ""}`}
              >
                <span className="hamburger-top"></span>
                <span className="hamburger-middle"></span>
                <span className="hamburger-bottom"></span>
              </button>
            </div>

            <Link
              to="/"
              className={`${
                toggleNavMenu ? "cursor-pointer font-font02" : "hidden"
              }`}
            >
              G-bliss
            </Link>

            <div
              className={`${
                toggleNavMenu
                  ? "flex gap-[4px] cursor-pointer items-center"
                  : "hidden"
              }`}
              onClick={() => setOpenCart(true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                className="text-resin00 hover:text-[#CF5C36] transition-colors duration-200 ease-in-out cursor-pointer"
              >
                <path
                  d="M32 4L31.0093 6.66667H28.4373L23.8053 22.6667H6.15333L0 8H22.416L21.664 10.6667H4.01067L7.92667 20H21.8307L26.4067 4H32ZM11.3333 24C10.2293 24 9.33333 24.896 9.33333 26C9.33333 27.1053 10.2293 28 11.3333 28C12.4373 28 13.3333 27.1053 13.3333 26C13.3333 24.896 12.4373 24 11.3333 24ZM18 24C16.896 24 16 24.8947 16 26C16 27.1053 16.896 28 18 28C19.104 28 20 27.1053 20 26C20 24.896 19.104 24 18 24Z"
                  fill="currentColor"
                />
              </svg>
              <span className="cartIndicator">{cartQt}</span>
            </div>
            {!toggleNavMenu && (
              <NavBarMenu setOpenCart={setOpenCart} cartQt={cartQt} />
            )}
          </>
        ) : (
          <>
            <BackButton />
            <Link to="/" className="cursor-pointer font-font02">
              G-bliss
            </Link>
          </>
        )}
        {openCart && <Cart />}
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
