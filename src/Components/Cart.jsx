import { useCart } from "./CartContext";
import CartItem from "./CartItem";
import { useUI } from "./UIContext";

function Cart() {
  const { cart, getTotalCartPrice } = useCart();
  const { setOpen } = useUI();
  const total = getTotalCartPrice();
  return (
    <div className="absolute top-0 left-0 z-10 flex justify-end w-full">
      <div className=" flex flex-col gap-y-[64px] w-[600px] px-[48px] py-[40px] bg-green05">
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
      </div>
    </div>
  );
}

export default Cart;
