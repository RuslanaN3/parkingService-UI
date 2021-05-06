import React from "react";
import './App.css';
import {Route, Switch} from "react-router-dom";
import MainPage from "./pages/mainPage";

function App() {
    return (
        <div className="App">
            <Switch>
                <Route exact path={"/"} component={MainPage}/>
            </Switch>
        </div>
    );
}

export default App;
