import { useEffect } from "react";
import { useCart } from "./CartContext";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

function Cart() {
  const { cart, getTotalCartPrice } = useCart();
  const { setOpenCart } = useCart();
  const total = getTotalCartPrice();

  return (
    <div className="absolute top-0 left-0 z-50 flex justify-end w-full backdrop-blur-sm">
      <div
        className={`w-[700px] h-[100vh] overflow-y-auto flex flex-col px-[24px] py-[48px]  ${
          cart?.length > 0 ? "justify-between" : "gap-[35vh]"
        } bg-green00 `}
      >
        <div className="flex justify-between border-b-2 border-resin00">
          <div className="font-font02 text-[29px] text-resin00 cartShadow tracking-wide">
            Cart
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="44"
            viewBox="0 0 28 29"
            fill="none"
            className="text-[#E6E1C5] hover:text-[#CF5C36] transition-colors duration-200 ease-in-out cursor-pointer"
            onClick={() => setOpenCart(false)}
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14 12.8599L25.438 1.41993C25.73 1.12793 26.116 0.981934 26.5 0.981934C27.308 0.981934 28 1.62993 28 2.47993C28 2.86593 27.854 3.24993 27.562 3.54393L16.122 14.9819L27.56 26.4199C27.854 26.7139 28 27.0979 28 27.4819C28 28.3359 27.302 28.9819 26.5 28.9819C26.116 28.9819 25.73 28.8359 25.438 28.5439L14 17.1059L2.562 28.5439C2.27 28.8359 1.884 28.9819 1.5 28.9819C0.698 28.9819 0 28.3359 0 27.4819C0 27.0979 0.146 26.7139 0.44 26.4199L11.878 14.9819L0.438 3.54393C0.146 3.24993 0 2.86593 0 2.47993C0 1.62993 0.692 0.981934 1.5 0.981934C1.884 0.981934 2.27 1.12793 2.562 1.41993L14 12.8599Z"
              fill="currentColor"
            />
          </svg>
        </div>
        {cart?.length > 0 ? (
          <>
            <ul className="flex flex-col divide-y-2 divide-[#394739] items-center">
              {cart.map((item) => (
                <CartItem item={item} key={item.id} />
              ))}
            </ul>
            <div className="flex flex-col pt-[24px] border-t-2 border-resin00 gap-[24px]">
              <div className=" flex justify-between px-[24px] font-font01 text-[26px] text-resin00 sm:text-[29px] sm:px-[48px]">
                <span>Total</span>
                <span>${total}</span>
              </div>
              <Link
                to={"/checkout"}
                className="flex py-[24px] gap-[8px] text-[26px] items-center justify-center rounded-sm bg-green09 font-font01 text-white border-t-[2.5px] border-[#595746]  shadow-[2px_2px_7px_0_rgba(0,0,0,0.25)] cursor-pointer active:scale-97 hover:border-green09 hover:shadow-none active:translate-y-[1px] transition-all duration-100"
                onClick={() => setOpenCart(false)}
              >
                Checkout
              </Link>
            </div>
          </>
        ) : (
          <div className="self-center font-font03 text-resin00">
            Your cart is empty.
          </div>
        )}
      </div>

      {/* <div className=" flex flex-col gap-y-[64px] w-[600px] px-[48px] py-[40px] bg-green05">
        <div className="flex justify-between">
          <div className="font-font02 text-offWhite text-[76px]">Cart</div>
          <div className="cursor-pointer" onClick={() => setOpen(false)}>
            <img src="/public/icons/X.svg"></img>
          </div>
        </div>
        <div className="flex flex-col gap-[24px]">
          {cart.map((item) => (
            <CartItem item={item} key={item.id} />
          ))}
        </div>
        <div className="flex p-[24px] gap-[8px] items-center justify-center bg-green09 font-font01 text-offWhite text-[29px] rounded-sm border-t-[1.5px] border-green05 shadow-[0_2px_1px_0_rgba(0,0,0,0.5)]">
          Checkout
          <span>
            <img src="/public/icons/dot.svg"></img>
          </span>
          ${total}
        </div>
      </div> */}
    </div>
  );
}

export default Cart;
