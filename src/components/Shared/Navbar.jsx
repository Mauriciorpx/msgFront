import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='navBar-main'>
            <ul className='navbar navbar-expand-lg bg-body-tertiary'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/clients">Clients</Link></li>
                <li><Link to="/messengers">Messengers</Link></li>
                <li><Link to="/orders">Orders</Link></li>
                <li><Link to="/reports">Reports</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
