import { useContext } from "react";
import AllContentIcon from "../icons/AllContentIcon";
import { LinkIcon } from "../icons/LinkIcon";
import { NotesIcon } from "../icons/NotesIcon";
import { TwitterIcon } from "../icons/TwitterIcon";
import { VideoIcon } from "../icons/YtVideoIcon";
import { MyContext } from "../App";
function SidebarList() {
  const { setfiltertype } = useContext(MyContext);
  return (
    <div className="w-full flex flex-col items-center gap-3 mt-5">
      <button
        onClick={() => setfiltertype("all")}
        className="w-[90%] text-white bg-[#181818] shadow-2xl/70 rounded-xl flex justify-start items-center py-2 px-5 cursor-pointer hover:bg-[#2d2d2d] gap-2"
      >
        <AllContentIcon /> All
      </button>
      <button
        onClick={() => setfiltertype("tweet")}
        className="w-[90%] text-white bg-[#181818] shadow-2xl/70 rounded-xl flex justify-start items-center py-2 px-5 cursor-pointer hover:bg-[#2d2d2d] gap-2"
      >
        <TwitterIcon /> Tweets
      </button>
      <button
        onClick={() => setfiltertype("link")}
        className="w-[90%] text-white bg-[#181818] shadow-2xl/70 rounded-xl flex justify-start items-center gap-2 py-2 px-5 cursor-pointer hover:bg-[#2d2d2d]"
      >
        <LinkIcon /> Links
      </button>
      <button
        onClick={() => setfiltertype("notes")}
        className="w-[90%] text-white bg-[#181818] shadow-2xl/70 rounded-xl flex justify-start items-center gap-2 py-2 px-5 cursor-pointer hover:bg-[#2d2d2d]"
      >
        <NotesIcon /> Notes
      </button>
      <button
        onClick={() => setfiltertype("video")}
        className="w-[90%] text-white bg-[#181818] shadow-2xl/70 rounded-xl flex justify-start items-center gap-1 py-2 px-5 cursor-pointer hover:bg-[#2d2d2d]"
      >
        <VideoIcon /> Videos
      </button>
    </div>
  );
}

export default SidebarList;
