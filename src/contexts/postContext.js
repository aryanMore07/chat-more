/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect } from "react";
import { createContext, useState } from "react";

export const PostContext = createContext();

export const PostProvider = ({ children }) => {

    const [postData, setPostData] = useState([]);
    const [bookmarkData, setBookmarkdata] = useState([]);


    const getAllPost = async () => {
        try {
            const response = await axios.get('/api/posts');
            if (response.status === 200 || response.status === 201) {
                setPostData(response.data.posts);
            }
        } catch (error) {
            console.log(error);
        }
    }

    const postMessage = async (post) => {
        const token = localStorage.getItem('token');
        try {
            const response = await axios.post('/api/posts',
                {
                    postData: post,
                },
                {
                    headers: {
                        authorization: token,
                    },
                }
            );
            if (response.status === 200 || response.status === 201) {
                setBookmarkdata(response.data.posts);
            }
        } catch (error) {
            console.log(error);
        }
    }

    // Bookmarks 

    const fetchUserBookmarks = async () => {
        const token = localStorage.getItem('token');
        try {
            const response = await axios.get('/api/users/bookmark', {
                headers: {
                    authorization: token
                }
            })
            if (response.status === 200 || response.status === 201) {
                setBookmarkdata(response.data.bookmarks);
            }
        } catch (error) {
            console.log(error)
        }
    }


    const addToBookmark = async (postId) => {

        const encodedToken = localStorage.getItem('token');
        try {
            const response = await axios.post(`/api/users/bookmark/${postId}`,
                {},
                {
                    headers: {
                        authorization: encodedToken, // passing token as an authorization header
                    },
                })
            setBookmarkdata(response.data.bookmarks);
        } catch (error) {
            console.log(error);
        }
    }

    const removeFromBookmark = async (postId) => {
        const encodedToken = localStorage.getItem('token');
        try {
            const response = await axios.post(`/api/users/remove-bookmark/${postId}`,
                {},
                {
                    headers: {
                        authorization: encodedToken
                    }
                })
            setBookmarkdata(response.data.bookmarks);
        } catch (error) {
            console.log(error);
        }
    }

    // POST Like, Dislike, Edit & Delete

    const likePost = async (postId) => {
        const token = localStorage.getItem('token');
        try {
            const response = await axios.post(`/api/posts/like/${postId}`,
                {},
                {
                    headers: {
                        authorization: token
                    }
                })
            if (response.status === 200 || response.status === 201) {
                setPostData(response.data.posts);
            }
        } catch (error) {
            console.log(error);
        }
    }

    const dislikePost = async (postId) => {
        const token = localStorage.getItem('token');
        try {
            const response = await axios.post(`/api/posts/dislike/${postId}`,
                {},
                {
                    headers: {
                        authorization: token
                    }
                })
            if (response.status === 200 || response.status === 201) {
                setPostData(response.data.posts);
            }
        } catch (error) {
            console.log(error);
        }
    }

    const editPost = async (postId, editedPost) => {
        const token = localStorage.getItem('token');
        try {
            const response = await axios.post(`/api/posts/edit/${postId}`,
                {
                    postData: {
                        content: editedPost,
                    }
                },
                {
                    headers: {
                        authorization: token,
                    }
                })
            if (response.status === 200 || response.status === 201) {
                setPostData(response.data.posts);
            }
        } catch (error) {
            console.log(error)
        }
    }

    const deletePost = async (postId) => {
        const token = localStorage.getItem('token');
        try {
            const response = await axios.delete(`/api/posts/${postId}`,
                {
                    headers: {
                        authorization: token
                    }
                })
            if (response.status === 200 || response.status === 201) {
                setPostData(response.data.posts)
            }
        } catch (error) {
            console.log(error);
        }
    }

    // Add, Edit & Delete Comment

    const addComment = async (postId, text) => {
        const token = localStorage.getItem('token');
        try {
            const response = await axios.post(`/api/comments/add/${postId}`,
                {
                    commentData: text
                },
                {
                    headers: {
                        authorization: token,
                    }
                })
            if (response.status === 200 || response.status === 201) {
                setPostData(response.data.posts);
            }
        } catch (error) {
            console.log(error)
        }
    }

    const editComment = async (postId, commentId, text) => {
        const token = localStorage.getItem('token');
        try {
            const response = await axios.post(`/api/comments/edit/${postId}/${commentId}`,
                {
                    commentData: text
                },
                {
                    headers: {
                        authorization: token
                    }
                })
            if (response.status === 200 || response.status === 201) {
                setPostData(response.data.posts);
            }
        } catch (error) {
            console.log(error);
        }
    }

    const deleteComment = async (postId, commentId) => {
        const token = localStorage.getItem('token');
        try {
            const response = await axios.delete(`/api/comments/delete/${postId}/${commentId}`,
                {
                    headers: {
                        authorization: token
                    }
                })
            if (response.status === 200 || response.status === 201) {
                setPostData(response.data.posts);
            }
        } catch (error) {
            console.log(error);
        }
    }

    console.log(postData);

    const bookmarkPost = postData.filter((post) => bookmarkData.includes(post._id));
    
    useEffect(() => {
        getAllPost();
        fetchUserBookmarks();
    }, [postData, bookmarkData])

    return <PostContext.Provider value={{ postData, postMessage, bookmarkData, addToBookmark, removeFromBookmark, likePost, dislikePost, deletePost, editPost, addComment, editComment, deleteComment, bookmarkPost }}>{children}</PostContext.Provider>
}