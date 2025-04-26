import { Link } from "react-router-dom";
import Category from "../Components/Category";
import NavBar from "../Components/NavBar";

function Home() {
  return (
    <div>
      <section className="flex flex-col gap-[64px] px-[40px] pt-[32px] pb-[64px] items-center justify-center w-full bg-green05 text-green09 lg:px-[48px]">
        <NavBar />
        <img src="public\img\staticBG.png"></img>
      </section>
      <section className="flex flex-col px-[40px] py-[96px] gap-[56px] w-full bg-linear-to-t from-green04 from-30% to-green05 items-center lg:px-[48px] ">
        <div className="flex items-center justify-between w-full ">
          <div className="font-font02 text-[26px] xs:text-[42px] md:text-[47px] ">
            Shop for...
          </div>
          <div className="font-font01 text-[18px]">Shop all</div>
        </div>
        <div className="grid grid-cols-1 gap-x-[32px] gap-y-[32px] sm:grid-cols-3 md:gap-y-[64px]">
          <Link to="/shop/flower">
            <Category imgSrc={`public/img/flower.png`} category={"Flower"} />
          </Link>
          <Link to="/shop/prerolls">
            <Category
              imgSrc={`public/img/pre-roll.jpg`}
              category={"Pre-Roll"}
            />
          </Link>
          <Link to="/shop/vapes">
            <Category imgSrc={`public/img/vapes.jpeg`} category={"Vapes"} />
          </Link>
          <Link to="/shop/edibles">
            <Category imgSrc={`public/img/edibles.webp`} category={"Edibles"} />
          </Link>
          <Link to="/shop/tinctures">
            <Category
              imgSrc={`public/img/tinctures.jpg`}
              category={"Tinctures"}
            />
          </Link>
          <Link to="/shop/accessories">
            <Category
              imgSrc={`public/img/accessories.jpg`}
              category={"Accessories"}
            />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
