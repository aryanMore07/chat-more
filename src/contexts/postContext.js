import axios from "axios";
import { useContext } from "react";
import { createContext, useState } from "react";
import { UserContext } from "./userContext";
import { useEffect } from "react";

export const PostContext = createContext();

export const PostProvider = ({ children }) => {

    const [postData, setPostData] = useState([]);

    const { state } = useContext(UserContext);


    const getAllPost = async () => {
        try {
            const response = await axios.get('/api/posts');
            if(response.status === 200 || response.status === 201) {
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
            if(response.status === 200 || response.status === 201) {
                setPostData(response.data.posts);
            }
        } catch (error) {
            console.log(error);
        }
    }


    useEffect(() => {
        getAllPost();
    }, [])

    return <PostContext.Provider value={{ postMessage }}>{children}</PostContext.Provider>
}