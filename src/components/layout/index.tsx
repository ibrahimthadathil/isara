import { useEffect } from "react";
import Footer from "../global/footer";
import GlobalHeader from "../global/header";
import { Outlet } from "react-router-dom";
import { initRevealElements } from "../../utils/animation";

const Layout = () => {
  useEffect(() => {
  initRevealElements()
  }, [])
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
