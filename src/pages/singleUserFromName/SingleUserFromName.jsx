import React from "react";
import "./singleUserFromName.css";
import { useContext } from "react";
import { UserContext } from "../../contexts/userContext";
import { Link, useParams } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import { PostContext } from "../../contexts/postContext";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import TweetCard from "./card_widgets/TweetCard";

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

const Heading = styled(Typography)(({ theme }) => ({
  fontSize: "24px",
  fontWeight: 600,
  fontFamily: "Poppins",
  margin: `${theme.spacing(2)} 0px`,
}));

const SingleUserFromName = () => {
  const { userName } = useParams();

  const { state, followUser, unFollowUser } = useContext(UserContext);
  const { postData } = useContext(PostContext);

  // Function to find the Selected user Details
  const selectedUserData = state.allUser.find(
    (user) => user.username === userName
  );
  const {
    _id,
    firstName,
    lastName,
    username,
    bio,
    portfolio,
    following,
    followers,
  } = selectedUserData;

  // Function to filter only data of the selectedUser
  const loggedInUserposts = postData.filter(
    (post) => post.username === selectedUserData.username
  );

  // Function check whether the user have follwed or not
  const checkUserFollowing = (userId) =>
    state.userDetails.following.find((user) => user._id === userId);

  // Follow button Handler
  const followUserBtn = () => {
    followUser(_id);
  };
  const unFollowUserBtn = () => {
    unFollowUser(_id);
  };

  return (
    <Container>
      <div className="user-info">
        <Avatar
          src={selectedUserData.image}
          alt={selectedUserData.firstName}
          className="user-picture"
          style={{ height: "220px", width: "220px", margin: "8px" }}
        />
        <h4>
          {firstName} {lastName}
        </h4>
        <p className="user-tag" style={{ color: "#9a9a9a" }}>
          @{username}
        </p>
        {checkUserFollowing(_id) ? (
          <button className="unfollow-btn" onClick={unFollowUserBtn}>
            Unfollow
          </button>
        ) : (
          <button className="follow-btn" onClick={followUserBtn}>
            Follow
          </button>
        )}
        {bio ? <p>{bio}</p> : <p>Please add a bio</p>}
        {portfolio ? <Link>{portfolio}</Link> : <p>Please add a website</p>}
        <div className="followings-details-div">
          <div className="followings-inner-divs">
            {following.length}
            <span>Following</span>
          </div>
          <div className="followings-inner-divs">
            {loggedInUserposts.length}
            <span>Posts</span>
          </div>
          <div className="followings-inner-divs">
            {followers.length}
            <span>Followers</span>
          </div>
        </div>
      </div>
      <Grid container spacing={2}>
        {loggedInUserposts.length === 0 && (
          <Grid item xs={12} sm={12} md={12}>
            <Heading>No post to show</Heading>
          </Grid>
        )}
        {loggedInUserposts.length > 0 && (
          <Grid item xs={12} sm={12} md={12}>
            <Heading>All Posts</Heading>
          </Grid>
        )}

        {loggedInUserposts.map((post, index) => {
          return (
            <Grid key={index} item xs={12} sm={12} md={12}>
              <TweetCard data={post} />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default SingleUserFromName;
