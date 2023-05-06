import { useState } from "react";
import Slider from "react-slick";
import project from "../images/project_3.png";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import "../stylesheets/Carousel.css";

function Carousel(props) {
  const images = props.images || [project, project, project, project];
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: 0,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    adaptiveHeight: true,
    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 1,
    //     },
    //   },
    // ],
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <div className="Carousel">
      <Slider {...settings}>
        {images.map((img, idx) => (
          <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
            <img src={img} alt={img} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Carousel;
