const AboutVision = () => {
  return (
    <section className="pb-14 md:pb-16 lg:pb-[88px] xl:pb-[100px] pt-[100px] bg-background-3">
      <div className="main-container space-y-14 md:space-y-[70px]">
        <div className="space-y-3 text-center max-w-[780px] mx-auto">
          <span
            data-ns-animate
            data-delay="0.2"
            className="badge badge-cyan mb-5"
          >
            Passion meets purpose
          </span>
          <h2 data-ns-animate data-delay="0.3">
            I, Saras is defining the future landscape of business.
          </h2>
          <p data-ns-animate data-delay="0.4">
            In a rapidly evolving digital world, I, Saras stands at the
            forefront of innovation, transforming how businesses operate,
            connect, and grow. By delivering intelligent, scalable, and
            user-focused SaaS solutions,
          </p>
        </div>

        <article className="grid grid-cols-12 gap-y-8 justify-center gap-x-8">
          <div className="col-span-12 md:col-span-6 space-y-8">
            <figure
              data-ns-animate
              data-delay="0.5"
              className="rounded-[20px] overflow-hidden max-w-[630px]"
            >
              <img src="images/about-page-01/vision-1.png" alt="vision-1" />
            </figure>
            <figure
              data-ns-animate
              data-delay="0.6"
              className="rounded-[20px] overflow-hidden max-w-[630px]"
            >
              <img src="images/about-page-01/vision-2.png" alt="vision-2" />
            </figure>
          </div>
          <figure
            data-ns-animate
            data-delay="0.7"
            className="col-span-12 md:col-span-6 rounded-[20px] overflow-hidden max-w-[630px]"
          >
            <img src="images/about-page-01/vision-3.png" alt="vision-3" />
          </figure>
        </article>
      </div>
    </section>
  );
};

export default AboutVision;
