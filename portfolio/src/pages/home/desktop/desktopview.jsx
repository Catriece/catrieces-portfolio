import React, { useRef } from "react";
import Header from "../../../components/header";
import { Grid } from "@mui/material";
import Heading from "../../../components/heading";
import { handleScroll } from "./scroll.functions";
import { containerStyling } from "./styling";
import LandingPage from "../../landing/landingpage.desktop";
import AboutMe from "../../about/about.page";
import ContactMe from "../../contact/contact";
import ProjectList from "../../../assets/projects/project.list";

export default function DesktopView() {
  const home = useRef(null);
  const aboutMe = useRef(null);
  const projects = useRef(null);
  const contactMe = useRef(null);

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
        <Header
          functionHome={() => handleScroll({ elementRef: home })}
          functionAbout={() => handleScroll({ elementRef: aboutMe })}
          functionProject={() => handleScroll({ elementRef: projects })}
          functionContact={() => handleScroll({ elementRef: contactMe })}
        />
      </Grid>
      <Grid container ref={home} sx={containerStyling}>
        <LandingPage />
      </Grid>
      <Grid container ref={aboutMe} sx={containerStyling}>
        <Heading name={"About Me"} />
        <AboutMe id={"aboutme"} />
      </Grid>
      <Heading name={"Projects"} />
      <Grid container ref={projects} sx={containerStyling}>
        <ProjectList id={"projects"} />
      </Grid>
      <Heading name={"Contact Me"} />
      <Grid container ref={contactMe} sx={containerStyling}>
        <ContactMe id={"contactme"} />
      </Grid>

      <Grid item xs={12}>
        <p style={{ textAlign: "center", marginBottom: "10px" }}>catriece 🤪</p>
      </Grid>
    </Grid>
  );
}
