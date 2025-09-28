import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../App";
import { useNavigate } from "react-router-dom";

export function SignIn() {
  const [password, setPassword] = useState("");
  const [email, setemail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.clear();
  }, []);

  async function usersignin() {
    if (email === "" || password === "") {
      alert("Email Id and password cant be blank");
    }

    try {
      const res = await axios.post(
        `${BACKEND_URL}/api/v1/vector-think/signin`,
        {
          email,
          password,
        }
      );

      const authtoken = res.data.token;
      const username = res.data.username;

      if (!authtoken) {
        alert(res.data.message);
      } else {
        localStorage.setItem("token", authtoken);
        localStorage.setItem("username", username);
        localStorage.setItem("email", email);
        alert(res.data.message);
        navigate("/app");
      }
    } catch (error: any) {
      console.error(error);
      alert(
        error.response?.data?.message ||
          error.message ||
          "An error occurred. Please try again."
      );
    }
  }

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-gray-900 flex justify-center">
      <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
          <div className="mt-12 flex flex-col items-center">
            <h1 className="text-2xl xl:text-3xl font-extrabold">Sign In</h1>
            <div className="w-full flex-1 mt-8">
              <div className="flex flex-col items-center"></div>

              <div className="mx-auto max-w-xs">
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                />
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  onClick={usersignin}
                  className="mt-5 tracking-wide font-semibold bg-gray-900 text-gray-100 w-full py-4 rounded-lg cursor-pointer hover:bg-gray-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                >
                  <span className="ml-3">Sign In</span>
                </button>
                <p className="mt-6 text-xs text-gray-600 text-center">
                  New User - <Link to="/signup">SignUp ↗</Link>
                </p>
                <p className="mt-6 text-xs text-gray-600 text-center">
                  If you dont want to create new account use
                  <a
                    href="https://github.com/0xtusharganotra/VectorThink"
                    className="border-b border-gray-500 border-dotted pl-1"
                  >
                    test email id and password
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-[#100c0c] text-center hidden lg:flex lg:justify-center items-center">
          <div className="">
            <img src="/assets/vectorthinklogo.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
