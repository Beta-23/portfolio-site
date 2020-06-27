import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PortfolioPage from '../components/PortfolioPage';

import Header from '../components/Header';
import NotFoundPage from '../components/NotFoundPage';

// Functional component with browser router
const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
                <Switch>
                    <Route path="/portfolio" component={ PortfolioPage } exact={ true }/>
                    <Route component={ NotFoundPage } />
                </Switch>
        </div>   
    </BrowserRouter>
);

export default AppRouter;