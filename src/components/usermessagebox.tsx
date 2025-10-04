import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../App";

const UserMessageBox = ({ usermessage }: { usermessage: string }) => {
  const [aimessage, setaimessage] = useState("");

  useEffect(() => {
    async function getAiresponse() {
      setaimessage("");
      try {
        const res = await axios.post(
          `${BACKEND_URL}/v1/ai/userquery`,
          {
            query: usermessage,
          },
          {
            headers: {
              token: localStorage.getItem("token"),
            },
          }
        );

        if (res.status !== 200) {
          console.log(res.data.message);
        } else {
          setaimessage(res.data.reply);
        }
      } catch (e: any) {
        console.error(e);
        setaimessage(
          "Sorry! Response Generation is taking longer than expected time because of server delay Please try again after sometime"
        );
      }
    }
    getAiresponse();
  }, [usermessage]);

  return (
    <div>
      <div className="w-[100%] h-auto flex justify-end px-6 py-4">
        <div className="bg-gray-800 text-white w-auto max-w-[30vw] px-4 py-2 h-auto rounded-2xl line-clamp-3 leading-[1.7] ">
          {usermessage}
        </div>
      </div>
      <div className="max-w-[70%] h-auto w-[auto] items-top flex justify-start px-6 py-4">
        <img
          src="/assets/vectorthink-logo.png"
          alt=""
          className="w-[30px] h-[30px] rounded-full mr-2 border-1 border-amber-50"
        />
        {aimessage !== "" ? <p>{aimessage}</p> : <p>Gnerating response...</p>}
      </div>
    </div>
  );
};

export default UserMessageBox;
