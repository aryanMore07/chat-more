import React, { useState } from 'react';
import './editUserDetails.css';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useContext } from 'react';
import { UserContext } from '../../contexts/userContext';
import { CameraAltSharp, DeleteForever } from '@mui/icons-material';
import EditIcon from '@mui/icons-material/Edit';
import Button from '@mui/material/Button';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const EditUserDetails = () => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const { state, editUserDetails } = useContext(UserContext);

    // UserDetails States 

    const [editedUserImage, setEditedUserImage] = useState(state.userDetails.image);
    const [editedUserFirstname, setEditedUserFirstname] = useState(state.userDetails.firstName);
    const [editedUserLastname, setEditedUserLastname] = useState(state.userDetails.lastName);
    const [editedUserBio, setEditedUserBio] = useState(state.userDetails.bio);
    const [editedUserPortfolio, setEditedUserPortfolio] = useState(state.userDetails.portfolio);

    const editedDetails = {
        image: editedUserImage,
        firstName: editedUserFirstname,
        lastName: editedUserLastname,
        bio: editedUserBio,
        portfolio: editedUserPortfolio
    }

    const editBtnHandler = () => {
        editUserDetails(editedDetails);
        handleClose()
    }


    return (
        <div>
            <button className='edit-btn' onClick={handleOpen}>Edit Profile</button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className='userImage'>
                        <img class="profile-pic" id='select-image' src={editedUserImage} alt={state.userDetails.firstName} />
                    </div>
                    <label htmlFor="select-image">Change image</label>
                    <div className='image-input'>
                        <span>
                            <CameraAltSharp />
                            <input id="file" type="file" 
                                accept="image/*" onChange={(event) => {
                                    setEditedUserImage(event.target.value);
                                }} />
                        </span>
                    </div>
                    <div className='editedUserDetails-inputs'>
                        <div className='input-div'>
                            <label htmlFor="editUserFirstName">FirstName</label>
                            <input type="text" name="firstName" id="editUserFirstName" className='inputs' value={editedUserFirstname} onChange={(event) => {
                                setEditedUserFirstname(event.target.value);
                            }} />
                        </div>
                        <div className='input-div'>
                            <label htmlFor="editUserLastName">LastName</label>
                            <input type="text" name="lastName" id="editUserLastName" className='inputs' value={editedUserLastname} onChange={(event) => {
                                setEditedUserLastname(event.target.value);
                            }} />
                        </div>
                        <div className='input-div'>
                            <label htmlFor="editUserBio">Bio</label>
                            <input type="text" name="bio" id="editUserBio" className='inputs' value={editedUserBio} onChange={(event) => {
                                setEditedUserBio(event.target.value);
                            }} />
                        </div>
                        <div className='input-div'>
                            <label htmlFor="editUserPortfolio">Portfolio</label>
                            <input type="text" name="portfolio" id="editUserPortfolio" className='inputs' value={editedUserPortfolio} onChange={(event) => {
                                setEditedUserPortfolio(event.target.value);
                            }} />
                        </div>
                        <div className='edit-btns'>
                            <Button onClick={handleClose} variant="contained" color='error'><span><DeleteForever /></span>Discard</Button>
                            <Button variant="contained" onClick={editBtnHandler}><span><EditIcon /></span>Edit</Button>
                        </div>
                    </div>
                </Box>
            </Modal>
        </div>
    )
}

export default EditUserDetails
