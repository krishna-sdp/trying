import React, { useState, useEffect } from "react";
import cn from "classnames";
import { motion } from "framer-motion";
// import "./styles.css";

const tabVariant = {
  active: {
    // width: "55%",
    transition: {
      type: "tween",
      duration: 0.4,
    },
  },
  inactive: {
    // width: "15%",
    transition: {
      type: "tween",
      duration: 0.4,
    },
  },
};



const TabComponent = ({ tabs, defaultIndex = 0 }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(defaultIndex);

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--active-color",
      tabs[activeTabIndex].color
    );
  }, [activeTabIndex, tabs]);

  // Default to a tab based on the URL hash value
  useEffect(() => {
    const tabFromHash = tabs.findIndex(
      (tab) => `#${tab.id}` === window.location.hash
    );
    setActiveTabIndex(tabFromHash !== -1 ? tabFromHash : defaultIndex);
  }, [tabs, defaultIndex]);

  const onTabClick = (index) => {
    setActiveTabIndex(index);
  };

  return (
    <div className="">
      <div className="tabs-component">
        <ul className="tab-links pb3-ns pb3 pt3-ns" role="tablist">
          {tabs.map((tab, index) => (
            <motion.li
              key={tab.id}
              className={"tab regular-font pr4-ns"}
              role="presentation"
              variants={tabVariant}
              animate={activeTabIndex === index ? "active" : "inactive"}
            >
              <a href={`#${tab.id}`}      className={cn("tab-label ph2 ", { active: activeTabIndex === index })}  onClick={() => onTabClick(index)}>
                {tab.title}
              </a>
            </motion.li>
          ))}
        </ul>
        <div className="">
        {tabs.map((tab, index) => (
          <tab.content
            key={tab.id}
            id={`${tab.id}-content`}
            active={activeTabIndex === index}
          />
        ))}
        </div>
      
      </div>
    </div>
  );
};

export default TabComponent;
