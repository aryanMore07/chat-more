/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import "./profilePage.css";
import { useContext } from "react";
import { UserContext } from "../../contexts/userContext";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { PostContext } from "../../contexts/postContext";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import CancelIcon from "@mui/icons-material/Cancel";
import { useState } from "react";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import EditUserDetails from "../../component/editUserDetailsComponent/EditUserDetails";
import FavoriteIcon from "@mui/icons-material/Favorite";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ProfileComponent = () => {
  const [modelOpen, setModelOpen] = React.useState(false);
  const handleModelOpen = () => setModelOpen(true);
  const handleModelClose = () => setModelOpen(false);
  const navigate = useNavigate();
  const location = useLocation();
  const localStoredUsetDetails = JSON.parse(
    localStorage.getItem("userDetails")
  );

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const { state, dispatch } = useContext(UserContext);
  const [editedPost, setEditedPost] = useState("");
  const {
    postData,
    addToBookmark,
    removeFromBookmark,
    editPost,
    deletePost,
    bookmarkPost,
    likePost,
    dislikePost,
  } = useContext(PostContext);
  const loggedInUserposts = postData.filter(
    (post) => post.username === state?.userDetails?.username
  );
  const bookedMarkPost = (postId) =>
    bookmarkPost.find((post) => post._id === postId);
  const likedPost = (postId) =>
    postData.find(
      ({ _id, likes }) =>
        _id === postId &&
        likes.likedBy.find(({ _id }) => _id === state?.userDetails?._id)
    );

  const checkUserLoggedIn = () => {
    if (!state?.userDetails) {
      console.log("hora he");
      dispatch({
        type: "ADD_USER_DETAILS",
        payload: localStoredUsetDetails,
      });
    }
  };

  useEffect(() => {
    checkUserLoggedIn();
  }, [state]);

  return (
    <div className="profile-div">
      <div className="user-info">
        <Avatar
          src={state?.userDetails?.image}
          alt={state?.userDetails?.firstName}
          className="user-picture"
          style={{ height: "220px", width: "220px", margin: "8px" }}
        />
        <h4>
          {state?.userDetails?.firstName} {state?.userDetails?.lastName}
        </h4>
        <p className="user-tag" style={{ color: "#9a9a9a" }}>
          @{state?.userDetails?.username}
        </p>
        <EditUserDetails />
        {state?.userDetails.bio ? (
          <p>{state?.userDetails.bio}</p>
        ) : (
          <p>Please add a bio</p>
        )}
        {state?.userDetails.portfolio ? (
          <Link>{state?.userDetails.portfolio}</Link>
        ) : (
          <p>Please add a website</p>
        )}
        <div className="followings-details-div">
          <div className="followings-inner-divs">
            {state?.userDetails?.following?.length}
            <span>Following</span>
          </div>
          <div className="followings-inner-divs">
            {loggedInUserposts?.length}
            <span>Posts</span>
          </div>
          <div className="followings-inner-divs">
            {state?.userDetails?.followers?.length}
            <span>Followers</span>
          </div>
        </div>
      </div>
      <div className="posts-div">
        {loggedInUserposts?.length === 0 && (
          <h4 style={{ marginLeft: "15px" }}>
            <b>No post to show</b>
          </h4>
        )}
        {loggedInUserposts?.length > 0 && (
          <h4 style={{ marginLeft: "15px" }}>
            <b>Your Posts</b>
          </h4>
        )}
        <div classsName="profile-post-div">
          {loggedInUserposts.map((post) => {
            const { _id, firstName, lastName, content, username, likes } = post;
            return (
              <div key={_id} className="users-posts">
                <div className="user-profile">
                  <Avatar
                    alt={state?.userDetails?.firstName}
                    src={state?.userDetails?.image}
                  />
                </div>
                <div className="post-info">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "15px",
                    }}
                  >
                    <p className="user-tag">
                      <b>
                        {firstName} {lastName}
                      </b>{" "}
                      <span style={{ color: "#9a9a9a" }}>@{username}</span>
                    </p>

                    <div>
                      <Button
                        id="fade-button"
                        aria-controls={open ? "fade-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : undefined}
                        onClick={handleClick}
                      >
                        <MoreVertIcon />
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
                        <MenuItem>
                          <div onClick={handleModelOpen}>
                            <span style={{ marginRight: "10px" }}>
                              <EditIcon />
                            </span>
                            Edit
                          </div>
                          <Modal
                            open={modelOpen}
                            onClose={handleModelClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                          >
                            <Box sx={style}>
                              <Typography
                                id="modal-modal-title"
                                variant="h6"
                                component="h2"
                              >
                                Edit post
                              </Typography>
                              <div style={{ margin: "15px 0px 15px 0px" }}>
                                <TextField
                                  hiddenLabel
                                  id="filled-hidden-label-normal"
                                  defaultValue={content}
                                  variant="filled"
                                  fullWidth
                                  multiline
                                  maxRows={4}
                                  onChange={(event) => {
                                    setEditedPost(event.target.value);
                                  }}
                                />
                              </div>
                              <Button
                                color="error"
                                startIcon={<CancelIcon />}
                                onClick={handleModelClose}
                              >
                                Discard
                              </Button>
                              <Button
                                color="primary"
                                startIcon={<EditIcon />}
                                onClick={() => {
                                  editPost(_id, editedPost);
                                  handleClose();
                                }}
                              >
                                Edit
                              </Button>
                            </Box>
                          </Modal>
                        </MenuItem>
                        <MenuItem
                          onClick={() => {
                            deletePost(_id);
                          }}
                        >
                          <span style={{ marginRight: "10px" }}>
                            <DeleteForeverIcon />
                          </span>
                          Delete
                        </MenuItem>
                      </Menu>
                    </div>
                  </div>
                  <div className="users-content">
                    <div
                      onClick={() => {
                        navigate(`/${_id}`, { state: { from: location } });
                      }}
                    >
                      {content}
                    </div>
                  </div>
                  <hr />
                  <div className="icons-div">
                    {likedPost(_id) ? (
                      <span
                        className="icons"
                        onClick={() => {
                          dislikePost(_id);
                        }}
                      >
                        <FavoriteIcon /> {likes.likeCount}
                      </span>
                    ) : (
                      <span
                        className="icons"
                        onClick={() => {
                          likePost(_id);
                        }}
                      >
                        <FavoriteBorderIcon /> {likes.likeCount}
                      </span>
                    )}
                    <span
                      className="icons"
                      onClick={() => {
                        navigate(`/${_id}`, { state: { from: location } });
                      }}
                    >
                      <ChatBubbleOutlineIcon />
                    </span>
                    {bookedMarkPost(_id) ? (
                      <span
                        className="icons"
                        onClick={() => {
                          removeFromBookmark(_id);
                        }}
                      >
                        <BookmarkIcon />
                      </span>
                    ) : (
                      <span
                        className="icons"
                        onClick={() => {
                          addToBookmark(_id);
                        }}
                      >
                        <BookmarkBorderIcon />
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProfileComponent;
