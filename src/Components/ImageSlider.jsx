import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import img1 from "../assets/images/img1.png"
import img2 from "../assets/images/img2.png"
import img3 from "../assets/images/img3.png"
import img4 from "../assets/images/img4.png"
const ImageSlider = () => {
  const images = [
    img1,
    img2,
    img3,
    img4,
    img1,
    img2,
    img3,
    img4,
  ];

  const settings = {
    dots: false,              // show navigation dots
    infinite: true,          // infinite loop
    speed: 600,              // animation speed (ms)
    slidesToShow: 4,         // show 4 images at once
    slidesToScroll: 1,
    autoplay: true,          // 🔥 auto slide
    autoplaySpeed: 2500,     // time between slides (ms)
    pauseOnHover: true,      // pause when mouse is over
    responsive: [
      {
        breakpoint: 1024,   // tablet
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 1000,   // tablet
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,    // mobile
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,    // small mobile
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div className="container">
       <h2 class="text-left text-black text-3xl mb-5 font-bold mt-10">Glimpses Of Startup Marathon</h2>
      <Slider {...settings}>
        {images.map((img, idx) => (
          <div key={idx} className="p-2">
            <img
              src={img}
              alt={`slide-${idx}`}
              className="rounded-xl w-full h-64 object-cover "
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
