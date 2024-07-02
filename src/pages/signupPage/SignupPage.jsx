import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { styled } from "@mui/material/styles";
import { Box, Button, Grid, OutlinedInput, Typography } from "@mui/material";

const Container = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "calc(100vh - 65px)",
  [theme.breakpoints.down("md")]: {
    height: "100%",
    padding: `${theme.spacing(5)} 0px`,
  },
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

const SignupComponent = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const signUpHandler = async (event) => {
    event.preventDefault();
    try {
      if (firstName && userName && email && password && confirmPassword) {
        if (password === confirmPassword) {
          const response = await axios.post("/api/auth/signup", {
            firstName: firstName,
            lastName: lastName,
            username: userName,
            email: email,
            password: password,
          });
          if (response.status === 200 || response.status === 201) {
            toast.success("Signup Successful 🔥", {
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
            setFirstName("");
            setUserName("");
            setEmail("");
            setPassword("");
            setConfirmPassword("");
            navigate("/auth-login");
          }
        } else {
          toast.warn("Password and Confirm password must be same", {
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
      } else {
        toast.warn("Please input all fields", {
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
    } catch (error) {
      if (error.response.status === 422) {
        toast.warn("Email already exist", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else {
        toast.warn("Something went wrong, Please try again", {
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
        <Title>Signup</Title>
        <Grid container spacing={1} component="form" onSubmit={signUpHandler}>
          <Grid item xs={12} sm={12} md={6}>
            <Input
              required
              type="text"
              name="firstname"
              id="userfirstname"
              placeholder="First Name"
              value={firstName}
              onChange={(event) => {
                setFirstName(event.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Input
              required
              type="text"
              name="lastname"
              id="userLastname"
              placeholder="Last Name"
              value={lastName}
              onChange={(event) => {
                setLastName(event.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <Input
              required
              type="text"
              name="username"
              id="username"
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
              type="email"
              name="userEmail"
              id="userEmail"
              placeholder="Email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <Input
              required
              type="password"
              id="userPassword"
              placeholder="Password"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <Input
              required
              type="password"
              id="userConfirmPassword"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(event) => {
                setConfirmPassword(event.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <SignupBtn type="submit">Signup</SignupBtn>
          </Grid>
        </Grid>
        <Link to="/auth-login" className="create-new-acc-btn">
          Already have an account? {">"}
        </Link>
      </InnerContainer>
    </Container>
  );
};

export default SignupComponent;
