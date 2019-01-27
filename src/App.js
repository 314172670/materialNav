import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import CssBaseline from '@material-ui/core/CssBaseline';
import Blog from './demo/blog/Blog'
import Pricing from './demo/pricing/Pricing'
import Dashboard from './demo/dashboard/Dashboard'
import { Route, Link } from "react-router-dom";

const Index = () => (
    <nav>
        <ul>
            <li>
                <Link to="/menu">测试menu</Link>
            </li>
            <li>
                <Link to="/menupro">测试menupro</Link>
            </li>
            <li>
                <Link to="/blog">官网demo1-blog</Link>
            </li>
            <li>
                <Link to="/pricing">官网demo2-pricing</Link>
            </li>
            <li>
                <Link to="/dashboard">官网demo3-dashboard</Link>
            </li>
        </ul>
    </nav>
)


class App extends Component {

    render() {
        return (
            <React.Fragment>
                <CssBaseline />
                <Route path="/" exact component={Index} />
                <Route path="/menu" exact component={Header} />
                <Route path="/blog" exact component={Blog} />
                <Route path="/pricing" exact component={Pricing} />
                <Route path="/dashboard" exact component={Dashboard} />
               
            </React.Fragment>
        );
    }
}

export default App;