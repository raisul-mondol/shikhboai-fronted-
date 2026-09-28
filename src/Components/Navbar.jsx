import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { FaRegUser } from "react-icons/fa";
import { motion, AnimatePresence } from "motion/react";

const linkClass = `
  cursor-pointer
  font-medium
  text-xl
  text-black
  hover:text-[#4F9636]
  hover:underline
  hover:underline-offset-8
  hover:decoration-2
  transition-all
  duration-200
`;

const mobileLinkClass = `
  cursor-pointer
  font-medium
  px-4
  py-2
  text-left
  w-full
  text-white
  text-lg
  hover:bg-emerald-800/30
`;

function Navbar() {
  const [Isopen, SetIsopen] = useState(false);

  const closeMenu = () => {
    SetIsopen(false);
  };

  const goHome = () => {
    SetIsopen(false);
    window.scrollTo(0, 0);
  };

  return (
    <nav
      className="
        fixed
        top-0
        left-0
        w-full
        h-15
        z-9999
        bg-[#F2F2F2]
        backdrop-blur-lg
        px-4
        flex
        justify-between
        items-center
        border-b
        border-white/10
        shadow-xl
      "
    >
      {/* LOGO */}
      <NavLink
        to="/"
        onClick={goHome}
        className="
          flex
          items-center
          cursor-pointer
          -mt-1
          -ml-4
          md:-mt-2
          md:ml-2
          lg:ml-5
        "
      >
        <img
          src="/Ais1.png"
          alt="Logo"
          className="
            h-15
            sm:h-17
            w-auto
            object-contain
          "
        />
      </NavLink>

      {/* DESKTOP MENU */}
      <div className="hidden md:flex md:gap-4 lg:gap-12">

        {/* HOME */}
        <NavLink
          to="/"
          onClick={goHome}
          className={linkClass}
        >
          Home
        </NavLink>

        {/* COURSES */}
        <a
          href="/#courses"
          className={linkClass}
        >
          Courses
        </a>

        {/* ABOUT */}
        <a
          href="/#about"
          className={linkClass}
        >
          About
        </a>

        {/* CONTACT */}
        <a
          href="/#contact"
          className={linkClass}
        >
          Contact
        </a>

      </div>

      {/* DESKTOP LOGIN */}
      <NavLink
        
        className="
          hidden
          md:flex
          items-center
          gap-2
          px-5
          py-1
          md:mr-4
          lg:mr-8
          rounded-4xl
          bg-[#6EBE44]
          text-white
          text-lg
          font-medium
          cursor-pointer
          shadow-md
          shadow-[#6EBE44]/20
          hover:bg-[#5A9E38]
          hover:shadow-lg
          hover:shadow-[#6EBE44]/25
          transition-all
          duration-300
          hover:scale-105
        "
      >
        <FaRegUser size={18} />
        <span>Login</span>
      </NavLink>

      {/* MOBILE BUTTON */}
      <button
        onClick={() => SetIsopen(!Isopen)}
        className="md:hidden cursor-pointer"
      >
        {Isopen ? (
          <ImCross
            size={22}
            color="red"
          />
        ) : (
          <GiHamburgerMenu
            size={30}
            color="#6EBE44"
          />
        )}
      </button>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {Isopen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 25,
              mass: 0.8,
            }}
            className="
              md:hidden
              bg-black
              absolute
              flex
              flex-col
              top-15
              left-0
              w-full
              pb-2
            "
          >

            {/* HOME */}
            <NavLink
              to="/"
              onClick={goHome}
              className={mobileLinkClass}
            >
              Home
            </NavLink>

            {/* COURSES */}
            <a
              href="/#courses"
              onClick={closeMenu}
              className={mobileLinkClass}
            >
              Courses
            </a>

            {/* ABOUT */}
            <a
              href="/#about"
              onClick={closeMenu}
              className={mobileLinkClass}
            >
              About
            </a>

            {/* CONTACT */}
            <a
              href="/#contact"
              onClick={closeMenu}
              className={mobileLinkClass}
            >
              Contact
            </a>

            {/* MOBILE LOGIN */}
            <NavLink
              
              onClick={closeMenu}
              className="
                cursor-pointer
                px-3
                py-2
                mt-4
                mx-3
                text-center
                rounded-lg
                bg-[#6EBE44]
                text-white
                text-lg
                font-medium
                shadow-md
                shadow-[#6EBE44]/20
                hover:bg-[#5A9E38]
                transition-all
                duration-300
              "
            >
              Login
            </NavLink>

          </motion.div>
        )}
      </AnimatePresence>

    </nav>
  );
}

export default Navbar;