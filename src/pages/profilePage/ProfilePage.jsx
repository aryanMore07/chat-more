/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import "./profilePage.css";
import { useContext } from "react";
import { UserContext } from "../../contexts/userContext";
import { Link } from "react-router-dom";
import { PostContext } from "../../contexts/postContext";
import EditUserDetails from "../../component/editUserDetailsComponent/EditUserDetails";
import { styled } from "@mui/material/styles";
import { Avatar, Box, Grid, Typography } from "@mui/material";
import TweedCard from "./card_widgets/TweedCard";

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

const ProfileComponent = () => {
  const { state } = useContext(UserContext);
  const { postData } = useContext(PostContext);

  const loggedInUserposts = postData.filter(
    (post) => post.username === state?.userDetails?.username
  );

  return (
    <Container>
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
      <Grid container spacing={2}>
        {loggedInUserposts?.length === 0 && (
          <Grid item xs={12} sm={12} md={12}>
            <Heading>No post to show</Heading>
          </Grid>
        )}
        {loggedInUserposts?.length > 0 && (
          <Grid item xs={12} sm={12} md={12}>
            <Heading>Your Posts</Heading>
          </Grid>
        )}
        {loggedInUserposts.map((post, index) => {
          return (
            <Grid item key={index} xs={12} sm={12} md={12}>
              <TweedCard data={post} />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default ProfileComponent;
