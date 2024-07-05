import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import React, { useContext } from "react";
import { UserContext } from "../../../contexts/userContext";

function ConfirmLogoutModel({ open, setOpen }) {
  const { dispatch } = useContext(UserContext);
  function handleClose() {
    setOpen(!open);
  }
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <DialogTitle sx={{ textAlign: "center" }}>Are you leaving?</DialogTitle>
      <DialogContent>
        <DialogContentText sx={{ textAlign: "center" }}>
          Are you sure want to logout? All the updates will be lost.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          variant="contained"
          color="success"
          sx={{
            textTransform: "none",
          }}
          onClick={() => {
            localStorage.clear();
            dispatch({ type: "LOGOUT_USER" });
            handleClose();
          }}
        >
          Yes, logout
        </Button>
        <Button
          color="error"
          variant="outlined"
          sx={{
            textTransform: "none",
          }}
          onClick={() => {
            handleClose();
          }}
        >
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default ConfirmLogoutModel;
