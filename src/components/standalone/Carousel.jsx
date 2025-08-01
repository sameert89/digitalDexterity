import Slider from "react-slick";
import "../../stylesheets/standalone/Carousel.css";

function Carousel(props) {
	const images = props.images;

	const settings = {
		infinite: true,
		lazyLoad: true,
		speed: 1000,
		slidesToShow: 1,
		slidesToScroll: 1,
		centerMode: false,
		centerPadding: 0,
		autoplay: true,
		autoplaySpeed: 2000,
		cssEase: "ease-in",
		arrows: false,
		adaptiveHeight: true,
		pauseOnHover: true,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 1,
					swipeToSlide: true,
				},
			},
		],
		beforeChange: (_, next) => props.carouselChangeCallback(next),
	};

	return (
		<div className="Carousel">
			<Slider {...settings}>
				{images.map((img, idx) => (
					<div
						key={idx}
					>
						<img src={img} alt={img} />
					</div>
				))}
			</Slider>
		</div>
	);
}

export default Carousel;
