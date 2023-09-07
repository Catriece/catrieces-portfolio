import React from "react";
import MyPaper from "../../components/paper";
import { Grid } from "@mui/material";
import ProjectList from "../../assets/projects/project.list";
import bg from "../../assets/images/shapesbg.png";
import Header from "../../components/header";

const Projects = () => {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <Grid item xs={12}>
        <Header />
        <h1
          style={{
            fontFamily: "Bebas Nenu",
            textAlign: "center",
            fontSize: "50px",
          }}
        >
          Project Page
        </h1>
        <ProjectList />
      </Grid>
      <Grid item xs={12}>
        <p style={{ textAlign: "center", marginBottom: "10px" }}>catriece 🤪</p>
      </Grid>
    </Grid>
  );
};

export default Projects;
