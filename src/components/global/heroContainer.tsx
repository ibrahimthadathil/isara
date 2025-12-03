
const HeroContainer = ({ title }: { title: string }) => {
  return (
    <section
      className="xl:pt-[180px] md:pt-42 sm:pt-36 pt-32 bg-background-3 dark:bg-background-7"
      aria-label="Page hero section"
    >
      <div className="main-container">
        <div className="text-center space-y-2 pb-0 lg:pb-[0px]">
          <h1
            data-ns-animate
            data-delay="0.2"
            className="font-normal lg:text-heading-2"
          >
            {title}
          </h1>
        </div>
      </div>
    </section>
  );
};

export default HeroContainer;
