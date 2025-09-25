import Card from "./components/Card";
import Header from "./components/header";

function App() {
  return (
    <main className="main flex">
      <div className="w-[20%] text-white">Sidebar</div>
      <div className="w-[80%]">
        <Header />
        <div className="flex flex-wrap justify-center w-[100%] h-[calc(100vh-60px)] pt-8 pb-4 overflow-y-scroll overflow-x-hidden ">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </main>
  );
}

export default App;
