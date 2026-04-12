import { Outlet, useLocation } from "react-router";
import { useEffect } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Chatbot } from "../components/Chatbot";

export function Root() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div style={{ fontFamily: "'Inter', sans-serif" }} className="min-h-screen bg-[#F5F7FA]">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      {/* Global floating chatbot — visible on all pages */}
      <Chatbot />
    </div>
  );
}