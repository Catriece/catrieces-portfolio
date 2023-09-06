import React from "react";
import { Card } from "@mui/material";
import { Link } from "react-router-dom";
import { useTheme, createTheme } from "@mui/material/styles";

const ProjectCards = ({ bg, alt, link, title, style }) => {
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
    <Link to={link}>
      <Card
        sx={{
          // backgroundImage: { bg },
          borderRadius: "15px",
          border: "0.5px",
          maxHeight: "350px",
          margin: "auto",
          height: "100%",
          width: "100%",
          [theme.breakpoints.down("sm")]: {
            height: "300px",
            width: "240px",
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
        }}
      >
        <img src={bg} alt={alt} style={style} />
      </Card>
      <label>{title}</label>
    </Link>
  );
};

export default ProjectCards;
