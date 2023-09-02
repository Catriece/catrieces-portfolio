// IF IMAGES HOLD UP AFTER REDEPLOYMENT DELETE CODE IN DIV
import React from "react";
import { useTheme, createTheme } from "@mui/material/styles";

const Image = ({ src, alt }) => {
  const screens = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1580,
        xxl: 1900,
      },
    },
  });

  const theme = useTheme(screens);
  return (
    <div
    //   style={{
    //     [theme.breakpoints.down("sm")]: {
    //       maxWidth: "300px",
    //     },
    //     [theme.breakpoints.up("sm")]: {
    //       maxWidth: "300px",
    //       maxHeight: "auto",
    //     },
    //     [theme.breakpoints.up("md")]: {
    //       maxWidth: "300px",
    //       maxHeight: "auto",
    //     },
    //     [theme.breakpoints.up("lg")]: {
    //       maxWidth: "300px",
    //       maxHeight: "auto",
    //     },
    //     [theme.breakpoints.up("xl")]: {
    //       maxWidth: "300px",
    //       maxHeight: "auto",
    //     },
    //     [theme.breakpoints.up("xxl")]: {
    //       maxWidth: "300px",
    //       maxHeight: "auto",
    //     },
    //   }}
    >
      <img
        src={src}
        alt={alt}
        style={{
          width: "80%",
          height: "80%",
          objectFit: "cover",
        }}
      />
    </div>
  );
};

export default Image;
