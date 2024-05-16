import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function CodeLink({ path, children }) {
  return (
    <Link to={path} className="absolute  bottom-1 right-1">
      <div className="bg-lightGrayPlus w-fit flex text-sm rounded-md p-1 gap-1 ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          className="w-[20px] h-[20px]"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        >
          <path d="M17 18a28.201 28.201 0 0 0 4.848-5.49.93.93 0 0 0 0-1.02A28.201 28.201 0 0 0 17 6M7.004 18a28.2 28.2 0 0 1-4.848-5.49.93.93 0 0 1 0-1.02A28.2 28.2 0 0 1 7.004 6m7-1.999-4 16"></path>
        </svg>
        {children}
      </div>
    </Link>
  );
}

export default CodeLink;
