import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/dashboard";
function App() {
  return (
    <main className="main flex">
      <div className="w-[20%] text-white">
        <Sidebar />
      </div>
      <Dashboard />
    </main>
  );
}

export default App;
