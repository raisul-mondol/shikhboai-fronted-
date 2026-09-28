import React, {
  Children,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { motion, AnimatePresence } from "motion/react";

export default function Stepper({
  children,
  initialStep = 1,
  onStepChange = () => {},
  onFinalStepCompleted = () => {},
  stepCircleContainerClassName = "",
  stepContainerClassName = "",
  contentClassName = "",
  footerClassName = "",
  backButtonProps = {},
  nextButtonProps = {},
  backButtonText = "Back",
  nextButtonText = "Continue",
  disableStepIndicators = false,
  renderStepIndicator,
  ...rest
}) {
  const [currentStep, setCurrentStep] = useState(initialStep);
  const [direction, setDirection] = useState(0);

  const stepsArray = Children.toArray(children);
  const totalSteps = stepsArray.length;

  const isCompleted = currentStep > totalSteps;
  const isLastStep = currentStep === totalSteps;

  const updateStep = (newStep) => {
    setCurrentStep(newStep);

    if (newStep > totalSteps) {
      onFinalStepCompleted();
    } else {
      onStepChange(newStep);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setDirection(-1);
      updateStep(currentStep - 1);
    }
  };

  const handleNext = () => {
    if (!isLastStep) {
      setDirection(1);
      updateStep(currentStep + 1);
    }
  };

  const handleComplete = () => {
    setDirection(1);
    updateStep(totalSteps + 1);
  };

  return (
    <div
      className="
        flex
        w-full
        items-start
        justify-center
        bg-emerald-950/70
        rounded-md
        px-3
        pt-6
        pb-10
        sm:px-6
        sm:pt-8
        lg:px-8
        lg:pt-10
      "
      {...rest}
    >
      {/* Stepper Card */}
      <div
        className={`
          w-full
          max-w-md
          overflow-hidden
          rounded-2xl
          border
          border-emerald-300/20
          bg-emerald-950/75
          shadow-[0_20px_60px_rgba(2,44,34,0.45)]
          backdrop-blur-xl
          sm:rounded-3xl
          ${stepCircleContainerClassName}
        `}
      >
        {/* Step Indicators */}
        <div
          className={`
            flex
            w-full
            items-center
            px-4
            py-5
            sm:px-7
            sm:py-6
            ${stepContainerClassName}
          `}
        >
          {stepsArray.map((_, index) => {
            const stepNumber = index + 1;
            const isNotLastStep =
              index < totalSteps - 1;

            return (
              <React.Fragment key={stepNumber}>
                {renderStepIndicator ? (
                  renderStepIndicator({
                    step: stepNumber,
                    currentStep,
                    onStepClick: (clicked) => {
                      setDirection(
                        clicked > currentStep ? 1 : -1
                      );

                      updateStep(clicked);
                    },
                  })
                ) : (
                  <StepIndicator
                    step={stepNumber}
                    disableStepIndicators={
                      disableStepIndicators
                    }
                    currentStep={currentStep}
                    onClickStep={(clicked) => {
                      setDirection(
                        clicked > currentStep ? 1 : -1
                      );

                      updateStep(clicked);
                    }}
                  />
                )}

                {isNotLastStep && (
                  <StepConnector
                    isComplete={
                      currentStep > stepNumber
                    }
                  />
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* Step Content */}
        <StepContentWrapper
          isCompleted={isCompleted}
          currentStep={currentStep}
          direction={direction}
          className={`
            space-y-3
            px-4
            sm:px-7
            ${contentClassName}
          `}
        >
          {stepsArray[currentStep - 1]}
        </StepContentWrapper>

        
        {!isCompleted && (
          <div
            className={`
              px-4
              pb-5
              sm:px-7
              sm:pb-7
              ${footerClassName}
            `}
          >
            <div
              className={`
                mt-8
                flex
                items-center
                ${
                  currentStep !== 1
                    ? "justify-between"
                    : "justify-end"
                }
              `}
            >
              
              {currentStep !== 1 && (
                <button
                  onClick={handleBack}
                  className="
                    rounded-lg
                    border
                    border-emerald-300/20
                    bg-emerald-900/30
                    px-3
                    py-2
                    text-sm
                    font-medium
                    text-emerald-100
                    transition
                    duration-300
                    hover:border-emerald-300/40
                    hover:bg-emerald-800/40
                    hover:text-white
                    sm:px-4
                  "
                  {...backButtonProps}
                >
                  {backButtonText}
                </button>
              )}

              {/* Next Button */}
              <button
                onClick={
                  isLastStep
                    ? handleComplete
                    : handleNext
                }
                className="
                  rounded-full
                  border
                  border-emerald-300/30
                  bg-emerald-500
                  px-4
                  py-2
                  text-sm
                  font-semibold
                  tracking-tight
                  text-white
                  shadow-[0_0_18px_rgba(16,185,129,0.25)]
                  transition
                  duration-300
                  hover:bg-emerald-400
                  hover:shadow-[0_0_25px_rgba(52,211,153,0.35)]
                  active:bg-emerald-600
                  sm:px-5
                "
                {...nextButtonProps}
              >
                {isLastStep
                  ? "Complete"
                  : nextButtonText}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}



function StepContentWrapper({
  isCompleted,
  currentStep,
  direction,
  children,
  className,
}) {
  const [parentHeight, setParentHeight] = useState(0);

  return (
    <motion.div
      style={{
        position: "relative",
        overflow: "hidden",
      }}
      animate={{
        height: isCompleted
          ? 0
          : parentHeight,
      }}
      transition={{
        type: "spring",
        duration: 0.4,
      }}
      className={className}
    >
      <AnimatePresence
        initial={false}
        mode="sync"
        custom={direction}
      >
        {!isCompleted && (
          <SlideTransition
            key={currentStep}
            direction={direction}
            onHeightReady={(height) =>
              setParentHeight(height)
            }
          >
            {children}
          </SlideTransition>
        )}
      </AnimatePresence>
    </motion.div>
  );
}



function SlideTransition({
  children,
  direction,
  onHeightReady,
}) {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    if (containerRef.current) {
      onHeightReady(
        containerRef.current.offsetHeight
      );
    }
  }, [children, onHeightReady]);

  return (
    <motion.div
      ref={containerRef}
      custom={direction}
      variants={stepVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{
        duration: 0.4,
      }}
      style={{
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
      }}
    >
      {children}
    </motion.div>
  );
}


const stepVariants = {
  enter: (dir) => ({
    x: dir >= 0 ? "-100%" : "100%",
    opacity: 0,
  }),

  center: {
    x: "0%",
    opacity: 1,
  },

  exit: (dir) => ({
    x: dir >= 0 ? "50%" : "-50%",
    opacity: 0,
  }),
};



export function Step({ children }) {
  return (
    <div className="px-1 sm:px-2">
      {children}
    </div>
  );
}


function StepIndicator({
  step,
  currentStep,
  onClickStep,
  disableStepIndicators,
}) {
  const status =
    currentStep === step
      ? "active"
      : currentStep < step
      ? "inactive"
      : "complete";

  const handleClick = () => {
    if (
      step !== currentStep &&
      !disableStepIndicators
    ) {
      onClickStep(step);
    }
  };

  return (
    <motion.div
      onClick={handleClick}
      className={`
        relative
        shrink-0
        outline-none
        focus:outline-none
        ${
          disableStepIndicators
            ? "pointer-events-none opacity-50"
            : "cursor-pointer"
        }
      `}
      animate={status}
      initial={false}
    >
      <motion.div
        variants={{
          inactive: {
            scale: 1,
            backgroundColor: "#064e3b",
            borderColor:
              "rgba(110,231,183,0.18)",
            color: "#a7f3d0",
            boxShadow:
              "0 0 0 rgba(52,211,153,0)",
          },

          active: {
            scale: 1.08,
            backgroundColor: "#10b981",
            borderColor: "#6ee7b7",
            color: "#ffffff",
            boxShadow:
              "0 0 12px rgba(52,211,153,0.45), 0 0 28px rgba(16,185,129,0.22)",
          },

          complete: {
            scale: 1,
            backgroundColor: "#059669",
            borderColor: "#6ee7b7",
            color: "#ffffff",
            boxShadow:
              "0 0 10px rgba(52,211,153,0.32)",
          },
        }}
        transition={{
          duration: 0.3,
        }}
        className="
          flex
          h-8
          w-8
          items-center
          justify-center
          rounded-full
          border
          font-semibold
          sm:h-9
          sm:w-9
        "
      >
        {status === "complete" ? (
          <CheckIcon className="h-4 w-4 text-white" />
        ) : status === "active" ? (
          <motion.div
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              h-2.5
              w-2.5
              rounded-full
              bg-white
              shadow-[0_0_8px_rgba(255,255,255,0.8)]
              sm:h-3
              sm:w-3
            "
          />
        ) : (
          <span className="text-xs sm:text-sm">
            {step}
          </span>
        )}
      </motion.div>
    </motion.div>
  );
}



function StepConnector({ isComplete }) {
  const lineVariants = {
    incomplete: {
      width: 0,
      opacity: 0,
    },

    complete: {
      width: "100%",
      opacity: 1,
    },
  };

  return (
    <div
      className="
        relative
        mx-1.5
        h-0.5
        flex-1
        overflow-hidden
        rounded-full
        bg-emerald-800/70
        sm:mx-2
      "
    >
      <motion.div
        className="
          absolute
          left-0
          top-0
          h-full
          rounded-full
          bg-emerald-400
          shadow-[0_0_8px_rgba(52,211,153,0.55)]
        "
        variants={lineVariants}
        initial={false}
        animate={
          isComplete
            ? "complete"
            : "incomplete"
        }
        transition={{
          duration: 0.4,
        }}
      />
    </div>
  );
}



function CheckIcon(props) {
  return (
    <svg
      {...props}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
    >
      <motion.path
        initial={{
          pathLength: 0,
        }}
        animate={{
          pathLength: 1,
        }}
        transition={{
          delay: 0.1,
          type: "tween",
          ease: "easeOut",
          duration: 0.3,
        }}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 13l4 4L19 7"
      />
    </svg>
  );
}