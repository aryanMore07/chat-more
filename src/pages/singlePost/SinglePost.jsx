import React from 'react';
import './singlePost.css';
import { useLocation, useNavigate, useParams } from 'react-router';
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
import { useState } from 'react';
import { UserContext } from '../../contexts/userContext';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import Modal from '@mui/material/Modal';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { DeleteForever } from '@mui/icons-material';
import CancelIcon from '@mui/icons-material/Cancel';

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
}
const SinglePost = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const { postId } = useParams();
    const [commentInput, setCommentInput] = useState('');
    const [editedComment, setEditedComment] = useState('');
    const { state } = useContext(UserContext);
    const { postData, bookmarkPost, addToBookmark, removeFromBookmark, likePost, dislikePost, addComment, editComment, deleteComment } = useContext(PostContext);
    const bookmarkedPost = (postId) => bookmarkPost.find((post) => post._id === postId);
    const likedPost = (postId) => postData.find(({ _id, likes }) => _id === postId && likes.likedBy.find(({ _id }) => _id === state.userDetails._id));
 

    // Getting data for the post that selected
    const selectedData = postData.find((post) => post._id === postId);

    // Destructuring the data
    const { _id, firstName, lastName, username, image, content, likes, comments } = selectedData;

    // Model Handler
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    // Post, Edit, & Delete Comment Handlers

    const postCommentBtnHandler = (postId) => {
        addComment(postId, commentInput);
        setCommentInput('');
    }

    const editCommentBtnHandler = (postId, commentId) => {
        editComment(postId, commentId, editedComment);
        setCommentInput('');
        handleClose();
    }

    const deleteCommentBtnHandler = (postId, commentId) => {
        deleteComment(postId, commentId);
        setCommentInput('');
        handleClose();
    }

    return (
        <div className='singlePost-div'>
            <div style={{ padding: '15px', display: 'flex' }} onClick={() => {
                const from = location.state?.from?.pathname;
                navigate(from);
            }}><span style={{ marginRight: '5px', cursor: 'pointer', width: '28px' }}><ArrowBackIcon /></span> <h4>Post</h4></div>
            <div className='selected-post'>
                <div className='selectedpost-info'>
                    <div className='selected-firstdiv'>
                        <div style={{ padding: '8px' }}>
                            <Avatar alt={firstName} src={image} />
                        </div>
                        <div style={{ width: "100%", display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <p><b>{firstName} {lastName}</b> @{username}</p>
                            <SinglePostSettings postId={_id} />
                        </div>
                    </div>
                    <hr />
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
                        }}><ChatBubbleOutlineIcon /> {comments?.length}</span>
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
                <div className='comment-inputDiv'>
                    <div className='comment-input-firstDiv'>
                        <div style={{ padding: '8px' }}>
                            <Avatar alt={state.userDetails.firstName} src={state.userDetails.image} />
                        </div>
                        <div className='comment-input'>
                            <div className='comment-input-div'>
                                <input type="text" value={commentInput} className='input-comment' placeholder='Add a comment' onChange={(event) => {
                                    setCommentInput(event.target.value);
                                }} />
                            </div>
                            <button className='post-btn' onClick={() => {
                                postCommentBtnHandler(postId)
                            }}>Post</button>
                        </div>
                    </div>
                </div>
                <div className='comments-div'>
                    <hr />
                    {
                        comments?.map((post) => {
                            const { _id, image, username, text } = post;
                            return (
                                <div key={_id} className='comment'>
                                    <div style={{ display: 'flex' }}>
                                        <Avatar alt={username} src={image} style={{ margin: '0px 15px 0px 0px' }} />
                                        <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                                            <p>@{username}</p>
                                            {username === state.userDetails.username ? (
                                                <div>
                                                    <Button onClick={handleOpen}><MoreVertIcon /></Button>
                                                    <Modal
                                                        open={open}
                                                        onClose={handleClose}
                                                        aria-labelledby="modal-modal-title"
                                                        aria-describedby="modal-modal-description"
                                                    >
                                                        <Box sx={style}>
                                                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                                <h4>Edit Comment</h4>
                                                                <span style={{ cursor: 'pointer' }} onClick={handleClose}><CancelIcon /></span>
                                                            </div>
                                                            <textarea style={{ margin: '15px 0px 15px 0px' }} name="comment" id="comment" cols="30" rows="10" defaultValue={text} onChange={(event) => {
                                                                setEditedComment(event.target.value);
                                                            }}></textarea>
                                                            <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                                                                <Button variant='contained' color='error' onClick={() => { deleteCommentBtnHandler(selectedData._id, _id) }}><span ><DeleteForever /></span> Delete</Button>
                                                                <Button variant='contained' color='primary' onClick={() => {
                                                                    editCommentBtnHandler(selectedData._id, _id)
                                                                }}><span><EditIcon /> Edit</span></Button>
                                                            </div>
                                                        </Box>
                                                    </Modal>
                                                </div>
                                            ) : (
                                                <></>
                                            )}

                                        </div>
                                    </div>
                                    <hr />
                                    <div style={{ padding: '2rem' }}>
                                        {text}
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div >
    )
}

export default SinglePost
