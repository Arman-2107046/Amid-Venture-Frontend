// import { useState } from "react";
// import { Search } from "lucide-react";
// import MenuButton from "./GlobalComponents/MenuButton";
// // import { useAsyncError } from "react-router-dom";

// const tabLinks = [
//   { name: "Home", id: "home" },
//   { name: "About", id: "about" },
//   { name: "Services", id: "services" },
//   { name: "Contact", id: "contact" },
// ];

// const Navbar = () => {
//   const [showSearch, setShowSearch] = useState(false);
//   // const [menu,setMenu]=useState(false);
//   const [query, setQuery] = useState("");

//   const handleSearch = (e: React.FormEvent) => {
//     e.preventDefault();
//     const match = tabLinks.find((tab) =>
//       tab.name.toLowerCase().includes(query.toLowerCase())
//     );
//     if (match) {
//       document.getElementById(match.id)?.scrollIntoView({ behavior: "smooth" });
//       setShowSearch(false);
//       setQuery("");
//     }
//   };

//   return (
//     <>
//       <nav className="fixed top-0 left-0 z-50 flex items-center justify-between w-full px-12 pb-2 pt-9 bg-slate-200">
//         {/* Left: Menu */}
//         <div className="">
//            {/* <div className="flex flex-row justify-around py-2.5 border rounded-full px-7 border-slate-900 border-5">
          
//           <span className="text-[.81rem] pr-2">MENU</span>
            
//             <Menu className="cursor-pointer text-slate-900" size={20} />
//           </div> 
//        */}

//       <MenuButton/>
//         </div>

//         {/* Center: Logo */}
//         <div className="">
//           <img src="/amid-crop2.png" alt="AMID LOGO" className="w-[6rem]" />

//           {/* You can also use an <img src="/logo.png" className="h-8" /> here */}
//         </div>

//         {/* Right: Search */}
//         <div className="">
//           <Search
//             className="cursor-pointer text-slate-900"
//             size={20}
//             onClick={() => setShowSearch(true)}
//           />
//         </div>
//       </nav>

//       {/* Search Popup */}

//       {showSearch && (
//         <div className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-black/50 backdrop-blur-sm">
//           <form
//             onSubmit={handleSearch}
//             className="bg-white rounded-xl p-6 shadow-xl w-[90%] max-w-md"
//           >
//             <input
//               autoFocus
//               type="text"
//               value={query}
//               onChange={(e) => setQuery(e.target.value)}
//               placeholder="Search tab name..."
//               className="w-full p-3 border border-gray-300 rounded-md focus:outline-none"
//             />
//             <button
//               type="submit"
//               className="w-full px-4 py-2 mt-4 text-white bg-black rounded-md"
//             >
//               Go
//             </button>
//           </form>
//         </div>
//       )}
//     </>
//   );
// };

// export default Navbar;



// import { useState } from "react";
import { Search } from "lucide-react";
import MenuButton from "./GlobalComponents/MenuButton";

// const tabLinks = [
//   { name: "Home", id: "home" },
//   { name: "About", id: "about" },
//   { name: "Services", id: "services" },
//   { name: "Contact", id: "contact" },
// ];

const Navbar = () => {
  // const [showSearch, setShowSearch] = useState(false);
  // const [query, setQuery] = useState("");

  // const handleSearch = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   const match = tabLinks.find((tab) =>
  //     tab.name.toLowerCase().includes(query.toLowerCase())
  //   );
  //   if (match) {
  //     document.getElementById(match.id)?.scrollIntoView({ behavior: "smooth" });
  //     setShowSearch(false);
  //     setQuery("");
  //   }
  // };

  return (
    <>
      <nav className="fixed top-0 left-0 z-50 flex items-center justify-between w-full px-10 py-9">
        {/* Left: Menu Button */}
        <div className="flex-shrink-0">
          <MenuButton />
        </div>

        {/* Center: Logo */}
        <div className="absolute transform -translate-x-1/2 left-1/2">
          <img src="/amid-crop2.png" alt="AMID LOGO" className="w-[10rem]" />
        </div>

        {/* Right: Search */}
        <div className="flex-shrink-0">
          <Search
            className="cursor-pointer text-slate-900"
            size={20}
            // onClick={() => setShowSearch(true)}
          />
        </div>
      </nav>

      {/* Search Popup */}
      {/* {showSearch && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
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
      )} */}
    </>
  );
};

export default Navbar;
