import { badges } from "../../../const/home";

const HeroSection = () => {
  return (
    <section
      className="relative bg-white dark:bg-background-8 z-0 sm:pb-0 pb-14 lg:-mb-12 md:-mb-10 overflow-hidden"
      id="scene"
    >
      <figure
        data-ns-animate
        data-delay="0.7"
        data-offset="200"
        className="absolute size-[700px] sm:size-[900px] lg:size-[1100px] rotate-[-597deg]
        top-[250px] left-1/2 -translate-x-1/2 select-none pointer-events-none z-1"
      >
        <img
          src="images/gradient/gradient-37.png"
          alt="download-bg"
          className="size-full object-cover animate-rotate-slow"
        />
      </figure>

      <figure className="absolute h-full w-full hero-bg-overlay-light dark:hero-bg-overlay-dark"></figure>

      <video
        className="w-full h-full absolute -top-[220px] left-0 scale-100 object-cover object-center z-[-1] min-h-[100vh] dark:hidden block"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="video/tube-4.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="relative sm:pt-[230px] pt-[160px] pb-[140px] max-[641px]:pb-16 max-[426px]:pb-10 z-10">
        <div className="main-container text-center relative z-30">
          <span
            data-ns-animate
            data-delay="0.1"
            className="opacity-0 badge badge-purple-v2 mb-5"
          >
            Where Aspiration meets Intelligence
          </span>

          <h1
            data-ns-animate
            data-delay="0.2"
            className="opacity-0 font-semibold mb-4"
          >
            Your{" "}
            <span className="hero-text-gradient hero-text-color-2 block">
              AI Mentor
            </span>{" "}
            for
            <br className="hidden md:block" />
            <span className="hero-text-gradient hero-text-color-2 block">
              UPSC Success
            </span>
          </h1>

          <p
            data-ns-animate
            data-delay="0.3"
            className="opacity-0 max-w-[588px] mx-auto mb-10 md:mb-14"
          >
            Chat, Learn & Practice with india’s largest first-stage AI Mentor
          </p>

          <ul className="flex flex-col md:flex-row gap-4 mb-9 md:mb-11 lg:mb-14 max-md:w-full md:w-auto mx-auto justify-center">
            <li
              data-ns-animate
              data-delay="0.3"
              data-direction="left"
              data-offset="50"
            >
              <a className="btn btn-primary hover:btn-white-dark dark:hover:btn-white btn-lg md:btn-xl w-full md:w-auto">
                <span>Ask Saras</span>
              </a>
            </li>

            <li
              data-ns-animate
              data-delay="0.5"
              data-direction="left"
              data-offset="50"
            >
              <a className="btn btn-white hover:btn-primary dark:btn-white-dark btn-lg md:btn-xl w-full md:w-auto">
                <span>Try Free Now</span>
              </a>
            </li>
          </ul>

          <div
            data-ns-animate
            data-delay="0.7"
            data-instant="true"
            className="relative max-w-[1290px] mx-auto max-lp:mx-5 max-sm:rounded-2xl rounded-4xl overflow-hidden p-2.5 bg-background-3 dark:bg-background-7"
            style={{
              backgroundImage: "url('images/gradient/gradient-44.png')",
              backgroundSize: "auto",
            }}
          >
            <img
              src="img-isaras/dashboard-ai-isaras.png"
              alt="hero video cover"
              className="w-full h-full object-cover rounded-[25px] max-sm:rounded-xl"
            />
          </div>

          <ul className="flex flex-wrap justify-center gap-[42px] max-lg:gap-5 mt-20 max-lg:mt-4">
            {badges.map((badge, index) => (
              <li
                data-ns-animate
                data-delay={`${0.4 + index * 0.1}`}
                className="flex gap-3 items-center"
              >
                <span className="bg-green text-white dark:bg-accent/10 rounded-full size-[18px] flex items-center justify-center">
                  ✔
                </span>
                <p>{badge}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
