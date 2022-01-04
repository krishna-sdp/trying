import React from "react";
import { clients } from "../../data/clients";
import { Carousel } from "antd";


export default function ClientLogo() {



  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    accessibility: true,
    draggable: true,
    autoplay: true,
    autoplaySpeed: 1500,
    focusOnSelect: true,
    pauseOnHover:false,
    slidesToShow: 6,
    responsive: [
      {
        breakpoint: 1399,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 4,
        },
      },
    // {
      //   breakpoint: 768,
      //   settings: {
      //     slidesToShow: 4,
      //   },
      // },
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 3,
        },
      },

      {
        breakpoint: 400,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 290,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <section className="mph20 cliets-logo pt5-ns pt4 pb5  mb4-ns">
      <div className="container-wrap">
        <div className="cf">
          <Carousel className="clients-logo-slider horizontal-center" {...settings}  >
            {clients.map((image, index) => (
              <div key={index} className={`fl tc tj-m   client-logs-s `}>
                <img
                  src={`/assets/images/clients-logo/${image.image}`}
                  alt={image.client}
                  style={{
                    width:image.width,
                    height:image.height
                  }}
                  className={`${image.client} cline_img`}
                  // height="100" 
                />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
}

function returnDuration(index) {
  let myIndex = index + 1;
  let val = myIndex * 100;
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
