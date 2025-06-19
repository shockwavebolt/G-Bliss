import { useCart } from "../Components/CartContext";
import CheckoutItem from "../Components/CheckoutItem";
import NavBar from "../Components/NavBar";

function Confirmation() {
  const { cart, getTotalCartPrice } = useCart();
  const total = getTotalCartPrice();
  return (
    <div>
      <NavBar />
      <section className="flex flex-col items-center pt-[192px] pb-[24px] px-[16px] bg-resin00 text-green00 gap-[24px] md:px-[48px] xl:px-[96px] ">
        <div className="flex flex-col items-center gap-[48px]">
          <div className="font-font02 text-[47px ] cat_title_shadow tracking-wide md:text-[76px]">
            Thank You!
          </div>
          <div className="font-font01 text-center text-[16px] md:text-[18px]">
            Your order <span className="text-orange00">#YA283</span> has been
            placed and <br class="block sm:hidden" />
            is getting prepared for pick up !
          </div>
        </div>
        <div className="grid w-full grid-cols-1 gap-[24px] items-start lg:grid-cols-2">
          <div className="flex flex-col gap-[24px]">
            <div className=" flex p-[24px] bg-resin01 justify-between sm:p-[48px]">
              <div className="flex flex-col gap-[16px]">
                <div className="font-font01 text-[16px] md:text-[18px]">
                  Order Detail
                </div>
                <div className="font-font03 text-[16px] md:text-[18px]">
                  Order: #YA283
                </div>
                <div className="font-font03 text-[16px] md:text-[18px]">
                  Order Date: 05/14/25
                </div>
                <div className="font-font03 text-[16px] md:text-[18px]">
                  Pick-up time: 3:00 PM
                </div>
              </div>

              <div className="flex flex-col gap-[16px]">
                <div className="font-font01 text-[16px] md:text-[18px]">
                  Order Summary
                </div>
                <div className="font-font03 text-[16px] md:text-[18px]">
                  Pick-up in store: Free
                </div>
                <div className="font-font03 text-[16px] md:text-[18px]">
                  Order-total
                </div>
              </div>
            </div>

            <div className="flex flex-col p-[24px] gap-[24px] bg-resin01 sm:p-[48px]">
              <div className="flex justify-between font-font01 text-[16px] md:text-[18px]">
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
              <img src="public/img/map.png"></img>
            </div>
          </div>

          <div className="flex flex-col gap-[24px] px-[24px] py-[24px] bg-resin01 items-center">
            <div className="font-font01 text-[18px]">Ordered Items</div>
            <ul className="flex flex-col py-[24px] items-center divide-y-2 divide-resin00 text-green00">
              {cart.map((item) => (
                <CheckoutItem item={item} key={item.id} />
              ))}
            </ul>
            <div className=" w-full flex justify-between px-[32px] pt-[24px] border-t-2 border-green00 font-font01 text-[29px] text-green00">
              <span>Total</span>
              <span>${total}</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Confirmation;
