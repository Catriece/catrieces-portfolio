import React from "react";
import { Grid, Paper } from "@mui/material";
import "./contact.form.css";

export default function ContactForm({ autofocus }) {
  return (
    <Grid
      container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
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
          className="hidden"
          style={{ display: "none" }}
        />

        <Paper
          elevation={16}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            padding: "20px",
            borderRadius: "15px",
            height: "300px",
            width: "100%",
            boxShadow: 0,
            backgroundColor: "#ffde59",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label className="label">Email:</label>
            <input
              type="email"
              name="email"
              className="contact field"
              placeholder="Enter your email."
              autofocus={autofocus}
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
              placeholder="A good phone number to reach you at."
              required
            />
          </div>
          <div
            style={{
              marginRight: "auto",
              marginLeft: "auto",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <label className="label">Message:</label>
            <textarea
              name="message"
              className="contact msg"
              style={{
                minHeight: "180px",
                padding: "10px",
              }}
              required
            ></textarea>
            <br />
            <button id="submit-btn" type="submit">
              Submit Form
            </button>
          </div>
          <br />
        </Paper>
      </form>
    </Grid>
  );
}
