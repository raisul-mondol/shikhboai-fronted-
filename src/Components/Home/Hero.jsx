import React, { useState } from "react";
import { Lottie } from "lottie-react";
import programing from "../../assets/programing.json";
import programing4 from "../../assets/programing4.json";
import ButtonB from "../ButtonB";
import { ArrowRight } from "lucide-react";
import {
  FaWhatsapp,
  FaStar,
  FaStarHalfAlt,
  FaChalkboardTeacher,
} from "react-icons/fa";
import Counter from "../Counter";
import { Container, item, Normalreveal } from "../../Motion/Revel";
import { motion } from "motion/react";

function Hero() {
 

  const hasAnimated =
    sessionStorage.getItem("homeAnimationDone") === "true";

  const [CounterStart, SetCounterStart] = useState(hasAnimated);

  const handleAnimationComplete = () => {
    if (!hasAnimated) {
      sessionStorage.setItem("homeAnimationDone", "true");
    }

    SetCounterStart(true);
  };

  const handleGetStarted = () => {
    document.getElementById("courses")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/8801710070606",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section
      className="
        relative
        w-full  min-h-screen md:min-h-0 overflow-hidden flex flex-col  md:flex-row items-center gap-8 sm:gap-4 lg:gap-10 bg-[#F2F2F2]
        pt-8  sm:pt-10 md:py-2 " >
      

      

      <motion.div
        variants={Container}
        initial={hasAnimated ? "show" : "hidden"}
        animate="show"
        onAnimationComplete={handleAnimationComplete}
        className="  w-full  md:w-[52%] lg:w-1/2 flex flex-col items-center md:items-start md:self-start
          md:mt-12 lg:mt-16 px-4 sm:px-6 md:px-4 lg:px-6 md:ml-5 lg:ml-6 relative z-50">
       

        <motion.div
          variants={item}
          className="flex items-center h-8 sm:h-9 w-fit
             border border-[#CDE8C1] rounded-full pr-3 sm:pr-4 shadow-smS">
          <Lottie
            src={programing4}
            autoplay
            loop
            className=" h-16 w-16 sm:h-18 sm:w-18 -ml-5 sm:-ml-6"/>

          <div
            className=" text-black text-lg
              
              font-bold px-1 -ml-3 sm:-ml-5 whitespace-nowrap">
            AI-Enhanced Learning
          </div>
        </motion.div>

       
        <motion.h1
          variants={item}
          className="
            pt-5
            sm:pt-6
            md:pt-4
            text-4xl lg:text-5xl  text-center  md:text-left text-black font-semibold
            md:font-bold leading-[1.15] max-w-xl" >
          Next-Gen{" "}
          <span className="text-[#6EBE44]">Tech</span>{" "}
          Learning With{" "}
          <span className="text-[#6EBE44]">AI</span>
        </motion.h1>

     

     <motion.p
  lang="en"
  variants={item}
  className="
    pt-6 sm:pt-8 md:pt-10 lg:pt-12
    w-full px-4 sm:px-0
   
    tracking-wide
    text-left
    text-base sm:text-lg lg:text-xl
    font-medium
    text-black
    hyphens-auto
    wrap-break-word
  "
>
  Learn programming from the fundamentals to advanced  development.
  Build real-world projects and develop practical skills to become future-ready in tech.
</motion.p>


        

        <motion.div
          variants={item}
          className="
            mt-6
            sm:mt-7
            lg:mt-8
            w-full
            flex
            justify-center
            md:justify-start
          "
        >
          <div
            className="
              flex
              flex-col
              sm:flex-row
              gap-3
              sm:gap-2
              lg:gap-4
              w-[80%]
              sm:w-auto
            "
          >
            <ButtonB
              onClick={handleGetStarted}
              className="
                w-full
                sm:w-auto
                bg-[#6EBE44]
                hover:bg-[#5A9E38]
                text-black
                shadow-md
                shadow-[#6EBE44]/20
                hover:shadow-lg
                hover:shadow-[#6EBE44]/25
                transition-all
                duration-300
              "
            >
              <span className="flex  gap-2 md:gap-3 items-center justify-center whitespace-nowrap">
                Get Started

                <ArrowRight
                  size={18}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </span>
            </ButtonB>

            <ButtonB
              onClick={handleWhatsApp}
              className="
                w-full
                sm:w-auto
                bg-[#6EBE44]
                hover:bg-[#5A9E38]
               
                shadow-md
                shadow-[#6EBE44]/20
                hover:shadow-lg
                hover:shadow-[#6EBE44]/25
                transition-all
                duration-300
              "
            >
              <span className="flex items-center justify-center gap-2 md:gap-3 whitespace-nowrap">
                Get Expert Support

                <FaWhatsapp
                  size={20}
                  className="text-black"
                />
              </span>
            </ButtonB>
          </div>
        </motion.div>

        

     <motion.div
  variants={item}
  className="
    bg-white
    rounded-xl
    border
    border-[#DDEFD5]
    shadow-lg
    shadow-gray-900/5
    w-fit
    max-w-full
    mt-6
    sm:mt-7
    px-4
    sm:px-5
    py-3
    hover:border-[#BFE3AF]
    transition-colors
    duration-300
  "
>
  <div className="flex items-center gap-3">

    {/* Google Logo */}
    <div className="shrink-0">
      <img
        src="/g.png"
        alt="Google"
        className="w-15 h-15
          sm:w-17
          sm:h-17
          md:w-20
          md:h-20
          object-contain
        "
      />
    </div>

    {/* Content */}
    <div className="min-w-0">

      {/* Title */}
      <div className="flex items-center gap-1.5">
        <h3
          className="
            text-xl
            sm:text-lg
            font-bold
            text-[#1F2937]
            leading-none
          "
        >
          Google
        </h3>

        <span
          className="
            text-xl
            sm:text-lg
            font-bold
            text-[#6EBE44]
            leading-none
          "
        >
          Reviews
        </span>
      </div>

      {/* Rating */}
      <div className="flex items-center gap-1.5 mt-1.5">
        
        {/* Stars */}
        <div className="flex items-center gap-0.5">
          {[1, 2, 3, 4, 5].map((star) => (
            <FaStar
              key={star}
              className="text-[#FFC107]"
              size={14}
            />
          ))}
        </div>

        {/* Rating Number */}
        <span className="text-base   font-semibold text-black">
          {CounterStart && (
            <Counter
              from={0}
              to={5}
              
              start={CounterStart}
            />
          )}
          /5
        </span>
      </div>

      {/* Tagline */}
      <p
        className="
          mt-1
          text-[11px]
          sm:text-xs
          lg:text-base

          
          text-black
          font-bold
          whitespace-nowrap
        "
      >
        Real feedback.Real learners.Real results.
      </p>

    </div>
  </div>

  {/* View Reviews */}
  <div className="flex justify-center mt-2.5">
    <a
      href="https://www.google.com/maps/place/Shikhbo+AI/@23.8877766,90.3851323,17z/data=!4m8!3m7!1s0x3755c5592f6cf72d:0x95874fddf1293263!8m2!3d23.8877717!4d90.3877072!9m1!1b1!16s%2Fg%2F11xt9fq6qt"
      target="_blank"
      rel="noopener noreferrer"
      className="
        flex
        items-center
        w-fit
        px-3
        py-1.5
        rounded-full
        bg-[#6EBE44]
        border
        border-green-200
        text-[13px]
        sm:text-base
        font-semibold
        text-black
        hover:bg-white
        hover:-translate-y-1
        hover:text-[#6EBE44]
        hover:scale-110
        transition-all
        duration-100
      "
    >
      View all reviews →
    </a>
  </div>

</motion.div>

        

       
      </motion.div>

     

      <motion.div
        variants={Normalreveal}
        initial={hasAnimated ? "show" : "hidden"}
        animate="show"
        className="
          w-full
          md:w-[48%]
          lg:w-1/2
          h-80
          sm:h-88
          md:h-96
          relative
          flex
           
          items-center
          justify-center
          mt-2
          sm:mt-4
          md:mt-0
          lg:mt-10
          z-30
          
        "
      >
       

        <div
          className="
            relative

            h-75
            sm:h-64
            md:h-75
            lg:h-85

            w-[80%]
            sm:w-[70%]
            md:w-[85%]
            lg:w-[75%]

            bg-white/90
            backdrop-blur-xl

            border
            border-[#DDEFD5]

            rounded-3xl
            sm:rounded-[1.75rem]
            md:rounded-4xl

            shadow-2xl
            shadow-gray-900/10

            hover:border-[#BFE3AF]
            hover:shadow-[#6EBE44]/15

            transition-all
            duration-500

            overflow-visible
          "
        >
          

          <div
            className="
              absolute
              inset-2
              rounded-[1.3rem]
              sm:rounded-3xl
              md:rounded-[1.7rem]
              border
              border-[#6EBE44]/10
              pointer-events-none
            "
          />

         

          <motion.div
            animate={{
              y: [0, -8, 0, 8, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              top-1/2
              left-1/2
              -translate-x-1/2
              -translate-y-1/2
              z-30
              pointer-events-none
            "
          >
            <Lottie
              src={programing}
              autoplay
              loop
              className="
               

               

                h-82
                w-82

                lg:h-100
                lg:w-110

                opacity-100
              "
            />
          </motion.div>

         

          <motion.div
            animate={{
              y: [0, -6, 0, 6, 0],
              rotate: [0, 0.5, 0, -0.5, 0],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              z-40

              -right-6
              sm:-right-2.5
              md:-right-4
              lg:-right-5

              -top-8
              sm:-top-6

              bg-white/95
              backdrop-blur-xl

              rounded-xl
              sm:rounded-2xl

              border
              border-[#DDEFD5]

              shadow-lg
              shadow-gray-900/10

              text-black

              px-2
              sm:px-3
              md:px-5

              py-1.5
              sm:py-2

              text-lg
              sm:text-sm
              md:text-base

              font-semibold
              whitespace-nowrap

              pointer-events-none
            "
          >
            <span className="text-[#6EBE44]">
              ●
            </span>{" "}
            Practical Learning
          </motion.div>

          

          <motion.div
            animate={{
              y: [0, 6, 0, -6, 0],
              rotate: [0, -0.5, 0, 0.5, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              z-40

              -left-6
              sm:-left-7
              md:-left-10
              lg:-left-14

              top-2
              sm:top-4
              md:top-2

              bg-white/95
              backdrop-blur-xl

              rounded-xl
              sm:rounded-2xl

              border
              border-[#DDEFD5]

              shadow-lg
              shadow-gray-900/10

              flex
              items-center
              gap-1.5
              sm:gap-2

              px-2
              sm:px-3

              py-2
              sm:py-3

             

              pointer-events-none
            "
          >
            <div
              className="
                h-7
                w-7
                sm:h-8
                sm:w-8
                shrink-0
                rounded-lg
                bg-[#EAF6E4]
                flex
                items-center
                justify-center
              "
            >
              <FaChalkboardTeacher
                className="
                  text-[#5A9E38]
                  h-4
                  w-4
                  
                "
              />
            </div>

            <p
              className="
                text-black
                text-lg
                
                md:text-base
                font-semibold
                whitespace-nowrap
              "
            >
              Expert Instructors
            </p>
          </motion.div>

          

          <motion.div
            animate={{
              y: [0, -5, 0, 5, 0],
              rotate: [0, 0.4, 0, -0.4, 0],
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              z-40

              bottom-2
              sm:bottom-3
              md:bottom-4

              -right-6
              sm:-right-5
              md:-right-3
              lg:-right-10

              bg-white/95
              backdrop-blur-xl

              rounded-xl
              sm:rounded-2xl

              border
              border-[#DDEFD5]

              shadow-lg
              shadow-gray-900/10

              text-black

              px-2
              sm:px-3

              py-1.5
              sm:py-2

              text-lg
              sm:text-sm
              md:text-base

              font-semibold

              whitespace-nowrap

              pointer-events-none
            "
          >
            <p className="flex items-center gap-1.5">
              <span
                className="
                  flex
                  h-4
                  w-4
                  sm:h-5
                  sm:w-5
                  items-center
                  justify-center
                  rounded-full
                  bg-[#EAF6E4]
                  text-[#5A9E38]
                  text-lg
                  sm:text-xs
                "
              >
                ✓
              </span>

              Job-Ready Skills
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;

