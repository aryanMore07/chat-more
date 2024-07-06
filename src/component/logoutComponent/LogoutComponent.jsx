import React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import LogoutIcon from "@mui/icons-material/Logout";

const LogoutComponent = ({ isOpen, setIsOpen }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="fade-button"
        aria-controls={open ? "fade-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        disableRipple
        sx={{
          "&:hover": {
            backgroundColor: "inherit",
          },
          padding: "0px",
          "&.MuiButton-root": {
            minWidth: "0px",
          },
        }}
      >
        <MoreVertIcon sx={{ color: "grey" }} />
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem
          onClick={() => {
            handleClose();
            setIsOpen(!isOpen);
          }}
        >
          Logout{" "}
          <span style={{ marginLeft: "15px" }}>
            <LogoutIcon />
          </span>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default LogoutComponent;
