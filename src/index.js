import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CustomHistory from "./CustomHistory";
import {Router} from "react-router-dom";

ReactDOM.render(
    <React.StrictMode>
        <Router history={CustomHistory}>
            <App/>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);

