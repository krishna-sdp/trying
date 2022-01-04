import Link from "next/link";
import React from "react";
import { Works } from "../../data/workList";

export default function CardSection() {
  return (
    <section className="work4 container-wrap">
      <div className="container1 card-section">
        <div className="box1 pb4">
          <div className="dream1 pa3">
            {Works.column1.map((_, i) => (
              <Link key={i} href={_.link}>
                <a className="no-underline">
                  <img
                    className="work-image ma0 "
                    src={`/assets/images/work4/${_.image}`}
                    alt="group 152"
                  />
                  <h1 className="ma0 medium-font">{_.title}</h1>
                  <h3 className="ma0 pb5 regular-font pt2">{_.tag}</h3>
                </a>
              </Link>
            ))}
          </div>

          <div className="dream1 mt6-l mts pa3">
            {Works.column2.map((_, i) => (
              <Link key={i} href={_.link}>
                <a className="no-underline">
                  <img
                    className="work-image"
                    src={`/assets/images/work4/${_.image}`}
                    alt="group 152"
                  />
                  <h1 className="ma0 medium-font">{_.title}</h1>
                  <h3 className="ma0 pb5 regular-font pt2">{_.tag}</h3>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
