import { useState } from "react";
import flowerData from "../data/flowerData";
import preRollsData from "../data/preRollsData";
import vapesData from "../data/vapesData";
import edibleData from "../data/edibleData";
import tincturesData from "../data/tincturesData";
import accessoriesData from "../data/accessoriesData";
import SearchedItem from "./SearchedItem";

const allItems = [
  ...flowerData,
  ...preRollsData,
  ...vapesData,
  ...edibleData,
  ...tincturesData,
  ...accessoriesData,
];

function SearchBox({ setOpenSearch }) {
  const [query, setQuery] = useState("");

  const results = query.trim()
    ? allItems.filter((item) =>
        item.name.toLowerCase().includes(query.toLowerCase()),
      )
    : [];

  return (
    <div className="absolute top-0 left-0 z-50 flex items-center justify-center w-full backdrop-blur-sm">
      <div className="w-[500px] h-[100vh] overflow-y-auto flex flex-col px-[24px] py-[48px] gap-[40px] bg-green01">
        <div className="flex justify-between border-b border-resin00">
          <div className="font-font02 text-[26px] text-resin00 cartShadow tracking-wide">
            Search
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="44"
            viewBox="0 0 28 29"
            fill="none"
            className="text-[#E6E1C5] hover:text-[#CF5C36] transition-colors duration-200 ease-in-out cursor-pointer"
            onClick={() => setOpenSearch(false)}
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14 12.8599L25.438 1.41993C25.73 1.12793 26.116 0.981934 26.5 0.981934C27.308 0.981934 28 1.62993 28 2.47993C28 2.86593 27.854 3.24993 27.562 3.54393L16.122 14.9819L27.56 26.4199C27.854 26.7139 28 27.0979 28 27.4819C28 28.3359 27.302 28.9819 26.5 28.9819C26.116 28.9819 25.73 28.8359 25.438 28.5439L14 17.1059L2.562 28.5439C2.27 28.8359 1.884 28.9819 1.5 28.9819C0.698 28.9819 0 28.3359 0 27.4819C0 27.0979 0.146 26.7139 0.44 26.4199L11.878 14.9819L0.438 3.54393C0.146 3.24993 0 2.86593 0 2.47993C0 1.62993 0.692 0.981934 1.5 0.981934C1.884 0.981934 2.27 1.12793 2.562 1.41993L14 12.8599Z"
              fill="currentColor"
            />
          </svg>
        </div>

        <div className="flex items-center">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex h-[40px] w-full rounded-full bg-resin00 font-font03  focus:outline-none placeholder:font-font01 px-[16px] text-[16px] text-green09"
            placeholder="Search Products..."
          />
        </div>

        {query.trim() && (
          <ul className="flex flex-col  gap-[32px]">
            {results.length > 0 ? (
              results.map((item) => <SearchedItem key={item.id} item={item} />)
            ) : (
              <div className="font-font03 text-resin00 text-[14px]">
                No products found.
              </div>
            )}
          </ul>
        )}
      </div>
    </div>
  );
}

export default SearchBox;
