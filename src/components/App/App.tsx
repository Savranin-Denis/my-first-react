// import ClickCounter from "../ClickCounter/ClickCounter";
// import { useState } from "react";

import { useState } from "react";
import ClickCounter from "../ClickCounter/ClickCounter";

// export default function App() {
//   const [clicksA, setClicksA] = useState(0);
//   const [сlicksB, setClicksB] = useState(0);

//   // const handleClicksA = () => {
//   //   setClicksA(clicksA + 1);
//   // };
//   // const handleClicksB = () => {
//   //   setClicksB(сlicksB + 1);
//   // };

//   const handleUpdate = (type: "a" | "b") => {
//     if (type === "a") {
//       setClicksA(clicksA + 1);
//     } else {
//       setClicksB(сlicksB + 1);
//     }
//   };

//   const handleReset = () => {
//     setClicksA(0);
//     setClicksB(0);
//   };

//   const totalClicks = clicksA + сlicksB;
//   return (
//     <>
//       <ClickCounter value={clicksA} onUpdate={() => handleUpdate("a")} />
//       <ClickCounter value={сlicksB} onUpdate={() => handleUpdate("b")} />
//       <p>Total: {totalClicks}</p>
//       {totalClicks > 0 && <button onClick={handleReset}>Reset all</button>}
//     </>
//   );
// }

// export default function App() {
//   const [value, setValue] = useState(false);

//   const handleClick = () => {
//     setValue(!value);
//   };

//   return (
//     <>
//       <button onClick={handleClick}>Hide p</button>
//       <hr />
//       {value && <p>Hello world</p>}
//     </>
//   );
// }

interface Obj {
  a: number;
  b: number;
  c: number;
}

export default function App() {
  const [click, setClick] = useState({ a: 0, b: 0, c: 0 });

  const handleClick = (key: keyof Obj) => {
    setClick((prevValue) => ({ ...prevValue, [key]: prevValue[key] + 1 }));
  };

  const total = click.a + click.b + click.c;

  return (
    <>
      <ClickCounter onUpdate={() => handleClick("a")} value={click.a} />
      <hr />
      <ClickCounter onUpdate={() => handleClick("b")} value={click.b} />
      <hr />
      <ClickCounter onUpdate={() => handleClick("c")} value={click.c} />
      <hr />
      <p>Total is: {total}</p>
    </>
  );
}
