import { createContext, useReducer } from "react";

export const UserContext = createContext();


const reducerFuction = (state, action) => {

    switch (action.type) {
        case 'ADD_USER_DETAILS':
            return {
            ...state, userDetails: action.payload
        }
        case 'ADD_TO_BOOKMARK': 
            return {
                ...state, bookMarks: action.payload
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

    const [ state, dispatch ] = useReducer(reducerFuction, {
        userDetails: '',
     });

    return <UserContext.Provider value={{state, dispatch}}>{children}</UserContext.Provider>
}