import { useMemo } from "react";
import { nounList, adjectiveList, colorList, introList } from "./data.js";

function App() {
  const [adjective, noun, backgroundColor, intro] = useMemo(() => {
    return [
      adjectiveList[Math.floor(Math.random() * adjectiveList.length)],
      nounList[Math.floor(Math.random() * nounList.length)],
      colorList[Math.floor(Math.random() * colorList.length)],
      introList[Math.floor(Math.random() * introList.length)],
    ];
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
        <div className="text-7xl lg:text-9xl">
          {adjective} {noun}
        </div>
      </div>
    </div>
  );
}

export default App;
