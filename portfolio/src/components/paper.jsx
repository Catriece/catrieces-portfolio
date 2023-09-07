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
        width: "75%",
        maxHeight: maxheight,
        padding: 5,
        borderRadius: 2,
        boxShadow: "0px 4px 20px #ffde59",
      }}
    >
      {content}
    </Paper>
  );
};

export default MyPaper;
