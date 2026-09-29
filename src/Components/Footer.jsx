
import React from "react";
import { Link } from "react-router-dom";

import {
  FaGoogle,
  FaLinkedinIn,
  FaInstagram,
  FaArrowUp,
} from "react-icons/fa";

import { MdEmail } from "react-icons/md";

import { ArrowRight } from "lucide-react";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-[#0A0A0A] text-white">

      <div className="mx-auto max-w-7xl px-5 pt-10 pb-4 sm:px-6 md:px-8 lg:px-8 xl:px-0">

        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10 xl:gap-16">

         
          <div className="text-center sm:text-left">

            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              <span className="text-[#6EBE44]">Shikhbo</span>{" "}
              <span className="text-white">AI</span>
            </h2>

            <p className="mx-auto mt-4 max-w-sm text-sm leading-7 text-white sm:mx-0">
              Learn real-world skills, build practical projects,
              and take your career to the next level with practical
              and career-focused learning.
            </p>

            <Link
              to="/courses"
              className="
                group mt-6
                inline-flex items-center gap-2
                rounded-full
                bg-[#6EBE44]
                px-5 py-2.5
                text-sm font-semibold text-white
                shadow-lg shadow-[#6EBE44]/10
                transition-all duration-300
                hover:bg-[#5aa936]
                hover:shadow-[#6EBE44]/20
              "
            >
              Explore Courses

              <ArrowRight
                size={16}
                className="
                  transition-transform duration-300
                  group-hover:translate-x-1
                "
              />
            </Link>

          </div>


          <div className="text-center sm:text-left">

            <h3 className="text-base font-semibold text-white sm:text-lg">
              Legal
            </h3>

            <div className="mt-5 flex flex-col items-center gap-3 sm:items-start">

             


              <a
                
                className="
                  text-sm text-white
                  transition-colors duration-200
                  hover:text-[#6EBE44]
                "
              >
                Privacy Policy
              </a>

              <a
                
                className="
                  text-sm text-white
                  transition-colors duration-200
                  hover:text-[#6EBE44]
                "
              >
                Terms & Conditions
              </a>

            </div>
          </div>


       
          <div className="text-center sm:text-left">

            <h3 className="text-base font-semibold text-white sm:text-lg">
              Connect With Us
            </h3>

            <p className="mx-auto mt-4 max-w-xs text-sm leading-6 text-white sm:mx-0">
              Follow Shikhbo AI and stay connected with our latest
              courses, updates, and learning resources.
            </p>

            <div className="mt-5 flex items-center justify-center gap-3 sm:justify-start">

              {/* Google */}
              <a
                href="https://www.google.com/maps/place/Shikhbo+AI/@23.8877766,90.3851323,17z/data=!3m1!4b1!4m6!3m5!1s0x3755c5592f6cf72d:0x95874fddf1293263!8m2!3d23.8877717!4d90.3877072!16s%2Fg%2F11xt9fq6qt"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Google Maps"
                className="
                  flex h-10 w-10 items-center justify-center
                  rounded-full
                  border border-white/10
                  bg-white/5
                  transition-all duration-300
                  hover:border-[#6EBE44]
                  hover:bg-[#6EBE44]
                "
              >
                <FaGoogle className="text-lg text-[#6EBE44] transition-colors hover:text-white" />
              </a>


          
              <a
                href="https://www.linkedin.com/company/shikhboaibd/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="
                  flex h-10 w-10 items-center justify-center
                  rounded-full
                  border border-white/10
                  bg-white/5
                  transition-all duration-300
                  hover:border-[#6EBE44]
                  hover:bg-[#6EBE44]
                "
              >
                <FaLinkedinIn className="text-lg text-[#6EBE44]" />
              </a>


            
              <a
                href="mailto:shikhboai.bd@gmail.com"
                aria-label="Email"
                className="
                  flex h-10 w-10 items-center justify-center
                  rounded-full
                  border border-white/10
                  bg-white/5
                  transition-all duration-300
                  hover:border-[#6EBE44]
                  hover:bg-[#6EBE44]
                "
              >
                <MdEmail className="text-xl text-[#6EBE44]" />
              </a>


              <a
                href="https://www.instagram.com/shikhbo.ai?stkn=ZHpsODM0NjltcmU="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="
                  flex h-10 w-10 items-center justify-center
                  rounded-full
                  border border-white/10
                  bg-white/5
                  transition-all duration-300
                  hover:border-[#6EBE44]
                  hover:bg-[#6EBE44]
                "
              >
                <FaInstagram className="text-lg text-[#6EBE44]" />
              </a>

            </div>

          </div>


          
          <div className="w-full">

            <h3 className="text-center text-base font-semibold text-white sm:text-left sm:text-lg">
              Our Location
            </h3>

            <div
              className="
                mt-4
                overflow-hidden
                rounded-2xl
                border border-white/10
                bg-white/5
                shadow-lg
              "
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.0519467832837!2d90.38513227444417!3d23.88777658349021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c5592f6cf72d%3A0x95874fddf1293263!2sShikhbo%20AI!5e0!3m2!1sen!2sbd!4v1790147353023!5m2!1sen!2sbd"
                title="Shikhbo AI Location"
                className="
                  block
                  h-52
                  w-full
                  border-0
                  sm:h-56
                  lg:h-52
                  xl:h-56
                "
                loading="lazy"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>

          </div>

        </div>
      </div>


     
      <div className="border-t border-white/10">

        <div
          className="
            mx-auto flex max-w-7xl
            flex-col
            items-center
            justify-between
            gap-4
            px-5 py-3
            sm:flex-row
            sm:px-6
            lg:px-8
          "
        >

          <p className="text-center text-xs text-white/40 sm:text-left sm:text-sm">
            © {new Date().getFullYear()} Shikhbo AI. All rights reserved.
          </p>


          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="
              flex h-10 w-10 shrink-0
              cursor-pointer
              items-center justify-center
              rounded-full
              bg-[#6EBE44]
              text-white
              shadow-lg shadow-[#6EBE44]/10
              transition-all duration-300
              hover:bg-[#5aa936]
              hover:shadow-[#6EBE44]/20
            "
          >
            <FaArrowUp className="text-base" />
          </button>

        </div>

      </div>

    </footer>
  );
}

export default Footer;

