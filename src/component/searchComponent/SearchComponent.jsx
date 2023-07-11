import React, { useState } from 'react';
import './searchComponent.css';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import { useContext } from 'react';
import { UserContext } from '../../contexts/userContext';
import { styled } from "@mui/material/styles";
import Modal from '@mui/material/Modal';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Box from '@mui/material/Box';
// import { useNavigate } from 'react-router';
import Drawer from '@mui/material/Drawer';
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Avatar } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '1px solid #DCDCDC',
    borderRadius: '5px',
    padding: '15px',
    boxShadow: 24,
    p: 4,
    backgroundColor: '#DCDCDC',
    height: 'max-content'
};

const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
}));

const SearchComponent = () => {

    // const navigate = useNavigate();
    const { state, dispatch, searchedData } = useContext(UserContext);
    const [isopen, setIsOpen] = useState(false);
    const handleIsOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);

    return (
        <div>
            <Button variant="outlined" onClick={handleIsOpen} style={{color: 'white', borderColor: 'white'}}><SearchIcon /></Button>
            <Drawer anchor='right' open={isopen}>
                <div style={{ padding: '2rem' }}>
                    <DrawerHeader>
                        <IconButton onClick={handleClose}>
                            <ChevronRightIcon />
                        </IconButton>
                    </DrawerHeader>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1"><SearchIcon /></InputGroup.Text>
                        <Form.Control
                            placeholder="Username"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            onChange={(event) => {
                                dispatch({ type: 'USER_INPUT', payload: event.target.value });
                            }}
                        />
                    </InputGroup>
                </div>
                <hr />
                {searchedData.length === 0 && (<h3 style={{ textAlign: 'center' }}>Search peoples</h3>)}
                {
                    state.userInput &&
                    (
                        searchedData.map((user) => {
                            const { _id, firstName, lastName, username, image } = user;
                            return (
                                <div key={_id} className='user-card'>
                                    <div className='user-details'>
                                        <ListItemButton>
                                            <div style={{ padding: '15px' }}>
                                                <Avatar src={image} alt={firstName} />
                                            </div>
                                            <ListItemText primary={firstName + lastName} secondary={`@${username}`} />
                                        </ListItemButton>
                                    </div>
                                </div>
                            )
                        })
                    )
                }
            </Drawer>
            {/* <Modal
                Isopen={Isopen}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div style={style}>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1"><SearchIcon /></InputGroup.Text>
                            <Form.Control
                                placeholder="Username"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                                onChange={(event) => {
                                    dispatch({ type: 'USER_INPUT', payload: event.target.value });
                                }}
                            />
                        </InputGroup>
                    </div>
                    <div>
                    <hr />
                        {
                            state.userInput &&
                            (
                                searchedData.map((user) => {
                                    const { _id, firstName, lastName, username } = user;
                                    return (
                                        <div key={_id} className='user-card'>
                                            <div className='user-details'>
                                                <ListItemButton>
                                                    <ListItemText primary={firstName + lastName} secondary={`@${username}`} />
                                                </ListItemButton>
                                            </div>
                                        </div>
                                    )
                                })
                            )
                        }
                    </div>
                </Box>
            </Modal> */}
        </div >
    )
}

export default SearchComponent
