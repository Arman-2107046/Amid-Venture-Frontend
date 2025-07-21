import { useState } from "react";
import { Menu, Search } from "lucide-react";
// import { useAsyncError } from "react-router-dom";

const tabLinks = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Services", id: "services" },
  { name: "Contact", id: "contact" },
];

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);
  // const [menu,setMenu]=useState(false);
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const match = tabLinks.find(tab =>
      tab.name.toLowerCase().includes(query.toLowerCase())
    );
    if (match) {
      document.getElementById(match.id)?.scrollIntoView({ behavior: "smooth" });
      setShowSearch(false);
      setQuery("");
    }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 z-50 flex items-center justify-between w-full px-6 py-2 bg-slate-200">
        {/* Left: Menu */}
        <div className="flex-1">
          <Menu
           className="cursor-pointer text-slate-900"
          size={28}
           />
        </div>

        {/* Center: Logo */}
        <div className="flex justify-center flex-1">
          <h1 className="text-xl font-bold text-slate-900">
            <img src="/amid-crop2.png" alt="AMID LOGO"  className="w-[6rem]"/>
          </h1>
          {/* You can also use an <img src="/logo.png" className="h-8" /> here */}
        </div>

        {/* Right: Search */}
        <div className="flex justify-end flex-1">
          <Search
            className="cursor-pointer text-slate-900"
            size={28}
            onClick={() => setShowSearch(true)}
          />
        </div>
      </nav>


      {/* Menu <Screen>  */}

{/* { menu && (




)
  
} */}
      {/* Search Popup */}
      {showSearch && (
        <div className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-black/50 backdrop-blur-sm">
          <form
            onSubmit={handleSearch}
            className="bg-white rounded-xl p-6 shadow-xl w-[90%] max-w-md"
          >
            <input
              autoFocus
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search tab name..."
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none"
            />
            <button
              type="submit"
              className="w-full px-4 py-2 mt-4 text-white bg-black rounded-md"
            >
              Go
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default Navbar;
