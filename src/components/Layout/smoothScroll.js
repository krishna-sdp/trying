import React, { useRef, useEffect } from "react";
import useWindowSize from "../../hooks/useWindowSize";

export default function SmoothScroll({ children }) {
  //Hook to grab window size
  const size = useWindowSize();

  // Ref for parent div and scrolling div
  const app = useRef();
  const scrollContainer = useRef();

  // Configs
  const data = {
    ease: 0.1,
    current: 0,
    previous: 0,
    rounded: 0,
  };

  // Run scrollrender once page is loaded.
  useEffect(() => {
    requestAnimationFrame(() => skewScrolling());
  }, []);

  //set the height of the body.
  useEffect(() => {
    setBodyHeight();
  }, [size.height]);

  //Set the height of the body to the heigrequestAnimaionFrameht of the scrolling div
  const setBodyHeight = () => {
    document.body.style.height = `${
      scrollContainer.current.getBoundingClientRect().height
    }px`;
  };

  // Scrolling
  const skewScrolling = () => {
    //Set Current to the scroll position amount
    data.current = window.scrollY;
    // Set Previous to the scroll previous position
    data.previous += (data.current - data.previous) * data.ease;
    // Set rounded to
    data.rounded = Math.round(data.previous * 100) / 100;

    //Assign skew and smooth scrolling to the scroll container
    scrollContainer.current.style.transform = `translate3d(0, -${data.rounded}px, 0) `;

    //loop vai raf
    const requestAnimaionFrame = (params) => {
        skewScrolling()
      }
    // requestAnimaionFrame(() => skewScrolling());
  };

  return (
    <div ref={app} className="App">
      <div ref={scrollContainer} className="scroll">
        {children}
      </div>
    </div>
  );
}
