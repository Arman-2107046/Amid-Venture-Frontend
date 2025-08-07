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

// Apparel Subpages
import Knitwear from "./pages/ApparelSubpages/Knitwear";
// import Sportswear from "./pages/ApparelSubpages/Sportswear";
// import Outerwear from "./pages/ApparelSubpages/Outerwear";
import Woven from "./pages/ApparelSubpages/Woven";
// import Denim from "./pages/ApparelSubpages/Denim";
// import Kidswear from "./pages/ApparelSubpages/Kidswear";
import Sweater from "./pages/ApparelSubpages/Sweater";
import ProcessPage from "./pages/ApparelSubpages/ProcessPage";
// import Beachwear from "./pages/ApparelSubpages/Beachwear";
// import Swimwear from "./pages/ApparelSubpages/Swimwear";
// import Intimatewear from "./pages/ApparelSubpages/IntimateWear";
// import HomeTextile from "./pages/ApparelSubpages/HometextileImages";

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

        <Route path="/knitwear" element={<Knitwear />} />
        {/* <Route path="/sportswear" element={<Sportswear />} />
        <Route path="/outerwear" element={<Outerwear />} /> */}
        <Route path="/woven" element={<Woven />} />
        {/* <Route path="/denim" element={<Denim />} />
        <Route path="/kidswear" element={<Kidswear />} /> */}
        <Route path="/sweater" element={<Sweater />} />
        {/* <Route path="/beachwear" element={<Beachwear />} />
        <Route path="/swimwear" element={<Swimwear />} />
        <Route path="/intimatewear" element={<Intimatewear />} />
        <Route path="/hometextile" element={<HomeTextile/>} /> */}






        <Route path="/processpage" element={<ProcessPage />} />

      </Routes>
    </Router>
  );
};

export default App;
