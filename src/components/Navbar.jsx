import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/logo.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    // navbar
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#DBC4A9] text-[#253031]">
      {/* logo */}
      <div>
        <img src={Logo} alt="Logo" style={{ width: "60px" }} />
      </div>

      {/* menu */}
      <ul className="hidden md:flex">
        <li>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={500}>
            Portfolio
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#DBC4A9] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-2xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-2xl">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-2xl">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-2xl">
          <Link
            onClick={handleClick}
            to="projects"
            smooth={true}
            duration={500}
          >
            Portfolio
          </Link>
        </li>
        <li className="py-6 text-2xl">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
        <li className="py-6 text-2xl">
          <a
            className="flex justify-between items-center w-full text-black"
            href="https://github.com/kennacapri"
          >
            <FaGithub size={30} />
          </a>
        </li>
        <li className="py-6 text-2xl">
          <a
            className="flex justify-between items-center w-full text-black"
            href="mailto:kennac28@gmail.com"
          >
            <HiOutlineMail size={30} />
          </a>
        </li>
        <li className="py-6 text-2xl">
          <a
            className="flex justify-between items-center w-full text-black"
            href="https://drive.google.com/file/d/1wwNlObVddO6ZqcZXNVvQGb7ZX7dQZkjW/view?usp=sharing"
          >
            <BsFillPersonLinesFill size={30} />
          </a>
        </li>
      </ul>

      {/* social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0a8754]">
            <a
              className="flex justify-between items-center w-full text-black"
              href="https://www.linkedin.com/in/kenna-fackrell-25a44713b/"
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#b0e89c]">
            <a
              className="flex justify-between items-center w-full text-black"
              href="https://github.com/kennacapri"
            >
              GitHub <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0a8754]">
            <a
              className="flex justify-between items-center w-full text-black"
              href="mailto:kennac28@gmail.com"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#b0e89c]">
            <a
              className="flex justify-between items-center w-full text-black"
              href="https://drive.google.com/file/d/1wwNlObVddO6ZqcZXNVvQGb7ZX7dQZkjW/view?usp=sharing"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
      <footer class="fixed bottom-0 left-0 z-20 w-full p-2 bg-[#DBC4A9] border-gray-200 shadow md:flex md:items-center md:justify-between md:p-3">
        <span class="text-sm text-black sm:text-center dark:black">
          ?? 2023{" "}
          <a href="https://github.com/kennacapri" class="hover:underline">
            Kenna Fackrell
          </a>
        </span>
      </footer>
    </div>
  );
};

export default Navbar;
