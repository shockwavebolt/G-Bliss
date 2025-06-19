import CheckoutForm from "../Components/CheckoutForm";
import NavBar from "../Components/NavBar";

function Checkout() {
  return (
    <div>
      <NavBar />
      <section className="flex flex-col pt-[192px] bg-resin00 text-green00 gap-[48px] lg:pl-[96px]">
        <div className="text-[34px] font-font02 cat_title_shadow tracking-wide sm:text-[47px] self-center lg:self-start">
          Checkout
        </div>
        <CheckoutForm />
      </section>
    </div>
  );
}
0;

export default Checkout;
