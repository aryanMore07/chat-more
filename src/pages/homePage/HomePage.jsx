import React, { useContext, useEffect, useState } from 'react';
import './homePage.css';
import HomeIcon from '@mui/icons-material/Home';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Avatar from '@mui/material/Avatar';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import { UserContext } from '../../contexts/userContext';
import { NavLink, Outlet } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import axios from 'axios';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText'; 
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const HomeComponent = () => {

    const [allUser, setAllusers] = useState([]);

    const fetchAllUsersData = async () => {
        try {
            const response = await axios.get('/api/users');
            if (response.status === 200 || response.status === 201) {
                setAllusers(response.data.users);
            }
        } catch (error) {
            console.log(error);
        }
    }

    const { state } = useContext(UserContext);
    useEffect(() => {
        fetchAllUsersData();
    }, [])
    return (
        <div className='home-div container'>
            <div className="leftSide-div">
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column' }}>
                    <NavLink to='/home' className='sidebar-nav-links'><li className='list-style'><span style={{ paddingRight: '15px' }}><HomeIcon /></span>Home</li></NavLink>
                    <NavLink to='explore' className='sidebar-nav-links'><li className='list-style'><span style={{ paddingRight: '15px' }}><RocketLaunchIcon /></span>Explore</li></NavLink>
                    <NavLink to='bookmarks' className='sidebar-nav-links'><li className='list-style'><span style={{ paddingRight: '15px' }}><BookmarkBorderIcon /></span>Bookmark</li></NavLink>
                    <NavLink to='profile' className='sidebar-nav-links'><li className='list-style'><span style={{ paddingRight: '15px' }}><AccountCircleIcon /></span>Profile</li></NavLink>
                </ul>
                {
                    state?.userDetails?.fullName &&
                    <div className='user-div'>
                    <div>
                        <Avatar alt="Travis Howard" src={state?.userDetails?.image} />
                    </div>
                    <div>
                        <p style={{ margin: '0px' }}><b>{state.userDetails.fullName}</b></p>
                        <p style={{ margin: '0px' }}>@{state.userDetails.userName}</p>
                    </div>
                    <div className='user-menu-btn'>
                        <MoreVertIcon />
                    </div>
                </div>}
            </div>
            <div className="middle-div">
                <Outlet />
            </div>
            <div className="rightSide-div">
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1"><SearchIcon /></InputGroup.Text>
                    <Form.Control
                        placeholder="Username"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                    />
                </InputGroup>
                <div className="all-user">
                    {
                        allUser.map((user) => {
                            const { id, fullName, userName, image } = user
                            return (
                                <List key={id}>
                                    <ListItem style={{borderRadius: '5rem'}} disablePadding>
                                        <ListItemButton>
                                            <ListItemIcon>
                                                <Avatar alt={fullName} src={image} />
                                            </ListItemIcon>
                                            <ListItemText primary={fullName} secondary={"@" + userName} />
                                            <ListItemIcon>
                                                <AddCircleOutlineIcon />
                                            </ListItemIcon>
                                        </ListItemButton>
                                    </ListItem>
                                </List>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default HomeComponent
