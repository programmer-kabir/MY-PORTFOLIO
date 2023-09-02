import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import Content from "../../../Components/Content/Content";
const Navbar = () => {
  const [active, setActive] = useState(0);
  const [navbar, setNavbar] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeLink = "";
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  return (
    <div>
      <div className={`w-[100%] fixed z-50 mx-auto ${scrolled ? 'bgCustomGradient customShadow' : ''} text-black`}>
        <nav className="w-full p-3  hidden md:block">
          <div className="justify-between mx-auto md:items-center md:flex px-9">
            <div className="hidden md:inline-block">
              <div className="flex items-center justify-between mx-auto md:block">
                <Link className="flex items-center text-white">
                  <h2 className="text-3xl font-bold">KABIR</h2>
                </Link>
              </div>
            </div>

            <div className="">
              <ul className="text-[#A362FF] font-semibold items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                <li className="text-lg text-white hover:text-blue-600">
                  <ScrollLink
                    to="/"
                    className="cursor-pointer"
                    activeClass="text-[#A362FF] font-semibold"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                  >
                    Home
                  </ScrollLink>
                </li>
                <li className="text-white hover:text-blue-600">
                  <ScrollLink
                    to="about"
                    className="cursor-pointer"
                    activeClass="text-[#A362FF] font-semibold"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                  >
                    About
                  </ScrollLink>
                </li>
                <li className="text-white hover:text-blue-600">
                  <ScrollLink
                    to="skills"
                    className="cursor-pointer"
                    activeClass="text-[#A362FF] font-semibold"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                  >
                    Skills
                  </ScrollLink>
                </li>
                <li className="text-white hover:text-blue-600">
                  <ScrollLink
                    to="projects" // Replace with the ID of the projects section
                    className="cursor-pointer"
                    activeClass="text-[#A362FF] font-semibold"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                  >
                    Projects
                  </ScrollLink>
                </li>
                <li className="text-white hover:text-blue-600">
                  <ScrollLink
                    to="contact"
                    className="cursor-pointer"
                    activeClass="text-[#A362FF] font-semibold"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                  >
                    Contact Me
                  </ScrollLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      <div className="fixed w-[90%] z-50 bottom-0 left-0 right-0 mx-auto md:hidden">
        <ul className="flex w-full justify-between px-3 py-2 rounded-lg rounded-box customShadow  bgCustomGradient ">
          <li className="">
            <ScrollLink
              to="/"
              className="cursor-pointer"
              activeClass="text-[#A362FF] font-semibold"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              <a className="tooltip  " data-tip="Home">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              </a>
            </ScrollLink>
          </li>

          <li className="">
            <ScrollLink
              to="about"
              the
              contact
              section
              className="cursor-pointer"
              activeClass="text-[#A362FF] font-semibold"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              <a className="tooltip " data-tip="About">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 icon-white"
                  viewBox="0 0 448 512"
                >
                  <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
                </svg>
              </a>
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="skills"
              the
              contact
              section
              className="cursor-pointer"
              activeClass="text-[#A362FF] font-semibold"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              <a className="tooltip " data-tip="Skills">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 icon-white "
                  viewBox="0 0 512 512"
                >
                  <path d="M249.6 471.5c10.8 3.8 22.4-4.1 22.4-15.5V78.6c0-4.2-1.6-8.4-5-11C247.4 52 202.4 32 144 32C93.5 32 46.3 45.3 18.1 56.1C6.8 60.5 0 71.7 0 83.8V454.1c0 11.9 12.8 20.2 24.1 16.5C55.6 460.1 105.5 448 144 448c33.9 0 79 14 105.6 23.5zm76.8 0C353 462 398.1 448 432 448c38.5 0 88.4 12.1 119.9 22.6c11.3 3.8 24.1-4.6 24.1-16.5V83.8c0-12.1-6.8-23.3-18.1-27.6C529.7 45.3 482.5 32 432 32c-58.4 0-103.4 20-123 35.6c-3.3 2.6-5 6.8-5 11V456c0 11.4 11.7 19.3 22.4 15.5z" />
                </svg>
              </a>
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="projects"
              the
              contact
              section
              className="cursor-pointer"
              activeClass="text-[#A362FF] font-semibold"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              <a className="tooltip " data-tip="Projects">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 icon-white"
                  viewBox="0 0 512 512"
                >
                  <path d="M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160v96H192 320 512V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zM512 288H320v32c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V288H0V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V288z" />
                </svg>
              </a>
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="contact"
              the
              contact
              section
              className="cursor-pointer"
              activeClass="text-[#A362FF] font-semibold"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              <a className="tooltip " data-tip="Contact">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 icon-white"
                  viewBox="0 0 512 512"
                >
                  <path d="M96 0C60.7 0 32 28.7 32 64V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H96zM208 288h64c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16H144c-8.8 0-16-7.2-16-16c0-44.2 35.8-80 80-80zm-32-96a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zM512 80c0-8.8-7.2-16-16-16s-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V80zM496 192c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm16 144c0-8.8-7.2-16-16-16s-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V336z"></path>
                </svg>
              </a>
            </ScrollLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
