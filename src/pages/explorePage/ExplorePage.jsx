import React from 'react';
import './explorePage.css';
import { useContext } from 'react';
import { PostContext } from '../../contexts/postContext';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import Avatar from '@mui/material/Avatar';
import PostSettingComponent from '../../component/postSettingComponent/PostSettingComponent';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useNavigate } from 'react-router';

const ExploreComponent = () => {

  const { postData, bookmarkData, addToBookmark, removeFromBookmark, likePost, dislikePost } = useContext(PostContext);
  const bookmarkedPost = (postId) => bookmarkData.find((post) => post._id === postId);
  const likedPost = (postId) => postData.find(({ _id, likes }) => _id === postId && likes.likedBy.find(({ _id }) => _id === postId));
  const navigate = useNavigate();
  return (
    <div className='explore-posts-div'>
      <h4><b>Explore</b></h4>
      <div className='explore-div'>
        {
          postData.map((post) => {
            const { _id, username, content, likes, image, firstName, lastName } = post
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
                    <p style={{ marginLeft: '15px' }}><b>{firstName}{lastName}</b> <span style={{ color: '#9a9a9a' }}>@{username}</span></p>
                    <div>
                      <PostSettingComponent />
                    </div>
                  </div>
                  <div className='users-content'>
                    {content}
                    <hr />
                    <div className='icons-div'>
                      {
                        likedPost(_id) ?
                          (
                            <span className='icons' onClick={() => {
                              dislikePost(_id)
                            }}><FavoriteIcon /></span>
                          )
                          :
                          (
                            <span className='icons' onClick={() => {
                              likePost(_id)
                            }}><FavoriteBorderIcon /> {likes.likeCount}</span>
                          )
                      }
                      <span className='icons' onClick={() => {
                        navigate(`/${_id}`)
                      }}><ChatBubbleOutlineIcon /></span>
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
    </div >
  )
}

export default ExploreComponent;