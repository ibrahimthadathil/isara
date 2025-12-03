import { testimonials } from "../../../const/home";


export default function Testimonials() {
  return (
    <section className="xl:py-[100px] md:py-20 py-14 space-y-[70px] relative overflow-hidden">
      <figure
        data-ns-animate
        data-delay="0.4"
        data-offset="100"
        data-direction="left"
        className="absolute w-[400px] lg:w-[500px] xl:w-[584px] top-[-214px] left-[-100px] lg:top-[-250px] xl:top-[-295px] lg:left-[-52px] xl:left-[-52px] select-none pointer-events-none"
        aria-hidden="true"
      >
        <img
          src="images/gradient/gradient-32.png"
          alt=""
          className="size-full object-cover"
        />
      </figure>

      <div className="main-container">
        <div className="space-y-5 max-w-[804px] mx-auto text-center">
          <span data-ns-animate data-delay="0.1" className="badge badge-cyan">
            Success Stories
          </span>

          <div className="space-y-3">
            <h2 data-ns-animate data-delay="0.2">
              Hear from Aspirants <br /> Who Trust{" "}
              <span className="text-primary-500 font-semibold">I, Saras</span>
            </h2>

            <p data-ns-animate data-delay="0.3">
              See how I, Saras has helped UPSC aspirants simplify their
              preparation, <br /> boost confidence, and achieve their goals with
              the power of AI mentoring.
            </p>
          </div>
        </div>
      </div>

      <div className="cards-marquee-container" data-ns-animate data-delay="0.4">
        <div className="flex items-center gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`bg-background-1/90 hover:bg-white dark:bg-background-5 dark:hover:bg-background-8 hover:shadow-1 transition-colors duration-300 ease-linear rounded-[20px] p-8 min-w-[358px] max-w-[358px] shrink-0 w-full ${
                t.ml || ""
              }`}
            >
              <p className="text-wrap text-start">{t.text}</p>

              <div className="my-8 h-px w-full bg-stroke-4 dark:bg-stroke-8"></div>

              <div className="flex items-center gap-3">
                <figure className="size-12 rounded-full overflow-hidden">
                  <img
                    src={t.img}
                    alt="avatar"
                    className="h-full w-full bg-linear-[156deg,#83E7EE_2.92%,#C6F56F_91%]"
                  />
                </figure>

                <div>
                  <h3 className="text-tagline-1 font-medium text-secondary dark:text-accent">
                    {t.name}
                  </h3>
                  <p className="text-tagline-2 text-secondary/60 font-normal dark:text-accent/60">
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <figure
        data-ns-animate
        data-delay="0.4"
        data-offset="100"
        data-direction="right"
        className="absolute w-[200px] lg:w-[300px] xl:w-[409px] bottom-[-50px] xl:bottom-[-72px] right-2.5 select-none pointer-events-none"
        aria-hidden="true"
      >
        <img
          src="images/gradient/gradient-25.png"
          alt=""
          className="size-full object-cover"
        />
      </figure>
    </section>
  );
}
