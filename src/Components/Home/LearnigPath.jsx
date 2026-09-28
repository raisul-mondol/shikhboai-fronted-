
import React, { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import {
  BookOpen,
  Brain,
  Code2,
  FolderKanban,
  Award,
  Check,
  ArrowLeft,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const steps = [
  {
    id: 1,
    number: "01",
    title: "Choose Your Course",
    description:
      "Explore our carefully designed courses, thoughtfully created to help you build practical skills, strengthen your knowledge, and move confidently toward your goals. Choose the course that best matches your interests, learning needs, and career path, and take the next step toward a brighter future.",
    icon: BookOpen,
  },
  {
    id: 2,
    number: "02",
    title: "Learn with AI",
    description:
      "Learn coding and development more effectively with AI tools like ChatGPT, Claude, and Gemini. Get help understanding complex concepts, generating and improving code, debugging errors, exploring practical solutions, and building real-world projects with AI-powered guidance.",
    icon: Brain,
  },
  {
    id: 3,
    number: "03",
    title: "Practice Your Skills",
    description:
      "Strengthen your coding skills through engaging challenges, interactive quizzes, practical exercises, and hands-on projects. Practice what you learn, solve real-world problems, improve your problem-solving abilities, and build the confidence you need to become a better developer.",
    icon: Code2,
  },
  {
    id: 4,
    number: "04",
    title: "Build Real Projects",
    description:
      "Turn your knowledge into real-world projects and gain practical experience by building meaningful, industry-relevant applications. Create a strong portfolio that showcases your coding abilities, problem-solving skills, creativity, and the projects you’re capable of building.",
    icon: FolderKanban,
  },
  {
    id: 5,
    number: "05",
    title: "Earn Your Certificate",
    description:
      "Complete your course successfully and earn a certificate that recognizes your hard work, learning progress, and newly developed skills. Showcase your achievement with confidence and demonstrate your knowledge and practical abilities to future employers, clients, or collaborators.",
    icon: Award,
  },
];

const LearnigPath = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const sectionRef = useRef(null);
  const intervalRef = useRef(null);

  // =========================================
  // SECTION VISIBILITY
  // =========================================
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.35,
      }
    );

    const currentSection = sectionRef.current;

    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  // =========================================
  // AUTO PLAY
  // Desktop + Mobile
  // =========================================
  useEffect(() => {
    if (!isVisible || isPaused) {
      return;
    }

    intervalRef.current = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 2000);

    return () => {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    };
  }, [isVisible, isPaused]);

  // =========================================
  // STEP CHANGE
  // =========================================
  const handleStepChange = (index) => {
    setActiveStep(index);
  };

  // =========================================
  // NEXT
  // =========================================
  const handleNext = () => {
    setActiveStep((prev) => (prev + 1) % steps.length);
  };

  // =========================================
  // PREVIOUS
  // =========================================
  const handlePrevious = () => {
    setActiveStep((prev) =>
      prev === 0 ? steps.length - 1 : prev - 1
    );
  };

  // =========================================
  // CURRENT STEP
  // =========================================
  const currentStep = steps[activeStep];
  const CurrentIcon = currentStep.icon;

  return (
    <motion.section
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.7,
        ease: "easeOut",
      }}
      viewport={{
        once: true,
        amount: 0.3,
      }}
      ref={sectionRef}
      className="
        w-full
        bg-gray-50
        px-4
        pt-12
        pb-3
      "
    >
      {/* =========================================
          SECTION HEADER
      ========================================= */}
      <div
        className="
          mx-auto
          mb-10
          max-w-4xl
          text-center
          sm:mb-12
          lg:mb-14
        "
      >
        <div
          className="
            mb-3
            inline-flex
            items-center
            gap-2
            rounded-full
            border
            border-green-100
            bg-green-50
            px-3.5
            py-1.5
            text-xs
            font-semibold
            text-[#5A9E38]
            sm:text-sm
          "
        >
          <Sparkles size={15} />

          <span>Your Learning Journey</span>
        </div>

        <h2
          className="
            text-2xl
            font-bold
            leading-tight
            text-gray-900
            sm:text-3xl
            md:text-4xl
            lg:text-5xl
          "
        >
          Learn. Practice.{" "}
          <span className="text-[#6EBE44]">
            Build. Grow.
          </span>
        </h2>

        <p
          className="
            mx-auto
            mt-4
            max-w-xl
            text-sm
            leading-6
            text-gray-600
            sm:text-base
            sm:leading-7
          "
        >
          Follow a simple and practical learning path designed to take
          you from beginner to confident developer.
        </p>
      </div>

      {/* =========================================
          MAIN CARD
      ========================================= */}
      <div
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused((prev) => !prev)}
        className="
          relative
          mx-auto
          max-w-7xl
          overflow-hidden
          rounded-3xl
          border
          border-gray-200
          bg-white
          shadow-lg
        "
      >
        {/* =========================================
            TOP PROGRESS
        ========================================= */}
        <div className="absolute left-0 right-0 top-0 h-1.5 bg-gray-100">
          <div
            className="
              h-full
              bg-[#6EBE44]
              transition-all
              duration-700
              ease-in-out
            "
            style={{
              width: `${((activeStep + 1) / steps.length) * 100}%`,
            }}
          />
        </div>

        {/* =========================================
            DESKTOP / TABLET
        ========================================= */}
        <div className="hidden min-h-[570px] md:flex">

          {/* =========================================
              LEFT SIDE
          ========================================= */}
          <div
            className="
              w-[38%]
              border-r
              border-gray-200
              bg-gray-50
              p-7
              lg:p-9
            "
          >
            {/* LEFT HEADER */}
            <div className="mb-7">
              <p
                className="
                  text-xs
                  font-semibold
                  uppercase
                  tracking-widest
                  text-[#6EBE44]
                "
              >
                Learning Path
              </p>

              <h3
                className="
                  mt-2
                  text-xl
                  font-bold
                  text-gray-900
                  lg:text-2xl
                "
              >
                Your journey starts here
              </h3>
            </div>

            {/* STEPS */}
            <div className="relative">

              {/* Background Line */}
              <div
                className="
                  absolute
                  bottom-8
                  left-[23px]
                  top-8
                  w-[2px]
                  bg-gray-200
                "
              />

              {/* Progress Line */}
              <div
                className="
                  absolute
                  left-[23px]
                  top-8
                  w-[2px]
                  bg-[#6EBE44]
                  transition-all
                  duration-700
                "
                style={{
                  height:
                    activeStep === 0
                      ? "0%"
                      : `${(activeStep / (steps.length - 1)) * 100}%`,
                }}
              />

              <div className="space-y-4">
                {steps.map((step, index) => {
                  const Icon = step.icon;

                  const isActive = activeStep === index;
                  const isCompleted = index < activeStep;

                  return (
                    <button
                      key={step.id}
                      onClick={() => handleStepChange(index)}
                      className="
                        group
                        relative
                        flex
                        w-full
                        items-center
                        gap-4
                        text-left
                        transition-all
                        duration-300
                      "
                    >
                      {/* ICON */}
                      <div
                        className={`
                          relative
                          z-10
                          flex
                          h-[48px]
                          w-[48px]
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          border-4
                          transition-all
                          duration-300
                          ${
                            isActive
                              ? "border-green-100 bg-[#6EBE44] text-white shadow-md shadow-green-200"
                              : isCompleted
                              ? "border-green-100 bg-green-50 text-[#6EBE44]"
                              : "border-white bg-white text-gray-400 shadow-sm"
                          }
                        `}
                      >
                        {isCompleted ? (
                          <Check
                            size={20}
                            strokeWidth={2.5}
                          />
                        ) : (
                          <Icon size={20} />
                        )}
                      </div>

                      {/* TEXT */}
                      <div className="min-w-0 flex-1">
                        <span
                          className={`
                            text-[11px]
                            font-bold
                            ${
                              isActive
                                ? "text-[#6EBE44]"
                                : "text-gray-400"
                            }
                          `}
                        >
                          {step.number}
                        </span>

                        <h4
                          className={`
                            mt-0.5
                            text-sm
                            font-bold
                            transition-colors
                            lg:text-base
                            ${
                              isActive
                                ? "text-gray-900"
                                : "text-gray-500 group-hover:text-gray-700"
                            }
                          `}
                        >
                          {step.title}
                        </h4>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* =========================================
                STATUS
            ========================================= */}
            <div
              className="
                mt-8
                rounded-xl
                border
                border-green-100
                bg-green-50
                p-3
              "
            >
              <div className="flex items-center gap-3">
                <div
                  className={`
                    h-2
                    w-2
                    rounded-full
                    ${
                      isPaused
                        ? "bg-gray-400"
                        : "bg-[#6EBE44]"
                    }
                  `}
                />

                <p className="text-xs font-medium text-gray-600">
                  {isPaused
                    ? "Paused — move your cursor away or touch to resume"
                    : "Auto learning path is active"}
                </p>
              </div>
            </div>
          </div>

          {/* =========================================
              RIGHT SIDE
          ========================================= */}
          <div
            className="
              flex
              flex-1
              flex-col
              justify-between
              p-8
              lg:p-10
              xl:p-12
            "
          >
            <div>

              {/* STEP NUMBER */}
              <div
                className="
                  mb-7
                  flex
                  items-center
                  justify-between
                "
              >
                <div
                  className="
                    rounded-full
                    bg-green-50
                    px-3.5
                    py-1.5
                    text-xs
                    font-bold
                    text-[#5A9E38]
                  "
                >
                  Step {currentStep.number}
                </div>

                <span className="text-xs font-medium text-gray-400">
                  {activeStep + 1} / {steps.length}
                </span>
              </div>

              {/* ICON */}
              <div
                className="
                  mb-7
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-2xl
                  bg-green-50
                  text-[#6EBE44]
                  shadow-sm
                "
              >
                <CurrentIcon
                  size={32}
                  strokeWidth={1.8}
                />
              </div>

              {/* CONTENT */}
              <div key={activeStep}>
                <h3
                  className="
                    max-w-2xl
                    text-2xl
                    font-bold
                    leading-tight
                    text-black
                    lg:text-3xl
                    xl:text-4xl
                  "
                >
                  {currentStep.title}
                </h3>

                <p
                  className="
                    mt-4
                    max-w-xl
                    text-sm
                    leading-7
                    text-black
                    lg:text-base
                    lg:leading-8
                  "
                >
                  {currentStep.description}
                </p>
              </div>
            </div>

            {/* =========================================
                CONTROLS
            ========================================= */}
            <div className="mt-10">

              {/* DOTS */}
              <div className="mb-6 flex items-center gap-2">
                {steps.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleStepChange(index)}
                    aria-label={`Go to step ${index + 1}`}
                    className={`
                      h-1.5
                      rounded-full
                      transition-all
                      duration-500
                      ${
                        activeStep === index
                          ? "w-8 bg-[#6EBE44]"
                          : "w-1.5 bg-gray-200 hover:bg-gray-300"
                      }
                    `}
                  />
                ))}
              </div>

              {/* BUTTONS */}
              <div
                className="
                  flex
                  items-center
                  justify-between
                  border-t
                  border-gray-100
                  pt-5
                "
              >
                <button
                  onClick={handlePrevious}
                  className="
                    flex
                    items-center
                    gap-2
                    rounded-xl
                    border
                    border-gray-200
                    px-4
                    py-2.5
                    text-xs
                    font-semibold
                    text-black
                    transition
                    hover:border-green-200
                    hover:bg-green-50
                    hover:text-[#5A9E38]
                  "
                >
                  <ArrowLeft size={16} />
                  Previous
                </button>

                <button
                  onClick={handleNext}
                  className="
                    flex
                    items-center
                    gap-2
                    rounded-xl
                    bg-[#6EBE44]
                    px-4
                    py-2.5
                    text-xs
                    font-semibold
                    text-white
                    shadow-md
                    shadow-green-100
                    transition
                    hover:bg-[#5A9E38]
                  "
                >
                  Next
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================
            MOBILE
        ========================================= */}
        <div className="md:hidden">

          <div
            className="
              p-5
              pt-8
              sm:p-7
              sm:pt-9
            "
          >

            {/* HEADER */}
            <div
              className="
                mb-6
                flex
                items-center
                justify-between
              "
            >
              <div>
                <p
                  className="
                    text-[11px]
                    font-bold
                    uppercase
                    tracking-widest
                    text-[#6EBE44]
                  "
                >
                  Learning Path
                </p>

                <h3
                  className="
                    mt-1
                    text-lg
                    font-bold
                    text-gray-900
                    sm:text-xl
                  "
                >
                  Step {currentStep.number}
                </h3>
              </div>

              <div
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  bg-green-50
                  text-xs
                  font-bold
                  text-[#5A9E38]
                "
              >
                {activeStep + 1}/{steps.length}
              </div>
            </div>

            {/* PROGRESS */}
            <div
              className="
                mb-7
                h-1
                overflow-hidden
                rounded-full
                bg-gray-100
              "
            >
              <div
                className="
                  h-full
                  rounded-full
                  bg-[#6EBE44]
                  transition-all
                  duration-700
                "
                style={{
                  width: `${((activeStep + 1) / steps.length) * 100}%`,
                }}
              />
            </div>

            {/* =========================================
                ACTIVE CARD
            ========================================= */}
            <div
              key={activeStep}
              className="
                rounded-2xl
                border
                border-gray-100
                bg-gray-50
                p-5
                sm:p-7
              "
            >
              {/* ICON */}
              <div
                className="
                  mb-5
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-2xl
                  bg-green-50
                  text-[#6EBE44]
                  sm:h-16
                  sm:w-16
                "
              >
                <CurrentIcon
                  size={28}
                  strokeWidth={1.8}
                />
              </div>

              {/* TITLE */}
              <h3
                className="
                  text-xl
                  font-bold
                  leading-tight
                  text-gray-900
                  sm:text-2xl
                "
              >
                {currentStep.title}
              </h3>

              {/* DESCRIPTION */}
              <p
                className="
                  mt-3
                  text-sm
                  leading-6
                  text-gray-600
                  sm:text-base
                  sm:leading-7
                "
              >
                {currentStep.description}
              </p>
            </div>

            {/* =========================================
                MOBILE STEP SELECTOR
            ========================================= */}
            <div className="mt-6">

              <p
                className="
                  mb-3
                  text-xs
                  font-semibold
                  text-gray-500
                "
              >
                Choose a step
              </p>

              <div className="grid grid-cols-5 gap-2">
                {steps.map((step, index) => {
                  const Icon = step.icon;

                  return (
                    <button
                      key={step.id}
                      onClick={() => handleStepChange(index)}
                      className={`
                        flex
                        min-h-[58px]
                        flex-col
                        items-center
                        justify-center
                        gap-1
                        rounded-xl
                        border
                        transition-all
                        duration-300
                        ${
                          activeStep === index
                            ? "border-[#6EBE44] bg-green-50 text-[#5A9E38]"
                            : "border-gray-200 bg-white text-gray-400 hover:border-green-200"
                        }
                      `}
                    >
                      <Icon size={18} />

                      <span className="text-[10px] font-bold">
                        {step.number}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* =========================================
                MOBILE BUTTONS
            ========================================= */}
            <div
              className="
                mt-6
                flex
                items-center
                justify-between
                border-t
                border-gray-100
                pt-5
              "
            >
              <button
                onClick={handlePrevious}
                className="
                  flex
                  items-center
                  gap-2
                  rounded-xl
                  border
                  border-gray-200
                  px-3.5
                  py-2.5
                  text-xs
                  font-semibold
                  text-gray-700
                  transition
                  hover:border-green-200
                  hover:bg-green-50
                  hover:text-[#5A9E38]
                "
              >
                <ArrowLeft size={16} />
                Previous
              </button>

              <button
                onClick={handleNext}
                className="
                  flex
                  items-center
                  gap-2
                  rounded-xl
                  bg-[#6EBE44]
                  px-3.5
                  py-2.5
                  text-xs
                  font-semibold
                  text-white
                  shadow-md
                  shadow-green-100
                  transition
                  hover:bg-[#5A9E38]
                "
              >
                Next
                <ArrowRight size={16} />
              </button>
            </div>

            {/* MOBILE PAUSE STATUS */}
            <div
              className="
                mt-4
                flex
                items-center
                justify-center
                gap-2
                text-[11px]
                text-gray-400
              "
            >
              <span
                className={`
                  h-1.5
                  w-1.5
                  rounded-full
                  ${
                    isPaused
                      ? "bg-gray-400"
                      : "bg-[#6EBE44]"
                  }
                `}
              />

              <span>
                {isPaused
                  ? "Paused — touch to resume"
                  : "Auto play is active"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default LearnigPath;

