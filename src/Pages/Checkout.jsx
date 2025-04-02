import CheckoutForm from "../Components/CheckoutForm";
import NavBar from "../Components/NavBar";
import BackButton from "../UI/BackButton";

function Checkout() {
  return (
    <div>
      <NavBar />
      <section className="flex flex-col py-[128px] px-[24px] bg-offWhite text-green09 gap-[96px] md:gap-[64px] lg:px-[48px]">
        <BackButton />
        <CheckoutForm />
      </section>
    </div>
  );
}

export default Checkout;
