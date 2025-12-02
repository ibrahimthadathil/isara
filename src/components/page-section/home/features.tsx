import { featureItems } from "../../../const/home";



const FeaturesSection = () => {
  return (
    <section
      id="features"
      className="pt-14 md:pt-16 lg:pt-[88px] xl:pt-[120px] pb-14 md:pb-16 lg:pb-[88px] xl:pb-[150px] bg-background-1 dark:bg-background-7 relative overflow-hidden"
    >
      {/* Gradient Background */}
      <figure
        data-ns-animate
        data-delay="0.2"
        data-direction="up"
        data-offset="100"
        className="cta-gradient absolute top-0 left-1/2 w-[600px] sm:w-[800px] md:w-[1000px] lg:w-[1140px] z-0 select-none pointer-events-none overflow-hidden"
        style={{ transform: "translate(-50%, 10%) rotate(170deg)" }}
      >
        <img
          src="images/gradient/gradient-23.png"
          alt="How it Works background gradient"
          className="w-full h-auto max-w-full"
        />
      </figure>

      <div className="main-container">
        {/* Heading */}
        <div className="text-center space-y-5 max-w-[650px] mx-auto mb-14">
          <div>
            <h2 data-ns-animate data-delay="0.3" className="mb-3">
              Why <span className="text-primary-500 font-semibold">I, Saras</span>
            </h2>
            <p
              data-ns-animate
              data-delay="0.3"
              className="mb-8 lg:max-w-[696px] mx-auto"
            >
              A smarter, faster, calmer way to prepare for UPSC
            </p>
          </div>
        </div>

        {/* Feature Grid (Using map) */}
        <div className="grid grid-cols-12 space-y-8 md:space-y-0 md:gap-8 mb-0 justify-center">
          {featureItems.map((item, i) => (
            <div
              key={i}
              data-ns-animate
              data-delay={item.delay}
              className={`${item.col} p-6 rounded-[20px] border-8 border-white dark:border-background-9 dark:bg-background-7 bg-background-1 space-y-6 ${item.extraClass}`}
            >
              <div className="space-y-1">
                <h5 className="">{item.title}</h5>
                <p className="">{item.desc}</p>
              </div>

              <figure className="w-full">
                <img
                  src={item.img}
                  alt="feature image"
                  className="w-full object-cover rounded-xl block dark:hidden"
                />
              </figure>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
