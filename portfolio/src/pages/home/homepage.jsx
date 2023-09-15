import React from "react";
import Header from "../../components/header";
import { Grid, Paper } from "@mui/material";
import MobileView from "./mobile";
import DesktopView from "./desktopview";
import AboutMe from "../about/about.page";
import ContactMe from "../contact/contact";
import ProjectList from "../../assets/projects/project.list";

export default function HomePage() {
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
        <DesktopView />
      </Grid>
      <Grid
        container
        sx={{
          marginTop: "auto",
          paddingTop: "20px",
          display: { md: "flex", xs: "none" },
        }}
      >
        <p
          style={{
            textAlign: "center",
            fontSize: "65px",
            fontFamily: "Source Code",
            fontWeight: 900,
            marginRight: "auto",
            marginLeft: "auto",
            marginBottom: 0,
          }}
        >
          About Me
        </p>
        <AboutMe id={"aboutme"} />
      </Grid>
      <p
        style={{
          textAlign: "center",
          fontSize: "65px",
          fontFamily: "Source Code",
          fontWeight: 900,
          marginRight: "auto",
          marginLeft: "auto",
          marginBottom: 0,
        }}
      >
        Projects
      </p>
      <Grid
        container
        sx={{
          marginTop: "auto",
          paddingTop: "20px",
          display: { md: "flex", xs: "none" },
        }}
      >
        <ProjectList id={"projects"} />
      </Grid>
      <p
        style={{
          textAlign: "center",
          fontSize: "65px",
          fontFamily: "Source Code",
          fontWeight: 900,
          marginRight: "auto",
          marginLeft: "auto",
          marginBottom: 0,
        }}
      >
        Contact Me
      </p>
      <Grid
        container
        sx={{
          display: { md: "flex", xs: "none", marginTop: "10px" },
        }}
      >
        <ContactMe id={"contactme"} />
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
