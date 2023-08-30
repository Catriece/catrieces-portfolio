import React from "react";
import Button from "@mui/material/Button";
import Header from "../../components/header";
import Languages from "../../components/languages";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const handleProjectsButton = () => {
    navigate("/projects");
  };

  const handleAboutMeButton = () => {
    navigate("/aboutme");
  };

  return (
    <div>
      <div
        className="home"
        style={{
          minHeight: "95vh",
          maxWidth: "98vw",
        }}
      >
        <div className="heading">{<Header />}</div>
        <div className="body">
          <h1 style={{ fontSize: "65px", marginBottom: "0" }}>
            Front-end Software
          </h1>
          <h1
            style={{ fontSize: "65px", marginTop: "0", marginBottom: "15px" }}
          >
            Developer
          </h1>
          <p
            style={{
              fontSize: "30px",
              textAlign: "right",
              marginTop: "0px",
              marginRight: "50px",
            }}
          >
            Coding your ideas into reality!
          </p>
        </div>
        <div className="btns">
          <Button
            variant="outlined"
            sx={{
              margin: 2,
              marginTop: 0,
              paddingTop: 1,
              paddingBottom: 1,
              width: 250,
              borderRadius: 15,
            }}
            onClick={handleProjectsButton}
          >
            Projects
          </Button>
          <br />
          <Button
            variant="outlined"
            sx={{
              margin: 2,
              paddingTop: 1,
              paddingBottom: 1,
              width: 250,
              borderRadius: 15,
            }}
            onClick={handleAboutMeButton}
          >
            About Me
          </Button>
          <br />
          <Button
            variant="outlined"
            sx={{
              margin: 2,
              paddingTop: 1,
              paddingBottom: 1,
              width: 250,
              borderRadius: 15,
            }}
          >
            Contact
          </Button>
        </div>
        <div>
          <Languages />
        </div>
      </div>
      <div className="footer">Contact</div>
    </div>
  );
};

export default HomePage;
