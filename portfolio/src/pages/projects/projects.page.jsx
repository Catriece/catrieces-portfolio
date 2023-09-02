import React from "react";
import { Grid, Paper, Card } from "@mui/material";
import ProjectCards from "../../components/projects";

const Projects = () => {
  return (
    <Grid
      container
      spacing={2}
      justifyContent="center"
      alignItems="center"
      style={{ minHeight: "100vh" }}
    >
      <Paper
        className="box"
        elevation={10}
        style={{
          margin: 5,
          overflowX: "scroll",
          paddingTop: 5,
          paddingRight: 4,
          paddingBottom: 5,
          paddingLeft: 4,
          borderRadius: 4,
          boxShadow: "0px 4px 100px #ffde59",
          "@media (max-width: 600px)": {
            minWidth: "320px",
            maxWidth: "500px",
          },
          "@media (min-width: 600px)": {
            minWidth: "500px",
            maxWidth: "750px",
          },
          "@media (min-width: 960px)": {
            minWidth: "800px",
            maxWidth: "100px",
          },
          "@media (min-width: 1280px)": {
            width: "1000px",
          },
          "@media (min-width: 1580px)": {
            minWidth: "1300px",
          },
        }}
      >
        <ProjectCards />
      </Paper>
    </Grid>
  );
};

export default Projects;
