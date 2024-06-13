import React from "react";
import "./loginPage.css";
import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { UserContext } from "../../contexts/userContext.js";
import { styled } from "@mui/material/styles";
import { Box, Button, Grid, OutlinedInput, Typography } from "@mui/material";

const Container = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "calc(100vh - 65px)",
}));

const InnerContainer = styled(Box)(({ theme }) => ({
  width: "50%",
  margin: "auto",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  rowGap: theme.spacing(2),
  [theme.breakpoints.down("md")]: {
    width: "90%",
  },
}));

const Title = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  fontSize: "28px",
  lineHeight: "38px",
  textTransform: "uppercase",
  fontWeight: 600,
}));

const Input = styled(OutlinedInput)(({ theme }) => ({
  width: "100%",
  "&.MuiOutlinedInput-root": {
    borderRadius: "0px",
  },
}));

const SignupBtn = styled(Button)(({ theme }) => ({
  width: "100%",
  fontSize: "20px",
  color: "#fff",
  backgroundColor: "#ff3b30",
  "&.MuiButton-root": {
    borderRadius: "0px",
  },
  "&:hover": {
    backgroundColor: "#ff3b30",
  },
}));

const LoginComponent = () => {
  const { dispatch } = useContext(UserContext);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const loginHandler = async (event) => {
    event.preventDefault();
    try {
      if (userName && password) {
        const response = await axios.post("/api/auth/login", {
          username: userName,
          password: password,
        });
        if (response.status === 200 || response.status === 201) {
          toast.success("Login successful 🔥", {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          localStorage.setItem("token", response.data.encodedToken);
          localStorage.setItem(
            "userDetails",
            JSON.stringify(response.data.foundUser)
          );
          dispatch({
            type: "ADD_USER_DETAILS",
            payload: response.data.foundUser,
          });
          setUserName("");
          setPassword("");
          navigate("/home");
        }
      }
    } catch (error) {
      if (error.response.status === 404) {
        toast.warn("User not found", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else if (error.response.status === 401) {
        toast.warn("Please Input valid credentials", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    }
  };

  return (
    <Container>
      <InnerContainer>
        <Title>Login</Title>
        <Grid container component="form" onSubmit={loginHandler} spacing={2}>
          <Grid item xs={12} sm={12} md={12}>
            <Input
              required
              type="text"
              placeholder="Username"
              value={userName}
              onChange={(event) => {
                setUserName(event.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <Input
              required
              type="password"
              placeholder="Password"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <SignupBtn className="login-btn" type="submit">
              Login
            </SignupBtn>
          </Grid>
        </Grid>
        <Link to="/auth-signup" className="create-new-acc-btn">
          Create New Account {">"}
        </Link>
      </InnerContainer>
    </Container>
  );
};

export default LoginComponent;
