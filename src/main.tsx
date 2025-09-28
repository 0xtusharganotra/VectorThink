import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import { SignIn } from "./pages/SignIn.tsx";
import { SignUp } from "./pages/Signup.tsx";
import Page404 from "./pages/page404.tsx";
import ShareableContentPage from "./pages/ShareableContentPage.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/app" element={<App />} />
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<Page404 />} />
        <Route path="/share" element={<ShareableContentPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
