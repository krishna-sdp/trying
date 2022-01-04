import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Scrollbar from "smooth-scrollbar";
import styled from "styled-components";
// import Navigatiion from "../components/navigation";
// import styles from "../styles/App.module.css";

export default function IndexPage() {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const load = async () => {
      if (typeof window !== undefined) {
        gsap.from(".box1", {
          scrollTrigger: {
            trigger: ".box1",
            start: "center center",
            end: "center top",
            pin: true,
            scrub: 0.2
          },
          x: "-100%",
          ease: "power.in",
          scale: "2",
          transformOrigin: "center center",
          opacity: 0
        });
        gsap.from(".box2", {
          scrollTrigger: {
            trigger: ".box2",
            start: "center center",
            end: "center top",
            pin: true,
            scrub: 0.2
          },
          x: "100%",
          ease: "power.in",
          scale: "2",
          transformOrigin: "center center",
          opacity: 0
        });
      }
    };
    load();
  }, []);

  // const [scrollBarCreated, setScrollBarCreated] = useState(false);
  // const scroller = useRef();
  // const bodyScrollBar = useRef();

  // useEffect(() => {
  //   scroller.current = document.querySelector(".scroller");
  //   bodyScrollBar.current = Scrollbar.init(scroller.current);
  //   setScrollBarCreated(true);
  // }, []);

  // useEffect(() => {
  //   if (scrollBarCreated) {
  //     gsap.registerPlugin(ScrollTrigger);
  //     ScrollTrigger.scrollerProxy(scroller.current, {
  //       scrollTop(value) {
  //         if (arguments.length) {
  //           bodyScrollBar.current.scrollTop = value;
  //         }
  //         return bodyScrollBar.current.scrollTop;
  //       }
  //     });
  //     bodyScrollBar.current.addListener(ScrollTrigger.update);
  //     ScrollTrigger.defaults({ scroller: scroller.current });
  //   }
  // }, [scrollBarCreated]);

  return (
    <Mydiv >
      <Boxes>
        <div className="box box1">
          <h1>Box 1</h1>
        </div>

        <div className="box box2">
          <h1>Box 4</h1>
        </div>
      </Boxes>
    </Mydiv>
  );
}
const Mydiv = styled.div`
  font-family: sans-serif;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: blanchedalmond;
  height: 300vh;
  overflow-y: hidden;
`;
const Boxes = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;

  .box {
    width: 150px;
    height: 400px;
  }

  .box1 {
    background-color: #ffaaaa;
  }

  .box2 {
    background-color: #d46a6a;
  }

  .box3 {
    background-color: #801515;
  }

  .box4 {
    background-color: #550000;
  }
`;
