import React, { useState } from "react";
import { resourcesData } from "../../data/resources";
import Tab from "../../components/Resources/Tab";

export default function index() {
  const [active, setActive] = useState("all");

  const handletabChange = (e) => {
    // console.log(e.target.id);
    setActive(e.target.id);
  };

  return (
   <Tab title="Resources"/>
  );
}
