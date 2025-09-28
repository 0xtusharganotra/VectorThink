import { EditIcon } from "../icons/EditIcon";
import { DeleteIcon } from "../icons/DeleteIcon";
import { ImgIcon } from "../icons/ImgIcon";
import { useState } from "react";
import { BACKEND_URL } from "../config";
import axios from "axios";
import ShowContentDialogue from "./ShowContentDialogue";

interface ContentType {
  _id: string;
  title: string;
  type: string;
  description: string;
  link: string;
  visibility: string;
  createdAt: Date | string;
}

interface CardProps {
  title: string;
  link: string;
  id: string;
  type: string;
  description: string;
  view: string;
  createdAt: Date;
  setContentarr: React.Dispatch<React.SetStateAction<ContentType[]>>;
}

const Card = ({
  title,
  link,
  id,
  type,
  description,
  view,
  createdAt,
  setContentarr,
}: CardProps) => {
  const [data, setdata] = useState(false);
  const [openShowcontent, setopenshowcontent] = useState(false);

  async function triggerdelete(ID: string) {
    try {
      const res = await axios.delete(
        `${BACKEND_URL}/api/v1/vector-think/content`,
        {
          data: { contentId: ID },

          headers: {
            token: localStorage.getItem("token"),
          },
        }
      );
      alert(res.data.message);
      setContentarr(res.data.updatedContent);
      console.log(res.data.updatedContent);
      // window.location.reload;
    } catch (e) {
      console.error(e);
    }
  }
  return (
    <div className="bg-[#1a1a1a] max-w-[270px] min-w-[270px] h-[350px] rounded-md shadow-md/10 shadow-[#b1b1b1] m-3 p-3">
      {openShowcontent === true && (
        <ShowContentDialogue
          title={title}
          description={description}
          type={type}
          view={view}
          link={link}
          setopenshowcontent={setopenshowcontent}
        />
      )}
      <div className="flex justify-between px-2 py-3">
        <p className="text-sm text-[#91929f]">{type}</p>{" "}
        <span className="flex gap-1 justify-center items-center">
          <span
            className="cursor-pointer"
            onClick={() => setopenshowcontent(true)}
          >
            <EditIcon />
          </span>{" "}
          <span className="cursor-pointer" onClick={() => triggerdelete(id)}>
            <DeleteIcon />
          </span>
        </span>
      </div>
      <div className="text-2xl text-white px-2 truncate">{title}</div>
      <div className="text-md text-[#a39f9f] h-[60%] px-2 my-4 w-[100%] ">
        {type === "notes" ? (
          <div className="line-clamp-7">
            <p>{description}</p>
          </div>
        ) : (
          <>
            <div className=" line-clamp-2">
              {description === "" ? (
                <p>Write description for your content</p>
              ) : (
                description
              )}
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
              ) : type === "tweet" ? (
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
          {" "}
          <i>
            {new Date(createdAt)
              .toLocaleString()
              .slice(0, new Date(createdAt).toLocaleString().indexOf(","))}
          </i>
        </p>{" "}
        <p>
          <i>{view}</i>
        </p>{" "}
      </div>
    </div>
  );
};

export default Card;
