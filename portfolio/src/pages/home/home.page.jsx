import React from "react";
import Button from "@mui/material/Button";
import Header from "../../components/header";
import Languages from "../../components/languages";
import { useNavigate } from "react-router-dom";
import { Grid, Paper } from "@mui/material";
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
        elevation={10}
        sx={{
          margin: 5,
          paddingTop: 5,
          paddingRight: 4,
          paddingBottom: 5,
          paddingLeft: 4,
          borderRadius: 4,
          maxWidth: 970,
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
          <Grid item xs={12} sm={7}>
            <Grid
              item
              textAlign="right"
              sx={{
                marginBottom: "0",
                fontWeight: "700",
              }}
            >
              <p
                style={{
                  marginRight: "10px",
                  marginBottom: "0px",
                  marginTop: "0px",
                  fontSize: "60px",
                  paddingTop: "0",
                }}
              >
                Front-end Software Developer
              </p>
            </Grid>
            <Grid>
              <p
                style={{
                  margin: "auto",
                  marginTop: "0px",
                  marginRight: "55px",
                  marginBottom: "30px",
                  textAlign: "right",
                  fontSize: "27px",
                }}
              >
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
                <Button
                  variant="outlined"
                  sx={{
                    paddingTop: 1,
                    paddingBottom: 1,
                    width: 100,
                    borderRadius: 15,
                    fontSize: 10,
                    margin: 1,
                    borderColor: "#000000",
                    color: "#000000",
                    "&:hover": {
                      backgroundColor: "#ffde59",
                    },
                  }}
                  onClick={handleProjectsButton}
                >
                  {" "}
                  Projects
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    paddingTop: 1,
                    paddingBottom: 1,
                    width: 100,
                    borderRadius: 15,
                    fontSize: 10,
                    margin: 1,
                    borderColor: "#000000",
                    color: "#000000",
                    "&:hover": {
                      backgroundColor: "#ffde59",
                    },
                  }}
                  onClick={handleAboutMeButton}
                >
                  {" "}
                  About Me
                </Button>

                <Button
                  variant="outlined"
                  sx={{
                    paddingTop: 1,
                    paddingBottom: 1,
                    width: 100,
                    borderRadius: 15,
                    fontSize: 10,
                    margin: 1,
                    borderColor: "#000000",
                    color: "#000000",
                    "&:hover": {
                      backgroundColor: "#ffde59",
                    },
                  }}
                >
                  {" "}
                  Contact
                </Button>
              </Grid>
              <Grid
                container
                justifyContent="center"
                style={{
                  margin: "auto",
                  alignItems: "center",
                }}
              >
                <Languages />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} sm={5} textAlign="center">
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
