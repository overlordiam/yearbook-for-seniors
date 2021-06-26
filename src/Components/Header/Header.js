import React from "react";
import "./Header.css";
import { useHistory } from "react-router-dom";
function Header() {
  const history = useHistory();
  const home = () => {
    history.push("/");
  };
  return (
    <div>
      <div className="heading">
        <div onClick={home}>
          <h1>
            <span className="pointer yearbook">YEARBOOK</span>{" "}
            <span className="pointer class_of_2021">Class of 2021</span>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Header;
