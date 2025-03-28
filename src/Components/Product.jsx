function Product() {
  return (
    <div className="flex flex-col max-w-[318px] gap-[24px] px-[16px] bg-white rounded-lg border-[1px] border-[#D5D5D5] ">
      <img
        src="public/products/pinkRozay.png"
        className="h-[170px] rounded-lg sm:h-[248px]"
      />
      <div className="flex flex-col gap-[4px] px-[5px] py-[12px] text-green09">
        <div className="font-font01 text-[22px] md:text-[24px] md:lg-[29px]">
          Pink Rozay
        </div>
        <div className="flex divide-x-2 font-font03">
          <div className="pr-[4px]">Indica</div>
          <div className="pl-[4px]">Hybrid</div>
        </div>

        <div className="font-font03">3.5g</div>

        <div className="flex justify-between py-[8px]">
          <div className="font-font01 text-[22px] md:text-[24px] md:lg-[29px]">
            $50
          </div>
          <div className="flex gap-[8px] items-center font-font01 text-[22px] md:text-[24px] md:lg-[29px]">
            <span>
              <img src="public/icons/decrement.svg" />
            </span>
            1
            <span>
              <img src="public/icons/increment.svg" />
            </span>
          </div>
        </div>
        <div className=" flex p-[8px] rounded-sm items-center justify-center bg-green09 font-font01 text-offWhite border-t-[1.5px] border-green05 shadow-[0_2px_1px_0_rgba(0,0,0,0.5)]">
          Add to cart
        </div>
      </div>
    </div>
  );
}

export default Product;
