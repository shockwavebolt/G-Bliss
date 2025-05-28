import CheckoutForm from "../Components/CheckoutForm";
import NavBar from "../Components/NavBar";

function Checkout() {
  return (
    <div>
      <NavBar />
      <section className="flex flex-col py-[96px]  bg-resin00 text-green00 gap-[24-xpx] lg:pl-[96px]">
        <div className="px-[48px] text-[47px] font-font02">Checkout</div>
        <CheckoutForm />
      </section>
    </div>
  );
}

export default Checkout;
