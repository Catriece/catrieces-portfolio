import React from "react";
import { Card } from "@mui/material";
import "./long.card.css";

const LongCard = ({ date, name, img, description }) => {
  return (
    <div style={{ margin: "auto" }}>
      <Card
        className="card"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "15px",
          border: ".5px black solid",
          width: "90%",
          marginTop: "20px",
          marginRight: "auto",
          marginLeft: "auto",
        }}
      >
        <div className="img">
          <img src={img} alt={name} style={{ height: "100%", width: "100%" }} />
        </div>
        <div className="textBox">
          <div className="textContent">
            <p
              className="h1"
              style={{ marginBottom: "3px", marginLeft: "10px" }}
            >
              {name}
            </p>
            <span className="span">{date}</span>
          </div>
          <p className="p" style={{ paddingBottom: "10px" }}>
            {description}
          </p>
        </div>
      </Card>
    </div>
  );
};

export default LongCard;
