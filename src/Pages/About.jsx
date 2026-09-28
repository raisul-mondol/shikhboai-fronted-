import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="
      scroll-mt-16
        w-full
        min-h-screen
        bg-gray-50
        text-gray-900
        px-4
        sm:px-6
        lg:px-8
        py-4
        sm:pt-5
        lg:pt-6
      "
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">

          <p
            className="
              text-[#5A9E38]
              text-sm
              sm:text-base
              font-semibold
              uppercase
              tracking-[0.2em]
              mb-3
            "
          >
            About Shikhbo AI
          </p>

          <h2
            className="
              text-3xl
              sm:text-4xl
              md:text-5xl
              lg:text-6xl
              font-bold
              leading-tight
              text-gray-900
            "
          >
            Learn Today.{" "}
            <span className="text-[#6EBE44]">
              Build Tomorrow.
            </span>
          </h2>

          <p
            className="
              mt-5
              text-sm
              sm:text-base
              md:text-lg
              text-gray-600
              leading-7
            "
          >
            Shikhbo AI is a modern learning platform designed to help students
            learn technology, build real-world projects, and develop the skills
            they need for their future careers.
          </p>

        </div>

        {/* Main Content */}
        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-10
            lg:gap-16
            items-center
          "
        >

          {/* Left Content */}
          <div className="space-y-4 sm:space-y-6">

            <div>
              <p
                className="
                  text-[#5A9E38]
                  font-semibold
                  text-base
                  
                  mb-2
                  text-center
                "
              >
                OUR MISSION
              </p>

              <h3
                className="
                  text-2xl
                  sm:text-3xl
                  lg:text-4xl
                  font-bold
                  text-gray-900
                  text-center
                "
              >
                Why Choose Shikhbo AI?
              </h3>
            </div>

            <p
              className="
                text-sm
                sm:text-base
                text-gray-600
                leading-7
                px-1
              "
            >
              We believe learning technology should be simple, practical and
              accessible to everyone. Our courses are carefully designed with
              step-by-step lessons, practical examples and real-world projects.
            </p>

            <p
              className="
                text-sm
                sm:text-base
                text-gray-600
                leading-7
                px-1
              "
            >
              From frontend development to backend, full-stack development and
              UI/UX design, Shikhbo AI helps learners gain practical skills and
              become confident developers and designers.
            </p>

            {/* Features */}
            <div
              className="
                grid
                grid-cols-1
                sm:grid-cols-2
                gap-4
                pt-2
                
              "
            >

              {/* Feature 1 */}
              <div className="flex items-start gap-3 w-full max-w-70 mx-auto sm:mx-0">

                <div
                  className="
                    w-10
                    h-10
                    shrink-0
                    rounded-full
                    bg-[#EAF6E4]
                    border
                    border-[#DDEFD5]
                    text-[#6EBE44]
                    flex
                    items-center
                    justify-center
                    font-bold
                  "
                >
                  ✓
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900">
                    Practical Learning
                  </h4>

                  <p className="text-sm text-gray-500 mt-1">
                    Learn by building real projects.
                  </p>
                </div>

              </div>

              {/* Feature 2 */}
              <div className="flex items-start gap-3 w-full max-w-70 mx-auto sm:mx-0">

                <div
                  className="
                    w-10
                    h-10
                    shrink-0
                    rounded-full
                    bg-[#EAF6E4]
                    border
                    border-[#DDEFD5]
                    text-[#6EBE44]
                    flex
                    items-center
                    justify-center
                    font-bold
                  "
                >
                  ✓
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900">
                    Expert Instructors
                  </h4>

                  <p className="text-sm text-gray-500 mt-1">
                    Learn from experienced developers.
                  </p>
                </div>

              </div>

              {/* Feature 3 */}
          <div className="flex items-start gap-3 w-full max-w-70 mx-auto sm:mx-0">

                <div
                  className="
                    w-10
                    h-10
                    shrink-0
                    rounded-full
                    bg-[#EAF6E4]
                    border
                    border-[#DDEFD5]
                    text-[#6EBE44]
                    flex
                    items-center
                    justify-center
                    font-bold
                  "
                >
                  ✓
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900">
                    Step-by-Step
                  </h4>

                  <p className="text-sm text-gray-500 mt-1">
                    Easy lessons for every learner.
                  </p>
                </div>

              </div>

              {/* Feature 4 */}
           <div className="flex items-start gap-3 w-full max-w-70 mx-auto sm:mx-0">

                <div
                  className="
                    w-10
                    h-10
                    shrink-0
                    rounded-full
                    bg-[#EAF6E4]
                    border
                    border-[#DDEFD5]
                    text-[#6EBE44]
                    flex
                    items-center
                    justify-center
                    font-bold
                  "
                >
                  ✓
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900">
                    Career Focused
                  </h4>

                  <p className="text-sm text-gray-500 mt-1">
                    Skills that prepare you for jobs.
                  </p>
                </div>

              </div>

            </div>

            {/* Explore Courses */}
            <a
              href="#courses"
              className="
                block
                w-fit mx-auto
                mt-3
                px-6
                sm:px-7
                py-3
                rounded-full
                bg-[#6EBE44]
                text-white
                text-sm
                sm:text-base
                font-semibold
                shadow-md
                shadow-[#6EBE44]/20
                hover:bg-[#5A9E38]
                hover:scale-105
                hover:shadow-lg
                hover:shadow-[#6EBE44]/25
                transition-all
                duration-300
                
              "
            >
              Explore Courses
            </a>

          </div>

          {/* Right Stats */}
          <div
            className="
              grid
              grid-cols-2
              gap-3
              sm:gap-5
            "
          >

            {/* Card 1 */}
            <div
              className="
                bg-white
                border
                border-[#DDEFD5]
                rounded-xl
                sm:rounded-2xl
                p-5
                sm:p-7
                text-center
                shadow-sm
                shadow-gray-900/5
                hover:-translate-y-2
                hover:border-[#BFE3AF]
                hover:shadow-md
                transition-all
                duration-300
              "
            >
              <h4
                className="
                  text-3xl
                  sm:text-4xl
                  lg:text-5xl
                  font-bold
                  text-[#6EBE44]
                "
              >
                15+
              </h4>

              <p
                className="
                  text-xs
                  sm:text-sm
                  md:text-base
                  text-gray-500
                  mt-2
                "
              >
                Professional Courses
              </p>
            </div>

            {/* Card 2 */}
            <div
              className="
                bg-white
                border
                border-[#DDEFD5]
                rounded-xl
                sm:rounded-2xl
                p-5
                sm:p-7
                text-center
                shadow-sm
                shadow-gray-900/5
                hover:-translate-y-2
                hover:border-[#BFE3AF]
                hover:shadow-md
                transition-all
                duration-300
              "
            >
              <h4
                className="
                  text-3xl
                  sm:text-4xl
                  lg:text-5xl
                  font-bold
                  text-[#6EBE44]
                "
              >
                300+
              </h4>

              <p
                className="
                  text-xs
                  sm:text-sm
                  md:text-base
                  text-gray-500
                  mt-2
                "
              >
                Happy Learners
              </p>
            </div>

            {/* Card 3 */}
            <div
              className="
                bg-white
                border
                border-[#DDEFD5]
                rounded-xl
                sm:rounded-2xl
                p-5
                sm:p-7
                text-center
                shadow-sm
                shadow-gray-900/5
                hover:-translate-y-2
                hover:border-[#BFE3AF]
                hover:shadow-md
                transition-all
                duration-300
              "
            >
              <h4
                className="
                  text-3xl
                  sm:text-4xl
                  lg:text-5xl
                  font-bold
                  text-[#6EBE44]
                "
              >
                40+
              </h4>

              <p
                className="
                  text-xs
                  sm:text-sm
                  md:text-base
                  text-gray-500
                  mt-2
                "
              >
                Practical Lessons
              </p>
            </div>

            {/* Card 4 */}
            <div
              className="
                bg-white
                border
                border-[#DDEFD5]
                rounded-xl
                sm:rounded-2xl
                p-5
                sm:p-7
                text-center
                shadow-sm
                shadow-gray-900/5
                hover:-translate-y-2
                hover:border-[#BFE3AF]
                hover:shadow-md
                transition-all
                duration-300
              "
            >
              <h4
                className="
                  text-3xl
                  sm:text-4xl
                  lg:text-5xl
                  font-bold
                  text-[#6EBE44]
                "
              >
                100%
              </h4>

              <p
                className="
                  text-xs
                  sm:text-sm
                  md:text-base
                  text-gray-500
                  mt-2
                "
              >
                Practical Learning
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;