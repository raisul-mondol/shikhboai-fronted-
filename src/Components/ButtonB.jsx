import React from "react";
import { motion } from "motion/react";

function ButtonB({ children, className = "", onClick }) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ y: -2, scale: 1.02 }}
      whileTap={{ scale: 0.96 }}
      transition={{ duration: 0.2 }}
      className={`
        group
        relative
        overflow-hidden
        px-5
        py-3
        md:px-3
        md:py-3
        lg:px-6
        rounded-lg

        bg-[#6EBE44]
        hover:bg-[#5FA83A]

        text-black
        text-lg
        font-semibold

        shadow-md
        shadow-[#6EBE44]/30

        hover:shadow-lg
        hover:shadow-[#6EBE44]/40

        transition-all
        duration-300

        focus:outline-none
        cursor-pointer

        ${className}
      `}
    >
      <span className="relative z-10">
        {children}
      </span>

      <span
        className="
          absolute
          inset-0
          -translate-x-full
          bg-linear-to-r
          from-transparent
          via-white/30
          to-transparent
          transition-transform
          duration-700
          group-hover:translate-x-full
        "
      />
    </motion.button>
  );
}

export default ButtonB;