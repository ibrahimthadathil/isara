
const teamMembers = [
  {
    name: "Alex",
    role: "Manager",
    imgSrc: "images/avatar/avatar-2.png",
    alt: "Darrell Steward profile img",
  },
  {
    name: "Alex",
    role: "Manager",
    imgSrc: "images/avatar/avatar-2.png",
    alt: "Darrell Steward profile img",
  },
  {
    name: "Alex",
    role: "Manager",
    imgSrc: "images/avatar/avatar-2.png",
    alt: "Darrell Steward profile img",
  },
  {
    name: "Alex",
    role: "Manager",
    imgSrc: "images/avatar/avatar-2.png",
    alt: "Darrell Steward profile img",
  },
];

const TeamSection = () => {
  return (
    <section className="bg-background-3 dark:bg-background-7 py-[100px]">
      <div className="main-container">
        <div>
          <div className="max-w-[620px] md:w-full text-center mx-auto mb-[70px]">
            <span
              data-ns-animate
              data-delay="0.1"
              className="badge badge-cyan mb-5"
            >
              Our team
            </span>
            <h2 data-ns-animate data-delay="0.2" className="mb-3">
              Our innovative, dynamic, and talented team
            </h2>
            <p data-ns-animate data-delay="0.3">
              Our innovative, dynamic, and talented team is the driving force
              behind our success. Each member brings a unique blend of expertise
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 items-center gap-6 justify-center mb-0">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                data-ns-animate
                data-delay="0.4"
                className="w-[298px] h-[312px] space-y-[34px] mx-auto"
              >
                <figure className="size-[156px] rounded-full bg-[#d5dbe3] flex items-center justify-center overflow-hidden mx-auto">
                  <img
                    src={member.imgSrc}
                    className="object-cover size-full"
                    alt={member.alt}
                    loading="lazy"
                  />
                </figure>
                <div className="space-y-[27px]">
                  <div className="text-center">
                    <h3 className="text-heading-5">{member.name}</h3>
                    <p className="text-tagline-2">{member.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
