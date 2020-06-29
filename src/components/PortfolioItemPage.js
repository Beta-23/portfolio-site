import React from 'react';

// Functional Components
const PortfolioItem = (props) => (
  <div>
    <h1>Latest Work:</h1>
    <p>This page is for the item with the id of {props.match.params.id}</p>
  </div>
);

export default PortfolioItem;