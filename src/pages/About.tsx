import HeroContainer from "../components/global/heroContainer";
import ExperienceSection from "../components/page-section/about/experience";
import MissionSection from "../components/page-section/about/mission";
import AboutVision from "../components/page-section/about/vision";

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