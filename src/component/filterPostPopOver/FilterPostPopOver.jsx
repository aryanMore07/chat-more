import React from "react";
import Popover from "@mui/material/Popover";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useContext } from "react";
import { FilteredPostContext } from "../../contexts/filterPostContext";

const FilterPostPopOver = () => {
  const { dispatch } = useContext(FilteredPostContext);

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <Button aria-describedby={id} variant="outlined" onClick={handleClick}>
        Filter Post
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <ListItemButton
          onClick={() => {
            dispatch({ type: "FILTER_INPUT", payload: "LATEST" });
            handleClose();
          }}
        >
          <ListItemIcon>
            <ArrowDropUpIcon />
          </ListItemIcon>
          <ListItemText primary="Latest" />
        </ListItemButton>
        <ListItemButton
          onClick={() => {
            dispatch({ type: "FILTER_INPUT", payload: "TRENDING" });
            handleClose();
          }}
        >
          <ListItemIcon>
            <TrendingUpIcon />
          </ListItemIcon>
          <ListItemText primary="Trending" />
        </ListItemButton>
      </Popover>
    </div>
  );
};

export default FilterPostPopOver;
