import { useNavigate } from "react-router-dom";

const GoBack = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center  gap-1 sm:hidden">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 font-grotesk text-sm font-medium capitalize text-smoke-700"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="currentColor"
        >
          <path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z" />
        </svg>
        <span>back</span>
      </button>
    </div>
  );
};

export default GoBack;
