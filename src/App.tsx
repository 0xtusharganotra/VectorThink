import { useNavigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/dashboard";
import React, { createContext, useState, useEffect, use } from "react";
import { BACKEND_URL } from "./config";
import axios from "axios";

interface MyContextType {
  createopen: boolean;
  setcreateopen: React.Dispatch<React.SetStateAction<boolean>>;
  username: string;
  email: string;
  contentarr: ContentType[];
  setContentarr: React.Dispatch<React.SetStateAction<ContentType[]>>;
  filtertype: string;
  setfiltertype: React.Dispatch<React.SetStateAction<string>>;
  shareopen: boolean;
  setshareopen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface ContentType {
  _id: string;
  title: string;
  type: string;
  description: string;
  link: string;
  visibility: string;
  createdAt: Date;
}

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
