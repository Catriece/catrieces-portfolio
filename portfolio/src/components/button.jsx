import React from "react";
import Button from "@mui/material/Button";
import { useTheme, createTheme } from "@mui/material/styles";

const MyButton = ({ name, onClick }) => {
  const screens = createTheme({
    breakpoints: {
      values: {
        xs: 0, // small screens
        sm: 500, // medium screens
        md: 600, // large screens
        lg: 960, // extra large screens
        xl: 1280, // extra extra large screens
        xxl: 1580, // really large screens
        xxxl: 1900, // gigantic screens
      },
    },
  });

  const theme = useTheme(screens);
  return (
    <Button
      variant="outlined"
      onClick={onClick}
      sx={{
        paddingTop: 1,
        paddingBottom: 1,
        borderRadius: 15,
        color: "#000000",
        margin: 1,
        borderColor: "#000000",
        "&:hover": {
          backgroundColor: "ffde59",
          borderColor: "#000000",
        },

        [theme.breakpoints.down("sm")]: {
          width: 85,
          fontSize: 9,
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
          width: 155,
          fontSize: 11,
        },
        [theme.breakpoints.up("xl")]: {
          width: 180,
          fontSize: 12,
        },
        [theme.breakpoints.up("xxl")]: {
          width: 250,
          fontSize: 12,
        },
        [theme.breakpoints.up("xxxl")]: {
          width: 300,
          fontSize: 13,
        },
      }}
    >
      {name}
    </Button>
  );
};

export default MyButton;
