import React from "react";
import landingPageImage from "../../images/landing-page-picture.svg";
import { Link, useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { Box, Button, Grid, useMediaQuery } from "@mui/material";

const Container = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "calc(100vh - 65px)",
  [theme.breakpoints.down("md")]: {
    height: "100%",
    padding: `${theme.spacing(5)} 0px`,
  },
}));

const InnerContainer = styled(Box)(({ theme }) => ({
  width: "90%",
  margin: "auto",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

const LeftContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  margin: "auto",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "flex-start",
}));

const RightContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  margin: "auto",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

const LeftSideHeading = styled(Box)(({ theme }) => ({
  fontSize: "3.5rem",
  fontWeight: 800,
}));

const LeftSideTitles = styled(Box)(({ theme }) => ({
  fontWeight: 600,
  fontSize: "10px",
}));

const JoinnowBtn = styled(Button)(({ theme }) => ({
  width: "100%",
  padding: "15px",
  color: "white",
  fontWeight: 900,
  cursor: "pointer",
  marginBottom: "10px",
  border: "none",
  boxShadow: "0 0 1rem rgba(0,0,0,.6)",
  backgroundColor: "#ff3b30",
  textTransform: "uppercase",
  "&:hover": {
    backgroundColor: "#ff3b30",
  },
  "&.MuiButton-root": {
    borderRadius: "0px",
  },
}));

const LinkComponent = styled(Link)(({ theme }) => ({
  color: "#ff3b30",
  width: "100%",
  textAlign: "center",
  textDecoration: "none",
  "&:hover": {
    textDecoration: "underline",
  },
}));

const Image = styled("img")(({ theme }) => ({
  width: "100%",
  height: "100%",
}));

const Landingpage = () => {
  const matches = useMediaQuery((theme) => theme.breakpoints.down("md"));
  const navigate = useNavigate();
  return (
    <Container>
      <InnerContainer>
        <Grid container spacing={matches && 4}>
          <Grid item xs={12} sm={12} md={6}>
            <LeftContainer>
              <LeftSideHeading>
                <span style={{ color: "#ff3b30" }}>Chat</span>
                <span style={{ color: "black" }}>More</span>
              </LeftSideHeading>
              <Box>
                <LeftSideTitles>
                  <span
                    style={{
                      fontSize: "35px",
                      color: "#9a9a9a",
                    }}
                  >
                    FOLLOW
                  </span>
                  PEOPLE AROUND THE GLOBE
                </LeftSideTitles>
                <LeftSideTitles>
                  <span
                    style={{
                      fontSize: "35px",
                      color: "#9a9a9a",
                    }}
                  >
                    CONNECT
                  </span>
                  WITH YOUR FRIENDS
                </LeftSideTitles>
                <LeftSideTitles>
                  <span
                    style={{
                      fontSize: "35px",
                      color: "#9a9a9a",
                    }}
                  >
                    SHARE
                  </span>
                  WHAT YOU THINK
                </LeftSideTitles>
              </Box>
              <Box>
                <JoinnowBtn
                  onClick={() => {
                    navigate("/auth-signup");
                  }}
                >
                  Join Now
                </JoinnowBtn>
                <div className="go-to-auth-btn-div">
                  <LinkComponent to="/auth-login" className="go-to-auth-btn">
                    Already have an account?
                  </LinkComponent>
                </div>
              </Box>
            </LeftContainer>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <RightContainer>
              <Image src={landingPageImage} alt="social-app" />
            </RightContainer>
          </Grid>
        </Grid>
      </InnerContainer>
    </Container>
  );
};

export default Landingpage;
