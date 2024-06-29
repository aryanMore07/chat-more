import React, { useContext } from 'react'
import { Navigate } from 'react-router';
import { UserContext } from '../contexts/userContext';

const RequireAuth = ({ children }) => {
  const { state } = useContext(UserContext)
  const localStoredUsetDetails = JSON.parse(localStorage.getItem("userDetails"));

  const isLoggedIn = state.userDetails || localStoredUsetDetails ? true : false;
  return isLoggedIn ? (children) : (<Navigate to='/welcome' />)
}

export default RequireAuth;
