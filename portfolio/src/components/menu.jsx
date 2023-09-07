import * as React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import Container from "@mui/material/Container";
import { Grid } from "@mui/material";

export default function NavMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const navigate = useNavigate();

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseProjects = () => {
    setAnchorEl(null);
    navigate("/projects");
  };

  const handleCloseAboutMe = () => {
    setAnchorEl(null);
    navigate("/aboutme");
  };

  const handleCloseHome = () => {
    setAnchorEl(null);
    navigate("/");
  };

  const handleCloseContacts = () => {
    setAnchorEl(null);
    navigate("/contactme");
  };

  return (
    <Grid
      container
      spacing={2}
      sx={{
        display: "flex",
        justifyContent: "flex-end",
      }}
    >
      <Grid item xs={12} sx={{ display: { md: "none" } }}>
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          sx={{
            justifyContent: "flex-start",
            paddingLeft: "0",
            color: "#000000",
          }}
          onClick={handleClick}
        >
          {<MenuRoundedIcon sx={{ size: "large" }} />}
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleCloseHome}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleCloseHome}>Home</MenuItem>
          <MenuItem onClick={handleCloseAboutMe}>About Me</MenuItem>
          <MenuItem onClick={handleCloseProjects}>My Projects</MenuItem>
          <MenuItem onClick={handleCloseContacts}>Contact Me</MenuItem>
        </Menu>
      </Grid>
    </Grid>
  );
}
