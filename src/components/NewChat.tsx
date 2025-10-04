import type { ReactElement } from "react";

interface NewChatButtonProps {
  text: string;
  Icon: ReactElement;
}

function NewChatButton(props: NewChatButtonProps) {
  function clearsessionid() {
    const sessionId = localStorage.getItem("ChatSessionId");

    if (!sessionId) {
      return;
    }

    localStorage.removeItem("ChatSessionId");
    window.location.reload();
  }
  return (
    <div className="mt-4 flex items-center justify-center">
      <button
        onClick={clearsessionid}
        className="w-[90%] mx-auto rounded-xl bg-[#343434] text-white px-4 py-2 shadow-md/20 shadow-gray-200 hover:shadow-none flex justify-center items-center cursor-pointer gap-2"
      >
        <span>{props.Icon}</span> {props.text}
      </button>
    </div>
  );
}
export default NewChatButton;
