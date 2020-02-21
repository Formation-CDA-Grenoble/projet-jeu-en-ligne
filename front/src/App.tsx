import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { PageRegister } from './pages'
import { Home } from './pages'

function App() {
    return (
        <Router>
            <Route exact path="/home" component={ Home }/>
            <Route exact path="/" component={ PageRegister }/>
        </Router>
    );
}

export default App;
