import React from 'react';
import { Link } from 'react-router-dom';

// Functional Components
const PortfolioItem = (props) => (
  <div>
    <h1>Latest Work:</h1>
    <p>This page is for the item with the id of {props.match.params.id}</p>
    <Link to="/portfolio">Back</Link>
  </div>
);

export default PortfolioItem;