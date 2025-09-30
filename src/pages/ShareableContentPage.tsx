import { useEffect, useState } from "react";
import Card from "../components/Card";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "../App";

import type { ContentType } from "../types";

const ShareableContentPage = () => {
  const [contentarr, setContentarr] = useState<ContentType[]>([]);
  const [username, setusername] = useState("");
  const { link } = useParams<{ link: string }>();

  useEffect(() => {
    localStorage.clear();
    async function getContent() {
      try {
        const res = await axios.get(`${BACKEND_URL}/share/${link}`);
        console.log(res.data.content);
        setusername(res.data.username);
        setContentarr(res.data.content);
      } catch (e: any) {
        console.log(e);
      }
    }

    getContent();
  }, []);
  return (
    <main className="bg-[#0f0f0f] w-[100vw] min-h-[100vh]  text-white h-[auto] ">
      <div className="flex flex-col items-center w-[100%] pt-10">
        <p className="md:text-2xl text-lg flex items-center px-4">
          <img
            src="/assets/vectorthink-logo.png"
            className="w-[40px] pr-1"
            alt=""
          />
          {username}'s Sharable memory space
        </p>
        <p className="text-md hover:text-amber-200">
          <Link to="/">Create your own now</Link>
        </p>
      </div>

      <div className="flex justify-center mt-20 ">
        <div className="flex flex-wrap justify-center w-[80%] overflow-x-hidden  ">
          {contentarr.length === 0 ? (
            <p>No content...</p>
          ) : (
            contentarr
              .filter((content) => content.visibility === "public")
              .map((content) => (
                <Card
                  key={content._id}
                  id={content._id}
                  title={content.title}
                  description={content.description}
                  type={content.type}
                  link={content.link}
                  view={content.visibility}
                  createdAt={content.createdAt}
                  setContentarr={setContentarr}
                />
              ))
          )}
        </div>
      </div>
    </main>
  );
};

export default ShareableContentPage;
