import React from "react";
import "./navbar.css";
import SearchComponent from "../searchComponent/SearchComponent";
import { useLocation, useNavigate } from "react-router";
import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

const Container = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "65px",
  backgroundColor: "#2c394b",
  position: "sticky",
  top: "0px",
  zIndex: 10,
}));

const InnerContainer = styled(Box)(({ theme }) => ({
  width: "90%",
  height: "100%",
  margin: "auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
}));

const Heading = styled(Typography)(({ theme }) => ({
  fontSize: "32px",
  fontFamily: "Carter One",
  "&:hover": {
    cursor: "pointer",
  },
}));

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const checkLocation =
    location.pathname === "/home" ||
    location.pathname === "/explore" ||
    location.pathname === "/bookmarks" ||
    location.pathname === "/profile";

  return (
    <Container>
      <InnerContainer>
        <Heading
          onClick={() => {
            navigate("/home");
          }}
        >
          <span style={{ color: "#ff3b30" }}>Chat</span>
          <span style={{ color: "white" }}>More</span>
        </Heading>

        <Box style={{ display: checkLocation ? "block" : "none" }}>
          <SearchComponent />
        </Box>
      </InnerContainer>
    </Container>
  );
};

export default Navbar;
