import React from "react";
// import { ReactComponent as Bag } from "./assets/bag.svg";
// import { ReactComponent as Plane } from "./assets/plane.svg";
// import { ReactComponent as Calendar } from "./assets/calendar.svg";
// import { ReactComponent as House } from "./assets/house.svg";
import TabContent from "./TabContent";

// Configure our tabs and tab content here
const tabs = [
  {
    title: "All",
    id: "all",
    // icon: <Plane />,
    color: "#5d5dff",
    content: TabContent
  },
  {
    title: "Branding",
    id: "branding",
    // icon: <House />,
    color: "#67bb67",
    content: TabContent
  },
  {
    title: "UX/UI",
    id: "ux-ui",
    // icon: <Calendar />,
    color: "#63a7c7",
    content: TabContent
  },
  {
    title: "Technology",
    id: "technology",
    // icon: <Bag />,
    color: "#f56868",
    content: TabContent
  }
];

export default tabs;
