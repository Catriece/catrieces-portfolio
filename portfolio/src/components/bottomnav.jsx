import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import WorkIcon from "@mui/icons-material/Work";
import EmailIcon from "@mui/icons-material/Email";
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router-dom";

export default function FixedBottomNavigation({ onClick }) {
  const [value, setValue] = React.useState(0);
  const ref = React.useRef(null);

  const navigate = useNavigate();

  const handleAboutMeButton = () => {
    navigate("/aboutme");
  };

  const handleHomeButton = () => {
    navigate("/");
  };

  const handleContactButton = () => {
    navigate("/contactme");
  };

  const handleProjectsButton = () => {
    navigate("/projects");
  };

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
            onClick={handleHomeButton}
          />
          <BottomNavigationAction
            label="About Me"
            icon={<PersonIcon />}
            onClick={handleAboutMeButton}
          />
          <BottomNavigationAction
            label="Projects"
            icon={<WorkIcon />}
            onClick={handleProjectsButton}
          />
          <BottomNavigationAction
            label="Contact"
            icon={<EmailIcon />}
            onClick={handleContactButton}
          />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}
