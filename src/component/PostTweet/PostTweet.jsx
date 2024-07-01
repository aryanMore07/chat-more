import React, { useContext } from "react";
import "./postTweet.css";
import Avatar from "@mui/material/Avatar";
import { UserContext } from "../../contexts/userContext";
import TextField from "@mui/material/TextField";
import { PostContext } from "../../contexts/postContext";
import { useState } from "react";
import FilterPostPopOver from "../filterPostPopOver/FilterPostPopOver";
import { FilteredPostContext } from "../../contexts/filterPostContext";
import { Box, Button, Card, Grid, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import TweetCard from "./card_widgets/TweetCard";
import { theme } from "../../utils/theme";

const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  rowGap: theme.spacing(1),
  padding: `${theme.spacing(2)} 0px`,
  width: "95%",
  margin: "auto",
  boxSizing: "border-box",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));

const TopContainer = styled(Card)(({ theme }) => ({
  display: "flex",
  padding: theme.spacing(2),
  boxSizing: "border-box",
  width: "100%",
}));

const InputContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  rowGap: theme.spacing(2),
  alignItems: "flex-end",
}));

const TextFieldComponent = styled(TextField)(({ theme }) => ({
  width: "100%",
  "& .MuiFilledInput-root": {
    borderRadius: "0px",
  },
}));

const PostButton = styled(Button)(({ theme }) => ({
  fontWeight: 500,
  width: "150px",
  "&:hover": {
    backgroundColor: theme.palette.primary.main,
    color: "#fff",
  },
}));

const AvatarContainer = styled(Box)(({ theme }) => ({
  width: "50px",
  height: "50px",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
}));

const Heading = styled(Typography)(({ theme }) => ({
  fontSize: "24px",
  fontWeight: 600,
  fontFamily: "Poppins",
  margin: `${theme.spacing(2)} 0px`,
}));

const PostTweetComponent = () => {
  const { state } = useContext(UserContext);
  const { postMessage } = useContext(PostContext);
  const { filterPostData } = useContext(FilteredPostContext);
  const { firstName, lastName, username, image } = state.userDetails;

  const [input, setInput] = useState({
    content: "",
    firstName: "",
    lastName: "",
    username: "",
    image: "",
    comments: [],
  });

  const postBtnHandler = () => {
    if (input.content === "") {
      alert("Please input the feild");
    } else {
      postMessage(input);
      setInput({
        content: "",
        firstName: "",
        lastName: "",
        username: "",
        image: "",
        comments: [],
      });
    }
  };
  return (
    <Container>
      <Heading>Home</Heading>
      <TopContainer>
        <AvatarContainer>
          <Avatar
            alt={state.userDetails.firstName}
            src={state.userDetails.image}
          />
        </AvatarContainer>
        <InputContainer>
          <TextFieldComponent
            id="filled-multiline-static"
            label="Whats happening...?"
            multiline
            rows={4}
            variant="filled"
            value={input.content}
            onChange={(event) => {
              setInput({
                content: event.target.value,
                firstName: firstName,
                lastName: lastName,
                username: username,
                image: image,
                comments: [],
              });
            }}
          />
          <PostButton variant="outlined" onClick={postBtnHandler}>
            Post
          </PostButton>
        </InputContainer>
      </TopContainer>
      <Stack
        direction="row"
        justifyContent="flex-end"
        alignItems="center"
        sx={{ margin: `${theme.spacing(1)} 0px`, width: "100%" }}
      >
        <FilterPostPopOver />
      </Stack>
      <Grid container spacing={2}>
        {filterPostData.length === 0 && (
          <Grid item md={12}>
            <h1>No posts to show!</h1>
          </Grid>
        )}
        {filterPostData.map((post, index) => {
          return (
            <Grid item xs={12} sm={12} md={12} key={index}>
              <TweetCard data={post} />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default PostTweetComponent;
