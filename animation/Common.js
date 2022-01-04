import { useSpring, animated, config } from "react-spring";



export const headlineAnimation = useSpring({
    from: {
      opacity: 0,
      transform: `translate3d(0px,20px,0)`,
    },
    opacity: 1,
    transform: `translate3d(0,0px,0)`,
  });
