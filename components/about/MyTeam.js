import React from "react";
import { teamData } from "../../data/teamData";
import Link from "next/link";

const MyTeam = () => {
  return (
    <section className="mph20 myteam">
      <div className="container-wrap">
        <div className=" center pt4-l pb3 ">
          <div className="cf pb5-l minus-marg">
            {teamData.map((item, i) => {
              return (
                <>
                  <div key={i} className="fl w-100  w-50-m w-25-l  pt4-l pv2">
                    <div className=" ">
                      <article className="tc teamis hide-child relative  center">
                        <img
                          // data-aos="fade-up"
                          // data-aos-duration={returnDuration(i)}
                          // data-aos-duration={isOdd(i + 1) ? "750" : "950"}
                          // data-aos-delay="50"
                          className="team"
                          src={item.image}
                        />
                        <div className="pa2 ">
                          <h5
                          // data-aos="fade-up"
                          // data-aos-offset="30"
                          // data-aos-duration={isOdd(i + 1) ? "900" : "1100"}
                          // data-aos-delay="50"
                          >
                            {item.name}
                          </h5>
                          <p
                            // data-aos="fade-up"
                            // data-aos-offset="30"
                            // data-aos-duration={isOdd(i + 1) ? "1000" : "1200"}
                            // data-aos-delay="50"
                            className="mt2"
                          >
                            {item.position}
                          </p>
                        </div>
                      </article>
                    </div>
                  </div>
                </>
              );
            })}
            <div className="fl w-100 w-33-m w-25-l pt4-l pv2">
              <Link href="/career/">
                <a className=" no-underline">
                  <article className="tc teamis hide-child relative  center">
                    <img
                      className="team"
                      src="/assets/images/about-us/Image 58.png"
                    />
                    <div className="pa2 bt b--black-20">
                      <h5>You</h5>
                      <p className="mt2">Join the team. Become your best.</p>
                    </div>
                  </article>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyTeam;

function returnDuration(index) {
  // make 3 items of set
  let myIndex = index + 1;

  // then add the duration
  // after one set duration will be reset
  let val = myIndex * 200;
  let duration = 600 + val;
  // console.log(duration);

  return duration;
}

function returnDelay(index) {
  let myIndex = index + 1;
  let val = myIndex * 50;
  let delay = 50 + val;
  // console.log(delay);

  return delay;
}

function isOdd(num) {
  return num % 2;
}
