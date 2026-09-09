import { useState } from 'react';
import { useCart } from './CartContext';

function SearchedItem({ item }) {
  const { id, img, name, type, type2, weight, price } = item;
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  function handleInc() {
    setQuantity((q) => q + 1);
  }

  function handleDec() {
    setQuantity((q) => (q > 1 ? q - 1 : 1));
  }

  function handleAddCart() {
    addToCart({ id, img, name, type, type2, weight, price, quantity });
    setQuantity(1);
  }

  return (
    <li className="flex gap-[12px] rounded-sm bg-white px-[24px] py-[12px]">
      <img
        src={img}
        className="h-[64px] w-[64px] shrink-0 rounded-md object-cover"
      />

      <div className="flex min-w-0 flex-1 flex-col gap-[2px]">
        <div className="font-font01 text-green09 truncate text-[16px]">
          {name}
        </div>
        <div
          className={`font-font03 text-green09 flex text-[12px] ${type2 !== '' && 'divide-green09 divide-x-[1.5px]'}`}
        >
          <span className="pr-[4px]">{type}</span>
          {type2 !== '' && <span className="pl-[4px]">{type2}</span>}
        </div>
        <div className="font-font03 text-green09 text-[12px]">{weight}</div>
      </div>

      <div className="flex shrink-0 flex-col items-end gap-[8px]">
        <div className="font-font01 text-green09 text-[16px]">${price}</div>

        <div className="text-green00 flex items-center gap-[4px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 32 33"
            fill="none"
            className="hover:text-orange00 cursor-pointer transition-colors duration-200"
            onClick={handleDec}
          >
            <path
              d="M16.0032 3.17334C23.3605 3.17334 29.3338 9.14667 29.3338 16.5027C29.3338 23.86 23.3605 29.8333 16.0032 29.8333C8.64716 29.8333 2.67383 23.86 2.67383 16.5027C2.67383 9.14667 8.64716 3.17334 16.0032 3.17334ZM16.0032 5.17334C9.74983 5.17334 4.67383 10.2493 4.67383 16.5027C4.67383 22.756 9.74983 27.8333 16.0032 27.8333C22.2565 27.8333 27.3338 22.756 27.3338 16.5027C27.3338 10.2493 22.2565 5.17334 16.0032 5.17334ZM21.6738 15.5067H10.3405C9.78849 15.5067 9.34049 15.9547 9.34049 16.5067C9.34049 17.0587 9.78849 17.5067 10.3405 17.5067H21.6738C22.2258 17.5067 22.6738 17.0587 22.6738 16.5067C22.6738 15.9547 22.2258 15.5067 21.6738 15.5067Z"
              fill="currentColor"
            />
          </svg>
          <span className="font-font01 w-[16px] text-center text-[16px]">
            {quantity}
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 32 32"
            fill="none"
            className="hover:text-orange00 cursor-pointer transition-colors duration-200"
            onClick={handleInc}
          >
            <path
              d="M16.0032 3.1665C23.3605 3.1665 29.3338 9.13984 29.3338 16.4972C29.3338 23.8532 23.3605 29.8265 16.0032 29.8265C8.64716 29.8265 2.67383 23.8532 2.67383 16.4972C2.67383 9.13984 8.64716 3.1665 16.0032 3.1665ZM16.0032 5.1665C9.74983 5.1665 4.67383 10.2438 4.67383 16.4972C4.67383 22.7505 9.74983 27.8265 16.0032 27.8265C22.2565 27.8265 27.3338 22.7505 27.3338 16.4972C27.3338 10.2438 22.2565 5.1665 16.0032 5.1665ZM15.0072 15.4998H10.3405C9.78849 15.4998 9.34049 15.9478 9.34049 16.4998C9.34049 17.0518 9.78849 17.4998 10.3405 17.4998H15.0072V22.1665C15.0072 22.7185 15.4552 23.1665 16.0072 23.1665C16.5592 23.1665 17.0072 22.7185 17.0072 22.1665V17.4998H21.6738C22.2258 17.4998 22.6738 17.0518 22.6738 16.4998C22.6738 15.9478 22.2258 15.4998 21.6738 15.4998H17.0072V10.8332C17.0072 10.2812 16.5592 9.83317 16.0072 9.83317C15.4552 9.83317 15.0072 10.2812 15.0072 10.8332V15.4998Z"
              fill="currentColor"
            />
          </svg>
        </div>

        <button
          className="bg-green09 font-font01 border-green00 hover:border-green09 cursor-pointer rounded-sm border-t-[2px] px-[12px] py-[6px] text-[13px] text-white shadow-[1px_1px_5px_0_rgba(0,0,0,0.25)] transition-all duration-100 hover:shadow-none active:translate-y-[1px] active:scale-97"
          onClick={handleAddCart}
        >
          Add to cart
        </button>
      </div>
    </li>
  );
}

export default SearchedItem;
