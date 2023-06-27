import React from 'react';
import './profilePage.css';
import { useContext } from 'react';
import { UserContext } from '../../contexts/userContext';
import { Link } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const ProfileComponent = () => {

    const { state } = useContext(UserContext);
    const [userPosts, setUserPosts] = useState([]);

    const fetchUsersPost = async () => {
        try {
            const response = await axios.get(`/api/posts/user/${state.userDetails.userName}`)
            if (response.status === 200 || response.status === 201) {
                setUserPosts(response.data.posts)
            }
        } catch (error) {
            console.log(error)
        }
    }
    console.log(userPosts);
    useEffect(() => {
        fetchUsersPost()
    }, [])


    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };



    return (
        <div className='profile-div'>
            <div className="user-info">
                <img src={state.userDetails.image} alt="" className='user-picture' />
                <h4>{state?.userDetails?.fullName}</h4>
                <p style={{ color: '#9a9a9a' }}>@{state?.userDetails?.userName}</p>
                <button className='edit-btn'>Edit Profile</button>
                {state?.userBio ? (<p>{state?.userBio}</p>) : (<p>Please add a bio</p>)}
                {state?.userPortfolio ? (<Link>{state?.userBio}</Link>) : (<p>Please add a website</p>)}
                <div className='followings-details-div'>
                    <div className='followings-inner-divs'>
                        {state?.userDetails?.following.length}
                        <span>Following</span>
                    </div>
                    <div className='followings-inner-divs'>
                        2k
                        <span>Posts</span>
                    </div>
                    <div className='followings-inner-divs'>
                        {state?.userDetails?.followers.length}
                        <span>Followers</span>
                    </div>

                </div>
            </div>
            <div className='posts-div'>
                <h4 style={{ marginLeft: '15px' }}><b>Your Posts</b></h4>
                <div>
                    {
                        userPosts.map((post) => {
                            const { _id, content, username } = post;
                            return (
                                <div key={_id} className='users-posts'>
                                    <div className='user-profile'>
                                        <Avatar alt={state.userDetails.fullName} src={state.userDetails.image} />
                                    </div>
                                    <div className='post-info'>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <p><b>{state?.userDetails?.fullName}</b> <span style={{ color: '#9a9a9a' }}>@{username}</span></p>

                                            <div>
                                                <Button
                                                    id="fade-button"
                                                    aria-controls={open ? 'fade-menu' : undefined}
                                                    aria-haspopup="true"
                                                    aria-expanded={open ? 'true' : undefined}
                                                    onClick={handleClick}
                                                >
                                                    <MoreVertIcon />
                                                </Button>
                                                <Menu
                                                    id="fade-menu"
                                                    MenuListProps={{
                                                        'aria-labelledby': 'fade-button',
                                                    }}
                                                    anchorEl={anchorEl}
                                                    open={open}
                                                    onClose={handleClose}
                                                    TransitionComponent={Fade}
                                                >
                                                    <MenuItem onClick={handleClose}><span style={{marginRight: '10px'}}><EditIcon /></span>Edit</MenuItem>
                                                    <MenuItem onClick={handleClose}><span style={{marginRight: '10px'}}><DeleteForeverIcon /></span>Delete</MenuItem>
                                                </Menu>
                                            </div>
                                        </div>
                                        <div className='users-content'>
                                            <p>{content}</p>
                                        </div>
                                        <hr />
                                        <div className='icons-div'>
                                            <span className='icons' ><FavoriteBorderIcon /></span>
                                            <span className='icons' ><ChatBubbleOutlineIcon /></span>
                                            <span className='icons' ><BookmarkBorderIcon /></span>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default ProfileComponent;
