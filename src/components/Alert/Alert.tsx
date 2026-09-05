import clsx from "clsx";
import css from "./Alert.module.css";

interface AlertProps {
  type?: "success" | "error";
}

export default function Alert({ type }: AlertProps) {
  return (
    <p className={clsx(css.Alert, type && css[type])}>
      This is default Alert text
    </p>
  );
}
