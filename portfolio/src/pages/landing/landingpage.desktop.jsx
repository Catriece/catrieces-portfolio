import React from "react";
import { Grid } from "@mui/material";
import img from "../../assets/images/background.png";
import Languages from "../../components/languages";

const LandingPage = () => {
  return (
    <>
      <Grid
        item
        md={7}
        sx={{
          paddingLeft: "40px",
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <p
          style={{
            textAlign: "right",
            marginRight: "30px",
            marginBottom: 0,
            marginLeft: "30px",
            fontFamily: "Bebas Neue",
            fontSize: "70px",
            fontWeight: "900",
            lineHeight: "4rem",
            letterSpacing: "5px",
          }}
        >
          Front-end <br /> Software Developer
        </p>
        <p
          style={{
            marginTop: 3,
            marginLeft: "30px",
            fontFamily: "Source Code",
            fontSize: "30px",
          }}
        >
          <i>coding your ideas into reality</i>
        </p>
        <h2
          style={{
            textAlign: "center",
            fontFamily: "Bebas Neue",
            fontSize: "35px",
            letterSpacing: "3px",
            marginBottom: 3,
            fontWeight: "400",
          }}
        >
          SKILLS
        </h2>
        <Languages height={"65px"} width={"65px"} />
      </Grid>
      <Grid item md={5} sx={{ margin: "auto" }}>
        <img
          src={img}
          alt="memoji"
          style={{ width: "80%", padding: "10px", marginTop: "85px" }}
        />
      </Grid>
    </>
  );
};

export default LandingPage;
