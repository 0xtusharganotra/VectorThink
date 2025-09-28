import { useNavigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/dashboard";
import { createContext, useState, useEffect } from "react";
import axios from "axios";

import type { ContentType, MyContextType } from "./types";

export const BACKEND_URL = "http://localhost:3000";

export const MyContext = createContext<MyContextType>({
  createopen: false,
  setcreateopen: () => {},
  username: "",
  email: "",
  contentarr: [],
  setContentarr: () => {},
  filtertype: "all",
  setfiltertype: () => {},
  shareopen: false,
  setshareopen: () => {},
});

function App() {
  const [createopen, setcreateopen] = useState(false);
  const [shareopen, setshareopen] = useState(false);
  const navigate = useNavigate();
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [filtertype, setfiltertype] = useState("all");
  const [contentarr, setContentarr] = useState<ContentType[]>([]);

  useEffect(() => {
    async function getdata() {
      const res = await axios.get(
        `${BACKEND_URL}/api/v1/vector-think/content/all`,
        {
          headers: {
            token: localStorage.getItem("token"),
          },
        }
      );
      console.log(res.data.content);
      setContentarr(res.data.content);
    }
    getdata();
  }, []);

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/");
    } else {
      setusername(localStorage.getItem("username") as string);
      setemail(localStorage.getItem("email") as string);
    }
  }, []);

  const values = {
    createopen,
    setcreateopen,
    username,
    email,
    contentarr,
    setContentarr,
    filtertype,
    setfiltertype,
    shareopen,
    setshareopen,
  };
  return (
    <MyContext.Provider value={values}>
      <main className="main flex">
        <div className="w-[20%] text-white">
          <Sidebar />
        </div>
        <Dashboard />
      </main>
    </MyContext.Provider>
  );
}

export default App;
