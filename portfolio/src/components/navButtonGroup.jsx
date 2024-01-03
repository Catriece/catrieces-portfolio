import React from "react";
import MyButton from "./button";
import { Grid } from "@mui/material";

const NavButtonGroup = ({
  fontSize,
  padding,
  functionHome,
  functionAbout,
  functionProject,
  functionContact,
}) => {
  return (
    <>
      <MyButton
        sx={{ padding: padding }}
        name={"Home"}
        fontSize={fontSize}
        fontFamily={"Bebas Neue"}
        onClick={functionHome}
      />
      <MyButton
        sx={{ padding: padding }}
        name={"About Me"}
        fontSize={fontSize}
        fontFamily={"Bebas Neue"}
        onClick={functionAbout}
      />
      <MyButton
        sx={{ padding: padding }}
        name={"Projects"}
        fontSize={fontSize}
        fontFamily={"Bebas Neue"}
        onClick={functionProject}
      />
      <MyButton
        sx={{ padding: padding }}
        name={"Contact"}
        fontSize={fontSize}
        fontFamily={"Bebas Neue"}
        onClick={functionContact}
      />
    </>
  );
};

export default NavButtonGroup;
