
import React from "react";
import { motion } from "framer-motion";
import { PopParent, PopChild } from "../../Motion/Revel";

function Why() {
  const DivColor = `
    rounded-xl
    border
    border-green-100
    bg-white
    shadow-md
    shadow-slate-900/5
    p-5
    sm:w-3/4
    sm:mx-auto
    md:w-full
    md:mx-0
    
    transition-all
    duration-300
    hover:-translate-y-1
    hover:shadow-lg
    hover:shadow-green-900/10
  `;

  const para1 = `
    mt-3
    text-lg
    font-bold
    text-slate-900
  `;

  const para2 = `
    mt-2
    sm:mt-3
    lg:mt-4
    text-base
    sm:text-md
    md:text-lg
    leading-relaxed
    text-slate-800
  `;

  const iconBox = `
    w-11
    h-11
    rounded-full
    bg-green-50
    border
    border-green-100
    flex
    items-center
    justify-center
    overflow-hidden
  `;

  return (
    <section className="w-full bg-[#F7F7F8] px-2 pt-8 ">
      <div className="max-w-8xl mx-auto lg:px-10">
        {/* HEADING */}

        <h2
          className="
            text-xl
            py-1
            sm:text-2xl
            md:text-3xl
            lg:text-4xl
            font-bold
            text-black
            text-center
          "
        >
          Why Choose{" "}

          <span className="text-[#6EBE44]">
            Shikhbo AI?
          </span>
        </h2>


        {/* SUBTITLE */}

        <p
          className="
            mt-3
            md:mt-4
            text-center
            text-base
            sm:text-lg
            md:text-xl
            lg:text-2xl
            text-black
          "
        >
          Learn smarter. Build real projects. Become a better developer.
        </p>


        {/* CARDS */}

        <motion.div
          variants={PopParent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-4
            gap-5
            py-8
          "
        >
          {/* CARD 1 */}

          <motion.div
            variants={PopChild}
            className={DivColor}
          >
            <div className={iconBox}>
              <img
                src="/Ai.png"
                className="w-9 h-9 object-contain"
                alt="AI Tools"
              />
            </div>

            <p className={para1}>
              Learn with AI Tools
            </p>

            <p className={para2}>
              Learn how to use ChatGPT and modern AI tools to code smarter,
              debug faster, and understand complex concepts.
            </p>
          </motion.div>


          {/* CARD 2 */}

          <motion.div
            variants={PopChild}
            className={DivColor}
          >
            <div className={iconBox}>
              <img
                src="/project.png"
                className="w-9 h-9 object-contain"
                alt="Real World Projects"
              />
            </div>

            <p className={para1}>
              Build Real-World Projects
            </p>

            <p className={para2}>
              Learn by building practical projects that improve your coding
              skills and strengthen your portfolio.
            </p>
          </motion.div>


          {/* CARD 3 */}

          <motion.div
            variants={PopChild}
            className={DivColor}
          >
            <div className={iconBox}>
              <img
                src="/brain.png"
                className="w-9 h-9 object-contain"
                alt="Problem Solving"
              />
            </div>

            <p className={para1}>
              Master Problem Solving
            </p>

            <p className={para2}>
              Develop strong programming logic and learn how to approach,
              analyze, and solve real coding problems.
            </p>
          </motion.div>


          {/* CARD 4 */}

          <motion.div
            variants={PopChild}
            className={DivColor}
          >
            <div className={iconBox}>
              <img
                src="/rocket.png"
                className="w-9 h-9 object-contain"
                alt="Better Developer"
              />
            </div>

            <p className={para1}>
              Become a Better Developer
            </p>

            <p className={para2}>
              Go beyond basic coding—learn modern development practices,
              tools, and workflows to become a confident developer.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Why;

