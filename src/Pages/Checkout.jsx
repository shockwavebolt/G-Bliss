import CheckoutItem from "../Components/CheckoutItem";

function Checkout() {
  return (
    <div>
      <div className="flex items-center justify-between px-[48px] py-[32px] bg-green05 text-green09 ">
        <div>
          <img src="public\img\logo(svg).svg"></img>
        </div>
        <div className="flex  justify-between gap-[64px] font-font01 ">
          <div>Shop</div>
          <div>Search</div>
          <div>Cart</div>
          <div>My Order</div>
        </div>
      </div>
      <section className="flex flex-col py-[128px] px-[24px] bg-offWhite text-green09 gap-[96px] md:gap-[64px] lg:px-[48px]">
        <div className="flex items-center gap-[8px] font-font01">
          <span>
            <img src="public/icons/back.svg" />
          </span>
          Back
        </div>
        <div className="grid grid-cols-2">
          <div className="flex flex-col px-[40px] py-[64px] gap-[96px]">
            <div className="flex flex-col gap-[24px]">
              <label className="flex justify-between font-font01 ">
                <span className="text-[29px]">Name</span>
                <span className="italic font-font03 ">Required*</span>
              </label>
              <input
                type="text"
                className="w-full border-b-2 focus:outline-none"
              />
            </div>
            <div className="flex flex-col gap-[24px]">
              <label className="flex justify-between font-font01">
                <span className="text-[29px]">Phone Number</span>
                <span className="italic font-font03">Required*</span>
              </label>
              <input
                type="text"
                className="w-full border-b-2 focus:outline-none"
              />
            </div>
            <div className="flex justify-between justify-items-center">
              <div className="flex gap-[24px]">
                <label className="flex justify-between font-font01 text-[29px]">
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
          <div className="flex flex-col px-[40px] py-[64px] gap-[96px] bg-green04 text-green09">
            <span className="font-font02 text-[47px]">In your cart</span>
            <div className="flex flex-col gap-[32px]">
              <CheckoutItem />
              <CheckoutItem />
              <CheckoutItem />
            </div>
            <div className="flex flex-col gap-[24px]">
              <div className="flex justify-between font-font01 text-[29px] text-green09">
                Total <span>$100</span>
              </div>
              <div className="flex p-[24px]  items-center justify-center bg-green09 font-font01 text-offWhite text-[29px] rounded-sm border-t-[1.5px] border-green05 shadow-[0_2px_1px_0_rgba(0,0,0,0.5)]">
                Confirm Order
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Checkout;
