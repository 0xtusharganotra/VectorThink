import { useContext, useEffect, useState } from "react";
import { CloseIcon } from "../icons/CloseIcon";
import { MyContext } from "../App";
import { BACKEND_URL } from "../config";
import axios from "axios";

const ShareableLinks = () => {
  const { shareopen, setshareopen } = useContext(MyContext);
  const [Glink, setGlink] = useState<string>("");

  useEffect(() => {
    async function getalllinks() {
      const res = await axios.get(
        `${BACKEND_URL}/v1/vector-think/sharable-link/all`,
        {
          headers: {
            token: localStorage.getItem("token"),
          },
        }
      );

      const alllinks = res.data.links;
      if (alllinks && alllinks.length > 0) {
        setGlink(`http://localhost:5173/${alllinks[0].token}`); // adjust field name if it's `link`
        console.log(alllinks[0].token);
      } else {
        console.log(res.data.message || "No sharable links found");
      }
    }

    getalllinks();
  }, []);

  async function generatelink() {
    try {
      const res = await axios.post(
        `${BACKEND_URL}/api/v1/vector-think/share`,
        {},
        {
          headers: {
            token: localStorage.getItem("token"),
          },
        }
      );
      const createdlink = res.data.link;

      if (!createdlink) {
        alert(res.data.message);
      }
      setGlink(createdlink);
      console.log(Glink);
    } catch (e: any) {
      console.error(e);
    }
  }
  return (
    <>
      {shareopen === true && (
        <div className="fixed top-0 left-0 w-[100vw] h-[100vh] flex justify-center items-center z-50">
          {/* Opaque background */}
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-80 z-40"></div>
          {/* Modal content */}
          <div className="relative z-50 w-[600px] bg-[#1a1a1a] text-white p-6 rounded-md ">
            <div className="flex justify-between pb-3">
              <div>
                <p className="text-xl text-white font-bold ">Sharable Link</p>
                <p className="text-[12px] text-gray-300"></p>
              </div>
              <button
                className="cursor-pointer flex items-start "
                onClick={() => setshareopen(false)}
              >
                <CloseIcon />
              </button>
            </div>
            <div className="flex gap-2 items-center justify-center">
              {Glink === "" && (
                <button
                  className="px-3 py-2 bg-[#101010] rounded-md cursor-pointer hover:bg-[#141414] hover:outline-1 hover:outline-amber-50"
                  onClick={generatelink}
                >
                  Gnerate Link
                </button>
              )}
              <div>
                <p>{Glink}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ShareableLinks;
