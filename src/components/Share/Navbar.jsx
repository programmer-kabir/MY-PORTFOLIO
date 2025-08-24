import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Content from "../Content";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav
      className={`fixed top-0 w-full py-5 transition-all duration-500 z-[100] ${
        isScrolled ? "bg-[#090909] shadow-lg" : "bg-transparent"
      }`}
    >
      <Content>
        <div className="flex justify-between items-center text-white">
          <h1 className="text-2e:\Desktop\Resume\Resume-of-Kabir-Hossen(Front-End developer).pdfxl font-bold">
            KABIR
          </h1>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none md:hidden"
          >
            {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>

          <div className="hidden md:flex space-x-6 text-base ">
            <ScrollLink
              to="/"
              className="hover:text-white text-[#cacaca] cursor-pointer "
              activeClass="text-white"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Home
            </ScrollLink>
            <ScrollLink
              to="/about"
              className="hover:text-white text-[#cacaca] cursor-pointer"
              activeClass="text-white"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              About Me
            </ScrollLink>
            <ScrollLink
              to="/resume"
              className="hover:text-white text-[#cacaca] cursor-pointer"
              activeClass="text-white"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Resume
            </ScrollLink>
            <ScrollLink
              to="/skills"
              className="hover:text-white text-[#cacaca] cursor-pointer"
              activeClass="text-white"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Skills
            </ScrollLink>
            <ScrollLink
              to="/services"
              className="hover:text-white text-[#cacaca] cursor-pointer"
              activeClass="text-white"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Services
            </ScrollLink>
            <ScrollLink
              to="/portfolio"
              className="hover:text-white text-[#cacaca] cursor-pointer"
              activeClass="text-white"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Portfolio
            </ScrollLink>

            <ScrollLink
              to="/contact"
              className="hover:text-white text-[#cacaca] cursor-pointer"
              activeClass="text-white"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Contact
            </ScrollLink>
          </div>
        </div>

        {/* Sidebar */}
        <div
          className={`fixed z-50 top-0 right-0 h-full bg-[#1E1E1E] w-4/5 shadow-lg transform transition-transform duration-[500ms] ease-in-out ${
            isOpen ? "translate-x-0 z-50" : "translate-x-full z-50"
          } md:hidden`}
        >
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-5 right-5 text-white"
          >
            <FiX size={28} />
          </button>
          <div className="mt-16 space-y-6 py-6 px-10 text-lg flex flex-col">
            <ScrollLink
              to="/"
              className="hover:text-white text-[#cacaca] cursor-pointer"
              activeClass="text-white"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Home
            </ScrollLink>
            <ScrollLink
              to="/about"
              className="hover:text-white text-[#cacaca] cursor-pointer"
              activeClass="text-white"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              About Me
            </ScrollLink>
            <ScrollLink
              to="/resume"
              className="hover:text-white text-[#cacaca] cursor-pointer"
              activeClass="text-white"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Resume
            </ScrollLink>
            <ScrollLink
              to="/skills"
              className="hover:text-white text-[#cacaca] cursor-pointer"
              activeClass="text-white"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Skills
            </ScrollLink>
            <ScrollLink
              to="/services"
              className="hover:text-white text-[#cacaca] cursor-pointer"
              activeClass="text-white"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Services
            </ScrollLink>
            <ScrollLink
              to="/portfolio"
              className="hover:text-white text-[#cacaca] cursor-pointer"
              activeClass="text-white"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Portfolio
            </ScrollLink>

            <ScrollLink
              to="/contact"
              className="hover:text-white text-[#cacaca] cursor-pointer"
              activeClass="text-white"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Contact
            </ScrollLink>
          </div>
        </div>
      </Content>
    </nav>
  );
};

export default Navbar;
