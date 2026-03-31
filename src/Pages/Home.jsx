import { Link } from "react-router-dom";
import Category from "../Components/Category";
import NavBar from "../Components/NavBar";
import { useEffect, useState } from "react";

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
      <section className="flex flex-col gap-[64px]  items-center justify-center w-full bg-green00 ">
        <NavBar />
        <div className="parallax-container">
          <div className="tracking-wide parallax-background text-resin00 font-font02">
            <span>G-Bliss</span>
          </div>
          <div
            className="parallax-foreground"
            style={{ transform: `translateY(${offsetY * -0.5}px)` }}
          >
            <img src="/G-Bliss/img/FloatingBud.png" />
          </div>
        </div>
      </section>

      <section className="flex flex-col px-[16px]  pb-[24px] gap-[48px] w-full bg-green00 items-center xs:px-[24px] md:px-[48px] md:py-[48px] lg:px-[96px] lg:py-[96px] md:gap-[24px]">
        <div className=" flex flex-col gap-[16px] items-end lg:px-[32px] xl:px-[64px]">
          <div className="flex justify-between w-full font-font01 text-resin00">
            <span className=" text-[20px] md:text-[26px] lg:text-[47px]">
              Shop for...
            </span>
            <Link
              to="/shop"
              className="text-[16px] md:text-[20px] lg:text-[29px] text-resin00  cursor-pointer transition-colors duration-200 hover:text-orange00"
            >
              Shop all
            </Link>
          </div>
          <div className="w-full grid grid-cols-3 gap-x-[12px] gap-y-[12px]  sm:gap-x-[24px] md:gap-y-[24px]  ">
            <Link to="/shop/flower">
              <Category
                imgSrc={`/G-Bliss/img/flower.png`}
                category={"Flower"}
              />
            </Link>

            <Link to="/shop/pre-rolls">
              <Category
                imgSrc={`/G-Bliss/img/pre-roll.jpg`}
                category={"Pre-Roll"}
              />
            </Link>

            <Link to="/shop/vapes">
              <Category imgSrc={`/G-Bliss/img/vapes.jpeg`} category={"Vapes"} />
            </Link>

            <Link to="/shop/edibles">
              <Category
                imgSrc={`/G-Bliss/img/edibles.webp`}
                category={"Edibles"}
              />
            </Link>

            <Link to="/shop/tinctures">
              <Category
                imgSrc={`/G-Bliss/img/tinctures.jpg`}
                category={"Tinctures"}
              />
            </Link>

            <Link to="/shop/accessories">
              <Category
                imgSrc={`/G-Bliss/img/accessories.jpg`}
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
