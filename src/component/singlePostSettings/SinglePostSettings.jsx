import React from "react";
import "./singlePostSetting.css";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useContext } from "react";
import { PostContext } from "../../contexts/postContext";
import { IconButton, Stack } from "@mui/material";

const SinglePostSettings = ({ postId }) => {
  const { bookmarkPost, addToBookmark, removeFromBookmark } =
    useContext(PostContext);
  const bookmarkedPost = (postId) =>
    bookmarkPost.find((post) => post._id === postId);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Stack justifyContent="center" alignItems="center">
      <IconButton
        id="fade-button"
        aria-controls={open ? "fade-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        disableRipple
        sx={{
          padding: "0px",
        }}
      >
        <MoreVertIcon />
      </IconButton>
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
        {bookmarkedPost(postId) ? (
          <MenuItem
            onClick={() => {
              removeFromBookmark(postId);
              handleClose();
            }}
          >
            Remove from Favorites
          </MenuItem>
        ) : (
          <MenuItem
            onClick={() => {
              addToBookmark(postId);
              handleClose();
            }}
          >
            Add to Favorites
          </MenuItem>
        )}

        <MenuItem onClick={handleClose}>close</MenuItem>
      </Menu>
    </Stack>
  );
};

export default SinglePostSettings;
