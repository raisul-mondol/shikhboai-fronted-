import { useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useCoursesHook from "../../Hooks/useCoursesHook";

import {
  ArrowLeft,
  ArrowRight,
  Award,
  BadgeCheck,
  BookOpen,
  BriefcaseBusiness,
  Check,
  ChevronDown,
  ClipboardCheck,
  Clock3,
  Globe,
  GraduationCap,
  Headphones,
  Laptop,
  PlayCircle,
  ShieldCheck,
  Star,
  Users,
  Wrench,
} from "lucide-react";

function CourseDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { courses, loading, error } = useCoursesHook();

  // Find course by URL id
  const course = useMemo(() => {
    return courses.find(
      (item) => String(item.id) === String(id)
    );
  }, [courses, id]);

  // Final discounted price
  const finalPrice = course
    ? Math.round(
        course.price -
          (course.price * course.discount) / 100
      )
    : 0;

  // Related courses
  const relatedCourses = useMemo(() => {
    if (!course) return [];

    return courses
      .filter(
        (item) =>
          item.id !== course.id &&
          item.category === course.category
      )
      .slice(0, 3);
  }, [courses, course]);

  /* =========================
     LOADING
  ========================== */

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#F7FAF5] px-4">
        <div className="text-center">
          <div className="mx-auto h-11 w-11 animate-spin rounded-full border-4 border-[#6EBE44]/20 border-t-[#6EBE44]" />

          <p className="mt-4 text-sm font-medium text-gray-600">
            Loading course...
          </p>
        </div>
      </div>
    );
  }

  /* =========================
     ERROR
  ========================== */

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#F7FAF5] px-4">
        <div className="w-full max-w-md rounded-3xl border border-gray-200 bg-white p-8 text-center shadow-sm">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-red-50 text-red-500">
            <BookOpen size={25} />
          </div>

          <h2 className="mt-5 text-2xl font-bold text-gray-900">
            Something went wrong
          </h2>

          <p className="mt-2 text-sm leading-6 text-gray-500">
            {error}
          </p>

          <button
            onClick={() => navigate("/courses")}
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#6EBE44] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#5A9E38]"
          >
            <ArrowLeft size={17} />
            Back to Courses
          </button>
        </div>
      </div>
    );
  }

  /* =========================
     COURSE NOT FOUND
  ========================== */

  if (!course) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#F7FAF5] px-4">
        <div className="w-full max-w-md rounded-3xl border border-gray-200 bg-white p-8 text-center shadow-sm">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#EAF6E3] text-[#5A9E38]">
            <BookOpen size={25} />
          </div>

          <h2 className="mt-5 text-2xl font-bold text-gray-900">
            Course Not Found
          </h2>

          <p className="mt-2 text-sm leading-6 text-gray-500">
            The course you are looking for does not exist.
          </p>

          <button
            onClick={() => navigate("/courses")}
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#6EBE44] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#5A9E38]"
          >
            <ArrowLeft size={17} />
            Browse Courses
          </button>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#F7FAF5]">

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative overflow-hidden bg-white">

        {/* Decorative green blur */}
        <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#6EBE44]/10 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-40 left-0 h-80 w-80 rounded-full bg-[#6EBE44]/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 pb-12 pt-6 sm:px-6 lg:px-8 lg:pb-16">

          {/* Breadcrumb */}
          <div className="mb-8 flex flex-wrap items-center gap-2 text-xs sm:text-sm">

            <button
              onClick={() => navigate("/")}
              className="text-gray-500 transition hover:text-[#6EBE44]"
            >
              Home
            </button>

            <span className="text-gray-300">/</span>

            <button
              onClick={() => navigate("/courses")}
              className="text-gray-500 transition hover:text-[#6EBE44]"
            >
              Courses
            </button>

            <span className="text-gray-300">/</span>

            <span className="max-w-[220px] truncate font-medium text-gray-700">
              {course.title}
            </span>
          </div>

          {/* Hero Grid */}
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_390px] lg:items-center">

            {/* LEFT CONTENT */}
            <div>

              {/* Category */}
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#6EBE44]/20 bg-[#6EBE44]/10 px-4 py-2">
                <span className="h-2 w-2 rounded-full bg-[#6EBE44]" />

                <span className="text-xs font-bold uppercase tracking-wider text-[#5A9E38] sm:text-sm">
                  {course.category}
                </span>
              </div>

              {/* Title */}
              <h1 className="max-w-4xl text-3xl font-bold leading-[1.15] tracking-tight text-gray-950 sm:text-4xl md:text-5xl lg:text-6xl">
                {course.title}
              </h1>

              {/* Description */}
              <p className="mt-5 max-w-3xl text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
                {course.description}
              </p>

              {/* Rating */}
              <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm">

                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <Star
                      size={17}
                      fill="#FBBF24"
                      className="text-[#FBBF24]"
                    />

                    <span className="font-bold text-gray-900">
                      {course.rating}
                    </span>
                  </div>

                  <span className="text-gray-500">
                    ({course.reviewCount} reviews)
                  </span>
                </div>

                <div className="flex items-center gap-2 text-gray-600">
                  <Users size={17} />

                  <span>
                    {course.students.toLocaleString()} students
                  </span>
                </div>

                <span className="rounded-full border border-[#DDEFD5] bg-[#F4FAF1] px-3 py-1 text-xs font-semibold text-[#5A9E38]">
                  {course.level}
                </span>
              </div>

              {/* Instructor mini */}
              <div className="mt-8 flex items-center gap-3">

                <img
                  src={course.instructorImage}
                  alt={course.instructor}
                  className="h-11 w-11 rounded-full border-2 border-[#6EBE44]/30 bg-white object-cover"
                />

                <div>
                  <p className="text-xs text-gray-500">
                    Instructor
                  </p>

                  <p className="text-sm font-semibold text-gray-900">
                    {course.instructor}
                  </p>
                </div>

                <span className="mx-2 h-7 w-px bg-gray-200" />

                <div>
                  <p className="text-xs text-gray-500">
                    Status
                  </p>

                  <p className="text-sm font-semibold text-gray-700">
                    {course.status}
                  </p>
                </div>

              </div>

            </div>

            {/* RIGHT PRICE CARD */}
            <div className="relative lg:pl-4">

              <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl shadow-gray-200/50">

                {/* Image */}
                <div className="relative">

                  <img
                    src={course.image}
                    alt={course.title}
                    className="h-56 w-full object-cover sm:h-64"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                  {/* Discount */}
                  <div className="absolute left-4 top-4 rounded-full bg-[#6EBE44] px-3 py-1.5 text-xs font-bold text-white shadow-lg">
                    {course.discount}% OFF
                  </div>

                  
                 

                </div>

                {/* Price */}
                <div className="p-5 sm:p-6">

                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                    Course Price
                  </p>

                  <div className="mt-2 flex flex-wrap items-end gap-3">

                    <span className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                      ৳ {finalPrice.toLocaleString()}
                    </span>

                    <span className="pb-1 text-sm text-gray-400 line-through">
                      ৳ {course.price.toLocaleString()}
                    </span>

                  </div>

                  {/* Enroll */}
                  <button
                    type="button"
                   onClick={() => navigate("/Payment/:id")}
                    className="group mt-5 cursor-pointer flex w-full items-center justify-center gap-2 rounded-xl bg-[#6EBE44] px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#6EBE44]/20 transition hover:bg-[#5A9E38] hover:shadow-[#6EBE44]/30"
                  >
                    Enroll Now

                    <ArrowRight
                      size={18}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </button>

                  {/* Included */}
                  <div className="mt-5 border-t border-gray-100 pt-5">

                    <p className="mb-4 text-xs font-bold uppercase tracking-wider text-gray-400">
                      This course includes
                    </p>

                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1">

                      <MiniFeature
                        icon={<Clock3 size={16} />}
                        text={course.duration}
                      />

                      <MiniFeature
                        icon={<BookOpen size={16} />}
                        text={`${course.lessons} lessons`}
                      />

                      <MiniFeature
                        icon={<BadgeCheck size={16} />}
                        text={
                          course.certificate
                            ? "Certificate included"
                            : "No certificate"
                        }
                      />

                      <MiniFeature
                        icon={<ShieldCheck size={16} />}
                        text={`${course.access} access`}
                      />

                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          QUICK STATS
      ====================================================== */}

      <section className="relative z-10 -mt-1 bg-white pb-10">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-2 overflow-hidden rounded-2xl border border-[#DDEFD5] bg-white shadow-sm sm:grid-cols-4">

            <HeroStat
              icon={<Clock3 size={20} />}
              label="Duration"
              value={course.duration}
            />

            <HeroStat
              icon={<BookOpen size={20} />}
              label="Lessons"
              value={course.lessons}
            />

            <HeroStat
              icon={<Globe size={20} />}
              label="Language"
              value={course.language}
            />

            <HeroStat
              icon={<Award size={20} />}
              label="Certificate"
              value={course.certificate ? "Included" : "No"}
            />

          </div>
        </div>
      </section>

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <section className="bg-[#F7FAF5]">

        <div className="mx-auto max-w-7xl px-4 pt-6 pb-14 sm:px-6 sm:pb-16 lg:px-8">

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_330px]">

            {/* MAIN */}
            <div className="min-w-0 space-y-10">

              {/* WHAT YOU WILL LEARN */}
              <ContentSection
                eyebrow="COURSE OVERVIEW"
                title="What You'll Learn"
                description="Everything you need to build practical skills through this course."
                icon={<GraduationCap size={21} />}
              >
                <div className="grid grid-cols-1 gap-x-10 gap-y-4 md:grid-cols-2">

                  {course.whatYouWillLearn?.map(
                    (item, index) => (
                      <div
                        key={index}
                        className="group flex items-start gap-3"
                      >
                        <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#EAF6E3] text-[#5A9E38] transition group-hover:bg-[#6EBE44] group-hover:text-white">
                          <Check
                            size={14}
                            strokeWidth={3}
                          />
                        </span>

                        <p className="text-sm leading-6 text-gray-600">
                          {item}
                        </p>
                      </div>
                    )
                  )}

                </div>
              </ContentSection>

              {/* MODULES */}
              <ContentSection
                eyebrow="CURRICULUM"
                title="Course Modules"
                description="Follow the structured learning path from fundamentals to practical projects."
                icon={<BookOpen size={21} />}
              >
                <div className="space-y-3">

                  {course.modules?.map(
                    (module, index) => (
                      <details
                        key={index}
                        className="group overflow-hidden rounded-2xl border border-gray-200 bg-white transition hover:border-[#BFE3AF] open:border-[#BFE3AF]"
                      >

                        <summary className="flex cursor-pointer list-none items-center gap-3 p-4 sm:p-5">

                          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#EAF6E3] text-sm font-bold text-[#5A9E38]">
                            {String(index + 1).padStart(2, "0")}
                          </span>

                          <div className="min-w-0 flex-1">
                            <p className="truncate text-sm font-bold text-gray-800 sm:text-base">
                              {module.title}
                            </p>

                            <p className="mt-1 text-xs text-gray-400">
                              {module.lessons} lessons
                            </p>
                          </div>

                          <span className="hidden rounded-full bg-gray-50 px-3 py-1 text-xs font-medium text-gray-500 sm:block">
                            {module.lessons} Lessons
                          </span>

                          <ChevronDown
                            size={19}
                            className="shrink-0 text-gray-400 transition duration-300 group-open:rotate-180"
                          />

                        </summary>

                        <div className="border-t border-gray-100 bg-[#FAFCF9] px-5 py-4 pl-16">
                          <p className="text-sm leading-6 text-gray-500">
                            This module contains {module.lessons} practical lessons designed to help you understand and apply the concepts step by step.
                          </p>
                        </div>

                      </details>
                    )
                  )}

                </div>
              </ContentSection>

              {/* PROJECTS + TOOLS */}
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

                <SimpleContentCard
                  icon={<BriefcaseBusiness size={21} />}
                  title="Projects You'll Build"
                  items={course.projects}
                />

                <SimpleContentCard
                  icon={<Wrench size={21} />}
                  title="Tools You'll Use"
                  items={course.tools}
                />

              </div>

              {/* REQUIREMENTS + INCLUDES */}
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

                <SimpleContentCard
                  icon={<ClipboardCheck size={21} />}
                  title="Requirements"
                  items={course.requirements}
                />

                <SimpleContentCard
                  icon={<BadgeCheck size={21} />}
                  title="Course Includes"
                  items={course.courseIncludes}
                />

              </div>

              {/* INSTRUCTOR */}
              <section className="overflow-hidden rounded-3xl border border-[#DDEFD5] bg-white shadow-sm">

                <div className="border-b border-gray-100 bg-[#F4FAF1] px-5 py-5 sm:px-7">

                  <div className="flex items-center gap-3">

                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EAF6E3] text-[#5A9E38]">
                      <GraduationCap size={21} />
                    </div>

                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-[#5A9E38]">
                        Your Instructor
                      </p>

                      <h2 className="mt-0.5 text-xl font-bold text-gray-900">
                        Meet Your Instructor
                      </h2>
                    </div>

                  </div>
                </div>

                <div className="p-5 sm:p-7">

                  <div className="flex flex-col gap-5 sm:flex-row sm:items-center">

                    <div className="relative mx-auto shrink-0 sm:mx-0">

                      <img
                        src={course.instructorImage}
                        alt={course.instructor}
                        className="h-28 w-28 rounded-2xl border-4 border-[#EAF6E3] bg-white object-cover shadow-sm"
                      />

                      <span className="absolute -bottom-2 -right-2 flex h-7 w-7 items-center justify-center rounded-full border-4 border-white bg-[#6EBE44] text-white">
                        <Check size={13} strokeWidth={3} />
                      </span>

                    </div>

                    <div className="text-center sm:text-left">

                      <h3 className="text-xl font-bold text-gray-900">
                        {course.instructor}
                      </h3>

                      <p className="mt-1 text-sm font-semibold text-[#5A9E38]">
                        {course.instructorRole}
                      </p>

                      <p className="mt-3 max-w-2xl text-sm leading-7 text-gray-600">
                        {course.instructorBio}
                      </p>

                    </div>

                  </div>

                </div>
              </section>

            </div>

            {/* =================================================
                SIDEBAR
            ================================================== */}

            <aside className="space-y-6">

              {/* COURSE DETAILS */}
              <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">

                <div className="border-b border-gray-100 px-5 py-5">

                  <p className="text-xs font-bold uppercase tracking-wider text-[#5A9E38]">
                    At a Glance
                  </p>

                  <h3 className="mt-1 text-xl font-bold text-gray-900">
                    Course Details
                  </h3>

                </div>

                <div className="px-5">

                  <DetailRow
                    icon={<Clock3 size={17} />}
                    label="Duration"
                    value={course.duration}
                  />

                  <DetailRow
                    icon={<BookOpen size={17} />}
                    label="Lessons"
                    value={course.lessons}
                  />

                  <DetailRow
                    icon={<Award size={17} />}
                    label="Certificate"
                    value={
                      course.certificate
                        ? "Included"
                        : "No"
                    }
                  />

                  <DetailRow
                    icon={<Globe size={17} />}
                    label="Language"
                    value={course.language}
                  />

                  <DetailRow
                    icon={<Laptop size={17} />}
                    label="Course Type"
                    value={course.courseType}
                  />

                  <DetailRow
                    icon={<ShieldCheck size={17} />}
                    label="Access"
                    value={course.access}
                  />

                  <DetailRow
                    icon={<GraduationCap size={17} />}
                    label="Level"
                    value={course.level}
                  />

                  <DetailRow
                    icon={<Users size={17} />}
                    label="Students"
                    value={course.students.toLocaleString()}
                  />

                </div>
              </div>

              {/* SUPPORT CARD */}
              <div className="overflow-hidden rounded-3xl bg-[#0A0A0A] p-6">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#6EBE44]/15 text-[#6EBE44]">
                  <Headphones size={21} />
                </div>

                <h3 className="mt-5 text-xl font-bold text-white">
                  Need Help?
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-400">
                  Have questions about this course? Our support team is here to help.
                </p>

                <button
                  onClick={() =>  window.open(
      "https://wa.me/8801710070606",
      "_blank",
      "noopener,noreferrer"
    )}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#6EBE44] transition hover:text-[#8BD667]"
                >
                  Contact Support
                  <ArrowRight size={16} />
                </button>

              </div>

              {/* RELATED COURSES */}
              {relatedCourses.length > 0 && (
                <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">

                  <div className="border-b border-gray-100 px-5 py-5">

                    <p className="text-xs font-bold uppercase tracking-wider text-[#5A9E38]">
                      You May Also Like
                    </p>

                    <h3 className="mt-1 text-xl font-bold text-gray-900">
                      Related Courses
                    </h3>

                  </div>

                  <div className="space-y-4 p-5">

                    {relatedCourses.map((item) => {

                      const relatedPrice = Math.round(
                        item.price -
                          (item.price * item.discount) / 100
                      );

                      return (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() =>
                            navigate(
                              `/courses/${item.id}`
                            )
                          }
                          className="group flex w-full gap-3 text-left"
                        >

                          <img
                            src={item.image}
                            alt={item.title}
                            className="h-16 w-20 shrink-0 rounded-xl object-cover"
                          />

                          <div className="min-w-0 flex-1">

                            <h4 className="line-clamp-2 text-sm font-bold leading-5 text-gray-800 transition group-hover:text-[#5A9E38]">
                              {item.title}
                            </h4>

                            <div className="mt-1.5 flex items-center gap-1">
                              <Star
                                size={12}
                                fill="#F59E0B"
                                className="text-[#F59E0B]"
                              />

                              <span className="text-xs text-gray-500">
                                {item.rating}
                              </span>
                            </div>

                            <p className="mt-1 text-sm font-bold text-[#39852A]">
                              ৳ {relatedPrice.toLocaleString()}
                            </p>

                          </div>

                        </button>
                      );
                    })}

                    <button
                      type="button"
                      onClick={() => navigate("/courses")}
                      className="flex w-full items-center justify-center gap-2 rounded-xl border border-[#BFE3AF] px-4 py-3 text-sm font-bold text-[#5A9E38] transition hover:bg-[#EAF6E3]"
                    >
                      View All Courses
                      <ArrowRight size={16} />
                    </button>

                  </div>
                </div>
              )}

            </aside>

          </div>
        </div>
      </section>

      

    </main>
  );
}

