import React from "react";
import {
  Clock,
  BookOpen,
  Users,
  BadgeCheck,
  ArrowRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

function CoursesCard({ course }) {
  const navigate = useNavigate();

  // =========================
  // FINAL PRICE
  // =========================

  const Fprice = course.discount
    ? Math.round(
        course.price - (course.price * course.discount) / 100
      )
    : course.price;

  return (
    <div className="h-full">
      {/* =====================================================
          MAIN CARD
      ====================================================== */}

      <div
        className="
          group
          flex
          h-full
          min-h-[460px]
          flex-col
          overflow-hidden
          rounded-2xl
          border
          border-gray-200
          bg-white
          shadow-sm
          shadow-gray-900/5

          transition-all
          duration-300
          ease-out

          hover:-translate-y-1
          hover:border-[#6EBE44]/40
          hover:shadow-xl
          hover:shadow-[#6EBE44]/10

          sm:mx-auto
          sm:w-[90%]
          md:mx-0
          md:w-full
        "
      >
        {/* =====================================================
            COURSE IMAGE
        ====================================================== */}

        <div className="relative shrink-0 overflow-hidden bg-green-50">
          <img
            src={course.image}
            alt={course.title}
            className="
              h-40
              w-full
              object-cover

              transition-transform
              duration-700
              ease-out

              group-hover:scale-105
            "
          />

          {/* Image Overlay */}

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              bg-gradient-to-t
              from-gray-950/30
              via-transparent
              to-transparent
            "
          />

          {/* Discount */}

          {course.discount && (
            <div
              className="
                absolute
                right-3
                top-3
                rounded-full
                bg-[#6EBE44]
                px-3
                py-1.5
                text-xs
                font-bold
                text-white
                shadow-lg
                shadow-[#6EBE44]/25

                transition-transform
                duration-300

                group-hover:scale-105
              "
            >
              {course.discount}% OFF
            </div>
          )}
        </div>

        {/* =====================================================
            CONTENT
        ====================================================== */}

        <div className="flex flex-1 flex-col p-4">
          {/* =====================================================
              CATEGORY + LEVEL
          ====================================================== */}

          <div className="mb-2.5 flex items-center justify-between gap-3">
            <p
              className="
                min-w-0
                truncate
                text-xs
                font-bold
                uppercase
                tracking-wide
                text-[#6EBE44]
              "
            >
              {course.category}
            </p>

            <span
              className="
                shrink-0
                rounded-full
                border
                border-green-100
                bg-green-50
                px-2.5
                py-1
                text-[11px]
                font-semibold
                text-[#5A9E38]
              "
            >
              {course.level}
            </span>
          </div>

          {/* =====================================================
              TITLE
          ====================================================== */}

          <h2
            className="
              line-clamp-2
              min-h-[48px]
              text-lg
              font-bold
              leading-6
              text-gray-900

              transition-colors
              duration-300

              group-hover:text-[#5A9E38]

              sm:text-lg
            "
          >
            {course.title}
          </h2>

          {/* =====================================================
              DESCRIPTION
          ====================================================== */}

          <p
            className="
              mt-1.5
              line-clamp-2
              min-h-[40px]
              text-sm
              leading-5
              text-gray-500
            "
          >
            {course.description}
          </p>

          {/* =====================================================
              COURSE INFO
          ====================================================== */}

          <div
            className="
              mt-3
              flex
              flex-wrap
              gap-1.5
            "
          >
            {/* Duration */}

            <span
              className="
                inline-flex
                items-center
                gap-1.5
                rounded-lg
                border
                border-gray-100
                bg-gray-50
                px-2
                py-1.5
                text-xs
                font-medium
                text-gray-600
              "
            >
              <Clock
                size={13}
                className="shrink-0 text-[#6EBE44]"
              />

              {course.duration}
            </span>

            {/* Lessons */}

            <span
              className="
                inline-flex
                items-center
                gap-1.5
                rounded-lg
                border
                border-gray-100
                bg-gray-50
                px-2
                py-1.5
                text-xs
                font-medium
                text-gray-600
              "
            >
              <BookOpen
                size={13}
                className="shrink-0 text-[#6EBE44]"
              />

              {course.lessons} Lessons
            </span>

            {/* Students */}

            <span
              className="
                inline-flex
                items-center
                gap-1.5
                rounded-lg
                border
                border-gray-100
                bg-gray-50
                px-2
                py-1.5
                text-xs
                font-medium
                text-gray-600
              "
            >
              <Users
                size={13}
                className="shrink-0 text-[#6EBE44]"
              />

              {course.students}
            </span>

            {/* Certificate */}

            <span
              className="
                group/certificate
                inline-flex
                items-center
                gap-1.5
                rounded-lg
                border
                border-amber-100
                bg-amber-50
                px-2
                py-1.5
                text-xs
                font-medium
                text-amber-700
              "
            >
              <BadgeCheck
                size={13}
                className="
                  shrink-0
                  text-amber-500
                  transition-transform
                  duration-300
                  group-hover/certificate:scale-110
                "
              />

              Certificate
            </span>
          </div>

          {/* =====================================================
              INSTRUCTOR
          ====================================================== */}

          <div className="my-3 flex items-center gap-3 border-y border-gray-100 py-2.5">
            {/* Instructor Image */}

            <img
              src={course.instructorImage}
              alt={course.instructor}
              className="
                h-9
                w-9
                shrink-0
                rounded-full
                border-2
                border-green-100
                object-cover

                transition-all
                duration-300

                group-hover:border-[#6EBE44]
              "
            />

            {/* Instructor Info */}

            <div className="min-w-0 flex-1">
              <p
                className="
                  truncate
                  text-sm
                  font-semibold
                  text-gray-800
                "
              >
                {course.instructor}
              </p>

              <p className="mt-0.5 text-xs text-gray-500">
                Instructor
              </p>
            </div>
          </div>

          {/* =====================================================
              PRICE + BUTTONS
          ====================================================== */}

          <div className="mt-auto">
            {/* =====================================================
                PRICE
            ====================================================== */}

            <div className="flex items-center justify-between gap-3">
              <div className="flex items-baseline gap-2">
                {/* Current Price */}

                <p
                  className="
                    flex
                    items-baseline
                    text-xl
                    font-bold
                    tracking-tight
                    text-gray-900
                  "
                >
                  <span
                    className="
                      mr-0.5
                      text-lg
                      font-bold
                      text-[#6EBE44]
                    "
                  >
                    ৳
                  </span>

                  {Fprice}
                </p>

                {/* Old Price */}

                {course.discount && (
                  <p
                    className="
                      text-xs
                      font-medium
                      text-gray-400
                      line-through
                    "
                  >
                    ৳{course.price}
                  </p>
                )}
              </div>

              {/* Save */}

              {course.discount && (
                <span
                  className="
                    rounded-full
                    bg-green-50
                    px-2.5
                    py-1
                    text-[11px]
                    font-bold
                    text-[#5A9E38]
                  "
                >
                  Save {course.discount}%
                </span>
              )}
            </div>

            {/* =====================================================
                BUTTONS
            ====================================================== */}

            <div
              className="
                mt-3
                flex
                w-full
                flex-col
                gap-2

                sm:flex-row
                sm:gap-2
              "
            >
              {/* View Details */}

              <button
                onClick={() =>
                  navigate(`/courses/${course.id}`)
                }
                className="
                  group/details
                  flex
                  flex-1
                  cursor-pointer
                  items-center
                  justify-center
                  gap-1.5
                  rounded-xl
                  border
                  border-[#6EBE44]
                  bg-white
                  px-3
                  py-2
                  text-sm
                  font-semibold
                  text-[#5A9E38]

                  transition-all
                  duration-300

                  hover:bg-green-50
                  hover:shadow-sm

                  active:scale-[0.98]
                "
              >
                View Details

                <ArrowRight
                  size={15}
                  className="
                    transition-transform
                    duration-300
                    group-hover/details:translate-x-1
                  "
                />
              </button>

              {/* Enroll Now */}

              <button
              
                className="
                  flex
                  flex-1
                  cursor-pointer
                  items-center
                  justify-center
                  rounded-xl
                  bg-[#6EBE44]
                  px-3
                  py-2
                  text-sm
                  font-semibold
                  text-white

                  shadow-md
                  shadow-[#6EBE44]/20

                  transition-all
                  duration-300

                  hover:bg-[#5A9E38]
                  hover:shadow-lg
                  hover:shadow-[#6EBE44]/25

                  active:scale-[0.98]
                "
              >
                Enroll Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoursesCard;