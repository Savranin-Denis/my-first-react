import { BsApple } from "react-icons/bs";
import css from "./UserMenu.module.css";

interface UserMenuProps {
  name: string;
}

export default function UserMenu({ name }: UserMenuProps) {
  return (
    <div>
      <BsApple className={css.icon} size={34} />
      {name}
    </div>
  );
}
