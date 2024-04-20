import React, { useState } from "react";
import { Link } from "react-router-dom";
import style from "./style.module.css";
import { imageLogo } from "../../assets/img/images";
import { Squash as Hamburger } from "hamburger-react";

export const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [showProductDropdown, setShowProductDropdown] = useState(false);
  const [showProjectDropdown, setShowProjectDropdown] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const handleProductDropdown = () => {
    setShowProductDropdown(!showProductDropdown);
  };

  const handleProjectDropdown = () => {
    setShowProjectDropdown(!showProjectDropdown);
  };

  const navItems = [
    { text: "Home", url: "home" },
    { text: "About Us", url: "about" },
    { text: "Product", url: "product", dropdown: true },
    { text: "Project", url: "project", dropdown: true },
    { text: "Blog", url: "blog" },
    { text: "FAQ", url: "faq" },
    { text: "Contact Us", url: "contact" },
  ];

  return (
    <div className="bg-black_thirty flex justify-between items-center h-24 mx-auto px-4 text-white_sixty">
      {/* Logo */}
      <div className={`flex items-center ${style.logo}`}>
        <img src={imageLogo[0]} alt="Logo" className="w-32 h-auto mr-2" />
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex">
        {navItems.map((item, index) => (
          <li
            key={index}
            className="p-4 hover:bg-dark_blue_tenth rounded-xl m-2 cursor-pointer duration-300 hover:text-black_thirty"
            onMouseEnter={() => {
              if (item.dropdown) {
                item.text === "Product"
                  ? setShowProductDropdown(true)
                  : setShowProjectDropdown(true);
              }
            }}
            onMouseLeave={() => {
              setShowProductDropdown(false);
              setShowProjectDropdown(false);
            }}
          >
            <Link
              to={item.url}
              className={`${style.navbar} primaryText`}
              onClick={() => {
                setShowProductDropdown(false);
                setShowProjectDropdown(false);
              }}
            >
              {item.text}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Navigation Icon */}
      <div className="block md:hidden pr-6">
        <Hamburger toggled={nav} toggle={handleNav} />
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? "fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-black_thirty ease-in-out duration-500"
            : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
        }
      >
        {/* Mobile Logo */}
        <div className="w-full m-4 flex justify-center">
          <img src={imageLogo[0]} alt="Logo" className="w-32 h-auto mr-2" />
        </div>

        {/* Mobile Navigation Items */}
        {navItems.map((item, index) => (
          <li
            key={index}
            className="p-4 border-b rounded-xl hover:bg-dark_blue_tenth duration-300 hover:text-black cursor-pointer border-gray-600"
            onMouseEnter={() => {
              if (item.dropdown) {
                item.text === "Product"
                  ? setShowProductDropdown(true)
                  : setShowProjectDropdown(true);
              }
            }}
            onMouseLeave={() => {
              setShowProductDropdown(false);
              setShowProjectDropdown(false);
            }}
          >
            <Link
              to={item.url}
              className={`${style.navbar} primaryText`}
              onClick={() => {
                setShowProductDropdown(false);
                setShowProjectDropdown(false);
              }}
            >
              {item.text}
            </Link>
          </li>
        ))}
      </ul>

      {/* Product Dropdown */}
      {showProductDropdown && (
        <div className="absolute top-24 left-0 bg-white border border-gray-300 rounded-lg p-4">
          <Link to="/product-1" className="block mb-2 hover:text-blue-700">
            Product 1
          </Link>
          <Link to="/product-2" className="block hover:text-blue-700">
            Product 2
          </Link>
        </div>
      )}

      {/* Project Dropdown */}
      {showProjectDropdown && (
        <div className="absolute top-24 left-0 bg-white border border-gray-300 rounded-lg p-4">
          <Link to="/project-1" className="block mb-2 hover:text-blue-700">
            Project 1
          </Link>
          <Link to="/project-2" className="block hover:text-blue-700">
            Project 2
          </Link>
        </div>
      )}
    </div>
  );
};

export default NavBar;
