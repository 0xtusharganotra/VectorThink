import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <div>
      <main className="main flex">
        <div className="w-[100%]">
          <div className="flex flex-wrap pl-4 justify-start w-[100%] h-[100vh] pt-8 pb-4 ">
            <div className="w-[100%] h-[100%] flex justify-center items-center">
              <img
                src="/assets/vectorthink-logo.png"
                className="w-[20vw] h-[auto]"
                alt=""
              />
              <div>
                <p className="text-4xl">404 Page not found </p>
                <Link to="/" className="hover:text-amber-500 ">
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Page404;
