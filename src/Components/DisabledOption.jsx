function DisabledOption({ children }) {
  return (
    <div className="flex gap-[4px] font-font0 text-resin01">
      <span>
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
      </span>
      {children.charAt(0).toUpperCase() + children.slice(1)}
    </div>
  );
}

export default DisabledOption;