/* =========================================================
   HERO STAT
========================================================= */

function HeroStat({ icon, label, value }) {
  return (
    <div className="flex items-center gap-3 border-b border-r border-gray-100 px-4 py-4 last:border-r-0 sm:px-6 sm:py-5">

      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#6EBE44]/10 text-[#6EBE44]">
        {icon}
      </div>

      <div className="min-w-0">

        <p className="text-[11px] font-medium uppercase tracking-wider text-gray-400">
          {label}
        </p>

        <p className="mt-0.5 truncate text-sm font-bold text-gray-800">
          {value}
        </p>

      </div>
    </div>
  );
}

/* =========================================================
   MINI FEATURE
========================================================= */

function MiniFeature({ icon, text }) {
  return (
    <div className="flex items-center gap-2.5 text-sm text-gray-600">

      <span className="text-[#5A9E38]">
        {icon}
      </span>

      <span>{text}</span>

    </div>
  );
}

/* =========================================================
   CONTENT SECTION
========================================================= */

function ContentSection({
  eyebrow,
  title,
  description,
  icon,
  children,
}) {
  return (
    <section>

      <div className="mb-5">

        <div className="flex items-center gap-3">

          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#EAF6E3] text-[#5A9E38]">
            {icon}
          </div>

          <div>

            <p className="text-[11px] font-bold uppercase tracking-wider text-[#5A9E38]">
              {eyebrow}
            </p>

            <h2 className="mt-0.5 text-2xl font-bold tracking-tight text-gray-900">
              {title}
            </h2>

          </div>

        </div>

        {description && (
          <p className="mt-3 max-w-2xl pl-0 text-sm leading-6 text-gray-500 sm:pl-[52px]">
            {description}
          </p>
        )}

      </div>

      <div className="rounded-3xl border border-gray-200 bg-white p-5 shadow-sm sm:p-7">
        {children}
      </div>

    </section>
  );
}

