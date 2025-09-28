import type React from "react";
import { CloseIcon } from "../icons/CloseIcon";

interface showContentDialogueprops {
  type: string;
  title: string;
  view: string;
  link: string;
  description: string;
  setopenshowcontent: React.Dispatch<React.SetStateAction<boolean>>;
}

function ShowContentDialogue({
  type,
  title,
  description,
  view,
  link,
  setopenshowcontent,
}: showContentDialogueprops) {
  return (
    <div className="fixed top-0 left-0 w-[100vw] h-[100vh] flex justify-center items-center z-50">
      {/* Opaque background */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-80 z-40"></div>
      {/* Modal content */}
      <div className="relative z-50 w-[600px] bg-[#1a1a1a] text-white p-6 rounded-md ">
        <div className="flex justify-between pb-3">
          <div>
            <p className="text-xl text-white font-bold ">Content</p>
            <p className="text-[12px] text-gray-300">
              Memory cards are immutable so you wont be able to edit it just
              delete and created a new memory card
            </p>
          </div>
          <button
            className="cursor-pointer flex items-start "
            onClick={() => setopenshowcontent(false)}
          >
            <CloseIcon />
          </button>
        </div>
        <div className="pt-2">
          <label htmlFor="" className="text-white text-sm font-semibold">
            Title
          </label>
          <br />
          <div className=" bg-[#0e0e0e]  w-full h-[40px] rounded-lg p-2 mt-2">
            {title}
          </div>
        </div>
        <div className="pt-2">
          <label htmlFor="" className="text-white text-sm font-semibold">
            Link
          </label>
          <br />
          <div className="bg-[#0e0e0e]  w-full h-[40px] rounded-lg p-2 mt-2">
            {link}
          </div>
        </div>
        <div className="pt-2">
          <label htmlFor="" className="text-white text-sm font-semibold">
            Description
          </label>
          <br />
          <div className="bg-[#0e0e0e] w-full h-[auto] rounded-lg p-2 mt-2">
            {description}
          </div>
        </div>
        <div className="pt-4 flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <label htmlFor="" className="text-white text-sm font-semibold">
              Type :
            </label>
            <p>{type}</p>
          </div>
          <div className="flex gap-2 items-center">
            <label htmlFor="" className="text-white text-sm font-semibold">
              View :
            </label>
            <p>{view}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowContentDialogue;
