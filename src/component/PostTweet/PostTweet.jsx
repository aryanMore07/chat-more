import React, { useContext } from 'react';
import './postTweet.css';
import Avatar from '@mui/material/Avatar';
import { UserContext } from '../../contexts/userContext';
import TextField from "@mui/material/TextField";
import { PostContext } from '../../contexts/postContext';
import { useState } from 'react';
import FilterPostPopOver from '../filterPostPopOver/FilterPostPopOver';
import { FilteredPostContext } from '../../contexts/filterPostContext';
import { PostTime } from '../../utils/postTime/PostTime';
import PostSettingComponent from '../postSettingComponent/PostSettingComponent';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useLocation, useNavigate } from 'react-router';

const PostTweetComponent = () => {


  let location = useLocation();
  const navigate = useNavigate();
  const { state } = useContext(UserContext);
  const { postMessage, bookmarkPost, postData, dislikePost, addToBookmark, removeFromBookmark, likePost, } = useContext(PostContext);
  const { filterPostData } = useContext(FilteredPostContext);
  const { firstName, lastName, userName, image } = state.userDetails;
  const bookmarkedPost = (postId) => bookmarkPost.find((post) => post._id === postId);
  const likedPost = (postId) => postData.find(({ _id, likes }) => _id === postId && likes.likedBy.find(({ _id }) => _id === state.userDetails._id));

  const [input, setInput] = useState({ content: "", firstName: "", lastName: "", username: "", image: "", comments: [] });

  const postBtnHandler = () => {
    // console.log(input.content === '');
    if (input.content === "") {
      alert('Please input the feild')
    } else {
      postMessage(input);
      setInput({ content: "", firstName: "", lastName: "", username: "", image: "", comments: [] });
    }
  }

  return (
    <div style={{ padding: '3rem' }}>
      <h4 style={{ textAlign: 'center', marginBottom: '10px' }}><b>Home</b></h4>
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
                setInput({ content: event.target.value, firstName: firstName, lastName: lastName, username: userName, image: image, comments: [] });
              }}
            />
          </div>
          <div className='post-btn-div'>
            <button className='post-btn' onClick={postBtnHandler}>Post</button>
          </div>
        </div>
      </div>
      <div className='filter-div'>
        <FilterPostPopOver />
      </div>
      <div className='user-posts'>
              {
                filterPostData.length === 0 && <h1>No posts to show!</h1>
              }
        {
          filterPostData.map((post) => {
            const { _id, username, content, likes, image, firstName, lastName, comments, createdAt } = post;
            return (
              <div key={_id} className='explore-post'>
                <div className='user-img'>
                  <Avatar alt={username} src={image} />
                </div>
                <div className='explore-post-details'>
                  <div style={{
                    display: 'flex',
                    width: '100%',
                    justifyContent: 'space-between'
                  }}>
                    <p onClick={() => {
                      if (username === state?.userDetails?.username) {
                        navigate('/profile', { state: { from: location } });
                      } else {
                        navigate(`/users/${username}`, { state: { from: location } });
                      }
                    }} className='user-tag' style={{ marginLeft: '15px' }}><b>{firstName}{lastName}</b> <span style={{ color: '#9a9a9a' }}>@{username} | {PostTime(createdAt)}</span></p>
                    <div>
                      <PostSettingComponent postId={_id} userName={username} />
                    </div>
                  </div>
                  <div className='users-content'>
                    <div onClick={() => {
                      navigate(`/${_id}`, { state: { from: location } });
                    }}>
                      {content}
                    </div>
                    <hr />
                    <div className='icons-div'>
                      {
                        likedPost(_id) ?
                          (
                            <span className='icons' onClick={() => {
                              dislikePost(_id)
                            }}><FavoriteIcon /> {likes.likeCount}</span>
                          )
                          :
                          (
                            <span className='icons' onClick={() => {
                              likePost(_id)
                            }}><FavoriteBorderIcon /> {likes.likeCount}</span>
                          )
                      }
                      <span className='icons' onClick={() => {
                        navigate(`/${_id}`, { state: { from: location } });
                        // <Navigate to={`/${_id}`} state={{ from: location }} />
                      }}><ChatBubbleOutlineIcon /> {comments.length}</span>
                      {
                        bookmarkedPost(_id) ?
                          (
                            <span className='icons' onClick={() => {
                              removeFromBookmark(_id)
                            }}><BookmarkIcon /></span>
                          )
                          :
                          (
                            <span className='icons' onClick={() => {
                              addToBookmark(_id)
                            }} ><BookmarkBorderIcon /></span>
                          )
                      }
                    </div>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default PostTweetComponent;
