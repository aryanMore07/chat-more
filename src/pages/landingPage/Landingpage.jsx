import React from 'react';
import './landingPage.css';
import landingPageImage from '../../images/landing-page-picture.svg';
import { Link } from 'react-router-dom';

const Landingpage = () => {
    return (
        <div className='landingPage-div'>
            <div className='leftSide-div'>
                <div className='leftSide-inner-div'>
                    <div className='leftSide-first-div'>
                        <p className='landingPage-heading-line'><span style={{ color: '#ff3b30' }}>Chat</span><span style={{ color: 'black' }}>More</span></p>
                    </div>
                    <div className='leftSide-second-div'>
                        <p className='leftSide-headings'><span className='head-char'>FOLLOW</span>PEOPLE AROUND THE GLOBE</p>
                        <p className='leftSide-headings'><span className='head-char'>CONNECT</span>WITH YOUR FRIENDS</p>
                        <p className='leftSide-headings'><span className='head-char'>SHARE</span>WHAT YOU THINK</p>
                    </div>
                    <div className='leftSide-third-div'>
                        <button className='join-now-btn'>JOIN NOW</button>
                        <div className='go-to-auth-btn-div'>
                            <Link className='go-to-auth-btn'>Already have an account?</Link>
                        </div>
                    </div>
                </div>

            </div>
            <div className='rightSide-div'>
                <img src={landingPageImage} alt='social-app' className='landingPage-image' />

            </div>
        </div>
    )
}

export default Landingpage
