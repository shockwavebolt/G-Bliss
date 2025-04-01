function CheckoutItem() {
  return (
    <div className="flex p-[24px] gap-[24px] bg-white rounded-lg">
      <div className="flex items-center justify-between w-full">
        <div className="flex">
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
            <div className="font-font03">Quantity: 1</div>
          </div>
        </div>
        <div className="font-font01 text-[29px] place-self-start py-[12px]">
          $50
        </div>
      </div>
    </div>
  );
}

export default CheckoutItem;
