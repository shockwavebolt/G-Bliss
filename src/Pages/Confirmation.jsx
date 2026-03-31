import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import CheckoutItem from "../Components/CheckoutItem";
import NavBar from "../Components/NavBar";
import { useCart } from "../Components/CartContext";

function Confirmation() {
  const { state } = useLocation();
  const order = state.order;
  const total = order.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const { clearCart } = useCart();

  useEffect(() => {
    clearCart();
  }, []);
  return (
    <div>
      <NavBar />
      <section className="flex flex-col  pt-[128px] pb-[24px] px-[16px] bg-green00 text-resin00 gap-[24px] md:px-[48px] xl:px-[96px] ">
        <div className="flex flex-col gap-[16px]">
          <div className="font-font02 text-[26px] cat_title_shadow tracking-wide md:text-[76px]">
            Thank You!
          </div>
          <div className="font-font01 text-[12px] md:text-[18px]">
            Your order <span className="text-orange00">#YA283</span> has been
            placed and is getting prepared for pick up !
          </div>
        </div>
        <div className="grid w-full grid-cols-1 gap-[24px] items-start lg:grid-cols-2">
          <div className="flex flex-col gap-[24px]">
            <div className=" flex p-[8px] bg-green01 justify-between sm:p-[48px]">
              <div className="flex flex-col gap-[16px]">
                <div className="font-font01 text-[16px] md:text-[18px]">
                  ORDER SUMMARY
                </div>
                <div className="flex flex-col gap-[12px]">
                  <div className="font-font03 font-semibold text-[12px] md:text-[18px]">
                    Order:{" "}
                    <span className="font-medium text-resin01">#YA283</span>
                  </div>
                  <div className="font-font03 font-semibold text-[12px] md:text-[18px]">
                    Order Date:{" "}
                    <span className="font-medium text-resin01">05/14/25</span>
                  </div>
                  <div className="font-font03 font-semibold text-[12px] md:text-[18px]">
                    Pick-up time:{" "}
                    <span className="font-medium text-resin01">3:00 PM</span>
                  </div>
                  <div className="font-font03 font-semibold text-[12px] md:text-[18px]">
                    Pick-up in store:{" "}
                    <span className="font-medium text-resin01">Free</span>
                  </div>
                  <div className="font-font03 font-semibold text-[12px] md:text-[18px]">
                    Order-total:{" "}
                    <span className="font-medium text-resin01">${total}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col   p-[8px] sm:p-[48px] bg-green01 ">
              <div className="font-font01 text-[16px] md:text-[18px]">
                ORDERED ITEMS
              </div>
              <ul className="flex flex-col items-center mx-auto divide-y-2 divide-green00 text-resin00">
                {order.map((item) => (
                  <CheckoutItem item={item} key={item.id} />
                ))}
              </ul>
              <div className=" w-full flex justify-between px-[16px] pt-[24px] border-t border-resin00 font-font01 text-[16px] sm:text-[29px] text-resin00">
                <span>Total</span>
                <span>${total}</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col p-[8px] gap-[16px] bg-green01 sm:p-[48px]">
            <div className="font-font01 text-[16px]">OUR ADRESS</div>
            <div className="flex justify-between font-font03 font-semibold text-[12px] md:text-[18px]">
              <div>
                219 Grove Street
                <br />
                Brooklyn, NY 1123
              </div>
              <div>
                Monday-Sunday
                <br />
                10:00 AM-10:00 PM
              </div>
            </div>
            <img className="pt-[24px]" src="/G-Bliss/img/map.png"></img>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Confirmation;
