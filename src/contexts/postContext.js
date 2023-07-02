import axios from "axios";
import { useContext } from "react";
import { createContext, useState } from "react";
import { UserContext } from "./userContext";
import { useEffect } from "react";

export const PostContext = createContext();

export const PostProvider = ({ children }) => {



    const { state } = useContext(UserContext)
    const [postData, setPostData] = useState([]);
    const [bookmarkData, setBookmarkdata] = useState([]);
    const [userPosts, setUserPosts] = useState([]);


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

    // LoggedIn User posts

    const fetchUsersPost = async () => {
        try {
            const response = await axios.get(`/api/posts/user/${state.userDetails._id}`)
            if (response.status === 200 || response.status === 201) {
                setUserPosts(response.data.posts)
            }
        } catch (error) {
            console.log(error)
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
            console.log(response.data.bookmarks);
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


    useEffect(() => {
        getAllPost();
        fetchUserBookmarks();
        fetchUsersPost()
    }, [postData, bookmarkData])

    return <PostContext.Provider value={{ userPosts, postData, postMessage, bookmarkData, addToBookmark, removeFromBookmark, likePost, dislikePost, deletePost, editPost }}>{children}</PostContext.Provider>
}