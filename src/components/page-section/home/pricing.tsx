import { pricingPlans } from "../../../const/home";

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="pt-14 md:pt-16 lg:pt-[88px] xl:pt-[100px] pb-14 md:pb-16 lg:pb-[88px] xl:pb-[100px] max-2xl:px-4"
    >
      <div className="relative overflow-hidden max-w-[1440px] bg-black rounded-2xl md:rounded-4xl mx-auto py-16 md:py-[100px] sm:px-5 md:px-10 lg:px-5 xl:px-[67px] flex flex-col gap-[70px]">
        {/* bg images */}
        <figure
          data-ns-animate
          data-delay="0.1"
          data-direction="up"
          data-offset="200"
          className="select-none pointer-events-none absolute hidden md:block md:-top-[1070px] lg:-top-[570px] xl:-top-[690px] left-1/2 -translate-x-1/2 rotate-[28deg] max-w-[1440px] max-h-[1170px] w-full h-full"
        >
          <img
            src="images/gradient/gradient-14.png"
            alt="Pricing Gradient"
            className="w-full h-full object-cover"
          />
        </figure>

        {/* Heading */}
        <div className="flex relative flex-col items-center text-center">
          <span
            data-ns-animate
            data-delay="0.2"
            className="badge badge-blur text-ns-green mb-5"
          >
            Pricing
          </span>

          <h2
            data-ns-animate
            data-delay="0.3"
            className="max-w-[650px] mx-auto mb-8 text-white max-md:px-4"
          >
            Choose the Plan that Fits{" "}
            <span className="text-primary">Your UPSC Journey.</span>
          </h2>

          <p
            data-ns-animate
            data-delay="0.3"
            className="xl:max-w-[544px] text-white"
          >
            Start free, learn smart, and scale your preparation with I, Saras
            your AI mentor for UPSC success.
          </p>
        </div>

        <div className="relative px-5 sm:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                data-ns-animate=""
                data-delay={0.6 + index * 0.1}
                className={`${plan.cardClass} p-8 rounded-[20px] max-w-[408px] w-full mx-auto`}
                style={plan.style}
              >
                {plan.badge && (
                  <div className="flex justify-end -mt-3 mb-2.5">
                    <span className="-mr-4 bg-ns-green text-background-8 py-1.5 px-3 rounded-full font-normal capitalize">
                      {plan.badge}
                    </span>
                  </div>
                )}

                <h3 className="mb-2 text-start font-normal text-heading-5">
                  {plan.title}
                </h3>
                <p className="mb-6 max-w-[250px]">{plan.subtitle}</p>

                <div className="price-month mb-7">
                  <h4 className="text-heading-4 font-normal">
                    ₹<span>{plan.price}</span>
                  </h4>
                  <p className="text-secondary dark:text-accent">
                    {plan.priceLabel}
                  </p>
                </div>

                <a href="#" className={plan.btnClass}>
                  {plan.buttonText}
                </a>

                <p
                  className="mb-8"
                  style={{ fontSize: 14, fontStyle: "italic" }}
                >
                  {plan.note}
                </p>

                <h4 className="mb-5 mt-2 font-normal text-heading-5">
                  {plan.info}
                </h4>

                <ul className="relative list-none space-y-2.5">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2.5">
                      <svg
                        width={20}
                        height={20}
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="shrink-0"
                      >
                        <rect
                          width={20}
                          height={20}
                          rx={10}
                          className="fill-secondary dark:fill-accent/80"
                        />
                        <path
                          d="M9.31661 13.7561L14.7491 8.42144C15.0836 8.0959 15.0836 7.5697 14.7491 7.24416C14.4145 6.91861 13.8736 6.91861 13.539 7.24416L8.7116 11.9901L6.46096 9.78807C6.12636 9.46253 5.58554 9.46253 5.25095 9.78807C4.91635 10.1136 4.91635 10.6398 5.25095 10.9654L8.1066 13.7561C8.27347 13.9184 8.49253 14 8.7116 14C8.93067 14 9.14974 13.9184 9.31661 13.7561Z"
                          className="fill-white dark:fill-background-8"
                        />
                      </svg>
                      <span className="text-secondary dark:text-accent/80 font-normal text-tagline-1">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
