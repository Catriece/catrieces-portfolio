import React from "react";
import { Grid, Paper } from "@mui/material";

export default function ContactForm() {
  return (
    <Grid
      container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        width: "100%",
      }}
    >
      <form action="https://api.web3forms.com/submit" method="POST">
        <input
          type="hidden"
          name="access_key"
          value="3521939f-e43e-4dbd-b466-a9c4b09d321c"
        />
        <input
          type="hidden"
          name="subject"
          value="New Submission from Web3Forms"
        />
        <input type="hidden" name="from_name" value="Catriece's Portfolio" />
        <input
          type="hidden"
          name="redirect"
          value="https://web3forms.com/success"
        />
        <input
          type="checkbox"
          name="botcheck"
          class="hidden"
          style={{ display: "none" }}
        />

        <Paper
          elevation={5}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            padding: "20px",
            borderRadius: "15px",
            minHeight: "400px",
            width: "100%",
          }}
        >
          <label className="label">Email:</label>
          <input
            type="email"
            name="email"
            className="contact field"
            placeholder="Enter your email."
            required
          />
          <label className="label">Name:</label>
          <input
            type="text"
            name="First Name"
            className="contact field"
            placeholder="Enter your name."
            required
          />
          <label className="label">Phone Number:</label>
          <input
            type="text"
            name="Phone Number"
            className="contact field"
            placeholder="What's a good number to reach you at?"
            required
          />
          <label className="label">Message:</label>
          <textarea name="message" className="contact msg" required></textarea>
          <div
            style={{
              marginRight: "auto",
              marginLeft: "auto",
              marginTop: "30px",
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <button
              type="submit"
              style={{
                width: "75%",
                height: "35px",
                borderRadius: "15px",
                border: ".5px solid black",
              }}
            >
              Submit Form
            </button>
          </div>
          <br />
        </Paper>
      </form>
    </Grid>
  );
}