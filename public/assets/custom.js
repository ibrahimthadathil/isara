console.log("custom.js loaded 1");
(function () {
  let scrollTimer = null;
  console.log("custom.js loaded");
  const SCROLL_PAUSE_MS = 180;
  const parallaxEls = Array.from(
    document.querySelectorAll(
      ".parallax-effect, .rotate-anim, .rotate-mitigation"
    )
  );
  let ticking = false;

  function onScrollStart() {
    document.documentElement.classList.add("is-scrolling");
  }
  function onScrollStop() {
    document.documentElement.classList.remove("is-scrolling");
  }

  function rafHandler() {
    const sy = window.scrollY || window.pageYOffset;
    parallaxEls.forEach((el) => {
      const v = parseFloat(
        el.dataset.parallaxValue ||
          el.getAttribute("data-parallax-value") ||
          0.5
      );
      const ty = Math.round((sy * v) / 100);
      el.style.transform = "translate3d(0," + ty + "px,0)";
    });
    ticking = false;
  }

  window.addEventListener(
    "scroll",
    function () {
      onScrollStart();
      if (!ticking) {
        window.requestAnimationFrame(rafHandler);
        ticking = true;
      }
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(onScrollStop, SCROLL_PAUSE_MS);
    },
    { passive: true }
  );

  document
    .querySelectorAll("figure[data-ns-animate] img, .rotate-anim")
    .forEach((img) => img.classList.add("rotate-mitigation"));

  if ("PerformanceObserver" in window) {
    try {
      const obs = new PerformanceObserver((list) => {
        list.getEntries().forEach((e) => {
          if (e.duration && e.duration > 50)
            console.warn("[LongTask]", Math.round(e.duration) + "ms", e);
        });
      });
      obs.observe({ entryTypes: ["longtask"] });
    } catch (e) {}
  }
})();

(function () {
  // CONFIG
  const HEADER_SELECTOR = "header"; // change if your header uses another selector
  const SIDEBAR_SELECTOR = "aside.sidebar";
  const ANIM_MS = 300; // matches your CSS animation duration for sidebar
  const EXTRA_GAP = 12; // extra space below header in px
  const DEBOUNCE_MS = 120;

  // compute header height (accounts for top offset if header uses `top:` value)
  function computeHeaderOffset() {
    const hdr = document.querySelector(HEADER_SELECTOR);
    if (!hdr) return 0;
    const cs = getComputedStyle(hdr);
    const pos = cs.position;
    const rect = hdr.getBoundingClientRect();
    const topVal = parseFloat(cs.top) || 0;
    // include header height only if fixed/sticky
    return pos === "fixed" || pos === "sticky"
      ? Math.ceil(rect.height + topVal)
      : 0;
  }

  // update CSS variable --header-offset so scroll-margin-top uses correct value
  function applyHeaderVar() {
    const offset = computeHeaderOffset();
    document.documentElement.style.setProperty(
      "--header-offset",
      offset + EXTRA_GAP + "px"
    );
  }

  // run on load / resize and when header mutates (menu open/close can change header size)
  window.addEventListener("load", applyHeaderVar);
  window.addEventListener("resize", () => {
    clearTimeout(window._hHeaderTimeout);
    window._hHeaderTimeout = setTimeout(applyHeaderVar, DEBOUNCE_MS);
  });

  const hdr = document.querySelector(HEADER_SELECTOR);
  if (hdr && window.MutationObserver) {
    const mo = new MutationObserver(applyHeaderVar);
    mo.observe(hdr, { attributes: true, childList: true, subtree: true });
  }
  // initial
  applyHeaderVar();

  // Helper: smooth scroll to element accounting for header offset.
  function scrollToTarget(el) {
    if (!el) return;
    try {
      // prefer using scrollIntoView so CSS scroll-margin-top works with --header-offset
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    } catch (e) {}
    // fallback calculation:
    const rect = el.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const top = Math.max(
      0,
      Math.round(rect.top + scrollTop - (computeHeaderOffset() + EXTRA_GAP))
    );
    window.scrollTo({ top, behavior: "smooth" });
  }

  // intercept in-page anchor clicks and handle mobile sidebar closing timing
  document.addEventListener(
    "click",
    (ev) => {
      const a = ev.target.closest('a[href^="#"]');
      if (!a) return;
      const href = a.getAttribute("href") || "";
      if (href === "#" || href === "") return; // ignore generic anchors

      const id = href.slice(1);
      if (!id) return;
      const target = document.getElementById(id);

      ev.preventDefault(); // we control the scroll now

      // If the click came from inside the mobile sidebar, close it first so header/layout settles,
      // then scroll after the animation completes.
      const sidebar = document.querySelector(SIDEBAR_SELECTOR);
      const clickedInsideSidebar = sidebar && sidebar.contains(a);

      if (clickedInsideSidebar) {
        // try to trigger your existing close button (update selector if different)
        const closeBtn = document.querySelector(
          ".nav-hamburger-close, .sidebar-close, .menu-close"
        );
        if (closeBtn)
          try {
            closeBtn.click();
          } catch (e) {}
      }

      const wait = clickedInsideSidebar ? ANIM_MS + 40 : 0;
      setTimeout(() => {
        // ensure header var is refreshed (header may change during menu open/close)
        applyHeaderVar();
        if (target) scrollToTarget(target);

        // update hash (pushState avoids instant jump)
        try {
          if (history.pushState) history.pushState(null, "", "#" + id);
          else location.hash = id;
        } catch (e) {}
      }, wait);
    },
    { passive: false }
  );
})();

// force light theme default (runs before styles apply)
try {
  // if you use 'dark' class style system:
  document.documentElement.classList.remove("dark");
  document.documentElement.classList.add("light");
  // also clear saved pref optionally:
  // localStorage.removeItem('theme');
} catch (e) {}
