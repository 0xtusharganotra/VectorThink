import { MyContext } from "../App";
import { PlusIcon } from "../icons/PlusIcon";
import { ShareIcon } from "../icons/ShareIcon";
import Button from "./button";
import { useContext } from "react";
const Header = ({ maintext }: { maintext: string }) => {
  const { setcreateopen, setshareopen, bringaipage } = useContext(MyContext);
  return (
    <div
      className="h-[60px] bg-[#0f0f0f] w-[100%] px-10 flex justify-between items-center border-b-1 m-auto border-[#262626]"
      color="white"
    >
      <h2 className="text-xl">{maintext}</h2>
      {bringaipage === false ? (
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
      ) : (
        <div className="text-sm bg-[#323232] px-4 py-2 rounded-xl cursor-pointer">
          Alpha Release
        </div>
      )}
    </div>
  );
};

export default Header;
