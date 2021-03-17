import React, { useState } from "react";

export const TrafficLights = () => {
	const [color, setColor] = useState();
	let seleRed = "";
	let seleYellow = "";
	let seleGreen = "";
	if (color == "red") {
		seleRed = "selected";
	}
	if (color == "yellow") {
		seleYellow = "selected";
	}
	if (color == "green") {
		seleGreen = "selected";
	}
	return (
		<div>
			<div id="trafficTop"></div>
			<div id="container">
				<div
					className={"red light " + seleRed}
					onClick={() => setColor("red")}></div>
				<div
					className={"yellow light " + seleYellow}
					onClick={() => setColor("yellow")}></div>
				<div
					className={"green light " + seleGreen}
					onClick={() => setColor("green")}></div>
			</div>
		</div>
	);
};
