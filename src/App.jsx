import { useState } from "react";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Login from "./components/login";
import Landing from "./components/landing";
import Navbar from "./components/navbar";
import About from "./components/about";
import createStore from "react-auth-kit/createStore";
import AuthProvider from "react-auth-kit";
import Home from "./components/home";
import Signup from "./components/signup";

const store = createStore({
  authName: "_auth",
  authType: "localstorage",
  cookieDomain: window.location.hostname,
  cookieSecure: window.location.protocol === "https:",
});

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <AuthProvider store={store}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Landing />} />
            <Route path="/about" element={<About />} />
            <Route path="/home" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
