import React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useContext } from 'react';
import { PostContext } from '../../contexts/postContext';
import { useLocation, useNavigate } from 'react-router';

const PostSettingComponent = ({ postId }) => {

  const location = useLocation();
  const navigate = useNavigate();
  const { bookmarkData, addToBookmark, removeFromBookmark, } = useContext(PostContext);
  const bookmarkedPost = (postId) => bookmarkData.find((post) => post._id === postId);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {
          bookmarkedPost(postId) ?
            (
              <MenuItem style={{ display: 'flex', justifyContent: 'center' }} onClick={() => {
                removeFromBookmark(postId)
              }}>
                Remove from Favorites
              </MenuItem>)
            :
            (
              <MenuItem style={{ display: 'flex', justifyContent: 'center' }} onClick={() => {
                addToBookmark(postId)
              }}>
                Add to Favorites
              </MenuItem>)
        }
        <MenuItem style={{ display: 'flex', justifyContent: 'center' }} onClick={() => {
            navigate(`/${postId}`, {state: {from: location}})
        }}>
          Go to Post
        </MenuItem>
        <MenuItem style={{ display: 'flex', justifyContent: 'center' }} onClick={handleClose}>
          Unfollow
        </MenuItem>
        <MenuItem style={{ display: 'flex', justifyContent: 'center' }} onClick={handleClose}>
          Close
        </MenuItem>
      </Menu>
    </div>
  )
}

export default PostSettingComponent
