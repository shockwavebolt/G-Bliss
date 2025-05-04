function Filter({ filters, handleFilterChange }) {
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
              className={`flex gap-[4px] font-font03 ${
                filters.product === "flower" ? "text-magenta" : ""
              } cursor-pointer`}
              onClick={() => handleFilterChange("product", "flower")}
            >
              <span>
                <img
                  src={
                    filters.product === "flower"
                      ? "/public/icons/checked.svg"
                      : "/public/icons/unchecked.svg"
                  }
                />
              </span>
              Flower
            </div>
            <div
              className={`flex gap-[4px] font-font03 ${
                filters.product === "pre-rolls" ? "text-magenta" : ""
              } cursor-pointer`}
              onClick={() => handleFilterChange("product", "pre-rolls")}
            >
              <span>
                <img
                  src={
                    filters.product === "pre-rolls"
                      ? "/public/icons/checked.svg"
                      : "/public/icons/unchecked.svg"
                  }
                />
              </span>
              Pre-Rolls
            </div>
            <div
              className={`flex gap-[4px] font-font03 ${
                filters.product === "vapes" ? "text-magenta" : ""
              } cursor-pointer`}
              onClick={() => handleFilterChange("product", "vapes")}
            >
              <span>
                <img
                  src={
                    filters.product === "vapes"
                      ? "/public/icons/checked.svg"
                      : "/public/icons/unchecked.svg"
                  }
                />
              </span>
              Vapes
            </div>
            <div
              className={`flex gap-[4px] font-font03 ${
                filters.product === "edibles" ? "text-magenta" : ""
              } cursor-pointer`}
              onClick={() => handleFilterChange("product", "edibles")}
            >
              <span>
                <img
                  src={
                    filters.product === "edibles"
                      ? "/public/icons/checked.svg"
                      : "/public/icons/unchecked.svg"
                  }
                />
              </span>
              Edibles
            </div>
            <div
              className={`flex gap-[4px] font-font03 ${
                filters.product === "tincturres" ? "text-magenta" : ""
              } cursor-pointer`}
              onClick={() => handleFilterChange("product", "tinctures")}
            >
              <span>
                <img
                  src={
                    filters.product === "tinctures"
                      ? "/public/icons/checked.svg"
                      : "/public/icons/unchecked.svg"
                  }
                />
              </span>
              Tinctures
            </div>
            <div
              className={`flex gap-[4px] font-font03 ${
                filters.product === "accessories" ? "text-magenta" : ""
              } cursor-pointer`}
              onClick={() => handleFilterChange("product", "accessories")}
            >
              <span>
                <img
                  src={
                    filters.product === "accessories"
                      ? "/public/icons/checked.svg"
                      : "/public/icons/unchecked.svg"
                  }
                />
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
              className={`flex gap-[4px] font-font03 ${
                filters.type === "Indica" ? "text-magenta" : ""
              } cursor-pointer`}
              onClick={() => handleFilterChange("type", "Indica")}
            >
              <span>
                <img
                  src={
                    filters.type === "Indica"
                      ? "/public/icons/checked.svg"
                      : "/public/icons/unchecked.svg"
                  }
                />
              </span>
              Indica
            </div>
            <div
              className={`flex gap-[4px] font-font03 ${
                filters.type === "Sativa" ? "text-magenta" : ""
              } cursor-pointer`}
              onClick={() => handleFilterChange("type", "Sativa")}
            >
              <span>
                <img
                  src={
                    filters.type === "Sativa"
                      ? "/public/icons/checked.svg"
                      : "/public/icons/unchecked.svg"
                  }
                />
              </span>
              Sativa
            </div>
            <div
              className={`flex gap-[4px] font-font03 ${
                filters.type === "Hybrid" ? "text-magenta" : ""
              } cursor-pointer`}
              onClick={() => handleFilterChange("type", "Hybrid")}
            >
              <span>
                <img
                  src={
                    filters.type === "Hybrid" || ""
                      ? "/public/icons/checked.svg"
                      : "/public/icons/unchecked.svg"
                  }
                />
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
            <div
              className={`flex gap-[4px] font-font03 ${
                filters.weight === "3.5g" ? "text-magenta" : ""
              } cursor-pointer`}
              onClick={() => handleFilterChange("weight", "3.5g")}
            >
              <span>
                <img
                  src={
                    filters.weight === "3.5g"
                      ? "/public/icons/checked.svg"
                      : "/public/icons/unchecked.svg"
                  }
                />
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
