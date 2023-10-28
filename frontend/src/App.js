import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/shared/Navbar/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Courses from "./pages/Courses/Courses";
import Footer from "./components/shared/Footer/Footer";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions/TermsConditions";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import ScrollToTopButton from "./components/ScrollToTopButton/ScrollToTopButton";
import NotFound from "./pages/NotFound/NotFound";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: 'ease-in-sine',
    });
  }, []);

  const includedPaths = ["/", "/about", "/contact", "/courses", "/privacy-policy", "/terms-conditions"];
  return (

    <>
      <Router>
        {includedPaths.includes(window.location.pathname) && <Navbar />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="*" Component={NotFound} />
        </Routes>
        <ScrollToTopButton />
        {includedPaths.includes(window.location.pathname) && <Footer />}
      </Router>
    </>
  );
}

export default App;
