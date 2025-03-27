import Category from "../Components/Category";

function Home() {
  return (
    <div>
      <section className="flex flex-col gap-[64px] px-[40px] pt-[32px] pb-[64px] items-center justify-center w-full bg-green05 text-green09 lg:px-[48px]">
        <div className="flex flex-row  justify-between gap-[64px] font-font01">
          <div>Shop</div>
          <div>Search</div>
          <div>Cart</div>
          <div>MyOrder</div>
        </div>
        <img src="public\img\staticBG.png"></img>
      </section>
      <section className="flex flex-col px-[40px] py-[96px] gap-[56px] w-full bg-linear-to-t from-green04 from-30% to-green05 items-center lg:px-[48px] ">
        <div className="flex items-center justify-between w-full ">
          <div className="font-font02 text-[26px] xs:text-[42px] md:text-[47px] ">
            Shop for...
          </div>
          <div className="font-font01 text-[18px]">Shop all</div>
        </div>
        <div className="grid grid-cols-1 gap-x-[32px] gap-y-[32px] xs:grid-cols-3 md:gap-y-[64px]">
          <Category imgSrc={`public/img/flower.png`} category={"Flower"} />
          <Category imgSrc={`public/img/pre-roll.jpg`} category={"Pre-Roll"} />
          <Category imgSrc={`public/img/vapes.jpeg`} category={"Vapes"} />
          <Category imgSrc={`public/img/edibles.webp`} category={"Edibles"} />
          <Category
            imgSrc={`public/img/tinctures.jpg`}
            category={"Tinctures"}
          />
          <Category
            imgSrc={`public/img/accessories.jpg`}
            category={"Accessories"}
          />
        </div>
      </section>
    </div>
  );
}

export default Home;
