import { EditIcon } from "../icons/EditIcon";
import { DeleteIcon } from "../icons/DeleteIcon";
import { ImgIcon } from "../icons/ImgIcon";
import { useState } from "react";
import { replace } from "react-router-dom";

interface CardProps {
  title: string;
  link: string;
  type: "twitter" | "video" | "link" | "notes";
  description: string;
}

const Card = ({ title, link, type, description }: CardProps) => {
  const [data, setdata] = useState(false);
  return (
    <div className="bg-[#1a1a1a] max-w-[270px] min-w-[270px] h-[350px] rounded-md shadow-md/10 shadow-[#b1b1b1] m-3 p-3">
      <div className="flex justify-between px-2 py-3">
        <p className="text-sm text-[#91929f]">{type}</p>{" "}
        <span className="flex gap-1 justify-center items-center">
          <span className="cursor-pointer">
            <EditIcon />
          </span>{" "}
          <span className="cursor-pointer">
            <DeleteIcon />
          </span>
        </span>
      </div>
      <div className="text-2xl text-white px-2">{title}</div>
      <div className="text-md text-[#a39f9f] h-[60%] px-2 my-4 w-[100%] ">
        {type === "notes" ? (
          <div className="line-clamp-7">
            <p>Hello</p>
            <p>Hello</p>
            <p>Hello</p>
            <p>Hello</p>
            <p>Hello</p>
            <p>Hello</p>
            <p>Hello</p>
            <p>Hello</p>
            <p>Hello</p>
            <p>{description}</p>
          </div>
        ) : (
          <>
            <div className=" line-clamp-2">
              Write description for your content {description}
            </div>
            <div className="w-[100%] rounded-xl bg-[#e0e0e0] h-[60%] mt-3  flex justify-center items-center">
              {type === "video" ? (
                <iframe
                  width="100%"
                  height="100%"
                  src={link.replace("watch", "embed").replace("?v=", "/")}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              ) : type === "twitter" ? (
                <a href={link}>
                  <img
                    src="/src/assets/xbanner.png"
                    className=" w-full h-full object-cover rounded-xl mt-4"
                    alt=""
                  />
                </a>
              ) : (
                <a href={link}>
                  <ImgIcon />
                </a>
              )}
            </div>
          </>
        )}
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
