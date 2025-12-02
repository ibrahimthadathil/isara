import Footer from "../global/footer";
import GlobalHeader from "../global/header";
import { Outlet } from "react-router-dom";

const Layout = () => {
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