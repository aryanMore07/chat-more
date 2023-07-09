import React from 'react';
import './signupPage.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const SignupComponent = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();


    const signUpHandler = async () => {
        try {
            if (firstName && userName && email && password && confirmPassword) {
                if (password === confirmPassword) {
                    const response = await axios.post('/api/auth/signup',
                        {
                            firstName: firstName,
                            lastName: lastName,
                            username: userName,
                            email: email,
                            password: password
                        }
                    )
                    if (response.status === 200 || response.status === 201) {
                        toast.success('Signup Successful 🔥', {
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
                        setFirstName('');
                        setUserName('');
                        setEmail('');
                        setPassword('');
                        setConfirmPassword('');
                        navigate('/auth-login')
                    }
                } else {
                    toast.warn('Password and Confirm password must be same', {
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
            } else {
                toast.warn('Please input all fields', {
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
            console.log(error);
            if (error.response.status === 422) {
                toast.warn('Email already exist', {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            } else {
                toast.warn('Something went wrong, Please try again', {
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
        <div className='signup-div'>
            <h1 className='signup-main-heading'><span style={{ color: 'rgb(255, 59, 48)' }}>Chat</span><span>More</span></h1>
            <div className='signup-credentials-div'>
                <h2 style={{ textAlign: 'center', lineHeight: '2.5rem', fontSize: '2rem' }}>Signup</h2>
                <div className='label-div'>
                    <label htmlFor="userfirstname">
                        Firstname
                    </label>
                    <input type="text" name="firstname" id="userfirstname" className='user-inputs' placeholder='Aryan' value={firstName} onChange={(event) => {
                        setFirstName(event.target.value)
                    }} />
                    <label htmlFor="userLastname">
                        Lastname
                    </label>
                    <input type="text" name="lastname" id="userLastname" className='user-inputs' placeholder='More' value={lastName} onChange={(event) => {
                        setLastName (event.target.value)
                    }} />
                    <label htmlFor="username">
                        Username
                    </label>
                    <input type="text" name='username' id='username' className='user-inputs' placeholder='aryanmore' value={userName} onChange={(event) => {
                        setUserName(event.target.value)
                    }} />
                    <label htmlFor="userEmail">
                        Email
                    </label>
                    <input type="email" name="userEmail" id="userEmail" className='user-inputs' placeholder='aryanmore@gmail.com' value={email} onChange={(event) => {
                        setEmail(event.target.value)
                    }} />
                    <label htmlFor="userPassword">
                        Password
                    </label>
                    <input type="password" id='userPassword' className='user-inputs' placeholder='********' value={password} onChange={(event) => {
                        setPassword(event.target.value)
                    }} />
                    <label htmlFor="userConfirmPassword">
                        Confirm Password
                    </label>
                    <input type="password" id='userConfirmPassword' className='user-inputs' placeholder='********' value={confirmPassword} onChange={(event) => {
                        setConfirmPassword(event.target.value)
                    }} />
                </div>
                <button className='signup-btn' onClick={signUpHandler}>Signup</button>
            </div>
        </div>
    )
}

export default SignupComponent
