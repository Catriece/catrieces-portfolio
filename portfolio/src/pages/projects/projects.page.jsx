import React from "react";
import { Grid } from "@mui/material";
import ProjectList from "../../assets/projects/project.list";

const Projects = () => {
  return (
    <Grid
      container
      spacing={2}
      id="projects"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Grid item xs={12}>
        <h1
          style={{
            fontFamily: "Bebas Nenu",
            textAlign: "center",
            fontSize: "50px",
          }}
        >
          Projects
        </h1>
        <ProjectList />
      </Grid>
    </Grid>
  );
};

export default Projects;
