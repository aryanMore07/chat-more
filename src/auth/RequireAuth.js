import React, {useContext} from 'react'
import { Navigate } from 'react-router';
import { UserContext } from '../contexts/userContext';

const RequireAuth = ({children}) => {
  const { state } = useContext(UserContext)
  
  // const user = localStorage.getItem('userDetails');
  const isLoggedIn = state.userDetails ? true : false;
    return isLoggedIn ? (children) : (<Navigate to='/welcome'/>) 
}

export default RequireAuth;
