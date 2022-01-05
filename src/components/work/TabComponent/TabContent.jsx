import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Works } from "../../../data/workList";

const tabContentVariant = {
  active: {
    display: "block",
    transition: {
      staggerChildren: 0.2,
    },
  },
  inactive: {
    display: "none",
  },
};

const cardVariant = {
  active: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
  inactive: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 0.5,
    },
  },
};

const TabContent = ({ id, active }) => (
  <motion.div
    role="tabpanel"
    id={id}
    className="tab-content tabs__content mt0 mb0"
    variants={tabContentVariant}
    animate={active ? "active" : "inactive"}
    initial="inactive"
  >
    <div className="container-works pt3-ns ">
      {Works.map((e, index) => (
        <div className="content-card pb4-ns pb3  card_image w-third-l w-50-m w-100 cf ph3">
          <Link href={e.link}>
            <motion.a key={index} variants={cardVariant} className="fl w-100 pointer">
              <img src={`/assets/images/home-work/${e.image}`} alt={e.title} />
            </motion.a>
          </Link>
          <div className="fl tc tj-l work-caption w-100">
            <h2 className="medium-font mb2 mt2 mt3-ns">{e.product_name}</h2>
            <p className="regular-font mt0 mb3-l mb2">{e.description}</p>
          </div>
        </div>
      ))}
    </div>
  </motion.div>
);

export default TabContent;
