import React from 'react';
import './navbar.css';
import SearchComponent from '../searchComponent/SearchComponent';

const Navbar = () => {
  return (
    <div className='navbar-div'>
      <h2 className='heading'><span style={{ color: '#ff3b30' }}>Chat</span><span style={{ color: 'white' }}>More</span></h2>
      <div className='search-div'>
        <SearchComponent />
      </div>
    </div>
  )
}

export default Navbar
