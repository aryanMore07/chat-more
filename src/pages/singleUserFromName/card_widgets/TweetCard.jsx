import React, { useContext } from "react";
import Avatar from "@mui/material/Avatar";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { styled } from "@mui/material/styles";
import { Box, Card, Divider, IconButton, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router";
import { UserContext } from "../../../contexts/userContext";
import { PostContext } from "../../../contexts/postContext";
import { PostTime } from "../../../utils/postTime/PostTime";

const IconButtonComponent = styled(IconButton)(({ theme }) => ({
  padding: "0px",
}));

const IconsText = styled("span")(({ theme }) => ({
  fontSize: "13px",
  paddingLeft: "4px",
}));

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

const UsernameText = styled(Typography)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "flex-start",
    gap: theme.spacing(0),
  },
}));

const UserText = styled("b")(({ theme }) => ({
  cursor: "pointer",
  "&:hover": {
    textDecoration: "underline",
  },
}));

const UserIdText = styled("span")(({ theme }) => ({
  color: "#9a9a9a",
  fontSize: "12px",
}));

const IconsContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "flex-end",
  gap: theme.spacing(2.5),
  height: "35px",
}));

const TweetContentContainer = styled(Box)(({ theme }) => ({
  padding: `${theme.spacing(1.5)} 0px`,
  paddingTop: `${theme.spacing(0)}`,
}));

function TweetCard({ data }) {
  const {
    _id,
    firstName,
    lastName,
    content,
    username,
    likes,
    createdAt,
    comments,
    image,
  } = data;

  const navigate = useNavigate();
  const location = useLocation();

  const { state } = useContext(UserContext);
  const {
    postData,
    addToBookmark,
    removeFromBookmark,
    bookmarkPost,
    likePost,
    dislikePost,
  } = useContext(PostContext);

  // Function to find whether the user have bookmarked the post or not
  const bookmarkedPost = (postId) =>
    bookmarkPost.find((post) => post._id === postId);

  // Function to find whether the user have Liked the post or not
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
          <Avatar alt={firstName} src={image} />
        </AvatarContainer>
        <RightContainer>
          <CardTopContainer>
            <UsernameText>
              <UserText>
                {firstName} {lastName}
              </UserText>
              <UserIdText>
                @{username} | {PostTime(createdAt)}
              </UserIdText>
            </UsernameText>
          </CardTopContainer>
          <TweetContentContainer>
            <p>{content}</p>
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

export default TweetCard;
