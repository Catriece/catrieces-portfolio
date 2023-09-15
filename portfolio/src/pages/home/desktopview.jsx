import React from "react";
import { Grid } from "@mui/material";
import img from "../../assets/images/background.png";
import Languages from "../../components/languages";

const DesktopView = ({ marginBottom }) => {
  return (
    <Grid
      container
      sx={{
        marginTop: "auto",
        paddingTop: "20px",
        display: { md: "flex", xs: "none" },
      }}
    >
      <Grid item md={7} sx={{ paddingLeft: "40px", margin: "auto" }}>
        <p
          style={{
            textAlign: "right",
            marginTop: "30px",
            marginRight: "30px",
            marginBottom: 0,
            marginLeft: "30px",
            fontFamily: "Bebas Reue",
            fontSize: "70px",
            fontWeight: "900",
            lineHeight: "4rem",
          }}
        >
          Front-end <br /> Software Developer
        </p>
        <p
          style={{
            marginTop: 5,
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
            fontFamily: "Bebas Reue",
            fontSize: "35px",
            marginBottom: 3,
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
    </Grid>
  );
};

export default DesktopView;
