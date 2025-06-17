import DisabledOption from "./DisabledOption";
import Option from "./Option";

function MobileFilter({
  filters,
  handleFilterChange,
  resetFilters,
  filterMatches,
  setOpenFilter,
}) {
  return (
    <div className="h-screen z-10 pt-[192px] pb-[48px] px-[24px] flex flex-col gap-[24px] bg-resin00 text-green00 ">
      <div className="flex  justify-between pb-[8px] border-b-2 border-green00">
        <div className="flex gap-[16px] font-font02 text-[29px] items-center">
          Filter
          <span className="font-font03 text-[18px]">
            {"("}
            {filterMatches}
            {")"} Matches
          </span>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="44"
          viewBox="0 0 28 29"
          fill="none"
          className="text-green00 hover:text-[#CF5C36] transition-colors duration-200 ease-in-out cursor-pointer"
          onClick={() => setOpenFilter(false)}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14 12.8599L25.438 1.41993C25.73 1.12793 26.116 0.981934 26.5 0.981934C27.308 0.981934 28 1.62993 28 2.47993C28 2.86593 27.854 3.24993 27.562 3.54393L16.122 14.9819L27.56 26.4199C27.854 26.7139 28 27.0979 28 27.4819C28 28.3359 27.302 28.9819 26.5 28.9819C26.116 28.9819 25.73 28.8359 25.438 28.5439L14 17.1059L2.562 28.5439C2.27 28.8359 1.884 28.9819 1.5 28.9819C0.698 28.9819 0 28.3359 0 27.4819C0 27.0979 0.146 26.7139 0.44 26.4199L11.878 14.9819L0.438 3.54393C0.146 3.24993 0 2.86593 0 2.47993C0 1.62993 0.692 0.981934 1.5 0.981934C1.884 0.981934 2.27 1.12793 2.562 1.41993L14 12.8599Z"
            fill="currentColor"
          />
        </svg>
      </div>
      <div className="overflow-y-auto ">
        <div className="flex flex-col gap-[64px] ">
          <div className="flex flex-col gap-[24px]">
            <div className=" font-font01 text-[29px] ">Product</div>

            <div className="flex flex-col gap-[16px]">
              <Option
                filters={filters}
                yy="product"
                handleFilterChange={handleFilterChange}
                resetFilters={resetFilters}
              >
                all
              </Option>
              <Option
                filters={filters}
                yy="product"
                handleFilterChange={handleFilterChange}
                resetFilters={resetFilters}
              >
                flower
              </Option>

              <Option
                filters={filters}
                yy="product"
                handleFilterChange={handleFilterChange}
                resetFilters={resetFilters}
              >
                pre-rolls
              </Option>
              <Option
                filters={filters}
                yy="product"
                handleFilterChange={handleFilterChange}
                resetFilters={resetFilters}
              >
                vapes
              </Option>
              <Option
                filters={filters}
                yy="product"
                handleFilterChange={handleFilterChange}
                resetFilters={resetFilters}
              >
                edibles
              </Option>
              <Option
                filters={filters}
                yy="product"
                handleFilterChange={handleFilterChange}
                resetFilters={resetFilters}
              >
                tinctures
              </Option>
              <Option
                filters={filters}
                yy="product"
                handleFilterChange={handleFilterChange}
                resetFilters={resetFilters}
              >
                accessories
              </Option>
            </div>
          </div>

          {/* Type */}
          <div className="flex flex-col gap-[24px]">
            <div
              className={`font-font01 text-[29px] ${
                filters.product === "accessories" ? "text-resin01" : ""
              }`}
            >
              Type
            </div>
            <div className="flex flex-col gap-[16px]">
              {filters.product === "accessories" ? (
                <DisabledOption>Indica</DisabledOption>
              ) : (
                <Option
                  filters={filters}
                  yy="type"
                  handleFilterChange={handleFilterChange}
                >
                  Indica
                </Option>
              )}

              {filters.product === "accessories" ? (
                <DisabledOption>Sativa</DisabledOption>
              ) : (
                <Option
                  filters={filters}
                  yy="type"
                  handleFilterChange={handleFilterChange}
                >
                  Sativa
                </Option>
              )}

              {filters.product === "accessories" ? (
                <DisabledOption>Hybrid</DisabledOption>
              ) : (
                <Option
                  filters={filters}
                  yy="type"
                  handleFilterChange={handleFilterChange}
                >
                  Hybrid
                </Option>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-[24px]">
            <div
              className={`font-font01 text-[29px] ${
                filters.product === "accessories" ? "text-resin01" : ""
              }`}
            >
              Weight
            </div>
            <div className="flex flex-col gap-[16px]">
              {filters.product === "accessories" ? (
                <DisabledOption>3.5g</DisabledOption>
              ) : (
                <Option
                  filters={filters}
                  yy="weight"
                  handleFilterChange={handleFilterChange}
                >
                  3.5g
                </Option>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileFilter;
