import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ContactPage from '../components/ContactPage';
import PortfolioPage from '../components/PortfolioPage';
import PortfolioItemPage from '../components/PortfolioItemPage';
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
                    <Route path="/portfolio/:id" component={ PortfolioItemPage } />
                    <Route path="/contact" component={ ContactPage } />
                    <Route component={ NotFoundPage } />
                </Switch>
        </div>   
    </BrowserRouter>
);

export default AppRouter;