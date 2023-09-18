import React from "react";
import { Card, CardContent, CardMedia, Typography, Grid } from "@mui/material";

const MyCard = ({ date, name, img, description }) => {
  return (
    <Grid item sx={{ display: "flex" }}>
      <Card
        elevation={2}
        sx={{
          display: "flex",
          width: "90vw",
          height: "175px",
          marginRight: "10px",
          marginBottom: "20px",
          marginLeft: "10px",
        }}
      >
        <CardMedia
          component="img"
          image={img}
          alt={name}
          sx={{ maxWidth: "20%", padding: 1, borderRadius: 4 }}
        />
        <CardContent
          sx={{
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h6"
            component="div"
            sx={{ textDecoration: "none" }}
          >
            {name}
          </Typography>
          <Typography variant="h9">{date}</Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default MyCard;
