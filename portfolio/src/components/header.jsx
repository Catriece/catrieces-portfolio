import React from "react";
import MyButton from "./button";
import { Grid } from "@mui/material";

export default function Header({
  functionHome,
  functionAbout,
  functionProject,
  functionContact,
}) {
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
          onClick={functionHome}
        />
        <MyButton
          name={"About Me"}
          fontSize={"30px"}
          fontFamily={"Bebas Neue"}
          onClick={functionAbout}
        />
        <MyButton
          name={"Projects"}
          fontSize={"30px"}
          fontFamily={"Bebas Neue"}
          onClick={functionProject}
        />
        <MyButton
          name={"Contact"}
          fontSize={"30px"}
          fontFamily={"Bebas Neue"}
          onClick={functionContact}
        />
      </Grid>
    </>
  );
}
