import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Navigation = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    setTimeout(() => {
      gsap.to(".pin-item", {
        opacity: 1,
        x: 100,
        scrollTrigger: {
          trigger: ".pin-trigger",
          end: 900,
          pin: true,
          pinSpacing: false
        }
      });
    }, 0);
  }, []);

  return (
    <div className="pin-trigger">
      <h1 className="pin-item">hello</h1>
    </div>
  );
};

export default Navigation;
