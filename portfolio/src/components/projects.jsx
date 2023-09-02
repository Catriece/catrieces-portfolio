import React from "react";
import { Card } from "@mui/material";
import { Box } from "@mui/system";
import { useTheme, createTheme } from "@mui/material/styles";

const ProjectCards = () => {
  const card = createTheme({
    breakpoints: {
      screen: {
        xs: 0, // small screens
        sm: 600, // large screens
        md: 960, // extra large screens
        lg: 1280, // extra extra large screens
        xl: 1580, // really large screens
        xxl: 1900, // gigantic screens
      },
    },
  });

  const theme = useTheme(card);

  return (
    <Card
      sx={{
        borderRadius: "15px",
        [theme.breakpoints.down("sm")]: {
          height: "300px",
          width: "240px",
          border: ".5px solid black",
        },
        [theme.breakpoints.up("sm")]: {
          height: "300px",
          width: "250px",
          border: ".5px solid black",
        },
        [theme.breakpoints.up("lg")]: {
          height: "400px",
          width: "350px",
          border: ".5px solid black",
        },
        [theme.breakpoints.up("xl")]: {
          height: "500px",
          width: "450px",
          border: ".5px solid black",
        },
        [theme.breakpoints.up("xxl")]: {
          height: "600px",
          width: "500px",
          border: ".5px solid black",
        },
      }}
    >
      <Box>Hello</Box>
    </Card>
  );
};

export default ProjectCards;
