import React from 'react';
import './searchComponent.css';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import { useContext } from 'react';
import { UserContext } from '../../contexts/userContext';
import Modal from '@mui/material/Modal';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Box from '@mui/material/Box';
// import { useNavigate } from 'react-router';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

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

const SearchComponent = () => {

    // const navigate = useNavigate();
    const { state, dispatch, searchedData } = useContext(UserContext);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    console.log(searchedData);

    return (
        <div>
            <Button variant='outlined' onClick={handleOpen}><SearchIcon /></Button>
            <Modal
                open={open}
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
            </Modal>
        </div>
    )
}

export default SearchComponent
