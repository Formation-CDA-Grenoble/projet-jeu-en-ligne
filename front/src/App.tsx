import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { PageRegister } from './pages'

function App() {
    return (
        <Router>
              <Route exact path="/" component={ PageRegister }/>
        </Router>
    );
}

export default App;
