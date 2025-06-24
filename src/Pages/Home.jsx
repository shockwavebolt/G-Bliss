import { Link } from "react-router-dom";
import Category from "../Components/Category";
import NavBar from "../Components/NavBar";
import { useEffect, useState } from "react";

// "public\img\FloatingBud.png"

function Home() {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    setOffsetY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div>
      <section className="flex flex-col gap-[64px]  items-center justify-center w-full bg-resin00 ">
        <NavBar />
        <div className="parallax-container">
          <div className="tracking-wide parallax-background text-green00 font-font02">
            <span>G-Bliss</span>
          </div>
          <div
            className="parallax-foreground"
            style={{ transform: `translateY(${offsetY * -0.2}px)` }}
          >
            <img src="/img/FloatingBud.png" />
          </div>
        </div>

        {/* <img className="pt-[198px]" src="public\img\staticBG2.png"></img> */}
      </section>

      <section className="flex flex-col px-[24px] pt-[96px] pb-[24px] gap-[48px] w-full bg-resin00 items-center md:px-[48px] md:py-[48px] lg:px-[96px] lg:py-[96px] md:gap-[24px]">
        <div className=" flex flex-col gap-[24px] items-end lg:px-[32px] xl:px-[64px]">
          <div className="w-full flex justify-between items-center py-[24px] font-font01   text-green00 border-t-8 border-b-green00 ">
            <span className=" text-[29px] md:text-[26px] lg:text-[47px]">
              Shop for...
            </span>
            <Link
              to="/shop"
              className="text-[20px] text-green00 lg:text-[18px] cursor-pointer transition-colors duration-200 hover:text-orange00"
            >
              Shop All
            </Link>
          </div>
          <div className="grid grid-cols-3 gap-x-[16px] gap-y-[16px] md:gap-x-[24px] md:gap-y-[24px]  ">
            <Link to="/shop/flower">
              <Category imgSrc={`public/img/flower.png`} category={"Flower"} />
            </Link>
            <Link to="/shop/pre-rolls">
              <Category
                imgSrc={`public/img/pre-roll.jpg`}
                category={"Pre-Roll"}
              />
            </Link>
            <Link to="/shop/vapes">
              <Category imgSrc={`public/img/vapes.jpeg`} category={"Vapes"} />
            </Link>
            <Link to="/shop/edibles">
              <Category
                imgSrc={`public/img/edibles.webp`}
                category={"Edibles"}
              />
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
        </div>
      </section>
    </div>
  );
}

export default Home;
