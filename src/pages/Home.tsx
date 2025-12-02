import ContactSection from "../components/page-section/home/cta";
import Ecosystem from "../components/page-section/home/ecosystem";
import FaqSection from "../components/page-section/home/faq";
import FeaturesSection from "../components/page-section/home/features";
import HeroSection from "../components/page-section/home/hero";
import HowItWorks from "../components/page-section/home/howitwork";
import PartnersSection from "../components/page-section/home/partenrs";
import Pricing from "../components/page-section/home/pricing";
import Testimonials from "../components/page-section/home/testimonials";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Ecosystem />
      <FeaturesSection />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <FaqSection />
      <PartnersSection />
      <ContactSection />
    </>
  );
};

export default Home;