import React from "react";
import { Link } from "react-router-dom";

export default function JoinTeam() {
  return (
    <section className="mph20 no-xflw join-team">
      <div className="container-wrap  pad-mt ">
        <div className="pb5-l pt3-l pb5  center">
          <div className="cf pv5-l pb4 ">
            <div className="fl w-100 ">
              <h3 className="regular-font mt0  mb0 tc-l m-head">
                Want to work with us?
              </h3>
              <p className="m-subhead-ns regular-font pt3-l tc-l pb4-l pa6-l">
                {" "}
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry’s standard dummy
                text ever
              </p>
              <div className="join-btn justify-center-l pv4-l ml0">
                <Link className="medium-font" to="/career/">
                  Join Our Team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
