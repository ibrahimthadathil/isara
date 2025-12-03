import { useEffect } from "react";

export const useSidebarAnimation = () => {
  useEffect(() => {
    try {
      const elements = {
        navHamburger: document.querySelector(
          ".nav-hamburger"
        ) as HTMLElement | null,
        navHamburgerClose: document.querySelector(
          ".nav-hamburger-close"
        ) as HTMLElement | null,
        sidebar: document.querySelector(".sidebar") as HTMLElement | null,
        subMenu: document.querySelectorAll(
          ".sub-menu"
        ) as NodeListOf<HTMLElement>,
      };

      const { navHamburger, navHamburgerClose, sidebar, subMenu } = elements;

      if (!sidebar) return;

      const openSidebar = () => {
        sidebar.classList.add("show-sidebar");
        document.body.classList.add("overflow-hidden");
      };

      const closeSidebar = () => {
        sidebar.classList.remove("show-sidebar");
        document.body.classList.remove("overflow-hidden");
      };

      const handleSubMenuClick = (menu: HTMLElement) => {
        menu.classList.toggle("active-menu");
        menu.nextElementSibling?.classList.toggle("hidden");
        menu.children[1]?.classList.toggle("rotate-90");

        subMenu.forEach((otherMenu) => {
          if (otherMenu !== menu) {
            otherMenu.nextElementSibling?.classList.add("hidden");
            otherMenu.children[1]?.classList.remove("rotate-90");
            otherMenu.classList.remove("active-menu");
          }
        });
      };

      if (navHamburger) navHamburger.addEventListener("click", openSidebar);
      if (navHamburgerClose)
        navHamburgerClose.addEventListener("click", closeSidebar);

      subMenu.forEach((menu) => {
        menu.addEventListener("click", () => handleSubMenuClick(menu));
      });

      return () => {
        if (navHamburger)
          navHamburger.removeEventListener("click", openSidebar);
        if (navHamburgerClose)
          navHamburgerClose.removeEventListener("click", closeSidebar);

        subMenu.forEach((menu) => {
          menu.removeEventListener("click", () => handleSubMenuClick(menu));
        });
      };
    } catch (error) {
      console.error("Sidebar animation initialization failed:", error);
    }
  }, []);
};
