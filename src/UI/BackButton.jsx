import { useLocation, useNavigate } from "react-router-dom";

function BackButton() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <button
      className="group flex items-center gap-[4px] font-font01 cursor-pointer"
      onClick={() => navigate(-1)}
    >
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
        >
          <circle
            cx="24"
            cy="24"
            r="23"
            className={`${
              location.pathname === "/checkout"
                ? "stroke-resin00"
                : "stroke-green00"
            } group-hover:stroke-orange00 transition-colors duration-200`}
            strokeWidth="2"
          />
          <path
            d="M30.7915 23.0046H19.6215L24.5015 18.1246C24.8915 17.7346 24.8915 17.0946 24.5015 16.7046C24.3147 16.5173 24.061 16.4121 23.7965 16.4121C23.532 16.4121 23.2783 16.5173 23.0915 16.7046L16.5015 23.2946C16.1115 23.6846 16.1115 24.3146 16.5015 24.7046L23.0915 31.2946C23.4815 31.6846 24.1115 31.6846 24.5015 31.2946C24.8915 30.9046 24.8915 30.2746 24.5015 29.8846L19.6215 25.0046H30.7915C31.3415 25.0046 31.7915 24.5546 31.7915 24.0046C31.7915 23.4546 31.3415 23.0046 30.7915 23.0046Z"
            className={`${
              location.pathname === "/checkout"
                ? "fill-resin00"
                : "fill-green00"
            } group-hover:fill-orange00 transition-colors duration-200`}
          />
        </svg>
      </span>
      <span className="group-hover:text-[#CF5C36] transition-colors duration-200">
        Back
      </span>
    </button>
  );
}

export default BackButton;
