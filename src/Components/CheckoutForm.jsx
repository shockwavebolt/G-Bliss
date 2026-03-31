import { useNavigate } from "react-router-dom";
import { useCart } from "./CartContext";
import CheckoutItem from "./CheckoutItem";
import { useState } from "react";

function CheckoutForm() {
  const { cart, getTotalCartPrice } = useCart();
  const navigate = useNavigate();
  const total = getTotalCartPrice();

  const [pickupTime, setPickupTime] = useState("14:30");

  const handleTimeChange = (e) => {
    setPickupTime(e.target.value);
  };
  return (
    <div className="grid grid-cols-1  gap-[48px] lg:grid-cols-2">
      <div className="  flex flex-col py-[24px] px-[16px]  ">
        <div className="flex flex-col  gap-[24px]">
          <div className=" flex flex-col gap-[16px]">
            <label className="flex items-center justify-between">
              <span className="font-font01 text-[16px] md:text-[29px]">
                Your Name
              </span>
              <span className="hidden italic font-font03 text-[12px] text-orange00 ">
                Required*
              </span>
            </label>

            <input
              type="text"
              className="w-full h-[40px] rounded-sm bg-white  focus:outline-none px-[24px] text-[20px] text-green09"
              style={{ boxShadow: "inset 0px 4px 4px rgba(0,0,0,0.25)" }}
            />
          </div>
          <div className="flex flex-col gap-[16px]">
            <label className="flex items-center justify-between">
              <span className="font-font01 text-[16px] md:text-[29px]">
                Your Phone Number
              </span>
              <span className="hidden italic font-font03 text-[16px] text-orange00 ">
                Required*
              </span>
            </label>

            <input
              type="text"
              className="w-full h-[40px] rounded-sm bg-white  focus:outline-none px-[24px] text-[20px] text-green09"
              style={{ boxShadow: "inset 0px 4px 4px rgba(0,0,0,0.25)" }}
            />
          </div>

          <div className="flex justify-between justify-items-center">
            <div className="flex gap-[16px]">
              <label className="flex justify-between font-font01 text-[16px] md:text-[29px]">
                Pick-up Time{" "}
              </label>
              <input
                type="time"
                value={pickupTime}
                onChange={handleTimeChange}
                className="font-semibold focus:outline-none font-font03"
              />
            </div>
            <span className="hidden italic font-font03">Required*</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col py-[64px] px-[16px] sm:px-[48px] lg:px-[24px] gap-[24px] bg-green01">
        <div className="font-font02 text-[20px] cartShadow tracking-wide text-resin00 border-resin00 border-b pb-[24px]">
          cart
        </div>
        <ul className="flex flex-col py-[16px] mx-auto items-center divide-y-2 divide-green00 text-resin00 ">
          {cart.map((item) => (
            <CheckoutItem item={item} key={item.id} />
          ))}
        </ul>
        <div className="flex flex-col pt-[24px] border-t border-resin00 gap-[24px]">
          <div className=" flex justify-between px-[24px] font-font01 text-[16px] sm:text-[29px] text-resin00 sm:px-[48px]">
            <span>Total</span>
            <span>${total}</span>
          </div>
          <button
            onClick={() => {
              navigate("/confirmation", { state: { order: cart } });
            }}
            className="flex py-[24px] gap-[8px] text-[16px] sm:text-[29px] items-center justify-center rounded-sm bg-green09 font-font01 text-white border-t-[2.5px] border-[#595746] shadow-[2px_2px_7px_0_rgba(0,0,0,0.25)] cursor-pointer active:scale-97 hover:border-t-[0px] hover:shadow-shadow-[0px_0px_0px_0_rgba(0,0,0,0)] active:translate-y-[1px] transition-all duration-200"
          >
            CONFIRM ORDER
          </button>
        </div>
      </div>
    </div>
  );
}

export default CheckoutForm;
