import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Global Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Home Page Sections
import Header from "./components/Header";
import LogisticsSolutions from "./components/LogisticsSolutions";
import Testimonials from "./components/Testimonials";

// Standalone Pages
import About from "./components/About";
import Contacts from "./components/Contacts";
import Careers from "./components/careers";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import License from "./components/License"; 
import AirFreight from "./components/AirFreight"; // ✅ New page

const App = () => {
  return (
    <Router>
      <div className="w-full overflow-hidden flex flex-col min-h-screen">
        {/* ✅ Navbar always at the top */}
        <Navbar />

        {/* ✅ Main Content */}
        <main className="flex-grow">
          <Routes>
            {/* Home Page */}
            <Route
              path="/"
              element={
                <>
                  <Header />
                  <LogisticsSolutions />
                  <HeroSection />
                  <Testimonials />
                </>
              }
            />

            {/* About Page */}
            <Route path="/about" element={<About />} />

            {/* Services Page */}
            <Route path="/services" element={<Services />} />

            {/* Air Freight Page */}
            <Route path="/air-freight" element={<AirFreight />} />

            {/* Contacts Page */}
            <Route path="/contacts" element={<Contacts />} />

            {/* Careers Page */}
            <Route path="/careers" element={<Careers />} />

            {/* Licence Page */}
            <Route path="/licence" element={<License />} />
          </Routes>
        </main>

        {/* ✅ Footer always at the bottom */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
