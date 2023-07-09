import React from 'react';
import './searchComponent.css';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import { useContext } from 'react';
import { UserContext } from '../../contexts/userContext';
import Modal from '@mui/material/Modal';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Avatar } from '@mui/material';
import { useNavigate } from 'react-router';

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
    backgroundColor: '#DCDCDC'
};

const SearchComponent = () => {

    const navigate = useNavigate();
    const { state, dispatch, searchedData, } = useContext(UserContext);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button variant='outlined' onClick={handleOpen}><SearchIcon /></Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
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
                {/* {
                    state.userInput && (
                        <div className='searched-users-output'>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column' }}>
                                {
                                    searchedData.map((user) => {
                                        const { _id, firstName, lastName, username } = user;
                                        return (
                                            <li
                                                style={{
                                                    padding: '0.5rem 1rem',
                                                    border: '1px solid',
                                                    borderColor: 'rgba(0,0,0,0.2)',
                                                    margin: '0.5rem',
                                                    borderRadius: '0.5rem',
                                                    boxShadow: '0 2px 8px 0 rgba(0,0,0,0.1)',
                                                    cursor: 'pointer'
                                                }}
                                                key={_id}
                                                onClick={() => {
                                                    navigate(`/user/${_id}`)
                                                }}
                                            >
                                                <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                                                    <Avatar alt={firstName} />
                                                    <div>
                                                        <b>{firstName} {lastName}</b> <br />
                                                        @{username}
                                                    </div>
                                                </div>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    )
                } */}
            </Modal>
        </div>
    )
}

export default SearchComponent
