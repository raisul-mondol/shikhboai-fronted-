import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full scroll-mt-16 min-h-screen bg-gray-50 text-gray-900 px-4 sm:px-6 lg:px-8 py-10 sm:pt-1 lg:pt-2"
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 ">

          <p className="text-[#5A9E38] text-sm sm:text-base font-semibold uppercase tracking-[0.2em] mb-3">
            Contact Us
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-gray-900">
            Let's{" "}
            <span className="text-[#6EBE44]">
              Talk
            </span>
          </h2>

          <p className="mt-5 text-sm sm:text-base md:text-lg text-gray-600 leading-7">
            Have a question about our courses or learning platform?
            Send us a message and our team will get back to you.
          </p>

        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* Left Side */}
          <div className="space-y-6">

         <div> <p className="mb-3 text-center text-sm font-semibold 
         tracking-wider text-[#5A9E38] sm:text-base"> GET IN TOUCH </p>
          <h3 className="text-center text-2xl font-bold leading-tight
           text-gray-900 sm:text-3xl lg:text-4xl"> We'd Love to Hear From You </h3>
           <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-7
            text-gray-600 sm:text-base"> Whether you need help choosing a course, have a technical question, or want to know more about Shikhbo AI, feel free to reach out to us. </p> </div>

            {/* Email */}
            <div
              className="
                flex
                items-start
                gap-4
                bg-white
                border
                border-[#DDEFD5]
                rounded-2xl
                p-4
                sm:p-5
                shadow-sm
                shadow-gray-900/5
                hover:border-[#BFE3AF]
                hover:shadow-md
                transition-all
                duration-300
              "
            >

              <div
                className="
                  w-11
                  h-11
                  sm:w-12
                  sm:h-12
                  shrink-0
                  rounded-full
                  bg-[#EAF6E4]
                  border
                  border-[#DDEFD5]
                  flex
                  items-center
                  justify-center
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.8}
                  stroke="currentColor"
                  className="w-5 h-5 sm:w-6 sm:h-6 text-[#6EBE44]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5A2.25 2.25 0 0 1 19.5 19.5h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0l-7.5-4.615A2.25 2.25 0 0 1 2.25 6.993V6.75"
                  />
                </svg>
              </div>

              <div className="min-w-0">

                <p className="text-sm text-[#5A9E38] mb-1">
                  Email
                </p>

                <div className="flex flex-col gap-1">

                  <a
                    href="mailto:codetreebd@gmail.com"
                    className="
                      text-sm
                      sm:text-base
                      font-medium
                      text-gray-800
                      break-all
                      hover:text-[#6EBE44]
                      transition
                    "
                  >
                    shikhboai.bd@gmail.com
                  </a>

                  <a
                    href="mailto:razi@codetreebd.com"
                    className="
                      text-sm
                      sm:text-base
                      font-medium
                      text-gray-800
                      break-all
                      hover:text-[#6EBE44]
                      transition
                    "
                  >
                    razi@codetreebd.com
                  </a>

                </div>

              </div>

            </div>

            {/* Phone */}
            <div
              className="
                flex
                items-center
                gap-4
                bg-white
                border
                border-[#DDEFD5]
                rounded-2xl
                p-4
                sm:p-5
                shadow-sm
                shadow-gray-900/5
                hover:border-[#BFE3AF]
                hover:shadow-md
                transition-all
                duration-300
              "
            >

              <div
                className="
                  w-11
                  h-11
                  sm:w-12
                  sm:h-12
                  shrink-0
                  rounded-full
                  bg-[#EAF6E4]
                  border
                  border-[#DDEFD5]
                  flex
                  items-center
                  justify-center
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.8}
                  stroke="currentColor"
                  className="w-5 h-5 sm:w-6 sm:h-6 text-[#6EBE44]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0-1.243 1.007-2.25 2.25-2.25h2.25c.968 0 1.81.62 2.114 1.537l1.07 3.21a2.25 2.25 0 0 1-.511 2.237l-1.442 1.442a16.5 16.5 0 0 0 5.343 5.343l1.442-1.442a2.25 2.25 0 0 1 2.237-.511l3.21 1.07A2.25 2.25 0 0 1 21.75 19.5v2.25A2.25 2.25 0 0 1 19.5 24C9.835 24 2.25 16.165 2.25 6.75Z"
                  />
                </svg>
              </div>

              <div>

                <p className="text-sm text-[#5A9E38] mb-1">
                  Phone
                </p>

                <a
                  href="tel:+8801710070606"
                  className="
                    text-sm
                    sm:text-base
                    font-medium
                    text-gray-800
                    hover:text-[#6EBE44]
                    transition
                  "
                >
                  +88 0171-007-0606
                </a>

              </div>

            </div>

            {/* Location */}
            <div
              className="
                flex
                items-start
                gap-4
                bg-white
                border
                border-[#DDEFD5]
                rounded-2xl
                p-4
                sm:p-5
                shadow-sm
                shadow-gray-900/5
                hover:border-[#BFE3AF]
                hover:shadow-md
                transition-all
                duration-300
              "
            >

              <div
                className="
                  w-11
                  h-11
                  sm:w-12
                  sm:h-12
                  shrink-0
                  rounded-full
                  bg-[#EAF6E4]
                  border
                  border-[#DDEFD5]
                  flex
                  items-center
                  justify-center
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.8}
                  stroke="currentColor"
                  className="w-5 h-5 sm:w-6 sm:h-6 text-[#6EBE44]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />

                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                  />
                </svg>
              </div>

              <div>

                <p className="text-sm text-[#5A9E38] mb-1">
                  Our Location
                </p>

                <p className="text-sm sm:text-base font-medium text-gray-700 leading-6">
                  Flat-3A, House 73/F,
                  <br />
                  Road 12/B, Sector 10,
                  <br />
                  Uttara Model Town,
                  <br />
                  Dhaka-1230, Bangladesh
                </p>

              </div>

            </div>

          </div>

          {/* Right Side - Form */}
          <div
            className="
              bg-white
              border
              border-[#DDEFD5]
              rounded-2xl
              sm:rounded-3xl
              p-5
              sm:p-7
              lg:p-9
              shadow-lg
              shadow-gray-900/5
            "
          >

            <h3 className="text-xl sm:text-2xl font-bold mb-6 text-gray-900">
              Send Us a Message
            </h3>

            <form className="space-y-5">

              {/* Name */}
              <div>

                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Your Name
                </label>

                <input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  className="
                    w-full
                    px-4
                    py-3
                    rounded-xl
                    bg-gray-50
                    border
                    border-gray-200
                    text-gray-900
                    placeholder:text-gray-400
                    outline-none
                    focus:border-[#6EBE44]
                    focus:ring-2
                    focus:ring-[#6EBE44]/20
                    transition
                    duration-300
                  "
                />

              </div>

              {/* Email */}
              <div>

                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="
                    w-full
                    px-4
                    py-3
                    rounded-xl
                    bg-gray-50
                    border
                    border-gray-200
                    text-gray-900
                    placeholder:text-gray-400
                    outline-none
                    focus:border-[#6EBE44]
                    focus:ring-2
                    focus:ring-[#6EBE44]/20
                    transition
                    duration-300
                  "
                />

              </div>

              {/* Subject */}
              <div>

                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Subject
                </label>

                <input
                  id="subject"
                  type="text"
                  placeholder="Enter subject"
                  className="
                    w-full
                    px-4
                    py-3
                    rounded-xl
                    bg-gray-50
                    border
                    border-gray-200
                    text-gray-900
                    placeholder:text-gray-400
                    outline-none
                    focus:border-[#6EBE44]
                    focus:ring-2
                    focus:ring-[#6EBE44]/20
                    transition
                    duration-300
                  "
                />

              </div>

              {/* Message */}
              <div>

                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  rows="5"
                  placeholder="Write your message..."
                  className="
                    w-full
                    px-4
                    py-3
                    rounded-xl
                    bg-gray-50
                    border
                    border-gray-200
                    text-gray-900
                    placeholder:text-gray-400
                    outline-none
                    focus:border-[#6EBE44]
                    focus:ring-2
                    focus:ring-[#6EBE44]/20
                    resize-none
                    transition
                    duration-300
                  "
                ></textarea>

              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="
                  w-full
                  py-3.5
                  rounded-xl
                  bg-[#6EBE44]
                  text-white
                  font-semibold
                  shadow-md
                  shadow-[#6EBE44]/20
                  hover:bg-[#5A9E38]
                  hover:shadow-lg
                  hover:shadow-[#6EBE44]/25
                  hover:scale-[1.01]
                  transition-all
                  duration-300
                "
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;