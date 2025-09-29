import Card from "../components/Card";
import Header from "../components/header";
import CreateContentDialogue from "../components/createContentDialogue";
import { useContext } from "react";
import { MyContext } from "../App";
import ShareableLinks from "../components/ShareableLinks";

function Dashboard() {
  const { contentarr, setContentarr, filtertype } = useContext(MyContext);

  return (
    <div className="w-[80%]">
      <CreateContentDialogue />
      <ShareableLinks />
      <Header maintext="All Data" />
      <div className="flex flex-wrap pl-4 justify-start w-[100%] h-[calc(100vh-60px)] pt-8 pb-4 overflow-y-scroll overflow-x-hidden ">
        {contentarr.length < 1 ? (
          <p>Please add content...</p>
        ) : filtertype === "all" ? (
          contentarr.map((content) => {
            return (
              <Card
                key={content._id}
                id={content._id}
                title={content.title}
                type={content.type}
                description={content.description}
                link={content.link}
                view={content.visibility}
                createdAt={content.createdAt}
                setContentarr={setContentarr}
              />
            );
          })
        ) : (
          contentarr
            .filter((content) => content.type === filtertype)
            .map((content) => {
              return (
                <Card
                  key={content._id}
                  id={content._id}
                  title={content.title}
                  type={content.type}
                  description={content.description}
                  link={content.link}
                  view={content.visibility}
                  createdAt={content.createdAt}
                  setContentarr={setContentarr}
                />
              );
            })
        )}
      </div>
    </div>
  );
}

export default Dashboard;
