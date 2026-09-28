import React, { useState } from "react";
import CoursesCard from "../CoursesCard";
import useCoursesHook from "../../Hooks/useCoursesHook";
import { Search } from "lucide-react";

function Mcourses() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  const {
    courses: allCourses,
    loading,
    error,
  } = useCoursesHook();

  // Category list
  const categories = [
    ...new Set(allCourses.map((course) => course.category)),
  ];

  // Search + Category filter
  const courses = allCourses.filter((course) => {
    const matchesSearch = course.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "" || course.category === category;

    return matchesSearch && matchesCategory;
  });

  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  const handleCategory = (e) => {
    setCategory(e.target.value);
  };

  if (loading) {
    return (
      <section className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-600">
          Loading courses...
        </p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-red-500">
          {error}
        </p>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-gray-50 px-4 py-12">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-10 text-center">

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#5A9E38]">
            Learn & Grow
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
            Explore Our{" "}
            <span className="text-[#6EBE44]">
              All Courses
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-gray-600 sm:text-base">
            Discover courses designed to build practical skills and help you
            become job-ready.
          </p>

        </div>

        {/* Search + Category */}
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center">

          {/* Search */}
          <div className="relative mx-auto w-2/3 lg:flex-1">

            <Search
              size={18}
              className="
                absolute
                left-4
                top-1/2
                -translate-y-1/2
                text-gray-400
              "
            />

            <input
              type="text"
              value={search}
              onChange={handleInput}
              placeholder="Search courses..."
              className="
                w-full
                rounded-xl
                border
                border-gray-200
                bg-white
                py-3
                pl-11
                pr-4
                text-sm
                text-gray-900
                placeholder:text-gray-400
                outline-none
                shadow-sm
                transition-all
                duration-300
                focus:border-[#6EBE44]
                focus:ring-2
                focus:ring-[#6EBE44]/20
              "
            />

          </div>

          {/* Category */}
          <div className="mx-auto w-2/3 lg:w-1/3">

            <select
              value={category}
              onChange={handleCategory}
              className="
                w-full
                rounded-xl
                border
                border-gray-200
                bg-white
                px-4
                py-3
                text-sm
                text-gray-900
                outline-none
                shadow-sm
                transition-all
                duration-300
                focus:border-[#6EBE44]
                focus:ring-2
                focus:ring-[#6EBE44]/20
              "
            >
              <option
                value=""
                className="bg-white text-gray-900"
              >
                All Categories
              </option>

              {categories.map((category) => (
                <option
                  key={category}
                  value={category}
                  className="bg-white text-gray-900"
                >
                  {category}
                </option>
              ))}
            </select>

          </div>

        </div>

        {/* Result Count */}
        <div className="mt-8">

          <p className="text-sm text-gray-600">
            Showing{" "}
            <span className="font-semibold text-[#6EBE44]">
              {courses.length}
            </span>{" "}
            courses
          </p>

        </div>

        {/* Courses */}
        {courses.length > 0 ? (

          <div
            className="
              mt-5
              grid
              grid-cols-1
              gap-6
              md:grid-cols-2
              lg:grid-cols-3
            "
          >
            {courses.map((course) => (
              <CoursesCard
                key={course.id}
                course={course}
              />
            ))}
          </div>

        ) : (

          <p className="mt-10 text-center text-gray-500">
            No courses found.
          </p>

        )}

      </div>
    </section>
  );
}

export default Mcourses;