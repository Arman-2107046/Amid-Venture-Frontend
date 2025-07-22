

import { Search } from "lucide-react";
import MenuButton from "./GlobalComponents/MenuButton";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 z-50 flex items-center w-full px-5 py-5 md:px-10 md:py-9">
      {/* Left: Menu Button (always visible) */}
      <div className="flex-shrink-0">
        <MenuButton />
      </div>

      {/* Spacer that only exists on lg screens */}
      <div className="flex-1 hidden lg:block" />

      {/* Logo: clickable and navigates home */}
      <Link
        to="/"
        className="ml-auto lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:ml-0"
        aria-label="Go to Home"
      >
        <img src="/amid-crop2.png" alt="AMID LOGO" className="w-[7rem] md:w-[10rem]" />
      </Link>

      {/* Spacer that only exists on lg screens */}
      <div className="flex-1 hidden lg:block" />

      {/* Search: visible only on lg */}
      <div className="flex-shrink-0 hidden lg:block">
        <Search className="cursor-pointer text-slate-900" size={20} />
      </div>
    </nav>
  );
};

export default Navbar;



