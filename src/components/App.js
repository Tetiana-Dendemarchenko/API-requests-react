import React from 'react'
import Request1 from "./Request1";
import Request2 from "./Request2";
import Request3 from "./Request3";
import {BrowserRouter, Route} from "react-router-dom";
import {NavLink} from "react-router-dom";
import './App.css';

const App = () => {
    return <BrowserRouter>
        <div>
            <button><NavLink to='/request1'>Request 1</NavLink></button>
            <button><NavLink to='/request2'>Request 2</NavLink></button>
            <button><NavLink to='/request3'>Request 3</NavLink></button>
            <Route path='/request1' component={Request1}/>
            <Route path='/request2' component={Request2}/>
            <Route path='/request3' component={Request3}/>
        </div>
    </BrowserRouter>
}

export default App;