import LogOutIcon from "../icons/LogOutIcon";

function Sidebar() {
  return (
    <div className="w-[100%] border-r-1 border-[#262626] h-[100vh] flex flex-col">
      <div className="logoContainer flex h-[55px]  items-center pt-1 pl-4">
        <img
          src="/src/assets/vectorthink-logo.png"
          className="h-[45px]"
          alt=""
        />
        <h2 className="text-xl">Vector Think</h2>
      </div>
      <div className="w-[100%] border-[#262626] border-t-1 mt-auto">
        <div className="w-[90%] mx-auto flex items-center justify-between  py-3">
          <div className="flex items-center gap-5">
            <img
              src="/src/assets/vectorthink-logo.png"
              className="w-[40px] shadow-sm outline-1 shadow-amber-50 rounded-[100%]"
              alt=""
            />
            <div className="flex flex-col max-w-[130px]">
              <p className="truncate">Tushar</p>
              <p className="text-sm text-gray-400 truncate">
                ganotra.vox@gmail.com
              </p>
            </div>
          </div>
          <span className="cursor-pointer">
            <LogOutIcon />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
