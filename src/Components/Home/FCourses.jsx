
import React from "react";
import { Link } from "react-router-dom";
import useCoursesHook from "../../Hooks/useCoursesHook";
import CoursesCard from "../CoursesCard";

function FCourses() {
  const { courses, loading, error } = useCoursesHook();

  if (loading) {
    return (
      <p className="py-10 text-center text-slate-600">
        Loading...
      </p>
    );
  }

  if (error) {
    return (
      <p className="py-10 text-center text-red-500">
        {error}
      </p>
    );
  }

  const featuredCourses = courses.filter(
    (course) => course.featured === true
  );

  return (
    <section
      id="courses"
      className="
        bg-[#F7F7F8]
        px-3
        
        md:px-12
        pt-4
        scroll-mt-16
        
      "
    >
      <div className="max-w-8xl mx-auto">
        
        {/* HEADING */}
        <h2
          className="
            text-center
            text-3xl
            md:text-4xl
            lg:text-5xl
            font-bold
            tracking-tight
            text-slate-900
          "
        >
          Featured{" "}

          <span className="text-[#6EBE44]">
            Courses
          </span>
        </h2>

        {/* DESCRIPTION */}
        <p
          className="
            text-center
            mt-3
            text-base
            sm:text-lg
            md:text-xl
            lg:text-2xl
            leading-relaxed
            text-slate-600
            max-w-3xl
            mx-auto
          "
        >
          Explore our most popular courses and build the skills you need to
          grow, create, and become job-ready.
        </p>

        {/* COURSES */}
        <div
          className="
            grid
            grid-cols-1
            items-stretch
            md:grid-cols-2
            lg:grid-cols-3
            mt-8
            mx-auto
            gap-6
          "
        >
          {featuredCourses.map((course) => (
            <CoursesCard
              key={course.id}
              course={course}
            />
          ))}
        </div>

        {/* VIEW MORE BUTTON */}
        <div className="flex justify-center">
          <Link
            to="/courses"
            className="
              group
              mt-8
              flex
              items-center
              gap-2
              rounded-lg
              bg-[#6EBE44]
              px-6
              py-3
              font-semibold
              text-white
              shadow-md
              shadow-[#6EBE44]/25
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-[#5FA83A]
              hover:shadow-lg
              hover:shadow-[#6EBE44]/30
            "
          >
            View More Courses

            <span
              className="
                transition-transform
                duration-200
                group-hover:translate-x-1
              "
            >
              →
            </span>
          </Link>
        </div>

      </div>
    </section>
  );
}

export default FCourses;

