import React from 'react'
import './bookmarkPage.css';
import { useContext } from 'react';
import { PostContext } from '../../contexts/postContext';
import Avatar from '@mui/material/Avatar';
import PostSettingComponent from '../../component/postSettingComponent/PostSettingComponent';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { UserContext } from '../../contexts/userContext';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { PostTime } from '../../utils/postTime/PostTime';
import { useLocation, useNavigate } from 'react-router';

const BookmarkComponent = () => {



  let location = useLocation();
  const navigate = useNavigate();
  const { state } = useContext(UserContext);
  const { postData, removeFromBookmark, likePost, dislikePost, bookmarkPost } = useContext(PostContext);
  const likedPost = (postId) => postData.find(({ _id, likes }) => _id === postId && likes.likedBy.find(({ _id }) => _id === state.userDetails._id));

  return (
    <div className='bookmark-main-div'>
      {bookmarkPost.length === 0 ? <></> : (<h4><b>Your Bookmarks</b></h4>)}
      {
        bookmarkPost.length === 0 ?
          (<h2>No Bookmarks</h2>)
          :
          bookmarkPost.map((post) => {
            const { _id, username, content, likes, image, firstName, lastName, createdAt } = post
            return (
              <div key={_id} className='bookmark-posts'>
                <div className='user-image'>
                  <Avatar alt={username} src={image} />
                </div>
                <div className='post-details'>
                  <div className='bmp-first-div'>
                    <p onClick={() => {
                      if (username === state?.userDetails?.username) {
                        navigate('/profile', { state: { from: location } });
                      } else {
                        navigate(`/users/${username}`, { state: { from: location } });
                      }
                    }} className='user-tag'><b>{firstName} {lastName} </b><span style={{ color: '#9a9a9a' }}>  @{username} | {PostTime(createdAt)}</span></p>
                    <span><PostSettingComponent postId={_id} /></span>
                  </div>
                  <div className='bmp-second-div' onClick={() => {
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
                    }}><ChatBubbleOutlineIcon /></span>
                    <span className='icons' onClick={() => {
                      removeFromBookmark(_id)
                    }}><BookmarkIcon /></span>
                  </div>
                </div>
              </div>
            )
          })
      }
    </div>
  )
}

export default BookmarkComponent;
