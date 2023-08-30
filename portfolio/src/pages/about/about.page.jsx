import React from "react";
import Header from "../../components/header";
import img from "../../assets/images/me.png";
import { Grid, Paper } from "@mui/material";

const AboutMe = () => {
  return (
    <Grid container spacing={2} justifyContent="center" alignItems="center">
      <Grid item xs={12} className="heading">
        <div className="heading">{<Header />}</div>
      </Grid>
      <Grid item xs={12} md={5} justifyContent="center" alignItems="center">
        <Paper elevation={3} style={{ padding: "16px", justifyContent: "" }}>
          <h3>Hey you!</h3>
          <p>
            My name is Catriece, and I'm a passionate web developer with a knack
            for turning lines of code into captivating online experiences. 🚀
          </p>
          <p>
            Since writing my first program, I've been hooked on the endless
            possibilities web development offers. From front-end designs that
            curate beautiful user experiences, to back-end wizardry that brings
            functionality to life, I thrive on the process of coding these ideas
            to fruition.
          </p>
          <p>
            My journey in web development has been a fun ride. With a strong
            foundation in HTML, CSS, and JavaScript, I seek to continue evolving
            alongside the ever-changing nature of the development world. I love
            the challenge of mastering new technologies and using these tools
            that amplify my creativity.
          </p>
          <p>
            But it's not just about the code – it's about <b>you</b>!
            Understanding your vision and collaborating with you to achieve it
            is what truly excites me. I'm committed to delivering top-notch
            results that exceed expectations.
          </p>
          <p>
            My goal is simple:{" "}
            <i>
              to craft digital solutions that not only meet your needs but also
              leave a lasting digital footprint.{" "}
            </i>{" "}
            Ready to turn ideas into reality? Let's embark on this digital
            journey together.
          </p>
          <p>
            Feel free to explore my growing portfolio and get in touch with me!
            I'm excited to collaborate with you and create something
            extraordinary.
          </p>
          <p>Cheers to pixels, passion, and a limitless digital world!</p>
        </Paper>
      </Grid>
      <Grid item xs={12} md={5}>
        <img src={img} alt="catriece" style={{ height: "600px" }} />
      </Grid>
      <Grid item xs={12}>
        <div className="footer">Contact</div>
      </Grid>
    </Grid>
  );
};

export default AboutMe;
