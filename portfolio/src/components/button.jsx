import React from "react";
import Button from "@mui/material/Button";

const MyButton = ({ name, onClick, fontSize, fontFamily }) => {
  return (
    <Button
      onClick={onClick}
      sx={{
        marginTop: 2,

        fontSize: fontSize,
        fontFamily: fontFamily,
        color: "#000000",
        borderColor: "#anf34w",
        "&:hover": {
          backgroundColor: "ff914d",
          borderColor: "#000000",
        },
      }}
    >
      {name}
    </Button>
  );
};

export default MyButton;
