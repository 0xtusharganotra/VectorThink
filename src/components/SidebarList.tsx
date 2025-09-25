function SidebarList() {
  return (
    <div className="w-full flex flex-col items-center gap-3 mt-5">
      <button className="w-[90%] text-white bg-[#181818] shadow-2xl/70 rounded-xl flex justify-start py-2 px-5 cursor-pointer hover:bg-[#2d2d2d]">
        Tweets
      </button>
      <button className="w-[90%] text-white bg-[#181818] shadow-2xl/70 rounded-xl flex justify-start py-2 px-5 cursor-pointer hover:bg-[#2d2d2d]">
        Links
      </button>
      <button className="w-[90%] text-white bg-[#181818] shadow-2xl/70 rounded-xl flex justify-start py-2 px-5 cursor-pointer hover:bg-[#2d2d2d]">
        Notes
      </button>
      <button className="w-[90%] text-white bg-[#181818] shadow-2xl/70 rounded-xl flex justify-start py-2 px-5 cursor-pointer hover:bg-[#2d2d2d]">
        Videos
      </button>
    </div>
  );
}

export default SidebarList;
