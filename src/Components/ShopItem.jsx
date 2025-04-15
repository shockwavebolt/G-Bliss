import { useState } from "react";
import { useCart } from "./CartContext";

function ShopItem({ item }) {
  const { id, img, name, type, type2, weight, price } = item;
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  function handleInc() {
    const x = quantity + 1;
    setQuantity(x);
  }

  function handleDec() {
    const x = quantity > 1 ? quantity - 1 : 1;
    setQuantity(x);
  }

  function handleAddCart() {
    const newItem = {
      id,
      img,
      name,
      type,
      type2,
      weight,
      price,
      quantity: quantity,
    };

    addToCart(newItem);
    setQuantity(1);
  }

  return (
    <li className="flex flex-col max-w-[318px] gap-[24px] px-[16px] self-start bg-white rounded-lg border-[1px] border-[#D5D5D5] ">
      <img src={img} className="h-[170px] rounded-lg sm:h-[248px]" />
      <div className="flex flex-col gap-[4px] px-[5px] py-[12px] text-green09">
        <div className="font-font01 text-[22px] md:text-[24px] md:lg-[29px]">
          {name}
        </div>
        <div className="flex divide-x-2 font-font03">
          <div className="pr-[4px]">{type}</div>
          <div className="pl-[4px]">{type2}</div>
        </div>

        <div className="font-font03">{weight}</div>

        <div className="flex justify-between py-[8px]">
          <div className="font-font01 text-[22px] md:text-[24px] md:lg-[29px]">
            ${price}
          </div>
          <div className="flex gap-[8px] items-center font-font01 text-[22px] md:text-[24px] md:lg-[29px]">
            <span className="cursor-pointer" onClick={() => handleDec()}>
              <img src="public/icons/decrement.svg" />
            </span>
            {quantity}
            <span className="cursor-pointer" onClick={() => handleInc()}>
              <img src="public/icons/increment.svg" />
            </span>
          </div>
        </div>
        <button
          className=" flex p-[8px] rounded-sm items-center justify-center bg-green09 font-font01 text-offWhite border-t-[1.5px] border-green05 shadow-[0_2px_1px_0_rgba(0,0,0,0.5)] cursor-pointer"
          onClick={() => handleAddCart()}
        >
          Add to cart
        </button>
      </div>
    </li>
  );
}

export default ShopItem;
