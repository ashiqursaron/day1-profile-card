import profilePic1 from "./assets/pp-1.jpg";
import profilePic2 from "./assets/pp-2.jpg";
import profilePic3 from "./assets/pp-3.jpg";
import Card from "./Card.jsx";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <div
      style={{
        display: "flex",
        gap: "1.5rem",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      <Card
        name="Foysal Niloy"
        image={profilePic1}
        description="Creative front-end engineer."
        followerCount={312}
        taskCount={12}
      />

      <Card
        name="Saron"
        image={profilePic2}
        description="UX designer with a passion for clean interfaces."
        followerCount={480}
        taskCount={24}
      />

      <Card
        name="Chayti Mondal"
        image={profilePic3}
        description="Full-stack developer and coffee enthusiast."
        followerCount={589}
        taskCount={18}
      />

    </div>  
    
    </>
    
  );
}

export default App;
