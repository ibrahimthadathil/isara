import HeroContainer from "../components/global/heroContainer";
import ExperienceSection from "../components/page-sections/about/experience";
import MissionSection from "../components/page-sections/about/mission";
import AboutVision from "../components/page-sections/about/vision";

const About = () => {
  return (
    <>
      <HeroContainer title="About us" />
      <AboutVision />
      <MissionSection />
      <ExperienceSection />
    </>
  );
};

export default About;
