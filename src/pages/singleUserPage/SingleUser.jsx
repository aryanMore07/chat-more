import React from 'react';
import './singleUserPage.css';
import { useContext } from 'react';
import { UserContext } from '../../contexts/userContext';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
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
import { PostContext } from '../../contexts/postContext';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import CancelIcon from '@mui/icons-material/Cancel';
import { useState } from 'react';
import BookmarkIcon from '@mui/icons-material/Bookmark';


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

const SingleUser = () => {


  const navigate = useNavigate();
  const { userId } = useParams();

  // Model Handler

  const [modelOpen, setModelOpen] = React.useState(false);
  const handleModelOpen = () => setModelOpen(true);
  const handleModelClose = () => setModelOpen(false);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const { state, followUser, unFollowUser } = useContext(UserContext);
  const [editedPost, setEditedPost] = useState('')
  const { postData, addToBookmark, removeFromBookmark, editPost, deletePost, bookmarkPost, likePost } = useContext(PostContext);

  // Function to find the Selected user Details
  const selectedUserData = state.allUser.find((user) => user._id === userId);
  const { _id, firstName, lastName, username, image, bio, portfolio, following, followers } = selectedUserData;

  // Function to filter only data of the selectedUser
  const loggedInUserposts = postData.filter((post) => post.username === selectedUserData.username);

  // Function to find whether the user have bookmarked the post or not
  const bookedMarkPost = (postId) => bookmarkPost.find((post) => post._id === postId);

  // Function check whether the user have follwed or not
  const checkUserFollowing = (userId) => state.userDetails.following.find((user) => user._id === userId);

  // Follow button Handler
  const followUserBtn = () => {
    followUser(_id);
  }
  const unFollowUserBtn = () => {
    unFollowUser(_id);
  }

  // console.log(selectedUserData.followers)
  // console.log(selectedUserData.following)

  return (
    <div className='profile-div'>
      <div className="user-info">
        <Avatar src={selectedUserData.image} alt={selectedUserData.firstName} className='user-picture' style={{ height: '220px', width: '220px', margin: '8px' }} />
        <h4>{firstName} {lastName}</h4>
        <p style={{ color: '#9a9a9a' }}>@{username}</p>
        {
          checkUserFollowing(_id) ? (<button className='unfollow-btn' onClick={unFollowUserBtn}>Unfollow</button>) : (
            <button className='follow-btn' onClick={followUserBtn}>Follow</button>)
        }
        {bio ? (<p>{bio}</p>) : (<p>Please add a bio</p>)}
        {portfolio ? (<Link>{portfolio}</Link>) : (<p>Please add a website</p>)}
        <div className='followings-details-div'>
          <div className='followings-inner-divs'>
            {following.length}
            <span>Following</span>
          </div>
          <div className='followings-inner-divs'>
            {loggedInUserposts.length}
            <span>Posts</span>
          </div>
          <div className='followings-inner-divs'>
            {followers.length}
            <span>Followers</span>
          </div>

        </div>
      </div>
      <div className='posts-div'>
        {loggedInUserposts.length === 0 && (<h4 style={{ marginLeft: '15px' }}><b>No post to show</b></h4>)}
        {loggedInUserposts.length > 0 && (<h4 style={{ marginLeft: '15px' }}><b>All Posts</b></h4>)}
        <div style={{ padding: '3rem' }}>
          {
            loggedInUserposts.map((post) => {
              const { _id, firstName, lastName, content, username, likes } = post;
              return (
                <div key={_id} className='users-posts'>
                  <div className='user-profile'>
                    <Avatar alt={selectedUserData.firstName} src={selectedUserData.image} />
                  </div>
                  <div className='post-info'>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px' }}>
                      <p><b>{firstName} {lastName}</b> <span style={{ color: '#9a9a9a' }}>@{username}</span></p>

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
                          <MenuItem >
                            <div onClick={handleModelOpen}><span style={{ marginRight: '10px' }}><EditIcon /></span>Edit</div>
                            <Modal
                              open={modelOpen}
                              onClose={handleModelClose}
                              aria-labelledby="modal-modal-title"
                              aria-describedby="modal-modal-description"
                            >
                              <Box sx={style}>
                                <Typography id="modal-modal-title" variant="h6" component="h2">
                                  Edit post
                                </Typography>
                                <div style={{ margin: '15px 0px 15px 0px' }}>
                                  <TextField
                                    hiddenLabel
                                    id="filled-hidden-label-normal"
                                    defaultValue={content}
                                    variant="filled"
                                    fullWidth
                                    multiline
                                    maxRows={4}
                                    onChange={(event) => {
                                      setEditedPost(event.target.value)
                                    }}
                                  />
                                </div>
                                <Button color='error' startIcon={<CancelIcon />} onClick={handleModelClose}>Discard</Button>
                                <Button color='primary' startIcon={<EditIcon />} onClick={() => {
                                  editPost(_id, editedPost);
                                  handleClose()
                                }}>Edit</Button>
                              </Box>
                            </Modal>
                          </MenuItem>
                          <MenuItem onClick={() => {
                            deletePost(_id);
                          }}><span style={{ marginRight: '10px' }}><DeleteForeverIcon /></span>Delete</MenuItem>
                        </Menu>
                      </div>
                    </div>
                    <div className='users-content'>
                      <p>{content}</p>
                    </div>
                    <hr />
                    <div className='icons-div'>
                      <span className='icons' onClick={() => {
                        likePost(_id)
                      }}><FavoriteBorderIcon /> {likes.likeCount}</span>
                      <span className='icons' onClick={() => {
                        navigate(`/${_id}`)
                      }}><ChatBubbleOutlineIcon /></span>
                      {
                        bookedMarkPost(_id) ?
                          (<span className='icons' onClick={() => {
                            removeFromBookmark(_id)
                          }}><BookmarkIcon /></span>)
                          :
                          (
                            <span className='icons' onClick={
                              () => {
                                addToBookmark(_id)
                              }
                            } ><BookmarkBorderIcon /></span>
                          )
                      }
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

export default SingleUser
