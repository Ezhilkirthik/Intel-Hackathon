import { useState } from "react";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/login";
import Landing from "./components/landing";
import About from "./components/about";
import createStore from "react-auth-kit/createStore";
import AuthProvider from "react-auth-kit";
import Home from "./components/home";
import Signup from "./components/signup";
import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";
import FileUpload from "./components/fileUpload";
import AddURL from "./components/addURL";
import Dash_main from "./components/Dash_main";

const store = createStore({
  authName: "_auth",
  authType: "localstorage",
  cookieDomain: window.location.hostname,
  cookieSecure: window.location.protocol === "https:",
});

function App() {
  const [count, setCount] = useState(0);

  return (
    <AuthProvider store={store}>
      <BrowserRouter>
        <Sidebar />
        <main className="w-50vw justify-center">
          <Routes>
            <Route path="/d2" element={<Dash_main />} />
            <Route path="/exe" element={<FileUpload />} />
            <Route path="/url" element={<AddURL />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Landing />} />
            <Route path="/about" element={<About />} />
            <Route path="/home" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </main>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
