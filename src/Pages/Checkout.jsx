import CheckoutForm from "../Components/CheckoutForm";
import NavBar from "../Components/NavBar";

function Checkout() {
  return (
    <div>
      <NavBar />
      <section className="flex flex-col  pt-[128px] bg-green00 text-resin00 gap-[24px] lg:pl-[96px]">
        <div className="text-[26px] px-[16px] font-font02 cat_title_shadow tracking-wide sm:text-[47px]">
          Checkout
        </div>
        <CheckoutForm />
      </section>
    </div>
  );
}

export default Checkout;