/* =========================================================
   SIMPLE CONTENT CARD
========================================================= */

function SimpleContentCard({
  icon,
  title,
  items = [],
}) {
  return (
    <section className="rounded-3xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">

      <div className="mb-5 flex items-center gap-3">

        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EAF6E3] text-[#5A9E38]">
          {icon}
        </div>

        <h2 className="text-lg font-bold text-gray-900">
          {title}
        </h2>

      </div>

      <div className="space-y-3">

        {items?.map((item, index) => (
          <div
            key={index}
            className="flex items-start gap-3"
          >

            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#EAF6E3] text-[#5A9E38]">
              <Check
                size={12}
                strokeWidth={3}
              />
            </span>

            <span className="text-sm leading-6 text-gray-600">
              {item}
            </span>

          </div>
        ))}

      </div>
    </section>
  );
}

/* =========================================================
   DETAIL ROW
========================================================= */

function DetailRow({
  icon,
  label,
  value,
}) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-gray-100 py-4 last:border-b-0">

      <div className="flex min-w-0 items-center gap-3 text-gray-500">

        <span className="shrink-0 text-[#5A9E38]">
          {icon}
        </span>

        <span className="text-sm">
          {label}
        </span>

      </div>

      <span className="max-w-[150px] text-right text-sm font-semibold text-gray-800">
        {value}
      </span>

    </div>
  );
}

export default CourseDetails;