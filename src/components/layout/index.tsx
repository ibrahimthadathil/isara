import { useEffect } from "react";
import Footer from "../global/footer";
import GlobalHeader from "../global/header";
import { Outlet } from "react-router-dom";
import { initRevealElements } from "../../utils/animation";
import Lenis from "lenis";

const Layout = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      //   smooth: true,
      smoothWheel: true,
      lerp: 0.1,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);
  useEffect(() => {
    initRevealElements();
  }, []);
  return (
    <>
      <GlobalHeader />
      <main>
        <Outlet />
        <Footer />
      </main>
    </>
  );
};

export default Layout;
