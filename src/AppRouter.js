import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from './components/App';
import HomePage from './components/HomePage';


function NotFound() {
    return <h2>404</h2>;
}

function AppRouter() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/editor/" component={App} />
                <Route component={NotFound} />
            </Switch>
        </Router>
    );
}

export default AppRouter;
