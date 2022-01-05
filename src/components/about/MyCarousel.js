import React, { useState } from "react";
import { Carousel } from "antd";

export default function MyCarousel() {
  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    accessibility:true,
    draggable:true,
    focusOnSelect: true,
    pauseOnHover:false,
    speed: 3000,
    autoplaySpeed: 4500,
    autoplay: true,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1399,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className=" carousel">
      <Carousel className=" horizontal-center" {...settings} >
        {arr.map((per, i) => (
          <div key={i} className={` practice-area-card my-pad`}>
            <div className="element-div ">
              <div className="img-cpnt  bg-white ">
                <img
                  src={`/assets/images/about-us/slider/${per}`}
                  alt="product"
                />
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

const arr = ["About Us 1.jpg","About Us 2.jpg","About Us 3.jpg","About Us 4.jpg","About Us 5.jpg","About Us 6.jpg","About Us 7.jpg","About Us 9.jpg",];
