import React from "react";
import "./homePage.css";
import { useHistory } from "react-router-dom";
import MediaQuery from "react-responsive";

function HomePage() {
  const history = useHistory();
  const routeA = () => {
    history.push("Class-A");
  };
  const routeB = () => {
    history.push("/Class-B");
  };

  return (
    <div className="body1">
      <button class="cybr-btn cybr-but-1" onClick={routeA}>
        Class A
        <span aria-hidden class="cybr-btn__glitch">
          Class A
        </span>
        <span aria-hidden class="cybr-btn__tag">
          A
        </span>
      </button>

      <button class="cybr-btn cybr-but-2" onClick={routeB}>
        Class B
        <span aria-hidden class="cybr-btn__glitch">
          Class B
        </span>
        <span aria-hidden class="cybr-btn__tag">
          B
        </span>
      </button>
    </div>
    
  );
}

export default HomePage;
