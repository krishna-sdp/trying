import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export let animation = () => {
  gsap.from(".box1", {
    scrollTrigger: {
      trigger: ".box1",
      start: "center center",
      end: "center top",
      pin: true,
      scrub: 0.2,
    },
    x: "-100%",
    // y: "-10%",
    ease: "power.in",
    scale: "2",
    transformOrigin: "center center",
    opacity: 0,
    // duration: 1
  });
  gsap.from(".box2", {
    scrollTrigger: {
      trigger: ".box2",
      start: "center center",
      end: "center top",
      pin: true,
      scrub: 0.2,
    },
    x: "100%",
    // y: "10%",
    ease: "power.in",
    scale: "2",
    transformOrigin: "center center",
    opacity: 0,
    // duration: 1
  });
};
