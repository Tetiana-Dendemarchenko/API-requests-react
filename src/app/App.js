import React from 'react'
import 'bootstrap';
import 'bootstrap/js/dist/util';
import 'bootstrap/js/dist/dropdown';
import Users from "../components/users/Users";
import Todos from "../components/todos/Todos";
import Posts from "../components/posts/Posts";
import {BrowserRouter, Route} from "react-router-dom";
import {NavLink} from "react-router-dom";
import './App.css';

const App = () => {
    return <BrowserRouter>
        <div>
            <NavLink to='/users'>Users</NavLink>
            <NavLink to='/todos'>List of tasks</NavLink>
            <NavLink to='/posts'>Posts</NavLink>
            <Route path='/users' component={Users}/>
            <Route path='/todos' component={Todos}/>
            <Route path='/posts' component={Posts}/>
        </div>
    </BrowserRouter>
}

export default App;
