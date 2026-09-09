function FilterButton({ setOpenFilter }) {
  return (
    <div
      className="group font-font01 hover:text-orange00 hover:border-orange00 flex cursor-pointer items-center gap-[4px] p-[12px] transition-colors duration-200 ease-in-out md:hidden"
      onClick={() => setOpenFilter(true)}
    >
      Filter
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        className="text-resin00 group-hover:text-orange00 h-6 w-6 transition-colors duration-200 ease-in-out"
      >
        <line
          x1="3"
          y1="6"
          x2="21"
          y2="6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="6"
          y1="12"
          x2="18"
          y2="12"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="9"
          y1="18"
          x2="15"
          y2="18"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

export default FilterButton;
