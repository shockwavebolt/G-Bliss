function Option({ filters, yy, handleFilterChange, children }) {
  return (
    <div
      className={`flex gap-[4px] font-font03 ${
        filters[yy] === children ? "text-magenta" : ""
      } cursor-pointer`}
      onClick={() => handleFilterChange(yy, children)}
    >
      <span>
        <img
          src={
            filters[yy] === children
              ? "/public/icons/checked.svg"
              : "/public/icons/unchecked.svg"
          }
        />
      </span>
      {children.charAt(0).toUpperCase() + children.slice(1)}
    </div>
  );
}

export default Option;
