import React from "react";
import MyButton from "./button";
import { useNavigate } from "react-router-dom";

function Header({ title, style, buttons }) {
  const navigate = useNavigate();

  const handleAboutMeButton = () => {
    navigate("/aboutme");
  };

  const handleHomeButton = () => {
    navigate("/");
  };

  const handleContactButton = () => {
    navigate("/contactme");
  };

  return (
    <>
      <span style={style}>{title}</span>
      <div style={buttons}>
        <span>
          <MyButton name={"Home"} onClick={handleHomeButton} />
          <MyButton name={"About Me"} onClick={handleAboutMeButton} />
          <MyButton name={"Contact"} onClick={handleContactButton} />
        </span>
      </div>
    </>
  );
}

export default Header;
