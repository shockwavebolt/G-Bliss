function ShopItemSkeleton() {
  return (
    <li className="bg-green01 flex h-full flex-col justify-between rounded-lg px-[8px] py-[16px] md:h-[552px]">
      <div className="flex flex-col gap-[8px]">
        {/* Image placeholder */}
        <div className="bg-green00 animate-skeleton h-[120px] rounded-lg md:h-[240px] lg:h-[248px]" />

        <div className="mt-[8px] flex flex-col gap-[8px] px-[12px]">
          {/* Name */}
          <div className="bg-green00 animate-skeleton h-[20px] w-3/4 rounded md:h-[28px]" />

          {/* Type */}
          <div className="bg-green00 animate-skeleton h-[14px] w-1/2 rounded md:h-[20px]" />

          {/* Weight */}
          <div className="bg-green00 animate-skeleton h-[14px] w-1/4 rounded md:h-[20px]" />
        </div>
      </div>

      <div className="px-[8px]">
        <div className="flex items-center justify-between py-[8px] pb-[16px]">
          {/* Price */}
          <div className="bg-green00 animate-skeleton h-[20px] w-[48px] rounded md:h-[28px]" />
          {/* Quantity controls */}
          <div className="bg-green00 animate-skeleton h-[32px] w-[80px] rounded" />
        </div>
        {/* Button */}
        <div className="bg-green00 animate-skeleton h-[44px] w-full rounded-sm" />
      </div>
    </li>
  );
}

export default ShopItemSkeleton;
