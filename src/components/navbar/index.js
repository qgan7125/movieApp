import React from 'react';
import { Link } from 'react-router-dom';
import "./navbar.css";
import MovieBrandIcon from '../../assets/movieBrand-icon.svg';

const Navbar = () => {
    return (
    <nav className='nav__top'>
        <header>
            <img src={MovieBrandIcon} alt="Movie brand Icon"/>
        </header>

        <div className='nav__group'>
            <ul>
                <li><Link to="/" className='page'>Home</Link></li>
                <li><Link to="/favorite" className='page'>Favorite</Link></li>
            </ul>
        </div>
    </nav>)
}

export default Navbar;