import { useState } from "react";
import { PlusIcon } from "../icons/PlusIcon";
import { ShareIcon } from "../icons/ShareIcon";
import Button from "./button";

const Header = ({ setcreateopen }: { setcreateopen: Boolean }) => {
  return (
    <div
      className="h-[60px] bg-[#0f0f0f] w-[100%] px-10 flex justify-between items-center border-b-1 m-auto border-[#262626]"
      color="white"
    >
      <h2 className="text-xl">All Data</h2>
      <div className="flex gap-3 ">
        <Button variant="primary" text="Share Data" startIcon={<PlusIcon />} />
        <Button
          variant="secondary"
          text="Add Content"
          startIcon={<ShareIcon />}
          setcreateopen={setcreateopen}
        />
      </div>
    </div>
  );
};

export default Header;
