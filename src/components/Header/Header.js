import React from 'react';
import {Link} from 'react-router-dom'
import CustomLink from '../CustomLink/CustomLink';
import './Header.css'

const Header = () => {
    return (
        <nav className='nav-link'>
            <h1 className="text-blue-700 font-bold p-3 m-2 text-5xl">Welcome to Psychosocial Counselling Website!!</h1>
           <div className="bg-blue-700 p-3 flex justify-center">
           <CustomLink to='/home'>Home</CustomLink>
            <CustomLink to='/friends'>Friends</CustomLink>
            <CustomLink to='/contact'>Contact</CustomLink>
           </div>
        </nav>
    );
};

export default Header;