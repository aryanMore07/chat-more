import React, { useContext } from "react";
import "./homePage.css";
import HomeIcon from "@mui/icons-material/Home";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Avatar from "@mui/material/Avatar";
import { UserContext } from "../../contexts/userContext";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import LogoutComponent from "../../component/logoutComponent/LogoutComponent";
import LogoutIcon from "@mui/icons-material/Logout";
import { styled } from "@mui/material/styles";
import { Box, Grid } from "@mui/material";

const Container = styled(Box)(({ theme }) => ({
  width: "90%",
  margin: "auto",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

const MiddleContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  minHeight: "calc(100vh - 65px)",
}));

const HomeComponent = () => {
  const navigate = useNavigate();
  const { state, dispatch, searchedData, allUserData } =
    useContext(UserContext);

  return (
    <Container>
      <Grid container>
        <Grid item md={2}>
          <div className="leftSide-div aside-left">
            <ul className="leftSide-ulelements" style={{}}>
              <NavLink to="/home" className="sidebar-nav-links">
                <li className="list-style">
                  <span className="action-icons">
                    <HomeIcon />
                  </span>
                  <span className="route-names">Home</span>
                </li>
              </NavLink>
              <NavLink to="explore" className="sidebar-nav-links">
                <li className="list-style">
                  <span className="action-icons">
                    <RocketLaunchIcon />
                  </span>
                  <span className="route-names">Explore</span>
                </li>
              </NavLink>
              <NavLink to="bookmarks" className="sidebar-nav-links">
                <li className="list-style">
                  <span className="action-icons">
                    <BookmarkBorderIcon />
                  </span>
                  <span className="route-names">Bookmark</span>
                </li>
              </NavLink>
              <NavLink to="profile" className="sidebar-nav-links">
                <li className="list-style">
                  <span className="action-icons">
                    <AccountCircleIcon />
                  </span>
                  <span className="route-names">Profile</span>
                </li>
              </NavLink>
              <NavLink
                className="sidebar-nav-links logout-btn"
                style={{ color: "black" }}
                onClick={() => {
                  dispatch({ type: "LOGOUT_USER" });
                }}
              >
                <li className="list-style">
                  <span className="logout-btn action-icons">
                    <LogoutIcon />
                  </span>
                </li>
              </NavLink>
            </ul>
            {state?.userDetails?.firstName && (
              <div className="user-div">
                <div>
                  <Avatar alt="Travis Howard" src={state?.userDetails?.image} />
                </div>
                <div>
                  <p style={{ margin: "0px" }}>
                    <b>
                      {state.userDetails.firstName}
                      {state.userDetails.lastName}
                    </b>
                  </p>
                  <p style={{ margin: "0px" }}>@{state.userDetails.username}</p>
                </div>
                <div className="user-menu-btn">
                  <LogoutComponent />
                </div>
              </div>
            )}
          </div>
        </Grid>
        <Grid item md={8}>
          <MiddleContainer>
            <Outlet />
          </MiddleContainer>
        </Grid>
        <Grid item md={2}>
          <div className="rightSide-div aside-right">
            <input
              placeholder="Search Username..."
              aria-label="Username"
              aria-describedby="basic-addon1"
              onChange={(event) => {
                dispatch({ type: "USER_INPUT", payload: event.target.value });
              }}
            />
            {state.userInput && (
              <div className="searched-users-output">
                <ul
                  style={{
                    listStyle: "none",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {searchedData.map((user) => {
                    const { _id, firstName, lastName, username } = user;
                    return (
                      <li
                        style={{
                          padding: "0.5rem 1rem",
                          border: "1px solid",
                          borderColor: "rgba(0,0,0,0.2)",
                          margin: "0.5rem",
                          borderRadius: "0.5rem",
                          boxShadow: "0 2px 8px 0 rgba(0,0,0,0.1)",
                          cursor: "pointer",
                        }}
                        key={_id}
                        onClick={() => {
                          navigate(`/user/${_id}`);
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            width: "100%",
                          }}
                        >
                          <Avatar alt={firstName} />
                          <div>
                            <b>
                              {firstName} {lastName}
                            </b>{" "}
                            <br />@{username}
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
            <div className="all-user">
              {allUserData.map((user) => {
                const { _id, firstName, lastName, username, image } = user;
                return (
                  <List key={_id}>
                    <ListItem style={{ borderRadius: "5rem" }} disablePadding>
                      <ListItemButton
                        onClick={() => {
                          navigate(`/user/${_id}`);
                        }}
                      >
                        <ListItemIcon>
                          <Avatar alt={firstName} src={image} />
                        </ListItemIcon>
                        <ListItemText
                          primary={`${firstName}${lastName}`}
                          secondary={"@" + username}
                        />
                        <ListItemIcon>
                          <AddCircleOutlineIcon />
                        </ListItemIcon>
                      </ListItemButton>
                    </ListItem>
                  </List>
                );
              })}
            </div>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomeComponent;
