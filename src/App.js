import { useEffect, useState } from "react";
import { nounList, adjectiveList } from "./data.js";

function App() {
	const [adjective, setAdjective] = useState("");
	const [noun, setNoun] = useState("");
	const [backgroundColor, setBackgroundColor] = useState("indigo");
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
	useEffect(() => {
		setAdjective(
			adjectiveList[Math.floor(Math.random() * adjectiveList.length)],
		);
		setNoun(nounList[Math.floor(Math.random() * nounList.length)]);
		setBackgroundColor(colorList[Math.floor(Math.random() * colorList.length)]);
	}, []);

	return (
		<div
			className={`absolute flex w-full h-full text-center text-white bg-${backgroundColor}-900`}
		>
			<div className="w-5/6 m-auto">
				<div className="text-2xl">
					Oh, didn't you hear? She has a
					{["a", "e", "i", "o", "u"].includes(adjective[0]) && "n"}
				</div>
				<div className="text-9xl">
					{adjective} {noun}
				</div>
			</div>
		</div>
	);
}

export default App;
