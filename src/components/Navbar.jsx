import React, { useState } from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";
import { FaChevronDown } from "react-icons/fa";
import { FiMenu, FiX, FiSearch } from "react-icons/fi";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/careers", label: "Careers" },
  { href: "/contacts", label: "Contact" },
  { href: "/licence", label: "Licence" },
];

const houseLinks = [
  { href: "/software-company", label: "Software Company" },
  { href: "/importation-logistics", label: "Importation / Logistics" },
  { href: "/management-company", label: "Management Company" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  return (
    <nav className="fixed top-0 left-0 w-full py-2 md:py-3 z-50 bg-white/95 backdrop-blur-md shadow-md text-sm">
      <div className="flex items-center justify-between px-4 sm:px-6 lg:px-12">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src={assets.logo}
            alt="Ocean Air Express Logo"
            className="h-10 w-auto md:h-12 transition-transform hover:scale-105"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-6 text-gray-800 font-normal text-sm">
          {links.map((l) => (
            <li key={l.label} className="relative group">
              <Link
                to={l.href}
                className="hover:text-blue-600 transition-colors duration-300"
              >
                {l.label}
              </Link>
              <span className="absolute left-0 -bottom-0.5 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}

          {/* Dropdown */}
          <li
            className="relative"
            onMouseEnter={() => setActiveDropdown("house")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              aria-label="Our Other Business"
              className="hover:text-blue-600 flex items-center transition-colors duration-300"
            >
              Our Other Business <FaChevronDown className="ml-1 text-xs" />
            </button>
            <ul
              className={`absolute left-0 mt-2 w-56 bg-white shadow-xl rounded-lg overflow-hidden transition-all duration-300 text-sm ${
                activeDropdown === "house"
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-2 pointer-events-none"
              }`}
            >
              {houseLinks.map((h) => (
                <li key={h.label}>
                  <Link
                    to={h.href}
                    className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  >
                    {h.label}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center space-x-3">
          {/* Search */}
          <form className="flex items-center rounded-full bg-gray-100 px-3 py-1.5 text-sm">
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none text-xs w-28"
            />
            <button type="submit" className="text-gray-600 hover:text-blue-600">
              <FiSearch className="text-sm" />
            </button>
          </form>

          {/* My Portal */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown("portal")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="bg-blue-600 text-white px-4 py-1.5 rounded-full hover:bg-blue-700 flex items-center text-xs transition">
              My Portal <FaChevronDown className="ml-1 text-xs" />
            </button>
            <ul
              className={`absolute right-0 mt-2 w-40 bg-white shadow-xl rounded-lg overflow-hidden transition-all duration-300 text-sm ${
                activeDropdown === "portal"
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-2 pointer-events-none"
              }`}
            >
              <li>
                <Link
                  to="/login"
                  className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-600"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  to="/signup"
                  className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-600"
                >
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
          className="md:hidden text-2xl text-gray-800"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md shadow-lg transition-all duration-300 ${
          open ? "opacity-100 max-h-screen" : "opacity-0 max-h-0 overflow-hidden"
        }`}
      >
        <div className="p-4 space-y-4 text-gray-800 text-sm">
          {links.map((l) => (
            <Link
              key={l.label}
              to={l.href}
              className="block hover:text-blue-600"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}

          <div>
            <p className="font-semibold">Our Other Business</p>
            <ul className="pl-4 space-y-1 mt-1">
              {houseLinks.map((h) => (
                <li key={h.label}>
                  <Link
                    to={h.href}
                    className="block hover:text-blue-600"
                    onClick={() => setOpen(false)}
                  >
                    {h.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <form className="flex items-center rounded-full bg-gray-100 px-3 py-1.5">
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none text-xs flex-grow"
            />
            <button type="submit" className="text-gray-600 hover:text-blue-600">
              <FiSearch className="text-sm" />
            </button>
          </form>

          <div>
            <p className="font-semibold">My Portal</p>
            <ul className="pl-4 space-y-1 mt-1">
              <li>
                <Link
                  to="/login"
                  className="block hover:text-blue-600"
                  onClick={() => setOpen(false)}
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  to="/signup"
                  className="block hover:text-blue-600"
                  onClick={() => setOpen(false)}
                >
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
