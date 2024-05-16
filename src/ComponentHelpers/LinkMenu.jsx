import { Link } from "react-router-dom";

function LinkMenu({ children, path }) {
  return (
    <Link
      to={path}
      className="bg-lightGray px-4 py-2 rounded-md hover:bg-lightGrayItem ease-in-out transition-all duration-100 hover:text-[#171717] focus:bg-lightGrayItem focus:text-[#171717]  "
    >
      {children}
    </Link>
  );
}

export default LinkMenu;
