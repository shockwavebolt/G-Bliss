import { useNavigate } from 'react-router-dom';
import { useCart } from './CartContext';
import CheckoutItem from './CheckoutItem';
import { useState } from 'react';

function CheckoutForm() {
  const { cart, getTotalCartPrice } = useCart();
  const navigate = useNavigate();
  const total = getTotalCartPrice();

  const [pickupTime, setPickupTime] = useState('14:30');

  const handleTimeChange = (e) => {
    setPickupTime(e.target.value);
  };
  return (
    <div className="grid grid-cols-1 gap-[48px] lg:grid-cols-2">
      <div className="flex flex-col px-[16px] py-[24px]">
        <div className="flex flex-col gap-[24px]">
          <div className="flex flex-col gap-[16px]">
            <label className="flex items-center justify-between">
              <span className="font-font01 text-[16px] md:text-[29px]">
                Your Name
              </span>
              <span className="font-font03 text-orange00 hidden text-[12px] italic">
                Required*
              </span>
            </label>

            <input
              type="text"
              className="bg-resin00 text-green09 h-[40px] w-full rounded-full px-[24px] text-[20px] focus:outline-none"
            />
          </div>
          <div className="flex flex-col gap-[16px]">
            <label className="flex items-center justify-between">
              <span className="font-font01 text-[16px] md:text-[29px]">
                Your Phone Number
              </span>
              <span className="font-font03 text-orange00 hidden text-[16px] italic">
                Required*
              </span>
            </label>

            <input
              type="text"
              className="bg-resin00 text-green09 h-[40px] w-full rounded-full px-[24px] text-[20px] focus:outline-none"
            />
          </div>

          <div className="flex justify-between justify-items-center">
            <div className="flex gap-[16px]">
              <label className="font-font01 flex justify-between text-[16px] md:text-[29px]">
                Pick-up Time{' '}
              </label>
              <input
                type="time"
                value={pickupTime}
                onChange={handleTimeChange}
                className="font-font03 font-semibold focus:outline-none"
              />
            </div>
            <span className="font-font03 hidden italic">Required*</span>
          </div>
        </div>
      </div>

      <div className="bg-green01 flex flex-col gap-[24px] px-[16px] py-[64px] sm:px-[48px] lg:px-[24px]">
        <div className="font-font02 cartShadow text-resin00 border-resin00 border-b pb-[24px] text-[26px] tracking-wide">
          cart
        </div>
        <ul className="divide-green00 text-resin00 mx-auto flex flex-col items-center divide-y-2 py-[16px]">
          {cart.map((item) => (
            <CheckoutItem item={item} key={item.id} />
          ))}
        </ul>
        <div className="border-resin00 flex flex-col gap-[24px] border-t pt-[24px]">
          <div className="font-font01 text-resin00 flex justify-between px-[24px] text-[16px] sm:px-[48px] sm:text-[29px]">
            <span>Total</span>
            <span>${total}</span>
          </div>
          <button
            onClick={() => {
              navigate('/confirmation', { state: { order: cart } });
            }}
            className="bg-green09 font-font01 hover:shadow-shadow-[0px_0px_0px_0_rgba(0,0,0,0)] flex cursor-pointer items-center justify-center gap-[8px] rounded-sm border-t-[2.5px] border-[#595746] py-[24px] text-[16px] text-white shadow-[2px_2px_7px_0_rgba(0,0,0,0.25)] transition-all duration-200 hover:border-t-[0px] active:scale-97 sm:text-[29px]"
          >
            CONFIRM ORDER
          </button>
        </div>
      </div>
    </div>
  );
}

export default CheckoutForm;
