import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/dashboard";
import { useContext, createContext, useState } from "react";

interface MyContextType {
  createopen: boolean;
  setcreateopen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const MyContext = createContext<MyContextType>({
  createopen: false,
  setcreateopen: () => {},
});
function App() {
  const [createopen, setcreateopen] = useState(false);
  const values = {
    createopen,
    setcreateopen,
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
