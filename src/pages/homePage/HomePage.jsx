/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useState, useEffect } from "react";
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
import LogoutComponent from "../../component/logoutComponent/LogoutComponent";
import { styled } from "@mui/material/styles";
import { Box, Grid, InputAdornment, OutlinedInput } from "@mui/material";
import { sideNavigationContext } from "../../utils/textUtils";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import { theme } from "../../utils/theme";
import {
  BottomNavigation,
  BottomNavigationAction,
  Paper,
  useMediaQuery,
} from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { FiSearch } from "react-icons/fi";
import SearchModel from "./models/SearchModel";
import ConfirmLogoutModel from "./models/ConfirmLogoutModel";

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
  width: "13%",
  margin: "auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
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

const Input = styled(OutlinedInput)(({ theme }) => ({
  width: "auto",
  height: "45px",
  minHeight: "34px",
  minWidth: "34px",
  display: "flex",
  alignItems: "center",
  margin: "0px",
  paddingLeft: "4.8px",
  position: "relative",
  backgroundColor: "rgb(246, 247, 248)",
  color: "rgb(48, 55, 65)",
  fontSize: "0.875rem",
  border: "1px solid rgb(223, 226, 231)",
  borderRadius: "12px",
  cursor: "pointer",
  transitionProperty: "all",
  transitionDuration: "150ms",
  boxShadow:
    "rgb(255, 255, 255) 0px 2px 0px inset, rgba(232, 234, 238, 0.5) 0px -1.5px 0px inset, rgba(223, 226, 231, 0.5) 0px 1px 2px 0px",
  "&.MuiOutlinedInput-root": {
    "&:hover": {
      borderColor: "transparent",
    },
  },
}));

const Kbd = styled("span")(({ theme }) => ({
  fontSize: "0.75rem",
  fontWeight: "bold",
  lineHeight: "20px",
  marginLeft: "4px",
  border: "1px solid rgb(48, 56, 64)",
  backgroundColor: "white",
  padding: "0px 4px",
  borderRadius: "7px",
}));

const HomeComponent = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  const { state, dispatch } = useContext(UserContext);
  const [openSearchModel, setOpenSearchModel] = useState(false);
  const [openConfirmLoginModel, setOpenConfirmLoginModel] = useState(false);
  const [value, setValue] = React.useState("home");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const renderNavIcons = (menuName, path) => {
    let isActive = pathname === path;
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
        <PersonRoundedIcon
          sx={{ color: isActive ? theme.palette.primary.main : "#000" }}
        />
      );
    }
  };

  const setBottomNavigationValues = () => {
    if (pathname === "/home") {
      setValue("home");
    } else if (pathname === "/explore") {
      setValue("explore");
    } else if (pathname === "/bookmarks") {
      setValue("bookmarks");
    } else if (pathname === "/profile") {
      setValue("profile");
    } else {
      setValue("");
    }
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.ctrlKey && event.key === "s") {
        event.preventDefault();
        setOpenSearchModel(true);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    setBottomNavigationValues();
  }, [pathname]);

  return (
    <>
      <Container>
        <Grid container>
          <Grid item xs={0} sm={2} md={2} sx={{ position: "relative" }}>
            <LeftContainer>
              <List>
                {sideNavigationContext.menu_links.map((menu, index) => {
                  let isActive = pathname === `${menu.path}`;
                  return (
                    <ListItem
                      sx={{
                        borderRadius: "50px",
                        border: isActive ? `1px solid grey` : "none",
                      }}
                      disablePadding
                      key={index}
                    >
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
                    secondaryAction={
                      <LogoutComponent
                        isOpen={openConfirmLoginModel}
                        setIsOpen={setOpenConfirmLoginModel}
                      />
                    }
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
                        primary={`${state.userDetails.firstName} ${state.userDetails.lastName}`}
                        secondary={`@${state.userDetails.username}`}
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
              <Input
                onClick={() => {
                  setOpenSearchModel(!openSearchModel);
                }}
                placeholder="Search Users..."
                aria-label="usernames"
                onChange={(event) => {
                  dispatch({ type: "USER_INPUT", payload: event.target.value });
                }}
                color="secondary"
                startAdornment={
                  <InputAdornment position="start">
                    <FiSearch />
                  </InputAdornment>
                }
                endAdornment={
                  <InputAdornment position="end">
                    <Kbd>Ctrl+S</Kbd>
                  </InputAdornment>
                }
              />
            </RightContainer>
          </Grid>
        </Grid>
        {matches && (
          <Paper
            sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
            elevation={3}
          >
            <BottomNavigation value={value} onChange={handleChange}>
              {sideNavigationContext.menu_links.map((menu, index) => {
                return (
                  <BottomNavigationAction
                    key={index}
                    icon={renderNavIcons(menu.text, menu.path)}
                    value={menu.text.toLowerCase()}
                    label={menu.text}
                    onClick={() => {
                      navigate(menu.path);
                    }}
                  />
                );
              })}
              <BottomNavigationAction
                onClick={() => {
                  setOpenConfirmLoginModel(!openConfirmLoginModel);
                }}
                icon={<LogoutIcon sx={{ color: "#000" }} />}
              />
            </BottomNavigation>
          </Paper>
        )}
      </Container>
      <SearchModel open={openSearchModel} setOpen={setOpenSearchModel} />
      <ConfirmLogoutModel
        open={openConfirmLoginModel}
        setOpen={setOpenConfirmLoginModel}
      />
    </>
  );
};

export default HomeComponent;
