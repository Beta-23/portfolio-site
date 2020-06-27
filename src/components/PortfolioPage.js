import React from 'react';
import { Link } from 'react-router-dom';

// Functional Components
const PortfolioPage = (props) => {
    return (
    <div>
        <h1>My Work</h1>
        <p>Checkout the latest projects:</p>
        <Link>Project One</Link> |
        <Link>Project Two</Link> |
        <Link>Project Three</Link> 
    </div>
)};

export default PortfolioPage;