import Card from "./components/Card";
import CreateContentDialogue from "./components/createContentDialogue";
import Header from "./components/header";
import Sidebar from "./components/Sidebar";
import { useState } from "react";

function App() {
  const [createopen, setcreateopen] = useState(false);
  return (
    <main className="main flex">
      <CreateContentDialogue
        createopen={createopen}
        setcreateopen={setcreateopen}
      />
      <div className="w-[20%] text-white">
        <Sidebar />
      </div>
      <div className="w-[80%]">
        <Header setcreateopen={setcreateopen} />
        <div className="flex flex-wrap pl-4 justify-start w-[100%] h-[calc(100vh-60px)] pt-8 pb-4 overflow-y-scroll overflow-x-hidden ">
          <Card
            title="Titter link"
            type="twitter"
            link="https://x.com/The_Crypto_Prof/status/1971361226447098024"
            description="this is a twitter link explaining how this world works i mean this is just for fun aai "
          />
          <Card
            title="Gold Vs Silved"
            type="video"
            link="https://www.youtube.com/watch?v=H58A-Zh4h-U"
            description="Video on which is a better investement Gold Or Silver"
          />
          <Card
            title="Blog Link"
            type="link"
            link="https://personal-blog-tushar.vercel.app/"
            description="this is my personal blog link "
          />
          <Card
            title="Perosnal notes"
            type="notes"
            link=""
            description="this is my personal note "
          />
        </div>
      </div>
    </main>
  );
}

export default App;
