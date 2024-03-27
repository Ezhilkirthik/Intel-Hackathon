import "../../src/App.css";
import { Link } from "@mui/material";
import alien from "../assets/images/space-invaders.svg";
import alien_1 from "../assets/images/space-invaders-1.svg";
export default function Sidebar() {
  return (
    <main className="sticky-bar">
      <a href="/" className="flex flex-row">
        <img
          src={alien_1}
          height="40px"
          width="40px"
          className=""
          alt="space-invaders"
        />
      </a>
      <div className="w-[60vw] nav_div"></div>
      <a href="/dashboard">Dashboard</a>
      <a href="/exe">.exe</a>
      <a href="/url">url</a>
    </main>
  );
}
