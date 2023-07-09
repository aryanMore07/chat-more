import React, { useContext } from 'react';
import './postTweet.css';
import Avatar from '@mui/material/Avatar';
import { UserContext } from '../../contexts/userContext';
import TextField from "@mui/material/TextField";
import { PostContext } from '../../contexts/postContext';
import { useState } from 'react';
const PostTweetComponent = () => {

  const { state } = useContext(UserContext);
  const { postMessage } = useContext(PostContext);
  const { firstName, lastName, userName, image } = state.userDetails;
  const [input, setInput] = useState({ content: "", firstName: "", lastName: "", username: "", image: "", comments: [] });

  const postBtnHandler = () => {
    postMessage(input);
  }

  return (
    <div style={{ padding: '3rem' }}>
      <h4 style={{ textAlign: 'center', marginBottom: '10px' }}>Home</h4>
      <div className='post-something-div'>
        <div className='post-user-profile-div'>
          <Avatar alt={state.userDetails.firstName} src={state.userDetails.image} />
        </div>
        <div style={{ width: '100%', padding: '18px' }}>
          <div className='input-div'>
            <TextField
              id="filled-multiline-static"
              label="Whats happening...?"
              multiline
              rows={4}
              variant="filled"
              className='post-input'
              value={input.content}
              onChange={(event) => {
                setInput({ content: event.target.value, firstName: firstName, lastName: lastName, username: userName, image: image,  comments: [] });
              }}
            />
          </div>
          <div className='post-btn-div'>
            <button className='post-btn' onClick={postBtnHandler}>Post</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostTweetComponent;
