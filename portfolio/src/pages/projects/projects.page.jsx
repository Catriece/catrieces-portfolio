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
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{ minHeight: "100vh" }}
    >
      <MyPaper
        img={`url(${bg})`}
        maxheight={"350px"}
        content={
          <>
            <Header
              title={"Projects"}
              style={{
                fontSize: "40px",
                fontWeight: "800",
                justifyContent: "center",
                display: "flex",
              }}
              buttons={{
                display: "flex",
                justifyContent: "center",
              }}
            />

            <div style={{ height: "275px", overflow: "scroll" }}>
              <ProjectList />
            </div>
          </>
        }
      />
    </Grid>
  );
};

export default Projects;
