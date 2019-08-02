import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import Javascript from './components/Javascript';
import Node from './components/Node';

function Root() {
    return(
        <Router basename="/NewsMan-React-App/">
            <div>
                <Navbar className="bg-light">
                    <Navbar.Brand>
                        <Link to="/">NEWSMAN</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                    <Navbar.Collapse>
                        <Nav>
                            <NavItem className="ml-3">
                                <NavLink exact to="/" actionClassName="active">Home</NavLink>
                            </NavItem>
                            <NavItem className="ml-3">
                                <NavLink to="/javascript" actionClassName="active">Javascript</NavLink>
                            </NavItem>
                            <NavItem className="ml-3">
                                <NavLink to="/node" actionClassName="active">Node</NavLink>
                            </NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                
                <Route path="/" exact component={App}/>
                <Route path="/javascript" component={Javascript}/>
                <Route path="/node" component={Node}/>

            </div>
        </Router>
    );
}

ReactDOM.render(<Root />, document.getElementById('root'));
serviceWorker.unregister();
