import { Grid } from "@mui/material";
import React from "react";
import ContactForm from "../../components/contact/contact.form";
export default function ContactMe({ id, autofocus }) {
  return (
    <>
      <Grid item xs={12} sx={{ marginTop: "20px", marginBottom: "20px" }}>
        <ContactForm autofocus={autofocus} />
      </Grid>
    </>
  );
}
