function Option({ filters, yy, handleFilterChange, children, resetFilters }) {
  return (
    <div
      className={`flex gap-[4px] font-font03 font-semibold hover:text-orange00 ${
        filters[yy] === children ? "text-orange00" : ""
      } cursor-pointer`}
      onClick={() => {
        handleFilterChange(yy, children);
        resetFilters();
      }}
    >
      <span>
        {filters[yy] === children ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
          >
            <path
              d="M12 2.5C17.52 2.5 22 6.98 22 12.5C22 18.02 17.52 22.5 12 22.5C6.48 22.5 2 18.02 2 12.5C2 6.98 6.48 2.5 12 2.5ZM12 4.5C7.58 4.5 4 8.08 4 12.5C4 16.92 7.58 20.5 12 20.5C16.42 20.5 20 16.92 20 12.5C20 8.08 16.42 4.5 12 4.5ZM12 7.5C14.7614 7.5 17 9.73858 17 12.5C17 15.2614 14.7614 17.5 12 17.5C9.23858 17.5 7 15.2614 7 12.5C7 9.73858 9.23858 7.5 12 7.5Z"
              fill="#CF5C36"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
          >
            <path
              d="M12 2.5C17.52 2.5 22 6.98 22 12.5C22 18.02 17.52 22.5 12 22.5C6.48 22.5 2 18.02 2 12.5C2 6.98 6.48 2.5 12 2.5ZM12 4.5C7.58 4.5 4 8.08 4 12.5C4 16.92 7.58 20.5 12 20.5C16.42 20.5 20 16.92 20 12.5C20 8.08 16.42 4.5 12 4.5Z"
              fill="currentColor"
            />
          </svg>
        )}
      </span>
      {children.charAt(0).toUpperCase() + children.slice(1)}
    </div>
  );
}

export default Option;
