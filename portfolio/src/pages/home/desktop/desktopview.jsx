import React, { useRef } from "react";
import NavButtonGroup from "../../../components/navButtonGroup";
import { Grid } from "@mui/material";
import Heading from "../../../components/heading";
import { handleScroll } from "./scroll.functions";
import { containerStyling, formContainerStyling } from "./styling";
import LandingPage from "../../landing/landingpage";
import AboutMe from "../../about/about.page";
import ContactMe from "../../contact/contact";
import ProjectList from "../../../assets/projects/project.list";
import FixedBottomNavigation from "../../../components/bottomnav";
import useMediaQuery from "@mui/material/useMediaQuery";

const desktopContainer = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100svh",
};
const DesktopView = () => {
  const isMdScreen = useMediaQuery(`(min-width: 900px)`);

  const home = useRef(null);
  const aboutMe = useRef(null);
  const projects = useRef(null);
  const contactMe = useRef(null);

  return (
    <Grid container sx={desktopContainer}>
      <Grid item xs={12}>
        <FixedBottomNavigation />
      </Grid>
      <LandingPage />

      {/* Potentially move to Fixed Bottom Nav. Update color for contrast */}
      <NavButtonGroup
        functionHome={() => handleScroll({ elementRef: home })}
        functionAbout={() => handleScroll({ elementRef: aboutMe })}
        functionProject={() => handleScroll({ elementRef: projects })}
        functionContact={() => handleScroll({ elementRef: contactMe })}
        fontSize={"20px"}
        padding={"5px"}
      />
      {/* <AboutMe id={"aboutme"} /> */}
      {/* <Heading name={"Projects"} />

      <ProjectList id={"projects"} />
      <Heading name={"Contact Me"} />
      <ContactMe id={"contactme"} /> */}

      <Grid item xs={12}>
        <p style={{ textAlign: "center", marginBottom: "10px" }}>
          Catriece Gilbert ©
        </p>
      </Grid>
    </Grid>
    // <Grid
    //   container
    //   sx={{
    //     display: "flex",
    //     justifyContent: "flex-start",
    //     alignItems: "center",
    //     minHeight: "100vh",
    //   }}
    // >
    //   <Grid item md={12}>
    //     {isMdScreen ? (
    //       <Header
    //         functionHome={() => handleScroll({ elementRef: home })}
    //         functionAbout={() => handleScroll({ elementRef: aboutMe })}
    //         functionProject={() => handleScroll({ elementRef: projects })}
    //         functionContact={() => handleScroll({ elementRef: contactMe })}
    //       />
    //     ) : (
    //       <FixedBottomNavigation />
    //     )}
    //   </Grid>

    //   <Grid container ref={home} sx={containerStyling}>
    //     <LandingPage />
    //   </Grid>
    //   <Grid container ref={aboutMe} sx={containerStyling}>
    //     <AboutMe id={"aboutme"} />
    //   </Grid>
    //   <Grid container ref={projects} sx={containerStyling}>
    //     <Heading name={"Projects"} />

    //     <ProjectList id={"projects"} />
    //   </Grid>
    //   <Grid container ref={contactMe} sx={formContainerStyling}>
    //     <Heading name={"Contact Me"} />
    //     <ContactMe id={"contactme"} />
    //   </Grid>

    //   <Grid item xs={12}>
    //     <p style={{ textAlign: "center", marginBottom: "10px" }}>
    //       Catriece Gilbert ©
    //     </p>
    //   </Grid>
    // </Grid>
  );
};

export default DesktopView;
