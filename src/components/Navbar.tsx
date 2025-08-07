// import { Search } from "lucide-react";
// import MenuButton from "./GlobalComponents/MenuButton";
// import { Link } from "react-router-dom"; // Import Link from react-router-dom

// const Navbar = () => {
//   return (
//     <nav className="fixed top-0 left-0 z-50 flex items-center w-full px-5 py-5 md:px-10 md:py-9">
//       {/* Left: Menu Button (always visible) */}
//       <div className="flex-shrink-0">
//         <MenuButton />
//       </div>

//       {/* Spacer that only exists on lg screens */}
//       <div className="flex-1 hidden lg:block" />

//       {/* Logo: clickable and navigates home */}
//       <Link
//         to="/"
//         className="ml-auto lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:ml-0"
//         aria-label="Go to Home"
//       >
//         <img src="/amid-crop2.png" alt="AMID LOGO" className="w-[7rem] md:w-[10rem]" />
//       </Link>

//       {/* Spacer that only exists on lg screens */}
//       <div className="flex-1 hidden lg:block" />

//       {/* Search: visible only on lg */}
//       <div className="flex-shrink-0 hidden lg:block">
//         <Search className="cursor-pointer text-slate-900" size={20} />
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import { useState, useRef, useEffect } from "react";
import { Search } from "lucide-react";
import MenuButton from "./GlobalComponents/MenuButton";
import { Link, useNavigate } from "react-router-dom";

const routes = [
  { path: "/", label: "Home" },
  { path: "/business", label: "Business" },
  { path: "/about", label: "About" },
  { path: "/sustainability", label: "Sustainability" },
  { path: "/contact", label: "Contact" },
  { path: "/privacy", label: "Privacy Policy" },
  { path: "/service", label: "Terms Of Service" },
  { path: "/sourcing", label: "Sourcing" },
  { path: "/it", label: "IT" },
  { path: "/investments", label: "Investments" },
  { path: "/agriculture", label: "Agriculture" },
  { path: "/design", label: "Design" },
  { path: "/knitwear", label: "Knitwear" },
  { path: "/woven", label: "Woven" },
  { path: "/sweater", label: "Sweater" },
  { path: "/processpage", label: "Process Page" },
];

const Navbar = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [show404, setShow404] = useState(false);
  const [focusedSuggestion, setFocusedSuggestion] = useState<number | null>(
    null
  );
  const navigate = useNavigate();

  const inputRef = useRef<HTMLInputElement>(null);

  // Filter routes for autocomplete suggestions based on query (case-insensitive)
  const suggestions = query
    ? routes.filter((r) =>
        r.path.toLowerCase().startsWith("/" + query.toLowerCase())
      )
    : [];

  // Open search input and focus it
  const openSearch = () => {
    setSearchOpen(true);
    setQuery("");
    setFocusedSuggestion(null);
    setTimeout(() => inputRef.current?.focus(), 100);
  };

  // Handle Enter key or click on suggestion
  const handleSubmit = () => {
    const lowerQuery = "/" + query.toLowerCase();

    const matchedRoute = routes.find(
      (r) => r.path.toLowerCase() === lowerQuery
    );

    if (matchedRoute) {
      navigate(matchedRoute.path);
      setSearchOpen(false);
      setQuery("");
      setFocusedSuggestion(null);
    } else {
      // Show 404 popup
      setShow404(true);
    }
  };

  // Keyboard navigation for suggestions
  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setFocusedSuggestion((prev) => {
        if (prev === null) return 0;
        return prev < suggestions.length - 1 ? prev + 1 : 0;
      });
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setFocusedSuggestion((prev) => {
        if (prev === null) return suggestions.length - 1;
        return prev > 0 ? prev - 1 : suggestions.length - 1;
      });
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (
        focusedSuggestion !== null &&
        suggestions[focusedSuggestion] !== undefined
      ) {
        navigate(suggestions[focusedSuggestion].path);
        setSearchOpen(false);
        setQuery("");
        setFocusedSuggestion(null);
      } else {
        handleSubmit();
      }
    } else if (e.key === "Escape") {
      setSearchOpen(false);
      setQuery("");
      setFocusedSuggestion(null);
    }
  };

  // Click outside to close search
  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (
        searchOpen &&
        inputRef.current &&
        !inputRef.current.contains(e.target as Node)
      ) {
        setSearchOpen(false);
        setQuery("");
        setFocusedSuggestion(null);
      }
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, [searchOpen]);

  return (
    <>
      <nav className="fixed top-0 left-0 z-50 flex items-center w-full px-5 py-5 bg-transparent md:px-10 md:py-9">
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
          <img
            src="/amid-crop2.png"
            alt="AMID LOGO"
            className="w-[7rem] md:w-[10rem]"
          />
        </Link>

        {/* Spacer that only exists on lg screens */}
        <div className="flex-1 hidden lg:block" />

        {/* Search: visible only on lg */}
        <div className="relative flex-shrink-0 hidden lg:block">
          <Search
            className="cursor-pointer text-slate-900"
            size={20}
            onClick={openSearch}
            aria-label="Open search"
          />

          {/* Search popup */}
          {searchOpen && (
            <div className="absolute right-0 z-50 w-64 mt-2 bg-white border border-gray-300 rounded-md shadow-lg top-full">
              <input
                type="text"
                ref={inputRef}
                className="w-full px-3 py-2 border-b border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-stone-600"
                placeholder="Type page, e.g. knitwear"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setFocusedSuggestion(null);
                }}
                onKeyDown={onKeyDown}
                aria-autocomplete="list"
                aria-expanded={suggestions.length > 0}
                aria-haspopup="listbox"
                aria-controls="search-suggestion-list"
              />

              {suggestions.length > 0 && (
                <ul
                  id="search-suggestion-list"
                  role="listbox"
                  className="overflow-y-auto max-h-48"
                >
                  {suggestions.map((sugg, i) => (
                    <li
                      key={sugg.path}
                      role="option"
                      aria-selected={focusedSuggestion === i}
                      className={`cursor-pointer px-3 py-2 hover:bg-blue-100 ${
                        focusedSuggestion === i
                          ? "bg-blue-200 font-semibold"
                          : ""
                      }`}
                      onMouseDown={(e) => {
                        e.preventDefault(); // prevent input blur
                        navigate(sugg.path);
                        setSearchOpen(false);
                        setQuery("");
                        setFocusedSuggestion(null);
                      }}
                      onMouseEnter={() => setFocusedSuggestion(i)}
                    >
                      {sugg.label}{" "}
                      <span className="text-gray-500">
                        ({sugg.path.slice(1)})
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>
      </nav>

      {/* 404 popup */}
      {show404 && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40"
          style={{ zIndex: 9999 }} // super high z-index inline style
        >
          <div className="w-full max-w-sm p-6 text-center bg-white rounded-md shadow-lg">
            <h2 className="mb-4 text-2xl font-bold text-slate-900">404 Error</h2>
            <p className="mb-4">The page you are looking for does not exist.</p>
            <button
              onClick={() => setShow404(false)}
              className="px-4 py-2 text-white transition rounded bg-slate-900 hover:bg-slate-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
