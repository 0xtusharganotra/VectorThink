import { useEffect, useState } from "react";
import Card from "../components/Card";
import { Link } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "../config";

interface ContentType {
  _id: string;
  title: string;
  type: string;
  description: string;
  link: string;
  visibility: string;
  createdAt: Date;
}
const ShareableContentPage = ({ link }: { link: string }) => {
  const [contentarr, setContentarr] = useState<ContentType[]>([]);

  useEffect(() => {
    localStorage.clear();
  }, []);
  return (
    <main className="bg-[#0f0f0f] w-[100vw] min-h-[100vh]  text-white h-[auto] ">
      <div className="flex flex-col items-center w-[100%] pt-10">
        <p className="md:text-2xl text-lg flex items-center px-4">
          <img
            src="/src/assets/vectorthink-logo.png"
            className="w-[40px] pr-1"
            alt=""
          />
          Tushar's Sharable memory space
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
