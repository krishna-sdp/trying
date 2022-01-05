import React from "react";

export default function CardSection({vertical}) {
  console.log("asl;dfjaskdfj", vertical)
  return (
    <section className="work4 container-wrap">
      <div className="container1 mph20">
        <div className="box1">
          <div className="dream1 ">
            <div>
              <img
                className="work-image"
                src={`/assets/images/workdetails/${vertical.collum1.arr[0]}`}
                alt="group 152"
              />
              <h3 className="ma0 pb5-l mobPada regular-font ">
                {vertical.collum1.ptag}
              </h3>
            </div>

            <div>
              <img
                className="work-image"
                src={`/assets/images/workdetails/${vertical.collum1.arr[1]}`}
                alt="dummy"
              />
            </div>
          </div>

          <div className="dream1 mt6-l mts  ">
            <div>
              <img
                className="work-image mb2"
                src={`/assets/images/workdetails/${vertical.collum2.arr[0]}`}
                alt="dummy"
                // style={{
                //   height: "300px",
                // }}
              />
            </div>

            <div>
              <img
                className="work-image"
                src={`/assets/images/workdetails/${vertical.collum2.arr[1]}`}
                alt="dummy"
              />

              <h3 className="ma0 pb4-l regular-font pt2">
              {vertical.collum2.ptag}
              </h3>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
