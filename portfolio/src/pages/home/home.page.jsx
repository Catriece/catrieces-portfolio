import React from "react";
import Button from "@mui/material/Button";
import Header from "../../components/header";
import Languages from "../../components/languages";
import { useNavigate } from "react-router-dom";
import { Grid, Paper } from "@mui/material";

const HomePage = () => {
  const navigate = useNavigate();

  const handleProjectsButton = () => {
    navigate("/projects");
  };

  const handleAboutMeButton = () => {
    navigate("/aboutme");
  };

  return (
    <Grid container spacing={2} justifyContent="center" alignItems="center">
      <Grid item xs={12} className="heading">
        {<Header />}
      </Grid>
      <Grid container spacing={2} className="body" sx={{ margin: "10px" }}>
        <Grid
          item
          xs={12}
          textAlign="center"
          sx={{ fontSize: "65px", marginBottom: "0", fontWeight: "700" }}
        >
          Front-end Software
        </Grid>
        <Grid
          item
          xs={12}
          textAlign="center"
          justifyContent="center"
          alignItems="center"
          sx={{
            fontSize: "65px",
            marginTop: "0",
            fontWeight: "700",
            padding: "0",
          }}
        >
          Developer
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            fontSize: "30px",
            textAlign: "right",
            marginTop: "0px",
            marginRight: "45",
            paddingTop: 0,
          }}
        >
          Coding your ideas into reality!
        </Grid>
      </Grid>
      <Grid
        container
        xs={12}
        direction="column"
        justifyContent="center"
        alignItems="center"
        className="btns"
        marginTop="20px"
      >
        <Button
          variant="outlined"
          sx={{
            margin: 2,
            paddingTop: 1,
            paddingBottom: 1,
            width: 250,
            borderRadius: 15,
          }}
          onClick={handleProjectsButton}
        >
          {" "}
          Projects
        </Button>
        <Button
          variant="outlined"
          sx={{
            margin: 2,
            paddingTop: 1,
            paddingBottom: 1,
            width: 250,
            borderRadius: 15,
          }}
          onClick={handleAboutMeButton}
        >
          {" "}
          About Me
        </Button>

        <Button
          variant="outlined"
          sx={{
            margin: 2,
            paddingTop: 1,
            paddingBottom: 1,
            width: 250,
            borderRadius: 15,
          }}
        >
          {" "}
          Contact
        </Button>
      </Grid>
      <Grid container xs={12} alignItems="center" justifyContent="center">
        <Languages />
      </Grid>

      <Grid
        container
        xs={12}
        alignItems="center"
        justifyContent="center"
        className="footer"
        sx={{ marginTop: "20px" }}
      >
        Contact
      </Grid>
    </Grid>
  );
};

export default HomePage;
