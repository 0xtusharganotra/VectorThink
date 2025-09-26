import { CloseIcon } from "../icons/CloseIcon";

function CreateContentDialogue({
  createopen,
  setcreateopen,
}: {
  createopen: Boolean;
  setcreateopen: Boolean;
}) {
  return (
    <>
      {createopen === true && (
        <div className="fixed top-0 left-0 w-[100vw] h-[100vh] flex justify-center items-center z-50">
          {/* Opaque background */}
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-80 z-40"></div>
          {/* Modal content */}
          <div className="relative z-50 w-[600px] bg-[#1a1a1a] text-white p-6 rounded-md ">
            <div className="flex justify-between pb-3">
              <div>
                <p className="text-xl text-white font-bold ">Add Content</p>
                <p className="text-[12px] text-gray-300">
                  Add notes, link to tweet, yt video or any article you like
                </p>
              </div>
              <button
                className="cursor-pointer flex items-start "
                onClick={() => setcreateopen(false)}
              >
                <CloseIcon />
              </button>
            </div>
            <div className="pt-2">
              <label htmlFor="" className="text-white text-sm font-semibold">
                Title
              </label>
              <br />
              <div className=" bg-[#0e0e0e]  w-full h-[40px] rounded-lg p-2 mt-2">
                <input
                  type="text"
                  className="outline-none text-gray-100 w-[98%]"
                  name="Title"
                  placeholder="Quick Idea..."
                />
              </div>
            </div>
            <div className="pt-2">
              <label htmlFor="" className="text-white text-sm font-semibold">
                Link
              </label>
              <br />
              <div className="bg-[#0e0e0e]  w-full h-[40px] rounded-lg p-2 mt-2">
                <input
                  type="text"
                  className="outline-none text-gray-100 w-[98%]"
                  name="Link"
                  placeholder="Link"
                />
              </div>
            </div>
            <div className="pt-2">
              <label htmlFor="" className="text-white text-sm font-semibold">
                Description
              </label>
              <br />
              <div className="bg-[#0e0e0e] w-full h-[auto] rounded-lg p-2 mt-2">
                <textarea
                  rows={7}
                  className="outline-none text-gray-100 w-[98%] overflow-hidden"
                  name="Title"
                  placeholder="Describe your idea or description of any link..."
                />
              </div>
            </div>
            <div className="pt-4 flex justify-between items-center">
              <div>
                <label htmlFor="" className="text-white text-sm font-semibold">
                  Type :
                </label>
                <select
                  name="Type"
                  className="bg-[#0e0e0e] text-sm ml-3 px-5 py-1 rounded-md"
                  id="type"
                >
                  <option value="link">Link</option>
                  <option value="tweet">Tweet</option>
                  <option value="video">Video</option>
                  <option value="notes">Notes</option>
                </select>
              </div>
              <div>
                <label htmlFor="" className="text-white text-sm font-semibold">
                  Type :
                </label>
                <select
                  name="view"
                  className="bg-[#0e0e0e] text-sm ml-3 px-5 py-1 rounded-md"
                  id="view"
                >
                  <option value="public">Public</option>
                  <option value="private">Private</option>
                </select>
              </div>
              <button className=" bg-[#0e0e0e] hover:bg-black hover:outline-1 hover:outline-amber-50  rounded-md px-3 py-1 text-white">
                Add Content
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default CreateContentDialogue;
