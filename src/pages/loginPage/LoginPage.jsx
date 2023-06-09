import React from 'react';
import './loginPage.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useContext } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { UserContext } from '../../contexts/userContext.js';

const LoginComponent = () => {

    const { dispatch } = useContext(UserContext);
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const loginHandler = async () => {
        try {
            if (userName && password) {
                const response = await axios.post('/api/auth/login', {
                    username: userName,
                    password: password
                })
                if (response.status === 200 || response.status === 201) {
                    toast.success('Login successful 🔥', {
                        position: "top-center",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                    localStorage.setItem("token", response.data.encodedToken);
                    localStorage.setItem("userDetails", JSON.stringify(response.data.foundUser));
                    dispatch({type: 'ADD_USER_DETAILS', payload: response.data.foundUser});
                    setUserName('')
                    setPassword('')
                    navigate('/home');
                }
            } else {
                toast.warn('Please Input all feilds', {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            }
        } catch (error) {
            if (error.response.status === 404) {
                toast.warn('User not found', {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            } else if (error.response.status === 401) {
                toast.warn('Please Input valid credentials', {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            }
        }
    }


    return (
        <div className='login-div'>
            <h1 className='login-main-heading'><span style={{ color: 'rgb(255, 59, 48)' }}>Chat</span><span>More</span></h1>
            <div className='login-credentials-div'>
                <h2 style={{ textAlign: 'center', lineHeight: '2.5rem', fontSize: '2rem' }}>Login</h2>
                <div className='label-div'>
                    <label htmlFor="userName-input">
                        Username 
                    </label>
                    <input type="userName" id='userName-input' placeholder='Enter username' value={userName} onChange={(event) => {
                        setUserName(event.target.value)
                    }} />

                    <label htmlFor="password-input">
                        Password
                    </label>
                    <input type="password" id='password-input' placeholder='********' value={password} onChange={(event) => {
                        setPassword(event.target.value)
                    }} />
                </div>
                <button className='login-btn' onClick={loginHandler}>Login</button>
                <Link to='/auth-signup' className='create-new-acc-btn'>Create New Account {'>'}</Link>
            </div>
        </div>
    )
}

export default LoginComponent
