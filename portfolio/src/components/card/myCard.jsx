import React from "react";
import { Card, CardContent, CardMedia, Typography, Grid } from "@mui/material";

const MyCard = ({ date, name, img, description }) => {
  return (
    <Grid item sx={{ display: "flex" }}>
      <Card
        elevation={2}
        sx={{
          display: "flex",
          width: "28.1vw",
          height: "250px",
          marginRight: "10px",
          marginBottom: "20px",
          marginLeft: "10px",
        }}
      >
        <div
          style={{ display: "flex", flexDirection: "column", padding: "20px" }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              maxHeight: "75px",
            }}
          >
            <CardMedia
              component="img"
              image={img}
              alt={name}
              sx={{
                maxWidth: "20%",
                padding: 1,
                borderRadius: 4,
                marginRight: "0px",
                maxHeight: "100%",
              }}
            />
            <CardContent
              sx={{
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                alignItems: "center",
                width: "80%",
                margin: 0,
              }}
            >
              <Typography
                variant="h7"
                component="div"
                sx={{ textDecoration: "underline" }}
              >
                {name}
              </Typography>
              <Typography variant="h9">{date}</Typography>
            </CardContent>
          </div>
          <div style={{ paddingTop: "15px" }}>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ textAlign: "justify" }}
            >
              {description}
            </Typography>
          </div>
        </div>
      </Card>
    </Grid>
  );
};

export default MyCard;
