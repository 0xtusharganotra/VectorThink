import Header from "../components/header";
import { BrainIcon } from "../icons/BrainIcon";
import { SendIcon } from "../icons/SendIcon";

const AiChatBox = () => {
  function sendAIalert() {
    alert("Coming Soon...");
  }
  return (
    <div className="w-[80%] h-[100%]">
      <Header maintext="AI Assistant" />
      <div className="h-[calc(100vh-130px)] flex flex-col justify-center items-center gap-2">
        <div className="h-[60px] w-[60px] flex items-center justify-center rounded-full bg-[#242424]">
          <BrainIcon />
        </div>
        <p className="text-xl">Chat With Your Second brain</p>
        <p className="text-gray-400 text-sm ">
          Ask information related to your stored content and explore your
          knowlege base with Ai Assistant
        </p>
      </div>
      <div className="h-[70px] bg-[#0f0f0f] flex justify-center gap-1">
        <div className="w-[75%] bg-[#343434] rounded-2xl h-[50px] flex justify-center items-center">
          <input
            type="text"
            placeholder="Ask Anything about your second brain..."
            className="text-white w-[94%] h-[80%] text-md outline-none placeholder-gray-300"
          />
        </div>

        <div
          className="h-[50px] w-[50px] bg-auto rounded-2xl cursor-pointer flex justify-center items-center p-0 hover:bg-[#343434]"
          onClick={sendAIalert}
        >
          <SendIcon />
        </div>
      </div>
    </div>
  );
};

export default AiChatBox;
