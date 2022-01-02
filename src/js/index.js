//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
function SimpleCounter(props) {
	return (
		<div className="mainCounter">
			<div className="clock">
				{" "}
				<i className="far fa-clock"></i>{" "}
			</div>
			<div className="fifth"> {props.fifthD % 10} </div>
			<div className="fourth"> {props.fourthD % 10} </div>
			<div className="third"> {props.thirdD % 10} </div>
			<div className="second"> {props.secondD % 10} </div>
			<div className="first"> {props.fisrtD % 10} </div>
		</div>
	);
}

SimpleCounter.PropTypes = {
	fifthD: PropTypes.number,
	fourthD: PropTypes.number,
	thirdD: PropTypes.number,
	secondD: PropTypes.number,
	fisrtD: PropTypes.number,
};

let counter = 0;
setInterval(function () {
	const fifth = Math.floor(counter / 10000);
	const fourth = Math.floor(counter / 1000);
	const third = Math.floor(counter / 100);
	const second = Math.floor(counter / 10);
	const first = Math.floor(counter / 1);
	counter++;

	//render your react application
	ReactDOM.render(
		<SimpleCounter
			fisrtD={first}
			secondD={second}
			thirdD={third}
			fourthD={fourth}
			fifthD={fifth}
		/>,
		document.querySelector("#app")
	);
}, 1000);
