/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext } from "react";
import "./homePage.css";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import BookmarkRoundedIcon from "@mui/icons-material/BookmarkRounded";
import Avatar from "@mui/material/Avatar";
import { UserContext } from "../../contexts/userContext";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import LogoutComponent from "../../component/logoutComponent/LogoutComponent";
import { styled } from "@mui/material/styles";
import { Box, Grid } from "@mui/material";
import { sideNavigationContext } from "../../utils/textUtils";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded";
import { theme } from "../../utils/theme";
import {
  BottomNavigation,
  BottomNavigationAction,
  Paper,
  useMediaQuery,
} from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";

const Container = styled(Box)(({ theme }) => ({
  width: "90%",
  margin: "auto",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    paddingBottom: `${theme.spacing(8)}`,
  },
}));

const MiddleContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  minHeight: "calc(100vh - 65px)",
}));

const LeftContainer = styled(Box)(({ theme }) => ({
  width: "15%",
  margin: "auto",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  minHeight: "calc(100vh - 105px)",
  position: "fixed",
  padding: `${theme.spacing(4)} 0px`,
  borderRight: `1px solid #cfcfcf`,
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

const RightContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  margin: "auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  minHeight: "calc(100vh - 105px)",
  position: "fixed",
  padding: `${theme.spacing(4)} ${theme.spacing(2)}`,
  borderLeft: `1px solid #cfcfcf`,
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const ListItemTextComponent = styled(ListItemText)(({ theme, isActive }) => ({
  "& .MuiTypography-root": {
    fontFamily: "Poppins",
    fontWeight: isActive ? 600 : 400,
  },
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const ListItemButtonComponent = styled(ListItemButton)(({ theme }) => ({
  borderRadius: "50px",
}));

const ListItemIconComponent = styled(ListItemIcon)(({ theme }) => ({
  "&.MuiListItemIcon-root": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minWidth: "35px",
  },
}));

const HomeComponent = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  const { state, dispatch, searchedData, allUserData } =
    useContext(UserContext);

  const renderNavIcons = (menuName) => {
    let isActive = pathname === `/${menuName.toLowerCase()}`;
    if (menuName === "Home") {
      return (
        <HomeRoundedIcon
          sx={{ color: isActive ? theme.palette.primary.main : "#000" }}
        />
      );
    } else if (menuName === "Explore") {
      return (
        <RocketLaunchIcon
          sx={{ color: isActive ? theme.palette.primary.main : "#000" }}
        />
      );
    } else if (menuName === "Bookmarks") {
      return (
        <BookmarkRoundedIcon
          sx={{ color: isActive ? theme.palette.primary.main : "#000" }}
        />
      );
    } else {
      return (
        <PersonOutlineRoundedIcon
          sx={{ color: isActive ? theme.palette.primary.main : "#000" }}
        />
      );
    }
  };

  return (
    <>
      <Container>
        <Grid container>
          <Grid item xs={0} sm={2} md={2} sx={{ position: "relative" }}>
            <LeftContainer>
              <List>
                {sideNavigationContext.menu_links.map((menu) => {
                  return (
                    <ListItem disablePadding>
                      <ListItemButtonComponent
                        onClick={() => {
                          navigate(menu.path);
                        }}
                      >
                        <ListItemIconComponent>
                          {renderNavIcons(menu.text)}
                        </ListItemIconComponent>
                        <ListItemTextComponent
                          isActive={menu.path === pathname}
                          primary={menu.text}
                        />
                      </ListItemButtonComponent>
                    </ListItem>
                  );
                })}
              </List>
              {state?.userDetails?.firstName && (
                <List
                  sx={{
                    [theme.breakpoints.down("md")]: {
                      display: "none",
                    },
                  }}
                >
                  <ListItem
                    secondaryAction={<LogoutComponent />}
                    disablePadding
                  >
                    <ListItemButtonComponent
                      onClick={() => {
                        navigate("/profile");
                      }}
                    >
                      <ListItemIcon>
                        <Avatar
                          alt={state.userDetails.firstName}
                          src={state?.userDetails?.image}
                        />
                      </ListItemIcon>
                      <ListItemTextComponent
                        primary={`${state.userDetails.firstName} 
                      ${state.userDetails.lastName}`}
                      />
                    </ListItemButtonComponent>
                  </ListItem>
                </List>
              )}
            </LeftContainer>
          </Grid>
          <Grid item xs={12} sm={10} md={8}>
            <MiddleContainer>
              <Outlet />
            </MiddleContainer>
          </Grid>
          <Grid item xs={0} sm={0} md={2}>
            <RightContainer>
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
              <List>
                {allUserData.map((user) => {
                  const { _id, firstName, lastName, username, image } = user;
                  return (
                    <ListItem
                      key={_id}
                      style={{ borderRadius: "5rem", width: "100%" }}
                      disablePadding
                    >
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
                        <ListItemIcon
                          sx={{
                            "& .MuiListItemIcon-root": {
                              width: "fit-content",
                            },
                          }}
                        >
                          <AddCircleOutlineIcon />
                        </ListItemIcon>
                      </ListItemButton>
                    </ListItem>
                  );
                })}
              </List>
            </RightContainer>
          </Grid>
        </Grid>
        {matches && (
          <Paper
            sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
            elevation={3}
          >
            <BottomNavigation>
              {sideNavigationContext.menu_links.map((menu, index) => {
                return (
                  <BottomNavigationAction
                    key={index}
                    icon={renderNavIcons(menu.text)}
                    onClick={() => {
                      navigate(menu.path);
                    }}
                  />
                );
              })}
              <BottomNavigationAction
                onClick={() => {
                  localStorage.clear();
                  dispatch({ type: "LOGOUT_USER" });
                }}
                icon={<LogoutIcon sx={{ color: "#000" }} />}
              />
            </BottomNavigation>
          </Paper>
        )}
      </Container>
    </>
  );
};

export default HomeComponent;
