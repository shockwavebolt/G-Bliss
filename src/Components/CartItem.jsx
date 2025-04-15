import { useCart } from "./CartContext";

function CartItem({ item }) {
  const { removeFromCart, increaseQt, decreaseQt, getQuantity } = useCart();
  const currQt = getQuantity(item.id);

  function handleInc() {
    increaseQt(item);
  }
  function handleDec() {
    decreaseQt(item);
  }

  return (
    <div className="flex flex-col p-[24px] gap-[24px] bg-offWhite rounded-lg">
      <div className="flex items-center gap-[24px]">
        <img src={item.img} className="w-[150px]"></img>
        <div className="flex flex-col w-full gap-[4px] px-[5px] py-[12px] text-green09">
          <div className="font-font01 text-[22px] md:text-[24px] md:lg-[29px]">
            {item.name}
          </div>
          <div className="flex divide-x-2 font-font03">
            <div className="pr-[4px]">{item.type}</div>
            <div className="pl-[4px]">{item.type2}</div>
          </div>
          <div className="font-font03">{item.weight}</div>

          <div className="flex justify-between py-[8px]">
            <div className="font-font01 text-[22px] md:text-[24px] md:lg-[29px]">
              ${item.price}
            </div>
            <div className="flex gap-[8px] items-center font-font01 text-[22px] md:text-[24px] md:lg-[29px]">
              <span className="cursor-pointer" onClick={() => handleDec()}>
                <img src="public/icons/decrement.svg" />
              </span>
              {currQt}
              <span className="cursor-pointer" onClick={() => handleInc()}>
                <img src="public/icons/increment.svg" />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div
        className="flex cursor-pointer place-self-end"
        onClick={() => removeFromCart(item)}
      >
        Remove
      </div>
    </div>
  );
}

export default CartItem;
