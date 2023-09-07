import React from "react";
import Header from "../../components/header";
import img from "../../assets/images/background.png";
import Languages from "../../components/languages";
import { Grid } from "@mui/material";
import MobileView from "./mobile";

export default function DesktopView() {
  return (
    <Grid
      container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Grid item md={12}>
        <Header />
      </Grid>

      <Grid
        container
        sx={{
          marginTop: "auto",
          paddingTop: "20px",
          display: { md: "flex", xs: "none" },
        }}
      >
        <Grid item md={7} sx={{ paddingLeft: "40px", margin: "auto" }}>
          <p
            style={{
              textAlign: "right",
              marginTop: 0,
              marginRight: "30px",
              marginBottom: 0,
              marginLeft: "30px",
              fontFamily: "Bebas Reue",
              fontSize: "50px",
              fontWeight: "900",
              lineHeight: "2.5rem",
            }}
          >
            Front-end <br /> Software Developer
          </p>
          <p
            style={{
              marginTop: 5,
              fontFamily: "Source Code",
              fontSize: "25px",
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
        </Grid>
        <Grid item md={5} sx={{ margin: "auto" }}>
          <img
            src={img}
            alt="memoji"
            style={{ width: "80%", padding: "10px" }}
          />
        </Grid>
      </Grid>
      <Grid
        container
        sx={{
          marginTop: "auto",
          paddingTop: "20px",
          display: { md: "none", xs: "flex" },
        }}
      >
        <MobileView />
      </Grid>
      <Grid item xs={12}>
        <p style={{ textAlign: "center", marginBottom: "10px" }}>catriece 🤪</p>
      </Grid>
    </Grid>
  );
}
