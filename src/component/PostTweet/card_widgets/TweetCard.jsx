import {
  Avatar,
  Box,
  Card,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router";
import { UserContext } from "../../../contexts/userContext";
import { PostContext } from "../../../contexts/postContext";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { PostTime } from "../../../utils/postTime/PostTime";
import PostSettingComponent from "../../postSettingComponent/PostSettingComponent";

const CardComponent = styled(Card)(({ theme }) => ({
  width: "100%",
  height: "100%",
}));

const CardInnerContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  boxSizing: "border-box",
  display: "flex",
  gap: theme.spacing(1),
}));

const AvatarContainer = styled(Box)(({ theme }) => ({
  width: "50px",
  height: "50px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

const RightContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100%",
}));

const CardTopContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
}));

const UsernameText = styled(Typography)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
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

const IconButtonComponent = styled(IconButton)(({ theme }) => ({
  padding: "0px",
}));

const IconsText = styled("span")(({ theme }) => ({
  fontSize: "13px",
  paddingLeft: "4px",
}));

function TweetCard({ data }) {
  let location = useLocation();
  const navigate = useNavigate();
  const { state } = useContext(UserContext);
  const {
    bookmarkPost,
    postData,
    dislikePost,
    addToBookmark,
    removeFromBookmark,
    likePost,
  } = useContext(PostContext);

  const { firstName, lastName, username, image } = state.userDetails;

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
          <Avatar alt={username} src={image} />
        </AvatarContainer>
        <RightContainer>
          <CardTopContainer>
            <UsernameText
              onClick={() => {
                if (username === state?.userDetails?.username) {
                  navigate("/profile", { state: { from: location } });
                } else {
                  navigate(`/users/${username}`, {
                    state: { from: location },
                  });
                }
              }}
            >
              <b>
                {firstName}
                {lastName}
              </b>{" "}
              <span style={{ color: "#9a9a9a" }}>
                @{username} | {PostTime(data.createdAt)}
              </span>
            </UsernameText>
            <div>
              <PostSettingComponent
                postId={data._id}
                userName={data.username}
              />
            </div>
          </CardTopContainer>
          <div>
            <TweetContentContainer
              onClick={() => {
                navigate(`/${data._id}`, { state: { from: location } });
              }}
            >
              {data.content}
            </TweetContentContainer>
            <Divider sx={{ color: "#cfcfcf" }} />
            <IconsContainer>
              {likedPost(data._id) ? (
                <IconButtonComponent
                  disableRipple
                  onClick={() => {
                    dislikePost(data._id);
                  }}
                >
                  <FavoriteIcon sx={{ fontSize: "20px", color: "red" }} />{" "}
                  {data.likes.likeCount !== 0 && (
                    <IconsText>{data.likes.likeCount}</IconsText>
                  )}
                </IconButtonComponent>
              ) : (
                <IconButtonComponent
                  disableRipple
                  onClick={() => {
                    likePost(data._id);
                  }}
                >
                  <FavoriteBorderIcon sx={{ fontSize: "20px" }} />{" "}
                  {data.likes.likeCount !== 0 && (
                    <IconsText>{data.likes.likeCount}</IconsText>
                  )}
                </IconButtonComponent>
              )}
              <IconButtonComponent
                disableRipple
                onClick={() => {
                  navigate(`/${data._id}`, { state: { from: location } });
                  // <Navigate to={`/${_id}`} state={{ from: location }} />
                }}
              >
                <ChatBubbleOutlineIcon sx={{ fontSize: "20px" }} />
                {data.comments.length !== 0 && (
                  <IconsText>{data.comments.length}</IconsText>
                )}
              </IconButtonComponent>
              {bookmarkedPost(data._id) ? (
                <IconButtonComponent
                  disableRipple
                  onClick={() => {
                    removeFromBookmark(data._id);
                  }}
                >
                  <BookmarkIcon sx={{ fontSize: "20px", color: "#1D9BF0" }} />
                </IconButtonComponent>
              ) : (
                <IconButtonComponent
                  disableRipple
                  onClick={() => {
                    addToBookmark(data._id);
                  }}
                >
                  <BookmarkBorderIcon sx={{ fontSize: "20px" }} />
                </IconButtonComponent>
              )}
            </IconsContainer>
          </div>
        </RightContainer>
      </CardInnerContainer>
    </CardComponent>
  );
}

export default TweetCard;
