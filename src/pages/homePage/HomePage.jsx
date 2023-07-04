import React, { useContext, useEffect, useState } from 'react';
import './homePage.css';
import HomeIcon from '@mui/icons-material/Home';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Avatar from '@mui/material/Avatar';
import SearchIcon from '@mui/icons-material/Search';
import { UserContext } from '../../contexts/userContext';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import LogoutComponent from '../../component/logoutComponent/LogoutComponent';

const HomeComponent = () => {

    const navigate = useNavigate();
    const { state, dispatch, searchedData, allUserData } = useContext(UserContext);

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
                    state?.userDetails?.firstName &&
                    <div className='user-div'>
                        <div>
                            <Avatar alt="Travis Howard" src={state?.userDetails?.image} />
                        </div>
                        <div>
                            <p style={{ margin: '0px' }}><b>{state.userDetails.firstName}{state.userDetails.lastName}</b></p>
                            <p style={{ margin: '0px' }}>@{state.userDetails.username}</p>
                        </div>
                        <div className='user-menu-btn'>
                            <LogoutComponent />
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
                        onChange={(event) => {
                            dispatch({ type: 'USER_INPUT', payload: event.target.value });
                        }}
                    />
                </InputGroup>
                {
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
                }
                <div className="all-user">
                    {
                        allUserData.map((user) => {
                            const { _id, firstName, lastName, username, image } = user;
                            return (
                                <List key={_id}>
                                    <ListItem style={{ borderRadius: '5rem' }} disablePadding>
                                        <ListItemButton onClick={() => {
                                            navigate(`/user/${_id}`)
                                        }}>
                                            <ListItemIcon>
                                                <Avatar alt={firstName} src={image} />
                                            </ListItemIcon>
                                            <ListItemText primary={`${firstName}${lastName}`} secondary={"@" + username} />
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
