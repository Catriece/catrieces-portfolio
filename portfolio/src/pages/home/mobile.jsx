import React from "react";
import Languages from "../../components/languages";
import { Grid } from "@mui/material";
import FixedBottomNavigation from "../../components/bottomnav";
import img from "../../assets/images/mobile/mobilehomeimg.png";
import { Paper } from "@mui/material";

export default function MobileView() {
  return (
    <Grid
      container
      sx={{
        display: "flex",
        justifyContent: "center",
        minHeight: "100vh",
        overflow: "scroll",
      }}
    >
      <Paper
        xs={12}
        sx={{
          margin: "auto",
          display: { xs: "flex", md: "none" },
          justifyContent: "center",
          position: "fixed",
          maxWidth: "95%",
          borderRadius: 5,
          overflow: "hidden",
        }}
      >
        <img
          src={img}
          alt="memoji"
          style={{ width: "135%", marginTop: "20px" }}
        />
      </Paper>

      <Grid
        container
        sx={{
          marginTop: "150px",
          marginBottom: "auto",
          display: { md: "none", xs: "flex" },
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Paper
          xs={12}
          sx={{
            margin: "auto",
            display: { xs: "flex", md: "none" },
            flexDirection: "column",
            justifyContent: "flex-start",
            width: "95%",
            borderRadius: 5,
            height: "65vh",
          }}
        >
          <p
            style={{
              textAlign: "center",
              marginTop: 0,
              marginRight: "auto",
              marginBottom: 0,
              marginLeft: "auto",
              fontFamily: "Bebas Reue",
              fontSize: "35px",
              fontWeight: "900",
              lineHeight: "2.5rem",
            }}
          >
            Front-end <br /> Software Developer
          </p>
          <p
            style={{
              marginTop: -5,
              fontFamily: "Source Code",
              fontSize: "23px",
              textAlign: "center",
            }}
          >
            <i>coding your ideas into reality</i>
          </p>
          <h2
            style={{
              textAlign: "center",
              fontFamily: "Bebas Nenu",
              fontSize: "25px",
            }}
          >
            SKILLS
          </h2>
          <Languages />
        </Paper>
      </Grid>
      <FixedBottomNavigation />
    </Grid>
  );
}
