import Option from "./Option";

function Filter({ filters, handleFilterChange }) {
  return (
    <div className="hidden py-[96px] px-[64px] items-center md:block ">
      <div className="flex flex-col gap-[64px]">
        <div className="flex flex-col gap-[24px]">
          <div className="flex items-center gap-[4px] font-font01 text-[29px] ">
            Product
            <span>
              <img src="/public/icons/close.svg"></img>
            </span>
          </div>

          <div className="flex flex-col gap-[16px]">
            <Option
              filters={filters}
              yy="product"
              handleFilterChange={handleFilterChange}
            >
              flower
            </Option>

            <Option
              filters={filters}
              yy="product"
              handleFilterChange={handleFilterChange}
            >
              pre-rolls
            </Option>
            <Option
              filters={filters}
              yy="product"
              handleFilterChange={handleFilterChange}
            >
              vapes
            </Option>
            <Option
              filters={filters}
              yy="product"
              handleFilterChange={handleFilterChange}
            >
              edibles
            </Option>
            <Option
              filters={filters}
              yy="product"
              handleFilterChange={handleFilterChange}
            >
              tinctures
            </Option>
            <Option
              filters={filters}
              yy="product"
              handleFilterChange={handleFilterChange}
            >
              accessories
            </Option>
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
            <Option
              filters={filters}
              yy="type"
              handleFilterChange={handleFilterChange}
            >
              Indica
            </Option>
            <Option
              filters={filters}
              yy="type"
              handleFilterChange={handleFilterChange}
            >
              Sativa
            </Option>
            <Option
              filters={filters}
              yy="type"
              handleFilterChange={handleFilterChange}
            >
              Hybrid
            </Option>
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
            <Option
              filters={filters}
              yy="weight"
              handleFilterChange={handleFilterChange}
            >
              3.5g
            </Option>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filter;
