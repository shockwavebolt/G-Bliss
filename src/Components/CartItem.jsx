function CartItem() {
  return (
    <div className="flex flex-col p-[24px] gap-[24px] bg-offWhite rounded-lg">
      <div className="flex items-center gap-[24px]">
        <img src="public/products/pinkRozay.png" className="w-[150px]"></img>
        <div className="flex flex-col w-full gap-[4px] px-[5px] py-[12px] text-green09">
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
        </div>
      </div>
      <div className="flex place-self-end">Remove</div>
    </div>
  );
}

export default CartItem;
