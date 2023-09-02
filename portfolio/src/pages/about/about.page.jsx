import React from "react";
import Image from "../../components/image";
import img from "../../assets/images/funphoto.png";
import MyButton from "../../components/button";
import MyPaper from "../../components/paper";
import { Card } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Grid } from "@mui/material";

const AboutMe = () => {
  const navigate = useNavigate();

  const handleProjectsButton = () => {
    navigate("/projects");
  };

  const handleHomeButton = () => {
    navigate("/");
  };
  return (
    <Grid
      container
      spacing={2}
      justifyContent="center"
      alignItems="center"
      style={{ minHeight: "100vh" }}
    >
      <MyPaper
        content={
          <Grid
            container
            spacing={2}
            justifyContent="flex-start"
            alignItems="center"
          >
            <Grid item xs={12} md={5} textAlign="center">
              <Image src={img} alt={"catriece"} />

              <Grid
                container
                justifyContent="center"
                alignItems="center"
                style={{
                  margin: "auto",
                }}
              >
                <MyButton onClick={handleHomeButton} name={"Home"} />
                <MyButton onClick={handleProjectsButton} name={"Projects"} />
                <MyButton name={"Contact"} />
              </Grid>
            </Grid>
            <Grid item xs={12} md={7} sx={{ textAlign: "center" }}>
              <Grid
                item
                sx={{
                  marginBottom: "0",
                  fontSize: "60px",
                  fontWeight: "700",
                  paddingTop: "0",
                  "@media (max-width: 500px)": {
                    fontSize: "15px",
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
                  HEY YOU!
                </h1>
              </Grid>
              <Card
                elevation={4}
                sx={{
                  minHeight: "300px",
                  maxHeight: "400px",
                  overflow: "scroll",
                  padding: "10px 20px",
                  marginTop: "20px",
                  borderRadius: "10px",
                }}
              >
                <p>
                  My name is Catriece, and I'm a passionate web developer with a
                  knack for turning lines of code into captivating online
                  experiences. 🚀
                </p>
                <p>
                  Since writing my first program, I've been hooked on the
                  endless possibilities web development offers. From front-end
                  designs that curate beautiful user experiences, to back-end
                  wizardry that brings functionality to life, I thrive on the
                  process of coding these ideas to fruition.
                </p>
                <p>
                  My journey in web development has been a fun ride. With a
                  strong foundation in HTML, CSS, and JavaScript, I seek to
                  continue evolving alongside the ever-changing nature of the
                  development world. I love the challenge of mastering new
                  technologies and using these tools that amplify my creativity.
                </p>
                <p>
                  But it's not just about the code – it's about <b>you</b>!
                  Understanding your vision and collaborating with you to
                  achieve it is what truly excites me. I'm committed to
                  delivering top-notch results that exceed expectations.
                </p>
                <p>
                  My goal is simple:{" "}
                  <i>
                    to craft digital solutions that not only meet your needs but
                    also leave a lasting digital footprint.{" "}
                  </i>{" "}
                  Ready to turn ideas into reality? Let's embark on this digital
                  journey together.
                </p>
                <p>
                  Feel free to explore my growing portfolio and get in touch
                  with me! I'm excited to collaborate with you and create
                  something extraordinary.
                </p>
                <p>Cheers to pixels, passion, and a limitless digital world!</p>
              </Card>
            </Grid>
          </Grid>
        }
      />
    </Grid>
  );
};

export default AboutMe;
