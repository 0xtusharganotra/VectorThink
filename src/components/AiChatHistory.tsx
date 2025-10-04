import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../App";

interface sessionsarrprops {
  userId: string;
  _id: string;
  messages: {
    userMessage: string;
    aiResponse: string;
  }[];
}

function AiChatHistory() {
  const [sessionarr, setsessionarr] = useState<sessionsarrprops[]>([]);

  useEffect(() => {
    async function getallusersessions() {
      const res = await axios.get(`${BACKEND_URL}/v1/ai/chat/all`, {
        headers: {
          token: localStorage.getItem("token"),
        },
      });

      setsessionarr(res.data.sessions);
    }

    getallusersessions();
  }, []);

  function setLocalStorageSessionId(sessionId: string) {
    localStorage.setItem("ChatSessionId", sessionId);
    window.location.reload();
  }

  return (
    <div className="w-[85%] mx-auto mt-10">
      <div className="flex items-center space-x-2">
        <p className="text-lg font-semibold text-white whitespace-nowrap">
          Chat History
        </p>

        <div className="flex-grow border-t border-gray-500"></div>
      </div>
      <div className=" w-[98%] mx-auto py-2 overflow-y-hidden h-[40vh] ">
        {sessionarr.map((session, id) => (
          <div
            onClick={() => setLocalStorageSessionId(session._id)}
            className="pt-4 cursor-pointer border-xl hover:font-bold  "
          >
            <p className="truncate text-[14px] text-gray-200">
              {session?.messages[0]?.userMessage}
            </p>
            <p className="truncate text-[11px] text-gray-500">
              {session?.messages[0]?.aiResponse}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AiChatHistory;
