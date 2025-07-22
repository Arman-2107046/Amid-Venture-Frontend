import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Business from "./pages/Business";
import About from "./pages/About";
import Sustainability from "./pages/Sustainability";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CursorDot from "./components/CursorDot";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Router>
      <CursorDot />
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/business" element={<Business />} />
        <Route path="/about" element={<About />} />
        <Route path="/sustainability" element={<Sustainability />} />
        <Route path="/business" element={<Business />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/service" element={<TermsOfService />} />
      </Routes>
    </Router>
  );
};

export default App;
