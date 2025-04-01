import CheckoutForm from "../Components/CheckoutForm";

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
        <CheckoutForm />
      </section>
    </div>
  );
}

export default Checkout;
