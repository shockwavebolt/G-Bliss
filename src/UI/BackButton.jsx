import { useNavigate } from "react-router-dom";

function BackButton() {
  const navigate = useNavigate();
  return (
    <button
      className="flex items-center gap-[8px] font-font01"
      onClick={() => navigate(-1)}
    >
      <span className="cursor-pointer">
        <img src="public/icons/back.svg" />
      </span>
      Back
    </button>
  );
}

export default BackButton;
