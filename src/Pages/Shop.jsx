import Filter from "../Components/Filter";
import NavBar from "../Components/NavBar";
import ShopItem from "../Components/shopItem";
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
// import { useReducer } from "react";

// const initialFilterState = {
//   products: [],
//   type: [],
//   weight: [],
// };

// function filterReducer(state, action) {
//   switch (action.type) {
//     case "TOGGLE_PRODUCT":
//       return {
//         ...state,
//         products: state.products.includes(action.payload)
//           ? state.products.filter((product) => product !== action.payload)
//           : [...state.products, action.payload],
//       };

//     case "TOGGLE_TYPE":
//       return {
//         ...state,
//         type: state.type.includes(action.payload)
//           ? state.type.filter((type) => type !== action.payload)
//           : [...state.type, action.payload],
//       };

//     case "TOGGLE_WEIGHT":
//       return {
//         ...state,
//         weight: state.weight.includes(action.payload)
//           ? state.weight.filter((weight) => weight !== action.payload)
//           : [...state.weight, action.payload],
//       };

//     case "RESET_FILTERS":
//       return initialFilterState;

//     default:
//       return state;
//   }
// }

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

const displayNames = {
  all: "All",
  flower: "Flower",
  prerolls: "Pre-Rolls",
  vapes: "Vapes",
  edibles: "Edibles",
  tincture: "Tinctures",
  accessories: "Accessories",
};

function Shop() {
  // const [filterState, dispatch] = useReducer(filterReducer, initialFilterState);
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

  if (openFilter) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }

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
        (item) => item.product === filters.product
      );
    }

    if (filters.type) {
      newFilteredProducts = newFilteredProducts.filter(
        (item) => item.type === filters.type
      );
    }

    if (filters.weight) {
      newFilteredProducts = newFilteredProducts.filter(
        (item) => item.weight === filters.weight
      );
    }

    setFilteredProducts(newFilteredProducts);
  }

  const handleFilterChange = (name, value) => {
    setFilters({ ...filters, [name]: value });
  };

  useEffect(() => {
    filterProducts();
  }, [filters]);

  // const filteredItems = itemData.filter((item) => {
  //   const matchProducts =
  //     filterState.products.length === 0 ||
  //     filterState.products.includes(item.product);

  //   const matchType =
  //     filterState.type.length === 0 || filterState.type.includes(item.type);

  //   const matchWeight =
  //     filterState.weight.length === 0 ||
  //     filterState.weight.includes(item.weight);
  //   return matchProducts && matchType && matchWeight;
  // });

  const displayCategoryName = filters.product
    ? displayNames[category] || ""
    : "";

  return (
    <div>
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
      <section className="flex flex-col items-center pt-[192px] pb-[96px] px-[16px] bg-resin00 text-green00 gap-[24px] md:px-[48px] xl:px-[96px] ">
        {/* Desktop  */}
        <div className="w-full flex flex-col gap-[48px] place-self-start md:gap-[192px] md:flex-row ">
          <div className="flex justify-between ">
            <BackButton />
            <FilterButton setOpenFilter={setOpenFilter} />
          </div>
          <div className="font-font02 text-[47px]">
            {filters.product.charAt(0).toUpperCase() + filters.product.slice(1)}
          </div>
        </div>
        <div className=" w-full  md:grid grid-cols-[auto_1fr] divide-x-2 gap-x-[24px] ">
          <Filter
            filters={filters}
            handleFilterChange={handleFilterChange}
            resetFilters={resetFilters}
            openFilter={openFilter}
            setOpenFilter={setOpenFilter}
          />
          {filteredProducts?.length > 0 ? (
            <ul className="grid  grid-cols-2 gap-y-[24px] items-start gap-x-[16px]  min-[1000px]:grid-cols-3 min-[1000px]:gap-x-[24px]">
              {filteredProducts.map((data) => (
                <ShopItem item={data} key={data.id} />
              ))}
            </ul>
          ) : (
            <div className="flex h-screen justify-center w-full pt-[25%] font-font03 text-[16px] text-green00 md:text-[20px]">
              No items match the filter settings.
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default Shop;

// {/* Mobile */}
// {/* <div className="flex items-center justify-between text-green09 md:hidden">
//   <div className="flex items-center gap-[8px] font-font01">
//     <span>
//       <img src="/public/icons/back.svg" />
//     </span>
//     Back
//   </div>
//    <div className="flex gap-[24px]">
//     <div className="flex gap-[4px] border-2 px-[8px] py-[8px] rounded-lg font-font01 items-center ">
//       Filter
//       <span>
//         <img src="/public/icons/filter.svg"></img>
//       </span>
//     </div>
//     <div className="flex gap-[2px] border-2 px-[8px] py-[8px] rounded-lg font-font01 ">
//       sort
//       <span>
//         <img src="public/icons/sort.svg"></img>
//       </span>
//     </div>
//   </div> *
// </div>
// <div className="flex flex-col gap-[24px]">
//   <div className="font-font02 text-[76px] md:hidden">Flower</div>
//   <ul className="grid grid-cols-2 gap-y-[48px] gap-x-[16px]  sm:gap-x-[32px] md:hidden">
//     {itemData.map((data) => (
//       <ShopItem item={data} key={data.id} />
//     ))}
//   </ul>
// </div> */}
