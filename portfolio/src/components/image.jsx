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
    <div>
      <img
        src={src}
        alt={alt}
        style={{
          [theme.breakpoints.down("sm")]: {
            width: 200,
            height: 300,
          },
          [theme.breakpoints.up("sm")]: {
            width: 90,
            fontSize: 10,
          },
          [theme.breakpoints.up("md")]: {
            width: 120,
            fontSize: 10,
          },
          [theme.breakpoints.up("lg")]: {
            width: 175,
            fontSize: 11,
          },
          [theme.breakpoints.up("xl")]: {
            width: 200,
            fontSize: 12,
          },
          [theme.breakpoints.up("xxl")]: {
            width: 270,
            fontSize: 12,
          },
          [theme.breakpoints.up("xxxl")]: {
            width: 320,
            fontSize: 13,
          },
        }}
      />
    </div>
  );
};

export default Image;
