import Filter from '../Components/Filter';
import NavBar from '../Components/NavBar';
import ShopItem from '../Components/ShopItem';
import BackButton from '../UI/BackButton';

import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import FilterButton from '../Components/FilterButton';
import MobileFilter from '../Components/MobileFilter';
import ShopItemSkeleton from '../Components/ShopItemSkeleton';
// import { supabase } from '../supabaseClient';
import flowerData from '../data/flowerData';
import preRollsData from '../data/preRollsData';
import vapesData from '../data/vapesData';
import edibleData from '../data/edibleData';
import tincturesData from '../data/tincturesData';
import accessoriesData from '../data/accessoriesData';

const allHardcodedItems = [
  ...flowerData,
  ...preRollsData,
  ...vapesData,
  ...edibleData,
  ...tincturesData,
  ...accessoriesData,
];

// const categoryIdToProduct = {
//   1: 'flower',
//   2: 'edibles',
//   3: 'pre-rolls',
//   4: 'vapes',
//   5: 'accessories',
//   6: 'tinctures',
// };

function Shop() {
  const { category } = useParams();
  const [itemData, setItemData] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState(false);
  const [filters, setFilters] = useState({
    product: category === 'all' ? '' : category,
    type: '',
    weight: '',
  });

  useEffect(() => {
    // async function fetchProducts() {
    //   const { data, error } = await supabase.from('Products').select('*');
    //   if (error) {
    //     setFetchError(true);
    //   } else {
    //     setItemData(
    //       data.map((row) => ({
    //         ...row,
    //         img: row.image_url,
    //         product: categoryIdToProduct[row.category_id] ?? '',
    //       })),
    //     );
    //   }
    //   setLoading(false);
    // }
    // fetchProducts();
    setItemData(allHardcodedItems);
    setLoading(false);
  }, []);

  const [openFilter, setOpenFilter] = useState(false);

  const resetFilters = () => {
    setFilters((filters) => ({
      ...filters,
      type: '',
      weight: '',
    }));
  };

  const handleFilterChange = (name, value) => {
    if (name === 'product' && value === 'all') {
      setFilters({ ...filters, [name]: '' });
    } else {
      setFilters({ ...filters, [name]: value });
    }
  };

  useEffect(() => {
    let result = [...itemData];

    if (filters.product) {
      result = result.filter((item) => item.product === filters.product);
    }

    if (filters.type) {
      result = result.filter((item) => item.type === filters.type);
    }

    if (filters.weight) {
      result = result.filter((item) => item.weight === filters.weight);
    }

    setFilteredProducts(result);
  }, [itemData, filters]);

  return (
    <div className="flex min-h-screen flex-col">
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
      <section className="bg-green00 text-resin00 flex flex-1 flex-col items-center gap-[12px] px-[16px] pt-[128px] pb-[96px] md:px-[48px] xl:px-[96px]">
        <div className="flex w-full flex-col gap-[48px] place-self-start md:flex-row md:gap-[192px]">
          <div className="flex justify-between">
            <BackButton />
            <FilterButton setOpenFilter={setOpenFilter} />
          </div>
          <div className="font-font02 cat_title_shadow text-[26px] tracking-wide md:text-[47px]">
            {filters.product
              ? filters.product.charAt(0).toUpperCase() +
                filters.product.slice(1)
              : 'All'}
          </div>
        </div>
        <div className="w-full grid-cols-[auto_1fr] gap-x-[24px] divide-x-1 md:grid">
          <Filter
            filters={filters}
            handleFilterChange={handleFilterChange}
            resetFilters={resetFilters}
            openFilter={openFilter}
            setOpenFilter={setOpenFilter}
          />
          {loading ? (
            <ul className="grid grid-cols-2 items-start gap-x-[12px] gap-y-[12px] min-[1000px]:grid-cols-3 min-[1000px]:gap-x-[24px] min-[1000px]:gap-y-[24px]">
              {Array.from({ length: 6 }).map((_, i) => (
                <ShopItemSkeleton key={i} />
              ))}
            </ul>
          ) : filteredProducts.length > 0 ? (
            <ul className="grid grid-cols-2 items-start gap-x-[12px] gap-y-[12px] min-[1000px]:grid-cols-3 min-[1000px]:gap-x-[24px] min-[1000px]:gap-y-[24px]">
              {filteredProducts.map((data) => (
                <ShopItem item={data} key={data.id} />
              ))}
            </ul>
          ) : fetchError ? (
            <div className="font-font03 text-resin00 flex h-screen w-full justify-center pt-[25%] text-[16px] md:text-[20px]">
              Something went wrong. Please try again later.
            </div>
          ) : (
            <div className="font-font03 text-resin00 flex h-screen w-full justify-center pt-[25%] text-[16px] md:text-[20px]">
              No items match the filter settings.
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default Shop;
