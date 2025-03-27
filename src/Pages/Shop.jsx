import Filter from "../Components/Filter";
import Product from "../Components/Product";

function Shop() {
  return (
    <div>
      <div className="flex items-center justify-between px-[48px] py-[32px] bg-green05 text-green09 ">
        <div>
          <img src="public\img\logo(svg).svg"></img>
        </div>
        <div className="flex  justify-between gap-[64px] font-font01 ">
          <div>Shop</div>
          <div>Search</div>
          <div>Cart</div>
          <div>My Order</div>
        </div>
      </div>
      <section className="flex flex-col py-[128px] px-[24px] bg-offWhite text-green09 gap-[96px] md:gap-[64px] lg:px-[48px]">
        {/* Desktop  */}
        <div className="hidden grid-cols-4 md:grid">
          <div className="flex items-center gap-[8px] font-font01">
            <span>
              <img src="public/icons/back.svg" />
            </span>
            Back
          </div>
          <div className="font-font02 text-[76px]">Flower</div>
          <div></div>
          <div className=" flex gap-[4px] place-self-center justify-self-end font-font01">
            sort
            <span>
              <img src="public/icons/sort.svg"></img>
            </span>
          </div>
        </div>
        <div className="hidden md:grid grid-cols-[auto_auto] divide-x-2 gap-x-[32px]">
          <Filter />
          <div className="grid grid-cols-2 gap-y-[48px] gap-x-[32px] min-[1000px]:grid-cols-3">
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
          </div>
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
          <div className="font-font02 text-[76px]">Flower</div>
          <div className="grid grid-cols-2 gap-y-[48px] gap-x-[16px]  sm:gap-x-[32px] md:hidden">
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Shop;
