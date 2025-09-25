import type { ReactElement } from "react";

interface ButtonProps {
  variant: "primary" | "secondary";
  text: string;
  startIcon: ReactElement;
}
const Button = (props: ButtonProps) => {
  return (
    <div>
      <button
        className={
          props.variant === "primary"
            ? "bg-[#0f0f0f] border-[#525252] border-1 flex gap-1.5 justify-center items-center text-white px-3 py-1 rounded-md cursor-pointer flex items-center justify-center"
            : "bg-[#525252] border-[#0f0f0f] font-wei flex gap-1.5 justify-center items-center text-white px-3 py-1 rounded-md cursor-pointer flex items-center justify-center"
        }
      >
        {props.startIcon} {props.text}
      </button>
    </div>
  );
};

export default Button;
