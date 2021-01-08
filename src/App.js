import { useEffect, useState } from "react";
import { nounList, adjectiveList } from "./data.js";

function App() {
	const [adjective, setAdjective] = useState("");
	const [noun, setNoun] = useState("");
	const [backgroundColor, setBackgroundColor] = useState("indigo");
	const [intro, setIntro] = useState("Look at that");
	const colorList = [
		"gray",
		"red",
		"yellow",
		"green",
		"blue",
		"indigo",
		"purple",
		"pink",
	];
	const introList = [
		"Look at that",
		"Oh, didn't you hear? She has a",
		"Oh, didn't you hear? He has a",
		"Oh, didn't you hear? They have a",
		"What's that",
		"Wow, what a",
		"Nothing beats a",
		"You've gotta try a",
		"Don't worry, I have a",
		"Not another",
		"Look, sometimes you need",
	];
	useEffect(() => {
		setAdjective(
			adjectiveList[Math.floor(Math.random() * adjectiveList.length)],
		);
		setNoun(nounList[Math.floor(Math.random() * nounList.length)]);
		setBackgroundColor(colorList[Math.floor(Math.random() * colorList.length)]);
		setIntro(introList[Math.floor(Math.random() * introList.length)]);
	}, []);

	return (
		<div
			className={`absolute flex w-full h-full text-center text-white bg-${backgroundColor}-900`}
		>
			<div className="w-5/6 m-auto">
				<div className="text-2xl">
					{intro}
					{["a", "e", "i", "o", "u"].includes(adjective[0]) &&
						intro[intro.length - 1] === "a" &&
						"n"}
				</div>
				<div className="text-9xl">
					{adjective} {noun}
				</div>
			</div>
		</div>
	);
}

export default App;
