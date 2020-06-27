import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PortfolioPage from '../components/PortfolioPage';

import Header from '../components/Header';
import HomeDashboard from '../components/HomeDashboard';
import NotFoundPage from '../components/NotFoundPage';

// Functional component with browser router
const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <br />
                <Switch>
                    <Route path="/" component={ HomeDashboard } exact={ true }/>
                    <Route path="/portfolio" component={ PortfolioPage } />
                    <Route component={ NotFoundPage } />
                </Switch>
        </div>   
    </BrowserRouter>
);

export default AppRouter;