import Ecosystem from "../components/page-sections/home/ecosystem";
import FeaturesSection from "../components/page-sections/home/features";
import HeroSection from "../components/page-sections/home/hero";
import HowItWorks from "../components/page-sections/home/howitwork";
import Testimonials from "../components/page-sections/home/testimonials";
import Pricing from "../components/page-sections/home/pricing";
import FaqSection from "../components/page-sections/home/faq";
import PartnersSection from "../components/page-sections/home/partenrs";
import ContactSection from "../components/page-sections/home/cta";

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
