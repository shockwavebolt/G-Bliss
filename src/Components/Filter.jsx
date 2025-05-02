function Filter({ handleFilterChange }) {
  return (
    <div className="py-[96px] px-[32px] ">
      <div className="flex flex-col gap-[64px]">
        <div className="flex flex-col gap-[24px]">
          <div className="flex items-center gap-[4px] font-font01 text-[29px] ">
            Product
            <span>
              <img src="/public/icons/close.svg"></img>
            </span>
          </div>

          <div className="flex flex-col gap-[16px]">
            <div
              className="flex gap-[4px] font-font03 text-magenta cursor-pointer"
              onClick={() => handleFilterChange("product", "flower")}
            >
              <span>
                <img src="/public/icons/checked.svg" />
              </span>
              Flower
            </div>
            <div
              className="flex gap-[4px] font-font03 cursor-pointer"
              onClick={() => handleFilterChange("product", "pre-rolls")}
            >
              <span>
                <img src="/public/icons/unchecked.svg" />
              </span>
              Pre-Rolls
            </div>
            <div
              className="flex gap-[4px] font-font03 cursor-pointer"
              onClick={() => handleFilterChange("product", "vapes")}
            >
              <span>
                <img src="/public/icons/unchecked.svg" />
              </span>
              Vapes
            </div>
            <div
              className="flex gap-[4px] font-font03 cursor-pointer"
              onClick={() => handleFilterChange("product", "edibles")}
            >
              <span>
                <img src="/public/icons/unchecked.svg" />
              </span>
              Edibles
            </div>
            <div
              className="flex gap-[4px] font-font03 cursor-pointer"
              onClick={() => handleFilterChange("product", "tinctures")}
            >
              <span>
                <img src="/public/icons/unchecked.svg" />
              </span>
              Tinctures
            </div>
            <div
              className="flex gap-[4px] font-font03 cursor-pointer"
              onClick={() => handleFilterChange("product", "accessories")}
            >
              <span>
                <img src="/public/icons/unchecked.svg" />
              </span>
              Accessories
            </div>
          </div>
        </div>

        {/* Type */}
        <div className="flex flex-col gap-[24px]">
          <div className="flex items-center gap-[4px] font-font01 text-[29px] ">
            Type
            <span>
              <img src="/public/icons/close.svg"></img>
            </span>
          </div>
          <div className="flex flex-col gap-[16px]">
            <div
              className="flex gap-[4px] font-font03 text-magenta"
              onClick={() => handleFilterChange("type", "Indica")}
            >
              <span>
                <img src="/public/icons/checked.svg" />
              </span>
              Indica
            </div>
            <div
              className="flex gap-[4px] font-font03"
              onClick={() => handleFilterChange("type", "Sativa")}
            >
              <span>
                <img src="/public/icons/unchecked.svg" />
              </span>
              Sativa
            </div>
            <div className="flex gap-[4px] font-font03">
              <span>
                <img src="/public/icons/unchecked.svg" />
              </span>
              Hybrid
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[24px]">
          <div className="flex items-center gap-[4px] font-font01 text-[29px] ">
            Weight
            <span>
              <img src="/public/icons/close.svg"></img>
            </span>
          </div>
          <div className="flex flex-col gap-[16px]">
            <div className="flex gap-[4px] font-font03 text-magenta">
              <span>
                <img src="/public/icons/checked.svg" />
              </span>
              3.5g
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filter;
