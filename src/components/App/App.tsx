// import Product from "../Product";
// import BookApp from "../Books";
// import Alert from "../Alert/Alert";
// import Button from "../Button/Button";
// import UserMenu from "../UserMenu/UserMenu";

// import type React from "react";
import { useState } from "react";

// export default function App() {
//   return (
//     <>
//       <h1>Best selling</h1>
//       <BookApp />
//       <Product
//         name="Tacos With Lime"
//         imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?w=640"
//         price={10.99}
//       />
//       <Product
//         name="Fries and Burger"
//         imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?w=640"
//         price={14.29}
//       />
//     </>
//   );
// }

// export default function App() {
//   return (
//     <>
//       <Alert />
//       <Alert type="success" />
//       <Alert type="error" />
//       <Button variant="primary" text="Login" />
//       <Button variant="secondary" text="Follow" />
//       <UserMenu name="Alex" />
//     </>
//   );
// }

// export default function App() {
//   const handleClick = () => {
//     console.log("I'm a button!");
//   };
//   return <button onClick={handleClick}>Click me!</button>;
// }

// export default function App() {
//   return (
//     <button onClick={() => console.log("I'm a button!")}>Click me!</button>
//   );
// }

// export default function App() {
//   const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
//     console.log(event);
//   };

//   return (
//     <>
//       <button onClick={handleClick}>First btn</button>
//       <button onClick={(event) => console.log(event)}>Second btn</button>
//     </>
//   );
// }

// export default function App() {
//   const [clicks, setClicks] = useState<number>(0);

//   const handleClick = () => {
//     setClicks(clicks + 1);
//     console.log(clicks);
//   };

//   return <button onClick={handleClick}>Current: {clicks}</button>;
// }

// import ClickCounter from "../ClickCounter/ClickCounter";
// import { useState } from "react";

// export default function App() {
//   const [clicks, setClicks] = useState(0);

//   const handleClick = () => {
//     setClicks(clicks + 1);
//   };

//   return (
//     <>
//       <ClickCounter value={clicks} onUpdate={handleClick} />
//       <ClickCounter value={clicks} onUpdate={handleClick} />
//     </>
//   );
// }

// export default function App() {
//   const [count, setCount] = useState(0);
//   const [isOpen, setIsOpen] = useState(false);

//   const handleClick = () => {
//     setCount(count + 1);
//   };

//   const toggleMessage = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <>
//       <button onClick={handleClick}>Clicked: {count}</button>
//       <button onClick={toggleMessage}>
//         {isOpen ? "Hide message" : "Show message"}
//       </button>
//       {isOpen && <p>🎉 Surprise! You toggled me.</p>}
//     </>
//   );
// }

interface Values {
  x: number;
  y: number;
}

export default function App() {
  const [values, setValues] = useState<Values>({ x: 0, y: 0 });

  // const updateX = () => {
  //   setValues({ ...values, x: values.x + 1 });
  // };
  // const updateY = () => {
  //   setValues({ ...values, y: values.y + 1 });
  // };

  const updateValue = (key: keyof Values) => {
    setValues({ ...values, [key]: values[key] + 1 });
  };

  return (
    <div>
      <p>
        x: {values.x}, y: {values.y}
      </p>
      {/* <button onClick={updateX}>Update X</button>
      <button onClick={updateY}>Update Y</button> */}
      <button onClick={() => updateValue("x")}>Update X</button>
      <button onClick={() => updateValue("y")}>Update Y</button>
    </div>
  );
}
