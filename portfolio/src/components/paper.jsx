import React from "react";
import { Paper } from "@mui/material";

const MyPaper = ({ content, img, maxheight }) => {
  return (
    <Paper
      elevation={10}
      sx={{
        backgroundImage: img,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        margin: "auto",
        minHeight: "350px",
        maxHeight: maxheight,
        padding: 5,
        borderRadius: 4,
        boxShadow: "0px 4px 100px #ffde59",
        "@media (max-width: 600px)": {
          minWidth: "320px",
          maxWidth: "500px",
        },
        "@media (min-width: 600px)": {
          minWidth: "500px",
          maxWidth: "750px",
        },
        "@media (min-width: 960px)": {
          minWidth: "800px",
          maxWidth: "1000px",
        },
        "@media (min-width: 1280px)": {
          width: "1000px",
        },
        "@media (min-width: 1580px)": {
          minWidth: "1300px",
        },
      }}
    >
      {content}
    </Paper>
  );
};

export default MyPaper;
