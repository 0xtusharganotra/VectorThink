import { Button } from "@/components/ui/button";
import { Share2 } from "lucide-react";

function App() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <Button className="bg-blue-600 ">
        <Share2 color="white" /> Click me
      </Button>
      <Button variant="loginButton">
        <Share2 color="white" /> Click me
      </Button>
    </div>
  );
}

export default App;
