function ShopItem({ item }) {
  return (
    <li className="flex flex-col max-w-[318px] gap-[24px] px-[16px] self-start bg-white rounded-lg border-[1px] border-[#D5D5D5] ">
      <img src={item.img} className="h-[170px] rounded-lg sm:h-[248px]" />
      <div className="flex flex-col gap-[4px] px-[5px] py-[12px] text-green09">
        <div className="font-font01 text-[22px] md:text-[24px] md:lg-[29px]">
          {item.name}
        </div>
        <div className="flex divide-x-2 font-font03">
          <div className="pr-[4px]">{item.type}</div>
          <div className="pl-[4px]">{item.type2}</div>
        </div>

        <div className="font-font03">{item.weight}</div>

        <div className="flex justify-between py-[8px]">
          <div className="font-font01 text-[22px] md:text-[24px] md:lg-[29px]">
            ${item.price}
          </div>
          <div className="flex gap-[8px] items-center font-font01 text-[22px] md:text-[24px] md:lg-[29px]">
            <span>
              <img src="public/icons/decrement.svg" />
            </span>
            {item.quantity}
            <span>
              <img src="public/icons/increment.svg" />
            </span>
          </div>
        </div>
        <div className=" flex p-[8px] rounded-sm items-center justify-center bg-green09 font-font01 text-offWhite border-t-[1.5px] border-green05 shadow-[0_2px_1px_0_rgba(0,0,0,0.5)]">
          Add to cart
        </div>
      </div>
    </li>
  );
}

export default ShopItem;
