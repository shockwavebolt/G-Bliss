function ShopItemSkeleton() {
  return (
    <li className="flex flex-col h-full justify-between px-[8px] py-[16px] bg-green01 rounded-lg  md:h-[552px]">
      <div className="flex flex-col gap-[8px]">
        {/* Image placeholder */}
        <div className="h-[120px] md:h-[240px] lg:h-[248px] rounded-lg bg-green00 animate-skeleton" />

        <div className="flex flex-col gap-[8px] px-[12px] mt-[8px]">
          {/* Name */}
          <div className="h-[20px] md:h-[28px] w-3/4 rounded bg-green00 animate-skeleton" />

          {/* Type */}
          <div className="h-[14px] md:h-[20px] w-1/2 rounded bg-green00 animate-skeleton" />

          {/* Weight */}
          <div className="h-[14px] md:h-[20px] w-1/4 rounded bg-green00 animate-skeleton" />
        </div>
      </div>

      <div className="px-[8px]">
        <div className="flex items-center justify-between py-[8px] pb-[16px]">
          {/* Price */}
          <div className="h-[20px] md:h-[28px] w-[48px] rounded bg-green00 animate-skeleton" />
          {/* Quantity controls */}
          <div className="h-[32px] w-[80px] rounded bg-green00 animate-skeleton" />
        </div>
        {/* Button */}
        <div className="h-[44px] w-full rounded-sm bg-green00 animate-skeleton" />
      </div>
    </li>
  );
}

export default ShopItemSkeleton;
