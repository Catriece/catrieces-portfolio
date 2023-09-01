import React from "react";
import Button from "@mui/material/Button";
import Languages from "../../components/languages";
import { useNavigate } from "react-router-dom";
import { Grid, Paper } from "@mui/material";
import img from "../../assets/images/background.png";
// import useStyles from "./styles.homepage";

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
        <Grid
          container
          spacing={2}
          justifyContent="flex-start"
          alignItems="center"
          className="body"
        >
          <Grid item xs={12} md={7}>
            <Grid
              item
              sx={{
                marginBottom: "0",
                fontSize: "60px",
                fontWeight: "700",
                paddingTop: "0",
                "@media (max-width: 500px)": {
                  fontSize: "20px",
                  textAlign: "center",
                },
                "@media (min-width: 500px)": {
                  fontSize: "20px",
                  textAlign: "center",
                },
                "@media (min-width: 600px)": {
                  fontSize: "20px",
                },
                "@media (min-width: 960px)": {
                  fontSize: "23px",
                  textAlign: "right",
                },
                "@media (min-width: 1280px)": {
                  fontSize: "24px",
                  textAlign: "right",
                },
                "@media (min-width: 1580px)": {
                  fontSize: "35px",
                  textAlign: "right",
                },
                "@media (min-width: 1900px)": {
                  fontSize: "41px",
                  textAlign: "right",
                  marginLeft: "12px",
                },
              }}
            >
              <h1
                style={{
                  marginRight: "10px",
                  marginBottom: "0px",
                  marginTop: "auto",
                }}
              >
                Front-end Software Developer
              </h1>
            </Grid>
            <Grid
              item
              sx={{
                "@media (max-width: 500px)": {
                  fontSize: "18px",
                  textAlign: "center",
                  marginTop: "10px",
                },
                "@media (min-width: 500px)": {
                  fontSize: "22px",
                  textAlign: "center",
                  marginTop: "10px",
                },
                "@media (min-width: 600px)": {
                  fontSize: "20px",
                  textAlign: "center",
                  marginTop: "10px",
                },
                "@media (min-width: 960px)": {
                  fontSize: "23px",
                  textAlign: "right",
                  marginRight: "55px",
                },
                "@media (min-width: 1280px)": {
                  fontSize: "30px",
                  textAlign: "right",
                  marginRight: "55px",
                },
                "@media (min-width: 1580px)": {
                  fontSize: "35px",
                  textAlign: "right",
                  marginRight: "55px",
                },
                "@media (min-width: 1900px)": {
                  fontSize: "45px",
                  textAlign: "right",
                  marginRight: "55px",
                },
              }}
            >
              <p
                style={{
                  marginBottom: "20px",
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
                    borderRadius: 15,
                    margin: 1,
                    borderColor: "#000000",
                    color: "#000000",
                    "&:hover": {
                      backgroundColor: "#ffde59",
                    },
                    "@media (max-width: 500px)": {
                      width: 85,
                      fontSize: 9,
                    },
                    "@media (min-width: 500px)": {
                      width: 90,
                      fontSize: 10,
                    },
                    "@media (min-width: 600px)": {
                      width: 95,
                      fontSize: 10,
                    },
                    "@media (min-width: 960px)": {
                      width: 100,
                      fontSize: 11,
                    },
                    "@media (min-width: 1280px)": {
                      width: 100,
                      fontSize: 10,
                    },
                    "@media (min-width: 1580px)": {
                      width: 100,
                      fontSize: 10,
                    },
                    "@media (min-width: 1900px)": {
                      width: 150,
                      fontSize: 15,
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
                    "@media (max-width: 500px)": {
                      width: 85,
                      fontSize: 9,
                    },
                    "@media (min-width: 500px)": {
                      width: 90,
                      fontSize: 10,
                    },
                    "@media (min-width: 600px)": {
                      width: 95,
                      fontSize: 10,
                    },
                    "@media (min-width: 960px)": {
                      width: 100,
                      fontSize: 11,
                    },
                    "@media (min-width: 1280px)": {
                      width: 100,
                      fontSize: 10,
                    },
                    "@media (min-width: 1580px)": {
                      width: 100,
                      fontSize: 10,
                    },
                    "@media (min-width: 1900px)": {
                      width: 150,
                      fontSize: 15,
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
                    "@media (max-width: 500px)": {
                      width: 85,
                      fontSize: 9,
                    },
                    "@media (min-width: 500px)": {
                      width: 90,
                      fontSize: 10,
                    },
                    "@media (min-width: 600px)": {
                      width: 95,
                      fontSize: 10,
                    },
                    "@media (min-width: 960px)": {
                      width: 100,
                      fontSize: 11,
                    },
                    "@media (min-width: 1280px)": {
                      width: 100,
                      fontSize: 10,
                    },
                    "@media (min-width: 1580px)": {
                      width: 100,
                      fontSize: 10,
                    },
                    "@media (min-width: 1900px)": {
                      width: 150,
                      fontSize: 15,
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
