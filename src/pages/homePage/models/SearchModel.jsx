import {
  Avatar,
  Box,
  Divider,
  Grid,
  InputAdornment,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Modal,
  OutlinedInput,
  Stack,
  styled,
} from "@mui/material";
import React, { useContext } from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { UserContext } from "../../../contexts/userContext";
import { useNavigate } from "react-router";
import { theme } from "../../../utils/theme";

const Container = styled(Box)(({ theme }) => ({
  maxWidth: "640px",
  minHeight: "640px",
  boxShadow: "rgba(9, 11, 11, 0.2) 0px 4px 16px",
  borderRadius: "12px",
  background: "#fff",
  flexDirection: "column",
  margin: "60px auto auto",
  position: "relative",
  boxSizing: "border-box",
  outline: "none",
}));

const Input = styled(OutlinedInput)(({ theme }) => ({
  width: "100%",
  height: "100%",
  "& .MuiOutlinedInput-input": {
    paddingLeft: "16px",
    fontSize: "1rem",
    fontWeight: 500,
  },
  "& .MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
  "&:hover .MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
}));

const Kbd = styled("span")(({ theme }) => ({
  alignSelf: "center",
  cursor: "pointer",
  height: "1.5rem",
  marginRight: "8px",
  padding: "2.4px 6.4px 4.8px",
  fontSize: "0px",
  borderRadius: "6px",
  backgroundColor: "rgb(246, 247, 248)",
  border: "1px solid rgb(223, 226, 231)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  "&::before": {
    content: `"esc"`,
    fontFamily: "Menlo, Consolas, Droid Sans Mono, monospace",
    fontSize: "0.75rem",
    fontWeight: 700,
    color: "rgb(48, 55, 65)",
  },
}));

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
  "& .MuiTypography-root": {
    fontFamily: "Poppins",
    fontWeight: isActive ? 600 : 400,
  },
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const CustomList = styled(List)({
  overflow: "auto",
  height: "calc(640px - 100px)",
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

function SearchModel({ open, setOpen }) {
  const navigate = useNavigate();
  const { state, dispatch, searchedData, allUserData } =
    useContext(UserContext);

  const handleClose = () => {
    setOpen(!open);
  };

  const handleSearchChange = (event) => {
    dispatch({ type: "USER_INPUT", payload: event.target.value });
  };

  const filteredUsers = state.userInput ? searchedData : allUserData;

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{
        "&.MuiModal-root": {
          backdropFilter: "blur(2px)",
          transition: "opacity 120ms ease 0s",
        },
      }}
    >
      <Container>
        <Grid container spacing={1}>
          <Grid item xs={11} sm={11} md={11}>
            <Input
              startAdornment={
                <InputAdornment position="start">
                  <SearchOutlinedIcon />
                </InputAdornment>
              }
              placeholder="Which user are you looking for?"
              onChange={handleSearchChange}
            />
          </Grid>
          <Grid item xs={1} sm={1} md={1}>
            <Stack
              justifyContent="center"
              alignItems="center"
              sx={{ height: "100%" }}
            >
              <Kbd />
            </Stack>
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <Divider sx={{ color: "#cfcfcf" }} />
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <CustomList>
              {filteredUsers.length > 0 ? (
                filteredUsers.map((user) => {
                  const { _id, firstName, lastName, username, image } = user;
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
          </Grid>
        </Grid>
      </Container>
    </Modal>
  );
}

export default SearchModel;
