import { EditIcon } from "../icons/EditIcon";
import { DeleteIcon } from "../icons/DeleteIcon";
import { ImgIcon } from "../icons/ImgIcon";
import { useState } from "react";

const Card = () => {
  const [data, setdata] = useState(false);
  return (
    <div className="bg-[#1a1a1a] max-w-[270px] min-w-[270px] h-[350px] rounded-md shadow-md/10 shadow-[#b1b1b1] m-3 p-3">
      <div className="flex justify-between px-2 py-3">
        <p className="text-sm text-[#91929f]">Doc</p>{" "}
        <span className="flex gap-1 justify-center items-center">
          <span className="cursor-pointer">
            <EditIcon />
          </span>{" "}
          <span className="cursor-pointer">
            <DeleteIcon />
          </span>
        </span>
      </div>
      <div className="text-2xl text-white px-2">Title</div>
      <div className="text-md text-[#a39f9f] h-[60%] px-2 my-4 w-[100%] ">
        description / video description / video description
        <a href="/">
          <div className="w-[100%] rounded-xl bg-[#e0e0e0] h-[60%] mt-3  flex justify-center items-center">
            <ImgIcon />
          </div>
        </a>
      </div>
      <div className="text-sm flex justify-between px-2 text-[#91929f]">
        <p>
          <i>Added on</i>
        </p>{" "}
        <p>
          <i>public</i>
        </p>{" "}
      </div>
    </div>
  );
};

export default Card;
