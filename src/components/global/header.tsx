import { Link } from "react-router-dom";
const navItems = [

  { name: "Home", href: "#" },
  { name: "Features", href: "#features" },
  { name: "How it Works", href: "#hiw" },
  { name: "Pricing", href: "#pricing" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },

];

export default function GlobalHeader() {
  return (
    <header>
      <div
        className="header-one opacity-0 rounded-full lp:!max-w-[1290px] xl:max-w-[1140px] lg:max-w-[960px] md:max-w-[720px] sm:max-w-[540px] min-[500px]:max-w-[450px] min-[425px]:max-w-[375px] max-w-[320px] mx-auto w-full fixed left-1/2 -translate-x-1/2 z-50 top-5 flex items-center justify-between px-2.5 xl:py-2 py-2.5 bg-white/60 backdrop-blur-[25px] dark:bg-background-7 dark:border dark:border-stroke-7 max-[400px]:max-w-[340px]"
        data-ns-animate
        data-direction="up"
        data-offset="100"
      >
        {/* Logo */}
        <div>
          <Link to="/">
            <span className="sr-only">Home</span>

            <figure className="lg:max-w-[198px] lg:block hidden">
              <img src="img-isaras/t-2.svg" alt="" className="dark:invert" />
            </figure>

            <figure className="max-w-[44px] lg:hidden block">
              <img
                src="/assets/img-isaras/isaras-bm.svg"
                alt=""
                className="w-full dark:hidden block"
              />
              <img
                src="/assets/images/shared/logo-dark.svg"
                alt=""
                className="w-full dark:block hidden"
              />
            </figure>
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center absolute left-1/2 -translate-x-1/2">
          <ul className="flex items-center">
            {navItems.map((item) => (
              <li key={item.name} className="py-2.5">
                <Link
                  to={item.href}
                  className="flex items-center gap-1 px-5 py-2 border border-transparent hover:border-stroke-2 dark:hover:border-stroke-7 rounded-full text-tagline-1 font-normal text-secondary/0 hover:text-secondary transition-all duration-200 dark:text-accent/60 dark:hover:text-accent {=$nav-item-class}"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop Sign In */}
        <div className="xl:flex hidden items-center justify-center">
          <Link
            to="/"
            className="btn btn-md btn-primary dark:btn-accent dark:hover:btn-white-dark hover:btn-white"
          >
            <span>SIGN IN</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="xl:hidden block">
          <button className="nav-hamburger flex flex-col gap-[5px] size-12 bg-background-4 dark:bg-background-6 rounded-full items-center justify-center cursor-pointer">
            <span className="sr-only">Menu</span>
            <span className="block w-6 h-0.5 bg-stroke-9 dark:bg-stroke-1"></span>
            <span className="block w-6 h-0.5 bg-stroke-9 dark:bg-stroke-1"></span>
            <span className="block w-6 h-0.5 bg-stroke-9 dark:bg-stroke-1"></span>
          </button>
        </div>
      </div>

      {/* ================= Mobile Menu ================= */}
      <aside className="sidebar fixed top-0 right-0 w-full sm:w-1/2 translate-x-full transition-all duration-300 h-screen bg-white dark:bg-background-7 xl:hidden z-[999] scroll-bar">
        <div className="lg:p-9 sm:p-8 p-5 space-y-4">
          <div className="flex items-center justify-between">
            <Link to="/">
              <span className="sr-only">Home</span>
              <figure className="max-w-[44px]">
                <img
                  src="img-isaras/isaras-bm.svg"
                  alt=""
                  className="w-full dark:hidden block"
                />
              </figure>
            </Link>

            <button className="nav-hamburger-close flex flex-col gap-1.5 size-10 bg-background-4 dark:bg-background-9 rounded-full items-center justify-center cursor-pointer relative">
              <span className="sr-only">Close Menu</span>
              <span className="block w-4 h-0.5 bg-stroke-9/60 dark:bg-stroke-1 rotate-45 absolute"></span>
              <span className="block w-4 h-0.5 bg-stroke-9/60 dark:bg-stroke-1 -rotate-45 absolute"></span>
            </button>
          </div>

          <div className="h-[85vh] w-full overflow-y-auto overflow-x-hidden pb-10 scroll-bar">
            <ul>
              {navItems.map((item) => (
                <li key={item.name} className="relative space-y-0">
                  <Link
                    to={item.href}
                    className="text-tagline-1 font-normal text-secondary/60 dark:text-accent/60 transition-all duration-200 py-3 border-b border-stroke-4 dark:border-stroke-6 w-full text-left flex items-center justify-between cursor-pointer"
                  >
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </aside>
    </header>
  );
}
