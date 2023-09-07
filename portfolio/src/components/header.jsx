import React from "react";
import MyButton from "./button";
import { useNavigate } from "react-router-dom";
import { Grid } from "@mui/material";

export default function Header({ position }) {
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

  const handleProjectsButton = () => {
    navigate("/projects");
  };

  return (
    <>
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: { position },
        }}
      >
        <MyButton
          name={"Home"}
          fontSize={"30px"}
          fontFamily={"Bebas Neue"}
          onClick={handleHomeButton}
        />
        <MyButton
          name={"About Me"}
          fontSize={"30px"}
          fontFamily={"Bebas Neue"}
          onClick={handleAboutMeButton}
        />
        <MyButton
          name={"Projects"}
          fontSize={"30px"}
          fontFamily={"Bebas Neue"}
          onClick={handleProjectsButton}
        />
        <MyButton
          name={"Contact"}
          fontSize={"30px"}
          fontFamily={"Bebas Neue"}
          onClick={handleContactButton}
        />
      </Grid>
    </>
  );
}
