const MissionSection = () => {
  return (
    <section className="relative pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px] bg-background-3">
      <div className="main-container">
        <div className="flex items-center flex-wrap lg:flex-nowrap gap-8 lg:gap-4 xl:gap-8">
          <div className="w-full lg:w-1/2">
            <span
              data-ns-animate
              data-delay="0.1"
              className="badge badge-cyan mb-5"
            >
              Our Mission
            </span>
            <div className="space-y-3 md:max-w-[540px]">
              <h2 data-ns-animate data-delay="0.2">
                To help teams work and grow with smart, secure software.
              </h2>
              <p data-ns-animate data-delay="0.3">
                We help companies turn messy workflows into manageable
                systems—one dashboard, one automation, one insight at a time.
              </p>
            </div>
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
    </section>
  );
};

export default MissionSection;
