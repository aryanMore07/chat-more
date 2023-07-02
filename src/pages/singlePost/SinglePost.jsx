import React from 'react';
import './singlePost.css';
import { useNavigate, useParams } from 'react-router';
import { useContext } from 'react';
import { PostContext } from '../../contexts/postContext';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Avatar from '@mui/material/Avatar';
import SinglePostSettings from '../../component/singlePostSettings/SinglePostSettings';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import FavoriteIcon from '@mui/icons-material/Favorite';

const SinglePost = () => {

    const { postId } = useParams();
    const { postData, bookmarkData, addToBookmark, removeFromBookmark, likePost, dislikePost } = useContext(PostContext);
    const bookmarkedPost = (postId) => bookmarkData.find((post) => post._id === postId);
    const likedPost = (postId) => postData.find(({ _id, likes }) => _id === postId && likes.likedBy.find(({ _id }) => _id === postId));
    const selectedData = postData.find((post) => post._id === postId)
    const navigate = useNavigate();
    const { _id, fullName, username, image, content, likes } = selectedData;
    return (
        <div className='singlePost-div'>
            <div style={{ padding: '15px', display: 'flex' }}><span style={{ marginRight: '5px', cursor: 'pointer', width: '28px' }}><ArrowBackIcon /></span> <h4>Post</h4></div>
            <div className='selected-post'>
                <div className='selected-firstdiv'>
                    <div style={{ padding: '8px' }}>
                        <Avatar alt={fullName} src={image} />
                    </div>
                    <div style={{ width: "100%", display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <p><b>{fullName}</b> @{username}</p>
                        <SinglePostSettings />
                    </div>
                </div>
                <div className='selected-secondDiv'>
                    {content}
                </div>
                <hr />
                <b>{likes.likeCount} Likes</b>
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
                <div className='comment-inputDiv'>
                    <div className='comment-input-firstDiv'>
                        <div style={{ padding: '8px' }}>
                            <Avatar alt={fullName} src={image} />
                        </div>
                        <div className='comment-input'>
                            <div className='comment-input-div'>
                                <input type="text" className='input-comment' placeholder='Add a comment' />
                            </div>
                            <button className='post-btn'>Post</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SinglePost
