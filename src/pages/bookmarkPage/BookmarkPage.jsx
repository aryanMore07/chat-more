/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import "./bookmarkPage.css";
import { useContext } from "react";
import { PostContext } from "../../contexts/postContext";
import { Box, Grid, Typography } from "@mui/material";
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

const BookmarkComponent = () => {
  const { postData, bookmarkPost, fetchUserBookmarks } =
    useContext(PostContext);

  useEffect(() => {
    fetchUserBookmarks();
  }, [postData]);

  return (
    <Container>
      {bookmarkPost.length === 0 ? <></> : <Heading>Your Bookmarks</Heading>}
      <Grid container spacing={2}>
        {bookmarkPost.length === 0 ? (
          <Grid item xs={12} sm={12} md={12}>
            <Heading sx={{ textAlign: "center" }}>
              No Bookmarks to show!
            </Heading>
          </Grid>
        ) : (
          bookmarkPost.map((post, index) => {
            return (
              <Grid item xs={12} sm={12} md={12} key={index}>
                <TweetCard data={post} />
              </Grid>
            );
          })
        )}
      </Grid>
    </Container>
  );
};

export default BookmarkComponent;
