import Filter from "../Components/Filter";
import NavBar from "../Components/NavBar";
import ShopItem from "../Components/ShopItem";
import BackButton from "../UI/BackButton";

import flowerData from "../data/flowerData";
import preRollsData from "../data/preRollsData";
import vapesData from "../data/vapesData";
import edibleData from "../data/edibleData";
import tincturesData from "../data/tincturesData";
import accessoriesData from "../data/accessoriesData";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import FilterButton from "../Components/FilterButton";
import MobileFilter from "../Components/MobileFilter";

const categoryMap = {
  all: [
    ...flowerData,
    ...preRollsData,
    ...vapesData,
    ...edibleData,
    ...tincturesData,
    ...accessoriesData,
  ],
  flower: flowerData,
  prerolls: preRollsData,
  vapes: vapesData,
  edibles: edibleData,
  tincture: tincturesData,
  accessories: accessoriesData,
};

function Shop() {
  const { category } = useParams();
  const data = categoryMap.all;
  const [itemData, setItemData] = useState(data);
  const [filteredProducts, setFilteredProducts] = useState(data);
  const [filters, setFilters] = useState({
    product: category === "all" ? "" : category,
    type: "",
    weight: "",
  });

  const [openFilter, setOpenFilter] = useState(false);

  const resetFilters = () => {
    setFilters((filters) => ({
      ...filters,
      type: "",
      weight: "",
    }));
  };

  function filterProducts() {
    let newFilteredProducts = [...itemData];

    if (filters.product) {
      newFilteredProducts = newFilteredProducts.filter(
        (item) => item.product === filters.product,
      );
    }

    if (filters.type) {
      newFilteredProducts = newFilteredProducts.filter(
        (item) => item.type === filters.type,
      );
    }

    if (filters.weight) {
      newFilteredProducts = newFilteredProducts.filter(
        (item) => item.weight === filters.weight,
      );
    }

    setFilteredProducts(newFilteredProducts);
  }

  const handleFilterChange = (name, value) => {
    if (name === "product" && value === "all") {
      setFilters({ ...filters, [name]: "" });
    } else {
      setFilters({ ...filters, [name]: value });
    }
  };

  useEffect(() => {
    filterProducts();
  }, [filters]);

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      {openFilter && (
        <MobileFilter
          filters={filters}
          handleFilterChange={handleFilterChange}
          resetFilters={resetFilters}
          openFilter={openFilter}
          setOpenFilter={setOpenFilter}
          filterMatches={filteredProducts.length}
        />
      )}
      <section className="flex flex-col flex-1 items-center pt-[128px] pb-[96px] px-[16px] bg-green00 text-resin00 gap-[12px] md:px-[48px] xl:px-[96px] ">
        <div className="w-full flex flex-col gap-[48px] place-self-start md:gap-[192px] md:flex-row ">
          <div className="flex justify-between ">
            <BackButton />
            <FilterButton setOpenFilter={setOpenFilter} />
          </div>
          <div className="font-font02 text-[26px] cat_title_shadow tracking-wide md:text-[47px]">
            {filters.product
              ? filters.product.charAt(0).toUpperCase() +
                filters.product.slice(1)
              : "All"}
          </div>
        </div>
        <div className=" w-full  md:grid grid-cols-[auto_1fr] divide-x-1 gap-x-[24px] ">
          <Filter
            filters={filters}
            handleFilterChange={handleFilterChange}
            resetFilters={resetFilters}
            openFilter={openFilter}
            setOpenFilter={setOpenFilter}
          />
          {filteredProducts?.length > 0 ? (
            <ul className="grid  grid-cols-2  gap-y-[12px] items-start gap-x-[12px]  min-[1000px]:grid-cols-3 min-[1000px]:gap-x-[24px] min-[1000px]:gap-y-[24px]">
              {filteredProducts.map((data) => (
                <ShopItem item={data} key={data.id} />
              ))}
            </ul>
          ) : (
            <div className="flex h-screen justify-center w-full pt-[25%] font-font03 text-[16px] text-resin00 md:text-[20px]">
              No items match the filter settings.
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default Shop;
