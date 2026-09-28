import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What courses does Shikhbo AI offer?",
      answer:
        "Shikhbo AI offers practical courses in Frontend Development, Backend Development, Full Stack Development, UI/UX Design, WordPress, and other career-focused technologies.",
    },
    {
      question: "Are the courses suitable for beginners?",
      answer:
        "Yes. Our courses are designed for beginners as well as learners who already have some basic knowledge and want to improve their practical skills.",
    },
    {
      question: "Do I need prior programming experience?",
      answer:
        "No. Many of our courses start from the fundamentals and gradually move toward real-world projects, so beginners can follow along comfortably.",
    },
    {
      question: "Will I work on real-world projects?",
      answer:
        "Yes. Our learning approach focuses on practical projects so that you can apply what you learn and build a useful portfolio.",
    },
    {
      question: "How can I enroll in a course?",
      answer:
        "You can explore our available courses from the Courses page and choose the course you are interested in to learn more about enrollment.",
    },
    {
      question: "How can I contact Shikhbo AI?",
      answer:
        "You can contact us through our Contact section or use the contact information provided on our website.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id="faq"
      className="bg-[#F7FAF5] px-4 pt-2 pb-20 sm:px-6  lg:px-8 "
    >
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full border border-[#6EBE44]/20 bg-[#6EBE44]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#5A9E38] sm:text-sm">
            FAQ
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Frequently Asked{" "}
            <span className="text-[#6EBE44]">Questions</span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-gray-500 sm:text-base sm:leading-7">
            Everything you need to know about Shikhbo AI, our courses,
            learning process, and enrollment.
          </p>
        </div>

        {/* FAQ */}
        <div className="mx-auto mt-10 max-w-3xl sm:mt-14">
          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className={`overflow-hidden rounded-2xl border bg-white transition-all duration-300 ${
                    isOpen
                      ? "border-[#6EBE44]/40 shadow-[0_12px_35px_rgba(110,190,68,0.10)]"
                      : "border-gray-200 shadow-sm hover:border-[#6EBE44]/30 hover:shadow-md"
                  }`}
                >
                  {/* Question */}
                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6 sm:py-6"
                  >
                    <span
                      className={`text-sm font-semibold leading-6 transition-colors duration-200 sm:text-base ${
                        isOpen ? "text-[#5A9E38]" : "text-gray-800"
                      }`}
                    >
                      {faq.question}
                    </span>

                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-300 sm:h-10 sm:w-10 ${
                        isOpen
                          ? "rotate-180 bg-[#6EBE44] text-white shadow-sm"
                          : "bg-[#6EBE44]/10 text-[#6EBE44]"
                      }`}
                    >
                      <ChevronDown size={19} strokeWidth={2.2} />
                    </span>
                  </button>

                  {/* Answer */}
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="border-t border-gray-100 px-5 pb-5 pt-4 sm:px-6 sm:pb-6 sm:pt-5">
                        <p className="text-sm leading-7 text-gray-500 sm:text-[15px]">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;