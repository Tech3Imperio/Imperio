import React from "react";
import { imageLogo } from "../../assets/img/images";
import {
  FaFacebook as Facebook,
  FaXTwitter as Twitter,
  FaInstagram as Instagram,
  FaYoutube as Youtube,
  FaLinkedin as Linkedin,
  FaQuora as Quora,
  FaPinterestP as Pinterest,
} from "react-icons/fa6";

export const Footer = () => {
  return (
    <footer className="bg-black_thirty text-white_sixty">
      <div className="container mx-auto px-5 py-4">
        <div className="-mx-4 -mb-10 flex flex-wrap text-center md:text-left">
          <div className="max-sm:pb-8 mx-auto w-full sm:w-[50%] md:w-[30%] flex-shrink-0 text-center md:mx-0 md:text-left">
            <a
              href="/home"
              className="flex items-center justify-center font-medium md:justify-start"
            >
              <div className={`flex items-center`}>
                <img
                  src={imageLogo[0]}
                  alt="Logo"
                  className="w-48 h-auto mr-2 max-sm:w-24"
                />
              </div>
            </a>
            <p className="title mt-2 text-sm">
              Where innovation meets timeless Elegance
            </p>
          </div>
          <div className="flex w-full sm:w-[50%] max-sm:flex-col md:w-[70%] flex-row-reverse">
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3">
              <h2 className="title text-base mb-3 font-medium tracking-widest">
                CONTACT US
              </h2>
              <ul className="primaryText max-sm:text-sm mb-10 list-none">
                <li>
                  <div>
                    1, Aman Chambers, New Queens Rd, Charni Road, Mumbai,
                    Maharashtra 400004
                  </div>
                </li>
                <li>
                  <div>
                    <span style={{ fontWeight: "bolder" }}>Phone Number:</span>{" "}
                    +91 8591953385
                  </div>
                </li>
                <li>
                  <div>
                    <span style={{ fontWeight: "bolder" }}>Email:</span>{" "}
                    hello@imperiorailing.com
                  </div>
                </li>
                <li>
                  <div>
                    <span style={{ fontWeight: "bolder" }}>Website:</span>{" "}
                    www.imperiorailing.com
                  </div>
                </li>
              </ul>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3">
              <h2 className="title text-base mb-3 font-medium tracking-widest">
                GET IN TOUCH
              </h2>
              <nav className="flex flex-col items-center space-y-4 mb-10 list-none relative mr-2 w-full sm:w-64">
                <li>
                  <label htmlFor="footer-field" className="text-sm leading-7">
                    Your Email ID
                  </label>
                  <input
                    type="text"
                    placeholder="Email ID"
                    id="footer-field"
                    name="footer-field"
                    className="w-full rounded border border-[gray] bg-white_sixty px-3 py-1 text-base leading-8 text-white_sixty outline-none transition-colors duration-200 ease-in-out focus:border-[indigo] focus:bg-transparent focus:ring-2 focus:ring-[indigo]"
                  />
                </li>
                <li>
                  <button className="px-4 py-2 rounded-md border border-[#D1D5DB] hover:text-black_thirty hover:bg-white_sixty">
                    Submit
                  </button>
                </li>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-[#E5E7EB]">
        <div className="container mx-auto flex flex-wrap items-center px-5 py-8">
          <span className="space-x-4 mt-6 inline-flex w-full justify-center md:w-auto md:justify-start lg:ml-auto lg:mt-0">
            <a
              href="https://www.instagram.com/imperio.railings/"
              className=" text-white_sixty hover:text-black text-2xl"
            >
              <Instagram />
            </a>
            <a
              href="https://www.facebook.com/imperiorailingsystem/"
              className=" text-white_sixty hover:text-[#007bff] text-2xl"
            >
              <Facebook />
            </a>
            <a
              href="https://twitter.com/ImperioRailing"
              className=" text-white_sixty hover:text-black text-2xl"
            >
              <Twitter />
            </a>
            <a
              href="https://www.linkedin.com/company/imperiorailingsystems/"
              className=" text-white_sixty hover:text-[#0a66c2] text-2xl"
            >
              <Linkedin />
            </a>
            <a
              href="https://www.youtube.com/channel/UCfc7xvEAq7E1KPy6xFA_msghttps://www.youtube.com/channel/UCfc7xvEAq7E1KPy6xFA_msg"
              className=" text-white_sixty hover:text-[#ff0000] text-2xl"
            >
              <Youtube />
            </a>
            <a
              href="https://www.quora.com/profile/Imperio-Railing-Systems"
              className=" text-white_sixty hover:text-[#f52936] text-2xl"
            >
              <Quora />
            </a>
            <a
              href="https://in.pinterest.com/ImperioRailing/"
              className=" text-white_sixty hover:text-[#e60023] text-2xl"
            >
              <Pinterest />
            </a>
          </span>
        </div>
      </div>
      <div className="bg-[grey]">
        <div className="container mx-auto flex flex-col flex-wrap px-5 py-4 sm:flex-row">
          <p className="text-center text-sm text-black_thirty sm:text-left">
            © 2024 Imperio —{" "}
            <a
              href="https://imperiorailing.com"
              className="ml-1 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Imperio Railing Systems
            </a>{" "}
            — All Rights Reserved
          </p>
          <span className="mt-2 w-full text-center text-sm sm:ml-auto sm:mt-0 sm:w-auto sm:text-left space-x-10">
            <a
              href="/"
              className="ml-1 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Privacy Policy
            </a>
            <a
              href="/"
              className="ml-1 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};
