import axios from "axios";
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
    
        default:
            return state;
    }
}



export const UserProvider = ({children}) => {

    
    // const user = JSON.parse(localStorage.getItem('userDetails'));
    // console.log(user);

    const editUserDetails = async (userData) => {
        const token = localStorage.getItem('token');
        try {
            const response = await axios.post('/api/users/edit',
            {userData},
            {
                headers: {
                    authorization: token,
                }
            })
            if(response.status === 200 || response.status === 201) {
                dispatch({type: 'ADD_USER_DETAILS', payload: response.data.user})
            }
        } catch (error) {
            console.log(error);
        }
    } 

    const [ state, dispatch ] = useReducer(reducerFuction, {
        userDetails: '',
     });

    return <UserContext.Provider value={{state, dispatch, editUserDetails}}>{children}</UserContext.Provider>
}