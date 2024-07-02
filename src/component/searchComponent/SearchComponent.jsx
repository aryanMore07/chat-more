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
import { Avatar } from "@mui/material";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const SearchComponent = () => {
  const navigate = useNavigate();
  const { state, dispatch, searchedData } = useContext(UserContext);
  const [isopen, setIsOpen] = useState(false);
  const handleIsOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <div>
      <IconButton
        variant="outlined"
        onClick={handleIsOpen}
        style={{ color: "white", borderColor: "white" }}
      >
        <MenuIcon sx={{ color: "#fff" }} />
      </IconButton>
      <Drawer anchor="right" open={isopen}>
        <div style={{ padding: "2rem" }}>
          <DrawerHeader>
            <IconButton onClick={handleClose}>
              <ChevronRightIcon />
            </IconButton>
          </DrawerHeader>
          <input
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange={(event) => {
              dispatch({ type: "USER_INPUT", payload: event.target.value });
            }}
          />
        </div>
        <hr />
        {searchedData.length === 0 && (
          <h3 style={{ textAlign: "center" }}>Search peoples</h3>
        )}
        {state.userInput &&
          searchedData.map((user) => {
            const { _id, firstName, lastName, username, image } = user;
            return (
              <div key={_id} className="user-card">
                <div className="user-details">
                  <ListItemButton
                    onClick={() => {
                      navigate(`/user/${_id}`);
                      handleClose();
                    }}
                  >
                    <div style={{ padding: "15px" }}>
                      <Avatar src={image} alt={firstName} />
                    </div>
                    <ListItemText
                      primary={firstName + lastName}
                      secondary={`@${username}`}
                    />
                  </ListItemButton>
                </div>
              </div>
            );
          })}
      </Drawer>
    </div>
  );
};

export default SearchComponent;
