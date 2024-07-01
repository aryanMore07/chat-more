/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import "./explorePage.css";
import { useContext } from "react";
import { PostContext } from "../../contexts/postContext";
import { styled } from "@mui/material/styles";
import { Box, Grid, Typography } from "@mui/material";
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

const ExploreComponent = () => {
  const { postData } = useContext(PostContext);

  return (
    <Container>
      <Heading>Explore</Heading>
      <Grid container spacing={2}>
        {postData.map((post, index) => {
          return (
            <Grid xs={12} sm={12} md={12} item key={index}>
              <TweetCard data={post} />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default ExploreComponent;
