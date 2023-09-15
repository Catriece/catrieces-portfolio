import React from "react";
import MyButton from "./button";
import { useNavigate } from "react-router-dom";
import { Grid } from "@mui/material";

export default function Header({ about, projects, home, contact }) {
  const navigate = useNavigate();

  const handleAboutMeButton = () => {
    navigate(`/#${about}`);
  };

  const handleHomeButton = () => {
    navigate(`/#${home}`);
  };

  const handleContactButton = () => {
    navigate(`/#${contact}`);
  };

  const handleProjectsButton = () => {
    navigate(`/#${projects}`);
  };

  return (
    <>
      <Grid
        container
        sx={{
          display: { xs: "none", md: "flex" },
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#ffffff",
          position: "fixed",
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
