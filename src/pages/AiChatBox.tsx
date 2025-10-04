import { useEffect, useState } from "react";
import Header from "../components/header";
import { BrainIcon } from "../icons/BrainIcon";
import { SendIcon } from "../icons/SendIcon";
import UserMessageBox from "../components/usermessagebox";
import axios from "axios";
import { BACKEND_URL } from "../App";

interface ChatMessage {
  userMessage: string;
  aiResponse: string;
}

const AiChatBox = () => {
  const [usermessage, setUserMessage] = useState("");
  const [chatarr, setChatArr] = useState<ChatMessage[]>([]);
  const [chaton, setChatOn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [hideinputbox, sethideinputbox] = useState(false);

  // Loading existing chat history
  useEffect(() => {
    const sessionId = localStorage.getItem("ChatSessionId");
    if (!sessionId) return;

    async function loadMessages() {
      try {
        const res = await axios.get(
          `${BACKEND_URL}/v1/ai/chat/message/${sessionId}`,
          { headers: { token: localStorage.getItem("token") } }
        );
        if (res.status === 200 && res.data.messages) {
          setChatArr(res.data.messages);
          setChatOn(true);
        }
      } catch (e) {
        console.error("Error loading chat:", e);
      }
    }

    loadMessages();
  }, []);

  // Sending new user query
  async function sendMessage() {
    const query = usermessage.trim();
    if (!query) return;

    setUserMessage("");
    setChatOn(true);
    setLoading(true);

    try {
      // Get AI response
      const aiRes = await axios.post(
        `${BACKEND_URL}/v1/ai/userquery`,
        { query },
        { headers: { token: localStorage.getItem("token") } }
      );

      const aiReply = aiRes.data.reply;
      let sessionId = localStorage.getItem("ChatSessionId");

      // Create or append to chat session
      if (!sessionId) {
        const sessionRes = await axios.post(
          `${BACKEND_URL}/v1/ai/chat`,
          { userMessage: query, aiResponse: aiReply },
          { headers: { token: localStorage.getItem("token") } }
        );
        sessionId = sessionRes.data.sessionId;
        localStorage.setItem("ChatSessionId", sessionId as string);
      } else {
        try {
          await axios.put(
            `${BACKEND_URL}/v1/ai/chat/${sessionId}`,
            { userMessage: query, aiResponse: aiReply },
            { headers: { token: localStorage.getItem("token") } }
          );
        } catch (err: any) {
          // 3️ Handle 20-message limit
          if (err.response?.status === 403) {
            console.log("Chat limit reached. Creating new session...");
            localStorage.removeItem("ChatSessionId");

            const newSession = await axios.post(
              `${BACKEND_URL}/v1/ai/chat`,
              { userMessage: query, aiResponse: aiReply },
              { headers: { token: localStorage.getItem("token") } }
            );

            sessionId = newSession.data.sessionId;
            localStorage.setItem("ChatSessionId", sessionId as string);
          } else throw err;
        }
      }

      // Update local chat state

      setChatArr((prev) => [
        ...prev,
        { userMessage: query, aiResponse: aiReply },
      ]);

      if (chatarr.length === 10) {
        sethideinputbox(true);
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-[80%] h-[100%]">
      <Header maintext="AI Assistant" />

      <div className="h-[calc(100vh-130px)] overflow-y-auto">
        {!chaton ? (
          <div className="flex flex-col justify-center items-center gap-2 h-[100%]">
            <div className="h-[60px] w-[60px] flex items-center justify-center rounded-full bg-[#242424]">
              <BrainIcon />
            </div>
            <p className="text-xl">Chat With Your Second Brain</p>
            <p className="text-gray-400 text-sm text-center w-[60%]">
              Ask questions related to your stored content and explore your
              knowledge base with the AI Assistant.
            </p>
          </div>
        ) : (
          <div className="p-4 w-[95%] mx-auto">
            {chatarr.map((msg, i) => (
              <UserMessageBox
                key={i}
                usermessage={msg.userMessage}
                aiResponse={msg.aiResponse}
              />
            ))}
            {loading && (
              <p className="text-gray-400 text-sm pl-15 pr-6 py-4">
                Generating Response...
              </p>
            )}
          </div>
        )}
      </div>

      {hideinputbox === false ? (
        <div className="h-[70px] bg-[#0f0f0f] flex justify-center gap-1">
          <div className="w-[80%] bg-[#343434] rounded-2xl h-[50px] flex justify-center items-center">
            <input
              type="text"
              placeholder="Ask anything about your second brain..."
              className="text-white w-[94%] h-[80%] text-md outline-none placeholder-gray-300"
              value={usermessage}
              onChange={(e) => setUserMessage(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
          </div>

          <div
            className="h-[50px] w-[50px] bg-auto rounded-2xl cursor-pointer flex justify-center items-center p-0 hover:bg-[#343434]"
            onClick={sendMessage}
          >
            <SendIcon />
          </div>
        </div>
      ) : (
        <div className="h-[70px] bg-[#0f0f0f] flex justify-center gap-1">
          <p className="text-gray-400">
            You’ve reached the message limit for this chat. To continue, start a
            new chat.
          </p>
        </div>
      )}
    </div>
  );
};

export default AiChatBox;
