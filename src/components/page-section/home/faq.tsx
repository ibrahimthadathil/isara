import { useState } from "react";
import { faqData } from "../../../const/home";



const FaqSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="relative pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[0px] lg:pt-[0px] xl:pb-[0px] xl:pt-[0px] overflow-hidden"
    >
      <figure
        data-ns-animate
        data-delay="0.2"
        data-direction="up"
        data-offset="100"
        className="cta-gradient absolute top-0 left-1/2 -translate-x-1/2 w-[600px] sm:w-[800px] md:w-[1000px] lg:w-[1140px] -translate-y-1/3 md:-translate-y-[60%] lg:-translate-y-[80%] rotate-[10deg] z-0 select-none pointer-events-none overflow-hidden"
      >
        <img
          src="images/gradient/gradient-40.png"
          alt="How it Works background gradient"
          className="w-full h-auto max-w-full"
        />
      </figure>

      <div className="main-container">
        <div className="text-center space-y-3 mb-14 md:mb-[70px]">
          <span
            data-ns-animate
            data-delay="0.1"
            className="badge badge-green mb-3.5 md:mb-5"
          >
            Faq
          </span>
          <h2 data-ns-animate data-delay="0.2">
            Frequently{" "}
            <span className="text-primary-500 inline-block">asked</span>{" "}
            Questions
          </h2>
          <p
            data-ns-animate
            data-delay="0.3"
            className="lg:max-w-[620px] mx-auto"
          >
            By offering concise and informative responses, this section helps
            users find solutions without the need to contact customer support,
            saving time
          </p>
        </div>

        <div
          data-ns-animate
          data-delay="0.4"
          className="accordion max-w-[850px] w-full space-y-4 mx-auto"
        >
          {faqData.map((item, index) => (
            <div
              key={index}
              className="accordion-item group bg-white dark:bg-background-5 border border-stroke-4 dark:border-stroke-8 rounded-[8px] px-6 overflow-hidden relative z-10"
            >
              <div className="-z-10 absolute -top-[150%] sm:-top-[220%] md:-top-[300%] lg:-top-[190%] xl:-top-[290%] -right-[10%] sm:-right-[50%] size-[708px] pointer-events-none group-hover:opacity-100 transition-opacity duration-300 opacity-0 select-none">
                <img src="images/gradient/gradient-23.png" alt="gradient" />
              </div>
              <button
                onClick={() => toggleAccordion(index)}
                className="accordion-action flex items-center cursor-pointer justify-between sm:pt-8 pt-5 sm:pb-8 pb-5 w-full"
              >
                <span className="flex-1 text-left sm:text-heading-6 text-tagline-1 font-normal text-secondary dark:text-accent">
                  {item.question}
                </span>
                <span className="sm:ml-auto ml-2.5 block accordion-arrow">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    width="16"
                    height="16"
                  >
                    <path
                      strokeOpacity={0.8}
                      strokeWidth={1.5}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                      className="stroke-secondary dark:stroke-accent"
                    />
                  </svg>
                </span>
              </button>
              {activeIndex === index && (
                <div className="accordion-content">
                  <div className="border-t border-t-stroke-2 dark:border-t-stroke-6 sm:pt-6 pt-5 sm:pb-8 pb-5">
                    <p>{item.answer}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
