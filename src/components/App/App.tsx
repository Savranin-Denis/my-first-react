import ClickCounter from "../ClickCounter/ClickCounter";
import { useState } from "react";

export default function App() {
  const [clicksA, setClicksA] = useState(0);
  const [сlicksB, setClicksB] = useState(0);

  // const handleClicksA = () => {
  //   setClicksA(clicksA + 1);
  // };
  // const handleClicksB = () => {
  //   setClicksB(сlicksB + 1);
  // };

  const handleUpdate = (type: "a" | "b") => {
    if (type === "a") {
      setClicksA(clicksA + 1);
    } else {
      setClicksB(сlicksB + 1);
    }
  };

  const handleReset = () => {
    setClicksA(0);
    setClicksB(0);
  };

  const totalClicks = clicksA + сlicksB;
  return (
    <>
      <ClickCounter value={clicksA} onUpdate={() => handleUpdate("a")} />
      <ClickCounter value={сlicksB} onUpdate={() => handleUpdate("b")} />
      <p>Total: {totalClicks}</p>
      {totalClicks > 0 && <button onClick={handleReset}>Reset all</button>}
    </>
  );
}
