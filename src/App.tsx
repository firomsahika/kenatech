
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Hero from "./pages/hero/Hero";
import AboutPage from "./pages/about/AboutPage";
import ServicePage from "./pages/service/ServicePage";
import PromotePage from "./pages/promote/PromotePage";
import BrandingPage from "./pages/branding/BrandingPage";
import GrowOnlinePage from "./pages/growonline/GrowOnlinePage";
import Nav from "./components/Hero/header/Nav";
import Footer from "./pages/footer/Footer";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/promote" element={<PromotePage />} />
        <Route path="/branding" element={<BrandingPage />} />
        <Route path="/grow-online" element={<GrowOnlinePage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
