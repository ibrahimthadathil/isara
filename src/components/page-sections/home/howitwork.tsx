
const steps = [
  {
    delay: "0.2",
    title: "Login",
    subtitle: "Start your journey with a click.",
    description:
      "Sign in to your Saras dashboard and unlock access to India’s first AI-powered UPSC preparation ecosystem - built to simplify your learning path.",
    img: "img-isaras/step-1.png",
    gradient: "images/gradient/gradient-32.png",
    figureClass:
      "absolute pointer-events-none top-[-62%] md:-top-[85%] left-[-48%] md:-left-[68%] -z-10 rotate-[312deg] opacity-50 md:size-[800px] size-[500px] select-none",
  },
  {
    delay: "0.3",
    title: "Choose Exam & Subject",
    subtitle: "Learn what matters the most.",
    description:
      "Select your UPSC stage and subjects to get personalized study material, curated question sets, and AI-recommended topics aligned to your syllabus.",
    img: "img-isaras/step-2.png",
    gradient: "images/gradient/gradient-33.png",
    figureClass:
      "absolute pointer-events-none top-[-127%] md:-top-[130%] left-[-103%] md:-left-[79%] size-[800px] md:size-[1000px] -z-10 rotate-[255deg] opacity-50 select-none",
  },
  {
    delay: "0.3",
    title: "Chat with AI Mentor",
    subtitle: "Get instant answers & guidance.",
    description:
      "Ask any UPSC-related question - from static topics to current affairs. Your AI Mentor provides detailed explanations, insights, and follow-up resources in seconds.",
    img: "img-isaras/step-3.png",
    gradient: "images/gradient/gradient-34.png",
    figureClass:
      "absolute pointer-events-none top-[-127%] md:-top-[130%] left-[-107%] md:-left-[88%] size-[800px] md:size-[1000px] -z-10 rotate-[240deg] opacity-50 select-none",
  },
  {
    delay: "0.4",
    title: "Practice & Learn at Your Pace",
    subtitle: "Reinforce. Review. Repeat.",
    description:
      "Test your understanding with adaptive MYQ and PYQ. Get real-time feedback, track your improvement, and stay exam-ready - anytime, anywhere.",
    img: "img-isaras/step-4.png",
    gradient: "images/gradient/gradient-9.png",
    figureClass:
      "absolute pointer-events-none top-[-143%] md:-top-[117%] left-[-72%] md:-left-[37%] size-[1000px] -z-10 rotate-[245deg] opacity-50 select-none",
  },
];

const HowItWorks = () => {
  return (
    <section
      id="hiw"
      className="py-[50px] md:py-[80px] lg:py-[100px] relative"
      aria-label="Hero section"
    >
      
      <figure
        data-ns-animate
        data-delay="0.2"
        data-direction="up"
        data-offset="100"
        className="cta-gradient absolute lg:top-0 sm:top-[33%] left-1/2 -translate-x-1/2 w-[90vw] sm:w-[80vw] md:w-[1000px] lg:w-[1140px] -translate-y-1/6 md:-translate-y-[60%] lg:-translate-y-[80%] rotate-[255deg] -z-10 select-none pointer-events-none overflow-hidden"
        style={{
          opacity: 0.4,
          filter: "blur(2px)",
          transform: "rotate(225deg)",
          width: "70%",
        }}
      >
        <img
          src="images/gradient/gradient-23.png"
          alt="How it Works background gradient"
          className="w-full h-auto max-w-none"
          style={{ opacity: 0.5 }}
        />
      </figure>

      <div className="main-container">
        <div className="grid grid-cols-12 xl:gap-[60px] gap-y-12 items-start">
          
          <div className="col-span-12 xl:col-span-6 lg:sticky lg:top-28">
            <div className="space-y-7 xl:text-left text-center">
              <div className="space-y-3">
                <h2
                  data-ns-animate
                  data-delay="0.2"
                  className="xl:max-w-[629px] w-full xl:mx-0 mx-auto"
                >
                  How it Works
                </h2>
                <p
                  data-ns-animate
                  data-delay="0.3"
                  className="xl:max-w-[544px]"
                >
                  Prepare smarter in four simple steps. <br /> From login to
                  personalized AI mentorship - I, Saras will make UPSC learning
                  seamless, interactive, and efficient.
                </p>
              </div>
            </div>
          </div>

          
          <div className="col-span-12 xl:col-span-6 flex justify-center">
            <div className="stack-cards js-stack-cards xl:max-w-full max-w-[820px] xl:mx-0 mx-auto">
              {steps.map((step, i) => (
                <div
                  key={i}
                  className="stack-cards__item js-stack-cards__item p-2 relative rounded-[20px] z-20 flex items-center justify-center sm:max-w-[483px] max-w-full sm:mx-0 mx-auto w-full overflow-hidden"
                >
                  
                  <figure className={step.figureClass}>
                    <img src={step.gradient} alt="step" />
                  </figure>

                  
                  <div className="relative z-10 p-8 rounded-[14px] sm:max-w-[467px] max-w-full w-full space-y-6 bg-white dark:bg-black">
                    <div className="space-y-1">
                      <h5 className="mb-2 text-start">
                        <span className="text-primary-500">{step.title}</span>
                      </h5>
                      <p className="text-heading-4 text-start text-secondary dark:text-accent">
                        {step.subtitle}
                      </p>
                      <p className="text-start">{step.description}</p>
                    </div>

                    <figure className="max-w-[403px] w-full rounded-2xl overflow-hidden">
                      <img
                        src={step.img}
                        alt="step"
                        className="md:max-h-[315px] md:min-h-[315px] dark:hidden block"
                      />
                    </figure>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
