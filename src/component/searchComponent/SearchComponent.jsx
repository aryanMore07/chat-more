import React, { useState } from "react";
import "./searchComponent.css";
import MenuIcon from "@mui/icons-material/Menu";
import { useContext } from "react";
import { UserContext } from "../../contexts/userContext";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import {
  Avatar,
  Box,
  InputAdornment,
  List,
  ListItem,
  ListItemIcon,
  OutlinedInput,
} from "@mui/material";
import { FiSearch } from "react-icons/fi";
import { theme } from "../../utils/theme";

const Container = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "auto",
  display: "flex",
  flexDirection: "column",
}));

const DrawerHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(1),
  justifyContent: "flex-end",
  height: "49px",
  marginBottom: theme.spacing(1),
  backgroundColor: theme.palette.secondary.main,
}));

const Input = styled(OutlinedInput)(({ theme }) => ({
  width: "90%",
  margin: "0px auto",
  height: "45px",
  minHeight: "34px",
  minWidth: "34px",
  display: "flex",
  alignItems: "center",
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

const CustomList = styled(List)({
  overflow: "auto",
  height: "auto",
  "&::-webkit-scrollbar": {
    width: "6px",
  },
  "&::-webkit-scrollbar-track": {
    backgroundColor: "#fff",
    borderRadius: "12px",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "#888",
    borderRadius: "3px",
  },
  "&::-webkit-scrollbar-thumb:hover": {
    backgroundColor: "#555",
  },
});

const ListItemButtonComponent = styled(ListItemButton)(({ theme }) => ({
  borderRadius: "0px",
  border: "1px solid #cfcfcf",
  marginBottom: theme.spacing(0.5),
}));

const ListItemIconComponent = styled(ListItemIcon)(({ theme }) => ({
  "&.MuiListItemIcon-root": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minWidth: "35px",
  },
}));

const ListItemTextComponent = styled(ListItemText)(({ theme, isActive }) => ({
  color: "#000",
  "& .MuiTypography-root": {
    fontFamily: "Poppins",
    fontWeight: isActive ? 600 : 400,
  },
}));

const SearchComponent = () => {
  const navigate = useNavigate();
  const { state, dispatch, searchedData, allUserData } =
    useContext(UserContext);
  const [isopen, setIsOpen] = useState(false);
  const handleIsOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const filteredUsers = state.userInput ? searchedData : allUserData;

  return (
    <Box
      sx={{
        [theme.breakpoints.up("md")]: {
          display: "none",
        },
      }}
    >
      <IconButton
        variant="outlined"
        onClick={handleIsOpen}
        style={{ color: "white", borderColor: "white" }}
      >
        <MenuIcon sx={{ color: "#fff" }} />
      </IconButton>
      <Drawer
        sx={{
          "& .MuiDrawer-paper": {
            width: "65%",
          },
        }}
        anchor="right"
        open={isopen}
      >
        <Container>
          <DrawerHeader>
            <IconButton onClick={handleClose}>
              <ChevronRightIcon style={{ color: "#fff" }} />
            </IconButton>
          </DrawerHeader>
          <Input
            placeholder="Search Users..."
            aria-label="usernames"
            onChange={(event) => {
              dispatch({ type: "USER_INPUT", payload: event.target.value });
            }}
            color="secondary"
            startAdornment={
              <InputAdornment
                position="start"
                sx={{ padding: `0px ${theme.spacing(1)}` }}
              >
                <FiSearch />
              </InputAdornment>
            }
          />
        </Container>
        <CustomList>
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user) => {
              const { _id, firstName, lastName, username, image } = user;
              console.log(user);
              return (
                <ListItem disablePadding key={_id}>
                  <ListItemButtonComponent
                    onClick={() => {
                      navigate(`/user/${_id}`);
                      dispatch({ type: "USER_INPUT", payload: "" });
                      handleClose();
                    }}
                  >
                    <ListItemIconComponent>
                      <Avatar
                        sx={{ marginRight: theme.spacing(2) }}
                        alt={firstName}
                        src={image}
                      />
                    </ListItemIconComponent>
                    <ListItemTextComponent
                      primary={`${firstName} ${lastName}`}
                      secondary={`@${username}`}
                    />
                  </ListItemButtonComponent>
                </ListItem>
              );
            })
          ) : (
            <h1 style={{ textAlign: "center" }}>No user Found</h1>
          )}
        </CustomList>
      </Drawer>
    </Box>
  );
};

export default SearchComponent;
