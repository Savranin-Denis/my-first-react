// interface ClickCounterProps {
//   value: number;
//   onUpdate: () => void;
// }

// export default function ClickCounter({ value, onUpdate }: ClickCounterProps) {
//   return <button onClick={onUpdate}>CLicked: {value}</button>;
// }

interface ClickCounterProps {
  value: number;
  onUpdate: () => void;
}

export default function ClickCounter({ value, onUpdate }: ClickCounterProps) {
  return <button onClick={onUpdate}>Cliked: {value}</button>;
}
