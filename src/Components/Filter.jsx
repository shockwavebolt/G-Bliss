import DisabledOption from "./DisabledOption";
import MobileFilter from "./MobileFilter";
import Option from "./Option";

function Filter({
  filters,
  handleFilterChange,
  resetFilters,
  openFilter,
  setOpenFilter,
}) {
  return (
    <>
      <div className="hidden py-[96px] px-[64px] items-center md:block ">
        <div className="flex flex-col gap-[64px]">
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
    </>
  );
}

export default Filter;
