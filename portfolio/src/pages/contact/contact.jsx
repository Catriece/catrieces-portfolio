import { Grid } from "@mui/material";
import React from "react";
import Header from "../../components/header";
import ContactForm from "../../components/contact.form";
import bg from "../../assets/images/shapesbg.png";

export default function ContactMe() {
  return (
    <Grid
      container
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        minHeight: "100vh",
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <Grid item xs={12}>
        <Header />
        <h1
          style={{
            fontFamily: "Bebas Nenu",
            textAlign: "center",
            fontSize: "50px",
          }}
        >
          Contact Me!
        </h1>
      </Grid>
      <Grid
        item
        xs={7}
        sx={{ marginTop: "40px", marginBottom: "20px", marginLeft: "30px" }}
      >
        <ContactForm />
      </Grid>
      <Grid item xs={12}>
        <p style={{ textAlign: "center", marginBottom: "10px" }}>catriece 🤪</p>
      </Grid>
    </Grid>
  );
}
