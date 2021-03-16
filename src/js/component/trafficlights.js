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
					onClick={() => {
						color == "red" ? setColor("") : setColor("red");
					}}></div>
				<div
					className={"yellow light " + seleYellow}
					onClick={() => {
						color == "yellow" ? setColor("") : setColor("yellow");
					}}></div>
				<div
					className={"green light " + seleGreen}
					onClick={() => {
						color == "green" ? setColor("") : setColor("green");
					}}></div>
			</div>
		</div>
	);
};
