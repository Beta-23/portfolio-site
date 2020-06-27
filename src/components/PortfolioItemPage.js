import React from 'react';

// Functional Components
const PortfolioItemPage = (props) => (
    <div>
       <h1>Latest Work:</h1>
       <p>Project {props.match.params.id}</p>
    </div>
);

export default PortfolioItemPage;