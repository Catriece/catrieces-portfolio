import { Grid } from "@mui/material";
import React from "react";
import ContactForm from "../../components/contact.form";
export default function ContactMe({ id }) {
  return (
    <Grid
      id={id}
      container
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Grid item xs={12} sx={{ marginBottom: "20px", marginLeft: "30px" }}>
        <ContactForm />
      </Grid>
    </Grid>
  );
}
