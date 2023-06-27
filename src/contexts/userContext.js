import axios from "axios";
import { useEffect } from "react";
import { createContext, useReducer } from "react";

export const UserContext = createContext();


const reducerFuction = (state, action) => {

    switch (action.type) {
        case 'ADD_USER_DETAILS':
            return{
            ...state, userDetails: action.payload
        }
    
        default:
            return state;
    }
}

export const UserProvider = ({children}) => {

    
    // const user = JSON.parse(localStorage.getItem('userDetails'));
    // console.log(user);

    const [ state, dispatch ] = useReducer(reducerFuction, {
        userDetails: '',
        // userFullName: user?.fullName,
        // userEmail: user.email,
        // userPicture: user?.image,
        // userBio: user?.bio,
        // userPortfolio: user?.bio,
     })
    return <UserContext.Provider value={{state, dispatch}}>{children}</UserContext.Provider>
}