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
          style={{
            lineHeight: "2rem",
            textAlign: "center",
            padding: "7px",
            fontSize: "20px",
          }}
        >
          I'm Catriece, a passionate web developer with a knack for turning code
          into captivating online experiences. I've been hooked on web
          development since my first program. With a strong foundation in HTML,
          CSS, and JavaScript, I love mastering new technologies to amplify my
          creativity. But it's not just about the code – it's about you! I'm
          committed to delivering top-notch results that exceed expectations. My
          goal is simple: craft digital solutions that leave a lasting impact.
          Let's turn ideas into reality together. Explore my portfolio and get
          in touch! Cheers to pixels, passion, and a limitless digital world! 🚀
        </p>
      </Grid>
    </Grid>
  );
};

export default AboutMe;
