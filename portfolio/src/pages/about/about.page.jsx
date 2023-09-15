import React from "react";
import img from "../../assets/images/funphoto.png";
import { Grid } from "@mui/material";

const AboutMe = (id) => {
  return (
    <Grid
      id={id}
      container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "60vh",
        width: "100vw",
        paddingRight: "60px",
        paddingLeft: "60px",
      }}
    >
      <Grid item xs={12} md={5} sx={{ margin: "auto" }}>
        <img
          src={img}
          alt="catriece"
          style={{
            width: "90%",
            padding: "10px",
            height: "500px",
            left: "20px",
          }}
        />
      </Grid>

      <Grid item xs={12} md={7} sx={{ paddingRight: "50px" }}>
        <h1
          style={{
            marginBottom: "0px",
            marginTop: "0px",
            textAlign: "center",
            fontFamily: "Bebas Neue",
            fontSize: "50px",
            letterSpacing: "1rem",
          }}
        >
          HEY YOU!
        </h1>

        <p
          style={{ lineHeight: "1.45rem", textAlign: "center", padding: "7px" }}
        >
          My name is Catriece, and I am a passionate web developer with quite a
          knack for turning lines of code into captivating online experiences.
          🚀
          <br />
          Since writing my first program, I have been hooked on the endless
          possibilities web development offers. From front-end designs that
          curate beautiful user experiences, to back-end wizardry that brings
          functionality to life, I thrive on the process of{" "}
          <i>
            <strong>coding ideas into reality</strong>
          </i>
          <br />
          My journey in web development has been a fun ride. With a strong
          foundation in HTML, CSS, and JavaScript, I seek to continue evolving
          alongside the ever-changing nature of the development world. I love
          the challenge of mastering new technologies and using these tools that
          amplify my creativity.
          <br />
          But it's not just about the code – it's about <b>you</b>!
          Understanding your vision and collaborating with you to achieve it is
          what truly excites me. I'm committed to delivering top-notch results
          that exceed expectations.
          <br />
          My goal is simple:{" "}
          <i>
            to craft digital solutions that not only meet your needs but also
            leave a lasting digital footprint.{" "}
          </i>{" "}
          Ready to turn ideas into reality? Let's embark on this digital journey
          together.
          <br />
          Feel free to explore my growing portfolio and get in touch with me!
          I'm excited to collaborate with you and create something
          extraordinary.
          <br />
          Cheers to pixels, passion, and a limitless digital world!
        </p>
      </Grid>
    </Grid>
  );
};

export default AboutMe;
