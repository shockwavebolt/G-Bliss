import { Link, useLocation } from "react-router-dom";
import Cart from "./Cart";
import BackButton from "../UI/BackButton";
import { useCart } from "./CartContext";
import { useEffect, useState } from "react";
import SearchBox from "./SearchBox";

function NavBar() {
  const location = useLocation();
  const { getCartQuantity, openCart, setOpenCart } = useCart();
  const cartQt = getCartQuantity();
  const [hideNav, setHideNav] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [openSearch, setOpenSearch] = useState(false);

  if (openSearch) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }

  if (openCart) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setHideNav(currentScrollY > lastScrollY);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      {/* Desktop */}
      <div
        className={`hidden  w-full fixed top-0  z-5 transition-transform duration-300 ${
          hideNav ? "-translate-y-full shadow-none" : "translate-y-0 "
        } px-[48px] py-[32px] gap-auto items-center justify-between bg-green00  text-resin00 lg:flex xl:px-[96px] border-b border-resin00`}
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
            <div
              className="transition-colors duration-200 ease-in-out cursor-pointer hover:text-orange00"
              onClick={() => setOpenSearch(true)}
            >
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
            {openSearch && <SearchBox setOpenSearch={setOpenSearch} />}
          </div>
        )}
      </div>

      {/* Mobile */}
      <div
        className={`flex max-h-60 z-5 transition-transform duration-300 ${
          hideNav ? "-translate-y-full shadow-none" : "translate-y-0 "
        } w-full fixed top-0  px-[16px] py-[24px] items-end justify-between bg-green00  text-resin00   lg:hidden border-b border-resin00 `}
      >
        {location.pathname !== "/checkout" ? (
          <>
            <Link
              to="/"
              className="cursor-pointer tracking-wider text-[20px] transition-colors duration-200 ease-in-out cat_title_shadow text-shadow-lg font-font02 hover:text-orange00"
            >
              G-Bliss
            </Link>

            <div className="flex  items-center gap-[20px]">
              <button onClick={() => setOpenSearch(true)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-resin00 hover:text-[#CF5C36] transition-colors duration-200 ease-in-out cursor-pointer"
                >
                  <path
                    d="M3.52637 10.791C3.00658 6.56124 6.56612 3.00169 10.7959 3.52148C13.5959 3.86148 15.9157 6.08136 16.3857 8.86133C16.7257 10.8913 16.1062 12.8012 14.9062 14.2012L15.1865 14.4717H15.9766L20.2158 18.7314C20.6258 19.1414 20.6258 19.8117 20.2158 20.2217C19.8059 20.6312 19.1365 20.6312 18.7266 20.2217L14.4766 15.9717V15.1816L14.2061 14.9014C12.8061 16.1013 10.8962 16.7209 8.86621 16.3809C6.08625 15.9108 3.86636 13.591 3.52637 10.791ZM9.97656 5.47168C7.48656 5.47168 5.47656 7.48168 5.47656 9.97168C5.47675 12.4615 7.48668 14.4717 9.97656 14.4717C12.4663 14.4715 14.4764 12.4614 14.4766 9.97168C14.4766 7.4818 12.4664 5.47187 9.97656 5.47168Z"
                    fill="currentColor"
                  />
                </svg>
              </button>

              <Link to="/shop">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  className="text-resin00 hover:text-[#CF5C36] transition-colors duration-200 ease-in-out cursor-pointer"
                >
                  <g clip-path="url(#clip0_869_496)">
                    <path
                      d="M8.2825 0L7.5 4.1425V5.0575C7.5 5.94583 6.7225 6.66667 5.83333 6.66667C4.94417 6.66667 4.16667 5.94583 4.16667 5.05667V4.1425L6.66333 0H8.2825ZM5.73917 0L3.33333 4.1425V5.0575C3.33333 5.94583 2.55583 6.66667 1.66667 6.66667C0.7775 6.66667 0 5.94583 0 5.05667V4.1425L4.06167 0H5.73917ZM20 5.05667C20 5.94583 19.2225 6.66667 18.3333 6.66667C17.4442 6.66667 16.6667 5.88917 16.6667 5V4.085L14.2608 0H15.9392L20 4.1425V5.05667ZM11.6667 4.08333V4.99833C11.6667 5.88667 10.8892 6.66667 10 6.66667C9.11083 6.66667 8.33333 5.88917 8.33333 5V4.085L9.20583 0H10.7933L11.6667 4.08333ZM13.3367 0L15.8308 4.16833V5.08333C15.8317 5.9725 15.0558 6.66667 14.1667 6.66667C13.2775 6.66667 12.5 5.88917 12.5 5V4.085L11.7175 0L13.3367 0ZM17.5 10V18.3333H2.5V10H17.5ZM19.1667 8.33333H0.833333V20H19.1667V8.33333ZM14.7917 15H5.20833L3.33333 17.5H16.6667L14.7917 15Z"
                      fill="currentColor"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_869_496">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </Link>

              <div
                className="flex gap-[4px] cursor-pointer items-center"
                onClick={() => setOpenCart(true)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
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
            </div>
          </>
        ) : (
          <>
            <BackButton />
            <Link
              to="/"
              className="tracking-wider transition-colors duration-200 ease-in-out logoShadow text-shadow-lg font-font02 hover:text-orange00"
            >
              G-Bliss
            </Link>
          </>
        )}
        {openCart && <Cart />}
        {openSearch && <SearchBox setOpenSearch={setOpenSearch} />}
      </div>
    </>
  );
}

export default NavBar;
