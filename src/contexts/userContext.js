import axios from "axios";
import { useEffect } from "react";
import { createContext, useReducer } from "react";
import { toast } from 'react-toastify';
export const UserContext = createContext();


const reducerFuction = (state, action) => {

    switch (action.type) {
        case 'ADD_USER_DETAILS':
            return {
                ...state, userDetails: action.payload
            }
        case "LOGOUT_USER":
            return {
                ...state, userDetails: ''
            }
        case "FETCH_ALL_USERS":
            return {
                ...state, allUser: action.payload
            }
        case "USER_INPUT":
            return {
                ...state, userInput: action.payload
            }

        default:
            return state;
    }
}



export const UserProvider = ({ children }) => {


    // const user = JSON.parse(localStorage.getItem('userDetails'));
    // console.log(user);



    const [state, dispatch] = useReducer(reducerFuction, {
        userDetails: '',
        allUser: [],
        userInput: '',
    });

    // Function to fetch all users

    const getAllUser = async () => {
        try {
            const response = await axios.get('/api/users');
            if (response.status === 200 || response.status === 201) {
                dispatch({ type: 'FETCH_ALL_USERS', payload: response.data.users })
            }
        } catch (error) {
            console.log(error);
        }
    }

    // Function to edit user details

    const editUserDetails = async (userData) => {
        const token = localStorage.getItem('token');
        try {
            const response = await axios.post('/api/users/edit',
                { userData },
                {
                    headers: {
                        authorization: token,
                    }
                })
            if (response.status === 200 || response.status === 201) {
                dispatch({ type: 'ADD_USER_DETAILS', payload: response.data.user })
                toast.success(`User Details Edited`, {
                    position: "top-center",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            }
        } catch (error) {
            console.log(error);
        }
    }

    // Function to follow a user

    const followUser = async (userId) => {
        const token = localStorage.getItem('token');
        try {
            const response = await axios.post(`/api/users/follow/${userId}`,
                {},
                {
                    headers: {
                        authorization: token,
                    }
                })
            if (response.status === 200 || response.status === 201) {
                dispatch({ type: 'ADD_USER_DETAILS', payload: response.data.user });
                toast.success(`Followed!`, {
                    position: "top-center",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            }
        } catch (error) {
            console.log(error);
        }
    }

    // Function to unfollow a user

    const unFollowUser = async (userId) => {
        const token = localStorage.getItem('token');
        try {
            const response = await axios.post(`/api/users/unfollow/${userId}`,
                {},
                {
                    headers: {
                        authorization: token,
                    }
                })
            if (response.status === 200 || response.status === 201) {
                dispatch({ type: 'ADD_USER_DETAILS', payload: response.data.user });
                toast.success(`Unfollowed!`, {
                    position: "top-center",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            }
        } catch (error) {
            console.log(error);
        }
    }

    // Search filter function
    const searchedData = state.userInput ? state.allUser.filter((user) => user.username.toLowerCase() !== state.userDetails.username.toLowerCase() && user.username.toLowerCase().includes(state.userInput.toLowerCase())) : [];

    // All user without the loggedin user
    const allUserData = state.allUser.filter((user) => user.username === state?.userDetails?.username ? null : user);

    useEffect(() => {
        getAllUser();
    }, [state]);
    return <UserContext.Provider value={{ state, dispatch, editUserDetails, searchedData, allUserData, followUser, unFollowUser }}>{children}</UserContext.Provider>
}