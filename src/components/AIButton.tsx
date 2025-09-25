import type { ReactElement } from "react";

interface AiChatButtonProps {
  text: string;
  Icon: ReactElement;
}

function AiButton(props: AiChatButtonProps) {
  return (
    <div className="mt-10">
      <button className="w-[90%] mx-auto rounded-xl bg-[#343434] text-white px-4 py-2 shadow-md/20 shadow-gray-200 hover:shadow-none flex justify-center items-center cursor-pointer gap-2">
        <span className="pr-2">{props.Icon}</span> {props.text}
      </button>
    </div>
  );
}

export default AiButton;
