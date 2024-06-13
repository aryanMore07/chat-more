import React from "react";
import "./navbar.css";
import SearchComponent from "../searchComponent/SearchComponent";
import { useLocation } from "react-router";
import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

const Container = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "65px",
  backgroundColor: "#2c394b",
}));

const InnerContainer = styled(Box)(({ theme }) => ({
  width: "90%",
  height: "100%",
  margin: "auto",
  display: "flex",
  alignItems: "center",
}));

const Heading = styled(Typography)(({ theme }) => ({
  fontSize: "32px",
  fontFamily: "Carter One",
}));

const Navbar = () => {
  const location = useLocation();

  const checkLocation =
    location.pathname === "/home" ||
    location.pathname === "/explore" ||
    location.pathname === "/bookmarks" ||
    location.pathname === "/profile";

  return (
    <Container>
      <InnerContainer>
        <Heading>
          <span style={{ color: "#ff3b30" }}>Chat</span>
          <span style={{ color: "white" }}>More</span>
        </Heading>

        <div
          className="search-div"
          style={{ display: checkLocation ? "block" : "none" }}
        >
          <SearchComponent />
        </div>
      </InnerContainer>
    </Container>
  );
};

export default Navbar;
