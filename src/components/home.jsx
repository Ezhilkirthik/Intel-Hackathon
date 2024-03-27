import alien from "../assets/images/space-invaders.svg";
import "./style/alien.css";
import hazard from "../assets/images/hazard.svg";
import { Button } from "@mui/material";
function Home() {
  return (
    <main className="h-max ">
      <img src={hazard} className="hazard_svg" alt="" />
      <h1 className="main-heading">Malware Detection</h1>

      <Button
        href="/dashboard"
        sx={{
          background: "rgba(50, 41, 41, 0.2)",
          borderRadius: "0.3rem",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(8.2px)",
          border: "1px solid rgba(50, 41, 41, 0.3)",
          color: "ivory",
          marginTop: "5rem",
          paddingX: "3rem",
          // transition: "1s all ease",
          "&:hover": {
            outline: " 1px solid ivory",
          },
        }}
      >
        Check out
      </Button>
    </main>
  );
}

export default Home;
