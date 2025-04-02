import Cart from "../Components/Cart";
import Filter from "../Components/Filter";
import NavBar from "../Components/NavBar";
import ShopItem from "../Components/shopItem";

import BackButton from "../UI/BackButton";

const data = [
  {
    name: "Pink Rozay",
    type: "Indica",
    type2: "Hybrid",
    weight: "3.5g",
    price: 50,
    quantity: 1,
    img: "public/img/strains/pinkRozay.png",
  },
  {
    name: "Gelato",
    type: "Indica",
    type2: "Hybrid",
    weight: "3.5g",
    price: 30,
    quantity: 1,
    img: "public/img/strains/gelato.jpg",
  },
  {
    name: "Gorilla Glue",
    type: "Indica",
    type2: "Hybrid",
    weight: "3.5g",
    price: 30,
    quantity: 1,
    img: "public/img/strains/gorilla.jpg",
  },

  {
    name: "Pink Rozay",
    type: "Indica",
    type2: "Hybrid",
    weight: "3.5g",
    price: 50,
    quantity: 1,
    img: "public/img/strains/pinkRozay.png",
  },
  {
    name: "Gelato",
    type: "Indica",
    type2: "Hybrid",
    weight: "3.5g",
    price: 30,
    quantity: 1,
    img: "public/img/strains/gelato.jpg",
  },
  {
    name: "Gorilla Glue",
    type: "Indica",
    type2: "Hybrid",
    weight: "3.5g",
    price: 30,
    quantity: 1,
    img: "public/img/strains/gorilla.jpg",
  },
  {
    name: "Pink Rozay",
    type: "Indica",
    type2: "Hybrid",
    weight: "3.5g",
    price: 50,
    quantity: 1,
    img: "public/img/strains/pinkRozay.png",
  },
  {
    name: "Gelato",
    type: "Indica",
    type2: "Hybrid",
    weight: "3.5g",
    price: 30,
    quantity: 1,
    img: "public/img/strains/gelato.jpg",
  },
  {
    name: "Gorilla Glue",
    type: "Indica",
    type2: "Hybrid",
    weight: "3.5g",
    price: 30,
    quantity: 1,
    img: "public/img/strains/gorilla.jpg",
  },
];

function Shop() {
  const itemData = data;
  return (
    <div className="relative">
      <NavBar />
      <section className="flex flex-col py-[128px] px-[24px] bg-offWhite text-green09 gap-[96px] md:gap-[64px] lg:px-[48px]">
        {/* Desktop  */}
        <div className="hidden grid-cols-4 md:grid">
          <BackButton />
          <div className="font-font02 text-[76px]">Flower</div>
          <div></div>
          <div className=" flex gap-[4px] place-self-center justify-self-end font-font01">
            sort
            <span>
              <img src="public/icons/sort.svg"></img>
            </span>
          </div>
        </div>
        <div className="hidden md:grid grid-cols-[auto_auto] divide-x-2 gap-x-[32px] ">
          <Filter />
          <ul className="grid grid-cols-2 gap-y-[48px] gap-x-[32px] min-[1000px]:grid-cols-3">
            {itemData.map((data) => (
              <ShopItem item={data} key={data.name} />
            ))}
          </ul>
        </div>

        {/* Mobile */}
        <div className="flex items-center justify-between text-green09 md:hidden">
          <div className="flex items-center gap-[8px] font-font01">
            <span>
              <img src="public/icons/back.svg" />
            </span>
            Back
          </div>
          <div className="flex gap-[24px]">
            <div className="flex gap-[4px] border-2 px-[8px] py-[8px] rounded-lg font-font01 items-center ">
              Filter
              <span>
                <img src="public/icons/filter.svg"></img>
              </span>
            </div>
            <div className="flex gap-[2px] border-2 px-[8px] py-[8px] rounded-lg font-font01 ">
              sort
              <span>
                <img src="public/icons/sort.svg"></img>
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[24px]">
          <div className="font-font02 text-[76px] md:hidden">Flower</div>
          <ul className="grid grid-cols-2 gap-y-[48px] gap-x-[16px]  sm:gap-x-[32px] md:hidden">
            {itemData.map((data) => (
              <ShopItem item={data} key={data.name} />
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Shop;
