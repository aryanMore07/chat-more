import React, { useContext } from "react";
import "./postTweet.css";
import Avatar from "@mui/material/Avatar";
import { UserContext } from "../../contexts/userContext";
import TextField from "@mui/material/TextField";
import { PostContext } from "../../contexts/postContext";
import { useState } from "react";
import FilterPostPopOver from "../filterPostPopOver/FilterPostPopOver";
import { FilteredPostContext } from "../../contexts/filterPostContext";
import { Grid } from "@mui/material";
import TweetCard from "./card_widgets/TweetCard";

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
    <div style={{ padding: "3rem" }}>
      <h4 style={{ textAlign: "center", marginBottom: "10px" }}>
        <b>Home</b>
      </h4>
      <div className="post-something-div">
        <div className="post-user-profile-div">
          <Avatar
            alt={state.userDetails.firstName}
            src={state.userDetails.image}
          />
        </div>
        <div style={{ width: "100%", padding: "18px" }}>
          <div className="input-div">
            <TextField
              id="filled-multiline-static"
              label="Whats happening...?"
              multiline
              rows={4}
              variant="filled"
              className="post-input"
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
          </div>
          <div className="post-btn-div">
            <button className="post-btn" onClick={postBtnHandler}>
              Post
            </button>
          </div>
        </div>
      </div>
      <div className="filter-div">
        <FilterPostPopOver />
      </div>
      <div className="user-posts">
        <Grid container spacing={2}>
          {filterPostData.length === 0 && (
            <Grid item md={12}>
              <h1>No posts to show!</h1>
            </Grid>
          )}
          {filterPostData.map((post, index) => {
            return (
              <Grid item md={12} key={index}>
                <TweetCard data={post} />
              </Grid>
            );
          })}
        </Grid>
      </div>
    </div>
  );
};

export default PostTweetComponent;
