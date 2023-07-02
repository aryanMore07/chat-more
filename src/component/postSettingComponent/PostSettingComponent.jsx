import React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const PostSettingComponent = () => {

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
        <MenuItem style={{display: 'flex', justifyContent: 'center'}}  onClick={handleClose}>
          Add to Favorites
        </MenuItem>
        <MenuItem style={{display: 'flex', justifyContent: 'center'}}  onClick={handleClose}>
          Go to Post
        </MenuItem>
        <MenuItem  style={{display: 'flex', justifyContent: 'center'}} onClick={handleClose}>
          Unfollow
        </MenuItem>
        <MenuItem style={{display: 'flex', justifyContent: 'center'}}  onClick={handleClose}>
          Close
        </MenuItem>
    </Menu>
  </div>
  )
}

export default PostSettingComponent
