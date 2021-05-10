import React, { ReactElement, useRef, useEffect } from "react";
import "../starComponent.css";

interface Props {
	min: number;
	max: number;
}

export default function StarComponent(props: Props): ReactElement {
	const ratings = props.min;
	const starsTotal = props.max;
	let starRef = useRef<HTMLDivElement>(null);
	const percentageRating = (ratings / starsTotal) * 100;

	const roundedPercentage = `${(percentageRating / 10) * 10}%`;

	useEffect(() => {
		starRef.current?.style.setProperty("width", roundedPercentage);
	}, [roundedPercentage]);

	return (
		<div className="stars-outer">
			<div ref={starRef} className="stars-inner"></div>
		</div>
	);
}
