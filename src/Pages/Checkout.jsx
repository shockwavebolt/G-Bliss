import CheckoutForm from '../Components/CheckoutForm';
import NavBar from '../Components/NavBar';

function Checkout() {
  return (
    <div>
      <NavBar />
      <section className="bg-green00 text-resin00 flex flex-col gap-[24px] pt-[128px] lg:pl-[96px]">
        <div className="font-font02 cat_title_shadow px-[16px] text-[26px] tracking-wide sm:text-[47px]">
          Checkout
        </div>
        <CheckoutForm />
      </section>
    </div>
  );
}

export default Checkout;
