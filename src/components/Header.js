import React from 'react';
import { NavLink } from 'react-router-dom';

// Functional Components
const Header = () => (
    <header>
        <h1>Portfolio</h1>
        <NavLink to="/" activeClassName="is-active" exact={ true }>Home</NavLink> |
    </header>
);

export default Header;