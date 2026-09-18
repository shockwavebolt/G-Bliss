import { useEffect } from 'react';
import { useCart } from './CartContext';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';

function Cart() {
  const { cart, getTotalCartPrice } = useCart();
  const { setOpenCart } = useCart();
  const total = getTotalCartPrice();

  return (
    <div className="absolute top-0 left-0 z-50 flex w-full justify-end backdrop-blur-sm">
      <div
        className={`flex h-[100vh] w-[500px] flex-col overflow-y-auto px-[16px] py-[48px] ${
          cart?.length > 0 ? 'justify-between' : 'gap-[35vh]'
        } bg-green01 py-[48px] md:px-[24px]`}
      >
        <div className="border-resin00 flex justify-between border-b">
          <div className="font-font02 text-resin00 cartShadow text-[26px] tracking-wide">
            Cart
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="44"
            viewBox="0 0 28 29"
            fill="none"
            className="cursor-pointer text-[#E6E1C5] transition-colors duration-200 ease-in-out hover:text-[#CF5C36]"
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
            <ul className="mx-auto flex flex-col divide-y-2 divide-[#394739] px-[16px]">
              {cart.map((item) => (
                <CartItem item={item} key={item.id} />
              ))}
            </ul>
            <div className="border-resin00 flex flex-col gap-[24px] border-t pt-[24px]">
              <div className="font-font01 text-resin00 flex justify-between px-[24px] text-[16px] sm:px-[48px] sm:text-[29px]">
                <span>Total</span>
                <span>${total}</span>
              </div>
              <Link
                to={'/checkout'}
                className="bg-green09 font-font01 hover:border-green09 flex cursor-pointer items-center justify-center gap-[8px] rounded-sm border-t-[2.5px] border-[#595746] py-[24px] text-[16px] text-white shadow-[2px_2px_7px_0_rgba(0,0,0,0.25)] transition-all duration-100 hover:shadow-none active:translate-y-[1px] active:scale-97 sm:px-[48px] sm:text-[29px]"
                onClick={() => setOpenCart(false)}
              >
                Checkout
              </Link>
            </div>
          </>
        ) : (
          <div className="font-font03 text-resin00 self-center">
            Your cart is empty.
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
