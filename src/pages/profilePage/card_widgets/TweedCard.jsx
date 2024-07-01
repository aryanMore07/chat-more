import React, { useContext, useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import CancelIcon from "@mui/icons-material/Cancel";
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
import { useLocation, useNavigate } from "react-router";
import { UserContext } from "../../../contexts/userContext";
import { PostContext } from "../../../contexts/postContext";
import { styled } from "@mui/material/styles";
import { Card, Divider, IconButton } from "@mui/material";

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

const CardComponent = styled(Card)(({ theme }) => ({
  width: "100%",
  height: "100%",
}));

const CardInnerContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  boxSizing: "border-box",
  display: "flex",
  gap: theme.spacing(1),
  width: "100%",
}));

const AvatarContainer = styled(Box)(({ theme }) => ({
  width: "fit-content",
  height: "50px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

const RightContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100%",
  [theme.breakpoints.down("sm")]: {
    width: "calc(100% - 50px)",
  },
}));

const CardTopContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  [theme.breakpoints.down("sm")]: {
    marginBottom: theme.spacing(2),
  },
}));

const TweetContentContainer = styled(Box)(({ theme }) => ({
  padding: `${theme.spacing(1.5)} 0px`,
  paddingTop: `${theme.spacing(0)}`,
}));

const IconsContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "flex-end",
  gap: theme.spacing(2.5),
  height: "35px",
}));

const IconButtonComponent = styled(IconButton)(({ theme }) => ({
  padding: "0px",
  borderRadius: "0px",
}));

const IconsText = styled("span")(({ theme }) => ({
  fontSize: "13px",
  paddingLeft: "4px",
}));

function TweedCard({ data }) {
  const { _id, firstName, lastName, content, username, likes, comments } = data;
  const [modelOpen, setModelOpen] = React.useState(false);
  const handleModelOpen = () => setModelOpen(true);
  const handleModelClose = () => setModelOpen(false);
  const navigate = useNavigate();
  const location = useLocation();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const { state } = useContext(UserContext);
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

  const bookmarkedPost = (postId) =>
    bookmarkPost.find((post) => post._id === postId);

  const likedPost = (postId) =>
    postData.find(
      ({ _id, likes }) =>
        _id === postId &&
        likes.likedBy.find(({ _id }) => _id === state.userDetails._id)
    );

  return (
    <CardComponent>
      <CardInnerContainer>
        <AvatarContainer>
          <Avatar
            alt={state?.userDetails?.firstName}
            src={state?.userDetails?.image}
          />
        </AvatarContainer>
        <RightContainer>
          <CardTopContainer>
            <p className="user-tag">
              <b>
                {firstName} {lastName}
              </b>{" "}
              <span style={{ color: "#9a9a9a" }}>@{username}</span>
            </p>

            <IconButtonComponent
              id="fade-button"
              aria-controls={open ? "fade-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              disableRipple
            >
              <MoreVertIcon sx={{ color: "grey" }} />
            </IconButtonComponent>
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
          </CardTopContainer>
          <TweetContentContainer
            onClick={() => {
              navigate(`/${_id}`, { state: { from: location } });
            }}
          >
            {content}
          </TweetContentContainer>
          <Divider sx={{ color: "#cfcfcf" }} />
          <IconsContainer>
            {likedPost(_id) ? (
              <IconButtonComponent
                disableRipple
                onClick={() => {
                  dislikePost(_id);
                }}
              >
                <FavoriteIcon sx={{ fontSize: "20px", color: "red" }} />{" "}
                {likes.likeCount !== 0 && (
                  <IconsText>{likes.likeCount}</IconsText>
                )}
              </IconButtonComponent>
            ) : (
              <IconButtonComponent
                disableRipple
                onClick={() => {
                  likePost(_id);
                }}
              >
                <FavoriteBorderIcon sx={{ fontSize: "20px" }} />{" "}
                {likes.likeCount !== 0 && (
                  <IconsText>{likes.likeCount}</IconsText>
                )}
              </IconButtonComponent>
            )}
            <IconButtonComponent
              disableRipple
              onClick={() => {
                navigate(`/${_id}`, {
                  state: { from: location },
                });
                // <Navigate to={`/${_id}`} state={{ from: location }} />
              }}
            >
              <ChatBubbleOutlineIcon sx={{ fontSize: "20px" }} />
              {comments.length !== 0 && (
                <IconsText>{comments.length}</IconsText>
              )}
            </IconButtonComponent>
            {bookmarkedPost(_id) ? (
              <IconButtonComponent
                disableRipple
                onClick={() => {
                  removeFromBookmark(_id);
                }}
              >
                <BookmarkIcon sx={{ fontSize: "20px", color: "#1D9BF0" }} />
              </IconButtonComponent>
            ) : (
              <IconButtonComponent
                disableRipple
                onClick={() => {
                  addToBookmark(_id);
                }}
              >
                <BookmarkBorderIcon sx={{ fontSize: "20px" }} />
              </IconButtonComponent>
            )}
          </IconsContainer>
        </RightContainer>
      </CardInnerContainer>
    </CardComponent>
  );
}

export default TweedCard;
