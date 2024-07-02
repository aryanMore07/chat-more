import React from "react";
import "./singlePost.css";
import { useLocation, useNavigate, useParams } from "react-router";
import { useContext } from "react";
import { PostContext } from "../../contexts/postContext";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Avatar from "@mui/material/Avatar";
import SinglePostSettings from "../../component/singlePostSettings/SinglePostSettings";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useState } from "react";
import { UserContext } from "../../contexts/userContext";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import {
  Card,
  Divider,
  Grid,
  IconButton,
  OutlinedInput,
  Stack,
  Typography,
} from "@mui/material";
import { theme } from "../../utils/theme";
import { PostTime } from "../../utils/postTime/PostTime";

const Container = styled(Box)(({ theme }) => ({
  width: "90%",
  margin: "auto",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-start",
  flexDirection: "column",
  padding: `${theme.spacing(2)} 0px`,
  [theme.breakpoints.down("sm")]: {
    paddingBottom: `${theme.spacing(8)}`,
    width: "100%",
  },
}));

const PostContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100%",
}));

const PostCardContainer = styled(Card)(({ theme }) => ({
  width: "100%",
  height: "100%",
  padding: theme.spacing(2),
  boxSizing: "border-box",
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
}));

const IconsText = styled("span")(({ theme }) => ({
  fontSize: "13px",
  paddingLeft: "4px",
}));

const TweetContentContainer = styled(Box)(({ theme }) => ({
  padding: `${theme.spacing(1.5)} 0px`,
  paddingLeft: `${theme.spacing(1)}`,
  paddingRight: `${theme.spacing(1)}`,
  paddingTop: `${theme.spacing(0)}`,
}));

const DividerComponent = styled(Divider)(({ theme }) => ({
  margin: `${theme.spacing(1)} 0px`,
}));

const CommentInputContainer = styled(Card)(({ theme }) => ({
  width: "100%",
  height: "100%",
  margin: `${theme.spacing(2)} 0px`,
  padding: `${theme.spacing(1)}`,
  boxSizing: "border-box",
  [theme.breakpoints.down("sm")]: {
    padding: `${theme.spacing(1.5)} ${theme.spacing(2)}`,
  },
}));

const PostBtn = styled(Button)(({ theme }) => ({
  width: "100%",
  height: "100%",
  "&:hover": {
    color: "#fff",
    backgroundColor: theme.palette.primary.main,
  },
}));

const CardTopContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  //   height: "100%",
  display: "flex",
  gap: theme.spacing(1),
}));

const AvatarContainer = styled(Box)(({ theme }) => ({
  width: "fit-content",
  height: "50px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
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

const CommentsContainer = styled(Card)(({ theme }) => ({
  width: "100%",
  height: "100%",
  padding: theme.spacing(2),
  boxSizing: "border-box",
}));

const SinglePost = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { postId } = useParams();
  const [commentInput, setCommentInput] = useState("");
  const { state } = useContext(UserContext);
  const {
    postData,
    bookmarkPost,
    addToBookmark,
    removeFromBookmark,
    dislikePost,
    addComment,
  } = useContext(PostContext);
  const bookmarkedPost = (postId) =>
    bookmarkPost.find((post) => post._id === postId);
  const likedPost = (postId) =>
    postData.find(
      ({ _id, likes }) =>
        _id === postId &&
        likes.likedBy.find(({ _id }) => _id === state.userDetails._id)
    );

  // Getting data for the post that selected
  const selectedData = postData.find((post) => post._id === postId);

  // Destructuring the data
  const {
    _id,
    firstName,
    lastName,
    username,
    image,
    content,
    likes,
    comments,
    createdAt,
  } = selectedData;

  // Post, Edit, & Delete Comment Handlers

  const postCommentBtnHandler = (postId) => {
    addComment(postId, commentInput);
    setCommentInput("");
  };
  return (
    <Container>
      <Stack
        direction="row"
        alignItems="center"
        spacing={1}
        sx={{ margin: `${theme.spacing(2)} 0px`, cursor: "pointer" }}
        onClick={() => {
          const from = location.state?.from?.pathname;
          navigate(from);
        }}
      >
        <IconButtonComponent disableRipple>
          <ArrowBackIcon sx={{ color: "#000" }} />
        </IconButtonComponent>
        <h4>Post</h4>
      </Stack>
      <PostContainer>
        <PostCardContainer>
          <CardTopContainer>
            <AvatarContainer>
              <Avatar alt={firstName} src={image} />
            </AvatarContainer>
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{ width: "100%" }}
            >
              <UsernameText>
                <UserText>
                  {firstName} {lastName}
                </UserText>
                <UserIdText>
                  @{username} | {PostTime(createdAt)}
                </UserIdText>
              </UsernameText>
              <SinglePostSettings postId={_id} />
            </Stack>
          </CardTopContainer>
          <DividerComponent sx={{ color: "#cfcfcf" }} />
          <TweetContentContainer>{content}</TweetContentContainer>
          <DividerComponent sx={{ color: "#cfcfcf", marginBottom: "0px" }} />
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
              <IconButtonComponent disableRipple>
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
        </PostCardContainer>
        <CommentInputContainer>
          <Grid container spacing={1}>
            <Grid item xs={2} sm={1} md={1}>
              <Stack
                sx={{ height: "100%" }}
                justifyItems="center"
                alignItems="flex-end"
              >
                <Avatar
                  sx={{ height: "100%", width: "50px" }}
                  alt={state.userDetails.firstName}
                  src={state.userDetails.image}
                />
              </Stack>
            </Grid>
            <Grid item xs={10} sm={9} md={9}>
              <OutlinedInput
                type="text"
                value={commentInput}
                placeholder="Add a comment"
                onChange={(event) => {
                  setCommentInput(event.target.value);
                }}
                fullWidth
                color="secondary"
                sx={{
                  height: "100%",
                  width: "100%",
                }}
              />
            </Grid>
            <Grid item xs={12} sm={2} md={2}>
              <PostBtn
                variant="outlined"
                onClick={() => {
                  postCommentBtnHandler(postId);
                }}
              >
                Post
              </PostBtn>
            </Grid>
          </Grid>
        </CommentInputContainer>
        <Grid container spacing={2}>
          {comments?.map((post) => {
            const { _id, image, username, text } = post;
            return (
              <Grid key={_id} item xs={12} sm={12} md={12}>
                <CommentsContainer>
                  <CardTopContainer>
                    <AvatarContainer>
                      <Avatar alt={firstName} src={image} />
                    </AvatarContainer>
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      sx={{ width: "100%" }}
                    >
                      <UsernameText sx={{ justifyContent: "center" }}>
                        <UserText>@{username}</UserText>
                      </UsernameText>
                      <SinglePostSettings postId={_id} />
                    </Stack>
                  </CardTopContainer>
                  <DividerComponent sx={{ color: "#cfcfcf" }} />
                  <TweetContentContainer>{text}</TweetContentContainer>
                </CommentsContainer>
              </Grid>
            );
          })}
        </Grid>
      </PostContainer>
    </Container>
  );
};

export default SinglePost;
