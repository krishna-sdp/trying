import React from "react";

export default function AddressSection() {
  return (
    <section className="mph20 ouraddress-section">
      <div className="container-wrap">
        <div className="pv4-l pad-mt pad-mb  center">
          <div className="cf pt3-l pb4-l pv4">
            <div className="fl w-100 w-40-l ">
              <h3 className="de-title medium-font mb0 mt0 clr-5e5e76  pt2-l">Our Office</h3>
            </div>
            <div className="fl w-100 w-60-l ">
              <h1 className="de-main-title ma0 m-head pt2 pt0-l clr-02021e regular-font">
              Welcome to our office
              </h1>

              <div className="description pt3 regular-font pb3">
                 <div>
                <h6 className="m-subhead ma0 pt3-l pt3">Mumbai (India)</h6>
                {/* <p className="middle-content">
                Kalpataru Prime, 4th Flr, Ambika Nagar, Nr. Ashar IT Park,<br/>
                 Wagle Industrial Estate, Thane West - 400604
                </p> */}
                <p className="middle-content">
                2nd Floor, Express Towers, 
                 <br/>
                 Nariman Point, Mumbai 400 021
                </p>

                </div>

                <div>
                <h6 className=" m-subhead ma0 pt3-l pt3" >USA</h6>
                <p>
                101 Jefferson Drive <br/> 1st Floor, Menlo Park, CA 94025, USA
                </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
