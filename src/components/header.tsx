import { MyContext } from "../App";
import { PlusIcon } from "../icons/PlusIcon";
import { ShareIcon } from "../icons/ShareIcon";
import Button from "./button";
import { useContext } from "react";
const Header = () => {
  const { setcreateopen, setshareopen } = useContext(MyContext);
  return (
    <div
      className="h-[60px] bg-[#0f0f0f] w-[100%] px-10 flex justify-between items-center border-b-1 m-auto border-[#262626]"
      color="white"
    >
      <h2 className="text-xl">All Data</h2>
      <div className="flex gap-3 ">
        <Button
          variant="primary"
          text="Share Memory"
          startIcon={<PlusIcon />}
          onClickfn={() => setshareopen(true)}
        />
        <Button
          variant="secondary"
          text="Add Memory"
          startIcon={<ShareIcon />}
          onClickfn={() => setcreateopen(true)}
        />
      </div>
    </div>
  );
};

export default Header;
