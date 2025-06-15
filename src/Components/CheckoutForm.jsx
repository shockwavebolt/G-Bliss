import { Link } from "react-router-dom";
import { useCart } from "./CartContext";
import CheckoutItem from "./CheckoutItem";

function CheckoutForm() {
  const { cart, getTotalCartPrice } = useCart();
  const total = getTotalCartPrice();
  return (
    <div className="grid grid-cols-1 gap-[48px] lg:grid-cols-2">
      <div className="  flex flex-col py-[64px] px-[16px] sm:px-[48px] lg:px-[0px]  ">
        <div className="flex flex-col  gap-[48px]">
          <div className=" flex flex-col gap-[24px]">
            <label className="flex items-center justify-between">
              <span className="font-font01 text-[22px] md:text-[29px]">
                Name
              </span>
              <span className="italic font-font03 text-[16px] text-orange00 ">
                Required*
              </span>
            </label>

            <input
              type="text"
              className="w-full h-[56px] rounded-sm bg-white  focus:outline-none px-[24px] text-[20px] text-green09"
              style={{ boxShadow: "inset 0px 4px 4px rgba(0,0,0,0.25)" }}
            />
          </div>
          <div className="flex flex-col gap-[24px]">
            <label className="flex items-center justify-between">
              <span className="font-font01 text-[22px] md:text-[29px]">
                Phone Number
              </span>
              <span className="italic font-font03 text-[16px] text-orange00 ">
                Required*
              </span>
            </label>

            <input
              type="text"
              className="w-full h-[56px] rounded-sm bg-white  focus:outline-none px-[24px] text-[20px] text-green09"
              style={{ boxShadow: "inset 0px 4px 4px rgba(0,0,0,0.25)" }}
            />
          </div>

          <div className="flex justify-between justify-items-center">
            <div className="flex gap-[24px]">
              <label className="flex justify-between font-font01 text-[22px] md:text-[29px]">
                Pick-up Time{" "}
              </label>
              <input
                type="time"
                value="14:30"
                className=" w-[100px] focus:outline-none font-font01"
              />
            </div>
            <span className="italic font-font03">Required*</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col py-[64px] px-[16px] sm:px-[48px] lg:px-[24px] gap-[24px] bg-green01">
        <div className="font-font02 text-[29px] text-resin00 border-resin00 border-b-2 pb-[24px]">
          cart
        </div>
        <ul className="flex flex-col py-[24px] items-center divide-y-2 divide-green00 text-resin00 ">
          {cart.map((item) => (
            <CheckoutItem item={item} key={item.id} />
          ))}
        </ul>
        <div className="flex flex-col pt-[24px] border-t-2 border-resin00 gap-[24px]">
          <div className=" flex justify-between px-[24px] font-font01 text-[29px] text-resin00 sm:px-[48px]">
            <span>Total</span>
            <span>${total}</span>
          </div>
          <Link
            to="/confirmation"
            className="flex py-[24px] gap-[8px] text-[22px] items-center justify-center rounded-sm bg-green09 font-font01 text-white border-t-[2.5px] border-[#595746] shadow-[2px_2px_7px_0_rgba(0,0,0,0.25)] cursor-pointer active:scale-97 hover:border-t-[0px] hover:shadow-shadow-[0px_0px_0px_0_rgba(0,0,0,0)] active:translate-y-[1px] transition-all duration-500"
          >
            CONFIRM ORDER
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CheckoutForm;
// <div className="grid grid-cols-1 lg:grid-cols-2">
//   <div className="flex flex-col px-[40px] py-[64px] gap-[96px]">
//     <div className="flex flex-col gap-[24px]">
//       <label className="flex justify-between font-font01 ">
//         <span className="text-[29px]">Name</span>
//         <span className="italic font-font03 ">Required*</span>
//       </label>
//       <input type="text" className="w-full border-b-2 focus:outline-none" />
//     </div>
//     <div className="flex flex-col gap-[24px]">
//       <label className="flex justify-between font-font01">
//         <span className="text-[29px]">Phone Number</span>
//         <span className="italic font-font03">Required*</span>
//       </label>
//       <input type="text" className="w-full border-b-2 focus:outline-none" />
//     </div>
//     <div className="flex justify-between justify-items-center">
//       <div className="flex gap-[24px]">
//         <label className="flex justify-between font-font01 text-[29px]">
//           Pick-up Time{" "}
//         </label>
//         <input
//           type="time"
//           value="14:30"
//           className=" w-[100px] focus:outline-none font-font01"
//         />
//       </div>
//       <span className="italic font-font03">Required*</span>
//     </div>
//   </div>
//   <div className="flex flex-col px-[40px] py-[64px] gap-[96px] bg-green04 text-green09">
//     <span className="font-font02 text-[47px]">In your cart</span>
//     <div className="flex flex-col gap-[32px]">
//       <CheckoutItem />
//       <CheckoutItem />
//       <CheckoutItem />
//     </div>
//     <div className="flex flex-col gap-[24px]">
//       <div className="flex p-[] justify-between font-font01 text-[29px] text-green09">
//         Total <span>$100</span>
//       </div>
//       <div className="flex p-[24px]  items-center justify-center bg-green09 font-font01 text-offWhite text-[29px] rounded-sm border-t-[1.5px] border-green05 shadow-[0_2px_1px_0_rgba(0,0,0,0.5)]">
//         Confirm Order
//       </div>
//     </div>
//   </div>
// </div>
