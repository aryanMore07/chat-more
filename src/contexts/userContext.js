import axios from "axios";
import { useEffect } from "react";
import { createContext, useReducer } from "react";

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
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getAllUser();
    }, []);

    const [state, dispatch] = useReducer(reducerFuction, {
        userDetails: '',
        allUser: [],
        userInput: '',
    });

    const searchedData = state.userInput ? state.allUser.filter((user) => user.username !== state.userDetails.username && user.username.toLowerCase().includes(state.userInput)) : [];

    const allUserData = state.allUser.filter((user) => user.username === state.userDetails.username ? null : user);

    return <UserContext.Provider value={{ state, dispatch, editUserDetails, searchedData, allUserData}}>{children}</UserContext.Provider>
}