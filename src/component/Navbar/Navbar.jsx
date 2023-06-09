import React from 'react';
import './navbar.css';
import SearchComponent from '../searchComponent/SearchComponent';
import { useLocation } from 'react-router';

const Navbar = () => {

  const location = useLocation();

  const checkLocation = location.pathname === '/home' || location.pathname === '/explore' || location.pathname === '/bookmarks' || location.pathname === '/profile'
  
  return (
    <div className='navbar-div'>
      <h2 className='heading'><span style={{ color: '#ff3b30' }}>Chat</span><span style={{ color: 'white' }}>More</span></h2>
      <div className='search-div' style={{ display: checkLocation ? 'block' : 'none' }}>
        <SearchComponent />
      </div>
    </div>
  )
}

export default Navbar
