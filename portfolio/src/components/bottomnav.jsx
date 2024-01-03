import React, { useState, useRef } from "react";
import { handleScroll } from "../pages/home/desktop/scroll.functions";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import WorkIcon from "@mui/icons-material/Work";
import EmailIcon from "@mui/icons-material/Email";
import Paper from "@mui/material/Paper";

export default function FixedBottomNavigation({ onClick }) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);

  const home = useRef(null);
  const aboutMe = useRef(null);
  const projects = useRef(null);
  const contactMe = useRef(null);

  const handleHome = () => handleScroll({ elementRef: home });
  const handleAboutMe = () => handleScroll({ elementRef: aboutMe });
  const handleProjects = () => handleScroll({ elementRef: projects });
  const handleContactMe = () => handleScroll({ elementRef: contactMe });

  return (
    <Box sx={{ pb: 7 }} ref={ref}>
      <CssBaseline />
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction
            label="Home"
            icon={<HomeIcon />}
            onClick={handleHome}
          />
          <BottomNavigationAction
            label="About Me"
            icon={<PersonIcon />}
            onClick={handleAboutMe}
          />
          <BottomNavigationAction
            label="Projects"
            icon={<WorkIcon />}
            onClick={handleProjects}
          />
          <BottomNavigationAction
            label="Contact"
            icon={<EmailIcon />}
            onClick={handleContactMe}
          />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}
