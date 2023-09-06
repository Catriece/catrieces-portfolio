import React from "react";
import Languages from "../../components/languages";
import { useNavigate } from "react-router-dom";
import { Grid, Paper } from "@mui/material";
import MyButton from "../../components/button";
import img from "../../assets/images/background.png";

const HomePage = () => {
  const navigate = useNavigate();

  const handleProjectsButton = () => {
    navigate("/projects");
  };

  const handleAboutMeButton = () => {
    navigate("/aboutme");
  };

  return (
    <Grid
      container
      spacing={2}
      justifyContent="center"
      alignItems="center"
      style={{ minHeight: "100vh" }}
    >
      <Paper
        id="box"
        elevation={10}
        sx={{
          margin: 5,
          paddingTop: 5,
          paddingRight: 4,
          paddingBottom: 5,
          paddingLeft: 4,
          borderRadius: 4,
          boxShadow: "0px 4px 100px #ffde59",
        }}
      >
        <Grid
          container
          spacing={2}
          justifyContent="flex-start"
          alignItems="center"
          className="body"
        >
          <Grid item xs={12} md={7}>
            <Grid
              id="title"
              item
              sx={{
                marginBottom: "0",
                fontSize: "60px",
                fontWeight: "700",
                paddingTop: "0",
              }}
            >
              <h1
                style={{
                  marginRight: "10px",
                  marginBottom: "0px",
                  marginTop: "auto",
                }}
              >
                Front-end <br />
                Software Developer
              </h1>
            </Grid>
            <Grid id="slogan" item>
              <p style={{ marginBottom: "20px" }}>
                <i>Coding your ideas into reality!</i>
              </p>

              <Grid
                container
                justifyContent="center"
                alignItems="center"
                style={{
                  margin: "auto",
                }}
              >
                <MyButton onClick={handleProjectsButton} name={"Projects"} />
                <MyButton onClick={handleAboutMeButton} name={"About Me"} />
                <MyButton name={"Contact"} />
              </Grid>
              <Grid
                container
                justifyContent="center"
                xs={{
                  margin: "auto",
                  alignItems: "center",
                }}
              >
                <Languages />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} md={5} textAlign="center">
            <img
              src={img}
              alt="catriece memoji"
              style={{
                height: "400px",
                width: "325px",
                marginLeft: "0px",
              }}
            />
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default HomePage;
