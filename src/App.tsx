import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Menu Pages 
import Home from "./pages/Home";
import Business from "./pages/Business";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Sustainability from "./pages/Sustainability";

//Other Pages
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CursorDot from "./components/CursorDot";


// Business Pages
import Apparel from "./pages/Apparel";
import IT from "./pages/IT";
import Food from "./pages/Food";
import Accessories from "./pages/Accessories";
import Agriculture from "./pages/Agriculture";
import RealEstate from "./pages/RealEstate";
import Knitwear from "./pages/ApparelSubpages/Knitwear";





const App = () => {
  return (
    <Router>
      <CursorDot />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/business" element={<Business />} />
        <Route path="/about" element={<About />} />
        <Route path="/sustainability" element={<Sustainability />} />
        <Route path="/business" element={<Business />} />
        <Route path="/contact" element={<Contact />} />

        {/* FOOTER SUBPAGES  */}
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/service" element={<TermsOfService />} />

        {/* BUSINESS SUBPAGES  */}
        <Route path="/apparel" element={<Apparel />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/food" element={<Food />} />
        <Route path="/it" element={<IT />} />
        <Route path="/realestate" element={<RealEstate />} />
        <Route path="/agriculture" element={<Agriculture />} />

        {/* APPAREL SUBPAGES  */}

<Route path='/knitwear' element={<Knitwear/>} />
      </Routes>
    </Router>
  );
};

export default App;
