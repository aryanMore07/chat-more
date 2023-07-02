import React from 'react'
import './bookmarkPage.css';
import { useContext } from 'react';
import { PostContext } from '../../contexts/postContext';
import Avatar from '@mui/material/Avatar';
import PostSettingComponent from '../../component/postSettingComponent/PostSettingComponent';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import BookmarkIcon from '@mui/icons-material/Bookmark';

const BookmarkComponent = () => {

  const { bookmarkData, removeFromBookmark, likePost } = useContext(PostContext);

  return (
    <div className='bookmark-main-div'>
      {bookmarkData.length === 0 ? <></> : (<h3><b>Your Bookmarks</b></h3>)}
      <div className='bookmarks-div'>
        {
          bookmarkData.length === 0 ?
            (<h2>No Bookmarks</h2>)
            :
            bookmarkData.map((post) => {
              const { _id, username, content, likes, image, fullName } = post
              return (
                <div key={_id} className='bookmark-posts'>
                  <div className='user-image'>
                    <Avatar alt={username} src={image} />
                  </div>
                  <div className='post-details'>
                    <div className='bmp-first-div'>
                      <p><b>{fullName} </b>@{username}</p>
                      <span><PostSettingComponent /></span>
                    </div>
                    <div className='bmp-second-div'>
                      {content}
                    </div>
                    <hr />
                    <div className='icons-div'>
                      <span className='icons' onClick={() => {
                        likePost(_id)
                      }}><FavoriteBorderIcon /> {likes.likeCount}</span>
                      <span className='icons' ><ChatBubbleOutlineIcon /></span>
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
    </div>
  )
}

export default BookmarkComponent;
