import React from "react";
import { Carousel } from "react-bootstrap";
interface Props {}

const CarouselComponent = (props: Props) => {
	return (
		<Carousel>
			<Carousel.Item interval={3000}>
				<img
					className="d-block w-100"
					src="https://quotefancy.com/media/wallpaper/3840x2160/15478-Margaret-Fuller-Quote-Today-a-reader-tomorrow-a-leader.jpg"
					alt="First slide"
				/>
			</Carousel.Item>
			<Carousel.Item interval={3000}>
				<img
					className="d-block w-100"
					src="https://cdn.wallpapersafari.com/13/28/K1nqVZ.jpg"
					alt="First slide"
				/>
			</Carousel.Item>
			<Carousel.Item interval={3000}>
				<img
					className="d-block w-100"
					src="https://quotesbook.com/images/quotes/preview/time-quote-so-many-books-so-little-time-1426.jpg"
					alt="First slide"
				/>
			</Carousel.Item>
		</Carousel>
	);
};

export default CarouselComponent;
