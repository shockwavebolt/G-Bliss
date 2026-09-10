import { useNavigate } from 'react-router-dom';
import { useCart } from './CartContext';
import CheckoutItem from './CheckoutItem';
import { useState } from 'react';

function CheckoutForm() {
  const { cart, getTotalCartPrice } = useCart();
  const navigate = useNavigate();
  const total = getTotalCartPrice();

  const [pickupTime, setPickupTime] = useState('10:00');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState({ name: false, phone: false });

  const handleTimeChange = (e) => {
    setPickupTime(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const nameMissing = name.trim() === '';
    const phoneMissing = phone.trim() === '';

    if (nameMissing || phoneMissing) {
      setErrors({ name: nameMissing, phone: phoneMissing });
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    navigate('/confirmation', {
      state: { order: cart, name, pickupTime },
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-1 gap-[48px] lg:grid-cols-2"
    >
      <div className="flex flex-col px-[16px] py-[24px]">
        <div className="flex flex-col gap-[24px]">
          <div className="flex flex-col gap-[16px]">
            <label className="flex items-baseline gap-4">
              <span className="font-font01 text-[16px] md:text-[29px]">
                Your Name
              </span>
              <span
                className={`font-font03 text-orange00 text-[10px] md:text-[16px] ${
                  errors.name ? '' : 'hidden'
                }`}
              >
                Required*
              </span>
            </label>

            <input
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                if (errors.name)
                  setErrors((prev) => ({ ...prev, name: false }));
              }}
              className="text-green09 h-[40px] w-full rounded-sm bg-white px-[24px] text-[20px] focus:outline-none md:w-3/4"
            />
          </div>
          <div className="flex flex-col gap-[16px]">
            <label className="flex items-baseline gap-4">
              <span className="font-font01 text-[16px] md:text-[29px]">
                Your Phone Number
              </span>
              <span
                className={`font-font03 text-orange00 text-[10px] md:text-[16px] ${
                  errors.phone ? '' : 'hidden'
                }`}
              >
                Required*
              </span>
            </label>

            <input
              type="tel"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
                if (errors.phone)
                  setErrors((prev) => ({ ...prev, phone: false }));
              }}
              className="text-green09 h-[40px] w-full rounded-sm bg-white px-[24px] text-[20px] focus:outline-none md:w-3/4"
            />
          </div>

          <div className="flex flex-col justify-items-center gap-4">
            <p className="font-font03 text-resin00 text-[10px] italic md:text-[16px]">
              Operating Hours: 10:00 AM - 10:00 PM
            </p>

            <div className="flex gap-[16px]">
              <label className="font-font01 flex justify-between text-[16px] md:text-[29px]">
                Pick-up Time{' '}
              </label>
              <input
                type="time"
                min="10:00"
                max="20:00"
                value={pickupTime}
                onChange={handleTimeChange}
                className="font-font03 text-green09 rounded-sm bg-white px-4 focus:outline-none"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-green01 flex flex-col gap-[24px] px-[16px] py-[64px] sm:px-[48px] lg:px-[24px]">
        <div className="font-font02 cartShadow text-resin00 border-resin00 border-b pb-[24px] text-[26px] tracking-wide">
          In your Cart
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
            type="submit"
            className="bg-green09 font-font01 hover:shadow-shadow-[0px_0px_0px_0_rgba(0,0,0,0)] flex cursor-pointer items-center justify-center gap-[8px] rounded-sm border-t-[2.5px] border-[#595746] py-[24px] text-[16px] text-white shadow-[2px_2px_7px_0_rgba(0,0,0,0.25)] transition-all duration-200 hover:border-t-[0px] active:scale-97 sm:text-[29px]"
          >
            CONFIRM ORDER
          </button>
        </div>
      </div>
    </form>
  );
}

export default CheckoutForm;
