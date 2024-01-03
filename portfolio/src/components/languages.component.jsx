import React from "react";
import { Grid } from "@mui/material";

const LanguagesComponent = ({ height, width }) => {
  const skills = [
    {
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg",
      alt: "Github",
    },
    {
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      alt: "JavaScript",
    },
    {
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg",
      alt: "MySQL",
    },
    {
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg",
      alt: "NodeJS",
    },
    {
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg",
      alt: "React",
    },
    {
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      alt: "Express",
    },
  ];

  return (
    <Grid
      container
      // sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      {skills.map((skill) => {
        return (
          <>
            <img
              src={skill.img}
              alt={skill.alt}
              style={{
                height: height,
                width: width,
                margin: "5px",
                border: "1px solid #d9d9d9",
                padding: "5px",
                borderRadius: "8px",
              }}
            />
          </>
        );
      })}
    </Grid>
  );
};

export default LanguagesComponent;
