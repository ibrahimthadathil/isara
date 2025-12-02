import {
  askSarasPoints,
  currentAffairsPoints,
  pyqPoints,
} from "../../../const/home";
const tabMobile = ["Ask Saras", "PYQ", "Current Affairs"];
const tabLarge = ["Ask Saras", "PYQ", "Current Affairs"];

export default function Ecosystem() {
  return (
    <section
      data-ns-animate
      data-delay="0.3"
      className="bg-white dark:bg-background-6 pt-20 lg:pt-[88px] xl:pt-[100px] sm:pb-36 pb-14 xl:pb-[94px] overflow-hidden"
    >
      <figure
        data-ns-animate
        data-delay="0.7"
        data-offset="200"
        className="absolute size-[700px] sm:size-[900px] lg:size-[1100px] rotate-[-597deg] top-[520px] left-1/2 -translate-x-1/2 select-none pointer-events-none"
      >
        <img
          src="images/gradient/gradient-3.png"
          alt="download-bg"
          className="size-full object-cover"
        />
      </figure>

      <div className="main-container">
        <div className="text-center">
          <h2 data-ns-animate data-delay="0.2" className="mb-3">
            AI-powered{" "}
            <span className="text-primary-500 inline-block font-semibold">
              I, Saras
            </span>{" "}
            Ecosystem
          </h2>

          <p
            data-ns-animate
            data-delay="0.3"
            className="mb-8 lg:max-w-[696px] mx-auto"
          >
            With I, Saras, you can chat, learn, and practice in one unified
            AI-powered environment - from doubt solving to personalized test
            prep and real-time current affairs analysis.
          </p>
        </div>

        <div className="tab-mobile flex items-center justify-start flex-wrap lg:hidden gap-4 mb-14 lg:mb-[72px] sm:max-w-[500px] sm:mx-auto">
          {tabMobile.map((item, idx) => (
            <button
              key={idx}
              className="px-3.5 py-2 min-w-16 cursor-pointer text-tagline-2 font-medium text-secondary/60 dark:text-accent/60 border border-stroke-2 dark:border-stroke-7 rounded-full dark:bg-background-7"
            >
              {item}
            </button>
          ))}
        </div>

        <div
          role="tablist"
          className="tab-bar hidden lg:flex justify-center items-center border-b border-stroke-2 dark:border-stroke-6 mb-14 lg:mb-14 relative"
        >
          <div className="active-tab-bar"></div>

          {tabLarge.map((item, idx) => (
            <button
              key={idx}
              className="py-3 cursor-pointer focus-visible:outline-0 px-10 -mb-px data-[state=selected]:text-secondary text-secondary/60 dark:data-[state=selected]:text-accent dark:text-accent/60"
            >
              <span className="text-tagline-1 font-medium">{item}</span>
            </button>
          ))}
        </div>

        <div className="tab-content" data-display="flex">
          <div className="flex flex-col justify-between lg:flex-row items-start gap-y-14 gap-x-24 w-full">
            <div className="flex-1 lg:max-w-full sm:max-w-[500px] sm:mx-auto">
              <h2 className="mb-3 text-start lg:text-heading-2 text-heading-4">
                Ask Saras
                <br className="hidden lg:block" />
                Your{" "}
                <span className="text-primary-500">
                  AI-powered UPSC Mentor.
                </span>
              </h2>

              <p className="mb-6 text-start xl:mb-8 lg:max-w-[478px]">
                Have a doubt? Ask Saras right away! From intricate polity
                concepts to challenging economy topics - get accurate,
                easy-to-grasp explanations powered by AI, fine-tuned for UPSC
                aspirants
              </p>

              <ul className="space-y-1.5 text-start mb-7 xl:mb-14">
                {askSarasPoints.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-4 list-none py-2"
                  >
                    <span>
                      <figure className="size-10 overflow-hidden mx-auto">
                        <img
                          src={item.img}
                          alt="Phone icon"
                          className="size-full object-cover"
                        />
                      </figure>
                    </span>

                    <div>
                      <strong className="text-tagline-1 font-medium text-secondary dark:text-accent">
                        {item.title}
                      </strong>
                      <p className="text-secondary/60 text-tagline-2 font-normal dark:text-accent/60">
                        {item.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex-1 lg:max-w-full sm:max-w-[500px] sm:mx-auto">
              <div className="flex items-center justify-center">
                <figure className="lg:inline-block">
                  <img
                    src="img-isaras/ask-saras.png"
                    alt="Happy man using phone"
                    className="w-fit object-cover"
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>

        <div className="tab-content hidden" data-display="flex">
          <div className="flex flex-col lg:flex-row items-start w-full gap-x-24 gap-y-16">
            <div className="flex-1 sm:max-w-[500px] sm:mx-auto">
              <h2 className="mb-3 text-start">
                Practice Smarter with{" "}
                <span className="text-primary-500 inline-block">
                  AI-curated Question Sets.
                </span>
              </h2>

              <p className="mb-8 text-start lg:max-w-[478px]">
                Master every subject with intelligently structured Previous Year
                Questions (PYQs) tailored for UPSC preparation.
              </p>

              <ul className="space-y-1.5 text-start mb-7 md:mb-14">
                {pyqPoints.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-4 list-none py-2"
                  >
                    <span>
                      <figure className="size-10 overflow-hidden mx-auto">
                        <img
                          src={item.img}
                          alt="icon"
                          className="size-full object-cover"
                        />
                      </figure>
                    </span>

                    <div>
                      <strong className="text-tagline-1 font-medium text-secondary dark:text-accent">
                        {item.title}
                      </strong>
                      <p className="text-secondary/60 text-tagline-2 dark:text-accent/60">
                        {item.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex-1 sm:max-w-[500px] sm:mx-auto">
              <div className="flex items-center justify-center">
                <figure className="tab-item-image">
                  <img src="img-isaras/PYQS.png" alt="PYQ" />
                </figure>
              </div>
            </div>
          </div>
        </div>

        <div className="tab-content hidden" data-display="flex">
          <div className="flex flex-col lg:flex-row items-start w-full gap-x-24 gap-y-16">
            <div className="flex-1 sm:max-w-[500px] sm:mx-auto">
              <h2 className="mb-3 text-start">
                Your Daily{" "}
                <span className="text-primary-500">
                  UPSC-ready News Companion.
                </span>
              </h2>

              <p className="mb-8 text-start lg:max-w-[478px]">
                Stay updated with AI-curated current affairs tailored for UPSC.
              </p>

              <ul className="space-y-1.5 text-start mb-7 md:mb-14">
                {currentAffairsPoints.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-4 list-none py-2"
                  >
                    <span>
                      <figure className="size-10 overflow-hidden mx-auto">
                        <img
                          src={item.img}
                          alt="icon"
                          className="size-full object-cover"
                        />
                      </figure>
                    </span>

                    <div>
                      <strong className="text-tagline-1 font-medium text-secondary dark:text-accent">
                        {item.title}
                      </strong>
                      <p className="text-secondary/60 text-tagline-2 dark:text-accent/60">
                        {item.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex-1 sm:max-w-[500px] sm:mx-auto">
              <figure className="tab-item-image">
                <img
                  src="img-isaras/current-affairs.png"
                  alt="Current Affairs"
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
