const UserMessageBox = ({ usermessage }: { usermessage: string }) => {
  return (
    <div className="w-100% h-auto flex justify-end p-2">
      <div className="bg-gray-800 text-white w-auto max-w-[30vw] px-4 py-2 h-auto rounded-2xl line-clamp-3 leading-[1.7] p">
        {usermessage}
      </div>
    </div>
  );
};

export default UserMessageBox;
