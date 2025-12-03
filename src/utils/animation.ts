import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

/**
 * Initialize animation for elements using data attributes.
 */
export const initRevealElements = (): void => {
  const elements = document.querySelectorAll<HTMLElement>("[data-ns-animate]");

  // Springer might come from a window-injected script
  const Springer: any = (window as any)?.Springer?.default;

  elements.forEach((elem: HTMLElement) => {
    const duration = parseFloat(elem.getAttribute("data-duration") || "0.6");
    const delay = parseFloat(elem.getAttribute("data-delay") || "0");
    const offset = parseFloat(elem.getAttribute("data-offset") || "60");

    const instant =
      elem.hasAttribute("data-instant") &&
      elem.getAttribute("data-instant") !== "false";

    const start = elem.getAttribute("data-start") || "top 90%";
    const end = elem.getAttribute("data-end") || "top 50%";
    const direction = elem.getAttribute("data-direction") || "down";
    const animationType = elem.getAttribute("data-animation-type") || "from";

    const useSpring = elem.hasAttribute("data-spring");
    const spring = useSpring && Springer ? Springer(0.2, 0.8) : null;

    const rotation = parseFloat(elem.getAttribute("data-rotation") || "0");

    // Initial styles
    elem.style.opacity = "1";
    elem.style.filter = "blur(0)";

    // Animation config
    const animationProps: gsap.TweenVars = {
      duration,
      delay,
      ease: useSpring ? spring : "power2.out",
    };

    // Add extra props based on type
    if (animationType === "to") {
      animationProps.opacity = 1;
      animationProps.filter = "blur(0)";
    } else {
      animationProps.opacity = 0;
      animationProps.filter = "blur(16px)";
    }

    if (rotation !== 0) {
      animationProps.rotation = rotation;
    }

    // Direction movement
    switch (direction) {
      case "left":
        animationProps.x = -offset;
        break;
      case "right":
        animationProps.x = offset;
        break;
      case "down":
        animationProps.y = offset;
        break;
      case "up":
      default:
        animationProps.y = -offset;
        break;
    }

    // ScrollTrigger
    if (!instant) {
      animationProps.scrollTrigger = {
        trigger: elem,
        start,
        end,
        scrub: false,
      };
    }

    // Run animation
    if (animationType === "to") {
      gsap.to(elem, animationProps);
    } else {
      gsap.from(elem, animationProps);
    }
  });
};
