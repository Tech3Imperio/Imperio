import React, { useState } from "react";
import { Link } from "react-router-dom";
import style from "./style.module.css";
import { imageLogo } from "../../assets/img/images";
import { Squash as Hamburger } from "hamburger-react";

export const NavBar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const products = [
    { name: "Product1", url: "/product1" },
    { name: "Product2", url: "/product2" },
    { name: "Product3", url: "/product3" },
  ];
  const navItems = [
    { text: "Home", url: "home" },
    { text: "About Us", url: "about" },
    { text: "Product", url: "product", dropdown: true },
    { text: "Project", url: "project" },
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
      <ul className="hidden md:flex relative">
        {navItems.map((item, index) => (
          <li
            key={index}
            className={`p-4 hover:bg-dark_blue_tenth rounded-xl m-2 cursor-pointer duration-300 hover:text-black_thirty relative group `}
          >
            <Link to={item.url} className={`${style.navbar} primaryText `}>
              {item.text}
            </Link>
            {/* DropDown */}
            {item.dropdown && (
              <ul
                className={`rounded-lg  space-y-2 w-full absolute top-full left-0 hover:block group-hover:block hidden  bg-transparent text-black_thirty shadow-lg mt-2`}
              >
                {products.map((product, position) => (
                  <li
                    key={position}
                    className="rounded-lg bg-white_sixty hover:text-black border-grey hover:border-black border-2 text-[grey] px-4 py-2"
                  >
                    <Link to={product.url}>{product.name}</Link>
                  </li>
                ))}
              </ul>
            )}
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
        <li className="w-full m-4 flex justify-center">
          <img src={imageLogo[0]} alt="Logo" className="w-32 h-auto mr-2" />
        </li>

        {/* Mobile Navigation Items */}
        {navItems.map((item, index) => (
          <li
            key={index}
            className={`p-4 border-b rounded-xl hover:bg-dark_blue_tenth duration-300 hover:text-black cursor-pointer border-gray-600 relative group`}
          >
            <Link to={item.url} className={`${style.navbar} primaryText`}>
              {item.text}
            </Link>
            {item.dropdown && (
              <ul
                className={`${style.dropdown} space-y-2 w-[65%] absolute top-[-10px] left-[101%] hidden bg-white_sixty text-black_thirty shadow-lg mt-2 group-hover:block `}
              >
                {products.map((product, position) => (
                  <li
                    key={position}
                    className=" rounded-lg bg-white_sixty hover:text-black border-grey hover:border-black hover:block border-2 text-black px-4 py-2"
                  >
                    <Link to={product.url}>{product.name}</Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
