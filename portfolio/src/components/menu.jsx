import * as React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import Container from "@mui/material/Container";

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

  return (
    <Container
      maxWidth="sm"
      sx={{ textAlign: "right", marginRight: 0, marginTop: 5 }}
    >
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        {<MenuRoundedIcon />}
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
        <MenuItem onClick={handleCloseProjects}>Projects</MenuItem>
        <MenuItem onClick={handleCloseAboutMe}>About Me</MenuItem>
      </Menu>
    </Container>
  );
}
