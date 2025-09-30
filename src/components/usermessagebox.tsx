import { useEffect, useState } from "react";

const UserMessageBox = ({ usermessage }: { usermessage: string }) => {
  const [aimessage, setaimessage] = useState("");
  useEffect(() => {
    const timer = setTimeout(() => {
      setaimessage(
        "Hi, how are you? Sorry for the inconvenience sir, Ai feature is not live yet"
      );
    }, 1000);

    return () => {
      clearTimeout(timer);
      setaimessage("...");
    }; // cleanup
  }, [usermessage]);
  return (
    <div>
      <div className="w-100% h-auto flex justify-end px-6 py-4">
        <div className="bg-gray-800 text-white w-auto max-w-[30vw] px-4 py-2 h-auto rounded-2xl line-clamp-3 leading-[1.7] ">
          {usermessage}
        </div>
      </div>
      <div className="max-w-[70%] h-auto w-[auto] flex justify-start px-6 py-4">
        <p>{aimessage}</p>
      </div>
    </div>
  );
};

export default UserMessageBox;
