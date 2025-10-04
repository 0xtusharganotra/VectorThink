const UserMessageBox = ({
  usermessage,
  aiResponse,
}: {
  usermessage: string;
  aiResponse: string;
}) => {
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
        {aiResponse}
      </div>
    </div>
  );
};

export default UserMessageBox;
