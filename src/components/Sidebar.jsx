import "../../src/App.css";
import { Link } from "@mui/material";
export default function Sidebar() {
  return (
    <main className="sticky-bar">
      <a href="/home">Home</a>
      <div className="w-[60vw] nav_div  "></div>
      <a href="/dashboard">Dashboard</a>
      <a href="/exe">Check .exe</a>
      <a href="/url">Check an url</a>
    </main>
  );
}
