import React from 'react';
import { Link } from 'react-router-dom';

// Functional Components
const PortfolioPage = () => (
  <div>
    <h1>My Projects</h1>
    <p>Checkout the work I've done:</p>
    <Link to="/portfolio/1">Item One</Link> <br />
    <Link to="/portfolio/2">Item Two</Link>
  </div>
);

export default PortfolioPage;