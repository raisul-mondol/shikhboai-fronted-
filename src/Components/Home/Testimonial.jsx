import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaQuoteLeft } from "react-icons/fa";
import { motion } from "framer-motion";

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // =====================================================
  // FETCH TESTIMONIALS
  // =====================================================

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        setLoading(true);
        setError(null);

        const res = await axios.get("/db.json");

        setTestimonials(res.data.testimonials || []);
      } catch (error) {
        console.log(error);
        setError("Failed to load testimonials");
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  // =====================================================
  // LOADING
  // =====================================================

  if (loading) {
    return (
      <section className="bg-gray-50 py-12">
        <p className="text-center text-sm text-gray-600">
          Loading testimonials...
        </p>
      </section>
    );
  }

  // =====================================================
  // ERROR
  // =====================================================

  if (error) {
    return (
      <section className="bg-gray-50 py-12">
        <p className="text-center text-sm text-red-500">
          {error}
        </p>
      </section>
    );
  }

  // =====================================================
  // TESTIMONIAL CARD
  // =====================================================

  const TestimonialCard = ({ student, index }) => {
    return (
      <div
        key={`${student.id}-${index}`}
        className="
          group
          flex
          w-[280px]
          min-h-[300px]
          shrink-0
          flex-col
          rounded-2xl
          border
          border-gray-200
          bg-white
          p-5
          shadow-sm
          shadow-gray-900/5

          transition-all
          duration-300

          hover:-translate-y-1
          hover:border-[#6EBE44]/40
          hover:bg-[#F8FCF5]
          hover:shadow-lg
          hover:shadow-[#6EBE44]/10

          sm:w-[330px]
          sm:p-6

          lg:w-[360px]
          lg:p-7
        "
      >
        {/* =====================================================
            QUOTE ICON
        ====================================================== */}

        <div
          className="
            mb-4
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-lg
            bg-[#EAF6E4]
          "
        >
          <FaQuoteLeft
            className="
              text-lg
              text-[#6EBE44]
              transition-transform
              duration-300
              group-hover:scale-110
            "
          />
        </div>

        {/* =====================================================
            MESSAGE
        ====================================================== */}

        <p
          className="
            line-clamp-4
            min-h-[92px]
            text-sm
            leading-6
            text-gray-600

            sm:text-[15px]
            sm:leading-6
          "
        >
          "{student.message}"
        </p>

        {/* =====================================================
            STUDENT INFO
        ====================================================== */}

        <div
          className="
            mt-auto
            flex
            items-center
            gap-3
            border-t
            border-gray-100
            pt-4

            sm:gap-3.5
            sm:pt-5
          "
        >
          {/* Student Image */}

          <img
            src={student.image}
            alt={student.name}
            loading="lazy"
            decoding="async"
            className="
              h-11
              w-11
              shrink-0
              rounded-full
              border-2
              border-green-100
              object-cover
              ring-2
              ring-[#6EBE44]/10

              transition-all
              duration-300

              group-hover:border-[#6EBE44]
              group-hover:ring-[#6EBE44]/20

              sm:h-12
              sm:w-12
            "
          />

          {/* Student Details */}

          <div className="min-w-0 flex-1">
            <h2
              className="
                truncate
                text-sm
                font-bold
                text-gray-900

                sm:text-base
              "
            >
              {student.name}
            </h2>

            <p
              className="
                mt-0.5
                truncate
                text-xs
                font-medium
                text-[#5A9E38]

                sm:text-sm
              "
            >
              {student.role}
            </p>
          </div>
        </div>
      </div>
    );
  };

  // =====================================================
  // RENDER
  // =====================================================

  return (
    <section
      className="
        w-full
        overflow-hidden
        bg-gray-50
        px-4
        py-6

        sm:py-8
        lg:py-10
      "
    >
      <div className="mx-auto max-w-7xl">

        {/* =====================================================
            HEADING
        ====================================================== */}

        <div className="mb-9 text-center sm:mb-11">
          <p
            className="
              text-xs
              font-semibold
              uppercase
              tracking-[3px]
              text-[#5A9E38]

              sm:text-sm
            "
          >
            Testimonials
          </p>

          <h1
            className="
              mt-2.5
              text-2xl
              font-bold
              leading-tight
              text-gray-900

              sm:text-3xl
              lg:text-4xl
            "
          >
            What Our{" "}
            <span className="text-[#6EBE44]">
              Students Say
            </span>
          </h1>

          <p
            className="
              mx-auto
              mt-3
              max-w-lg
              text-sm
              leading-relaxed
              text-gray-600

              sm:text-base
            "
          >
            Discover what our students say about their
            learning experience with us.
          </p>
        </div>

        {/* =====================================================
            SLIDER
        ====================================================== */}

        <div className="relative w-full overflow-hidden">

          {/* =====================================================
              LEFT FADE
          ====================================================== */}

          <div
            className="
              pointer-events-none
              absolute
              left-0
              top-0
              z-10
              h-full
              w-8
              bg-gradient-to-r
              from-gray-50
              to-transparent

              sm:w-14
              lg:w-20
            "
          />

          {/* =====================================================
              RIGHT FADE
          ====================================================== */}

          <div
            className="
              pointer-events-none
              absolute
              right-0
              top-0
              z-10
              h-full
              w-8
              bg-gradient-to-l
              from-gray-50
              to-transparent

              sm:w-14
              lg:w-20
            "
          />

          {/* =====================================================
              SLIDING CONTENT
          ====================================================== */}

          <motion.div
            className="
              flex
              w-max
              gap-4

              sm:gap-5
            "
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 28,
                ease: "linear",
              },
            }}
          >
            {/* =================================================
                FIRST SET
            ================================================== */}

            {testimonials.map((student, index) => (
              <TestimonialCard
                key={`first-${student.id}`}
                student={student}
                index={`first-${index}`}
              />
            ))}

            {/* =================================================
                SECOND SET
            ================================================== */}

            {testimonials.map((student, index) => (
              <TestimonialCard
                key={`second-${student.id}`}
                student={student}
                index={`second-${index}`}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;