import React from "react";
import { Card, CardContent, CardMedia, Typography, Grid } from "@mui/material";

const LongCard = ({ date, name, img, description }) => {
  return (
    <Grid item>
      <Card
        elevation={8}
        sx={{ textDecoration: "none", width: "300px", margin: "20px" }}
      >
        <CardMedia component="img" height="200" image={img} alt={name} />
        <CardContent sx={{ textAlign: "center" }}>
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

export default LongCard;
