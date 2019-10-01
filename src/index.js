import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import Reactjs from './components/NavMenu/React';
import Node from './components/NavMenu/Node';
import MongoDB from './components/NavMenu/MongoDB';
import Express from './components/NavMenu/Express';

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
                                <NavLink to="/mongodb" actionClassName="active">MongoDB</NavLink>
                            </NavItem>
                            <NavItem className="ml-3">
                                <NavLink to="/express" actionClassName="active">Express</NavLink>
                            </NavItem>
                            <NavItem className="ml-3">
                                <NavLink to="/react" actionClassName="active">React</NavLink>
                            </NavItem>
                            <NavItem className="ml-3">
                                <NavLink to="/node" actionClassName="active">Node</NavLink>
                            </NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                
                <Route path="/" exact component={App}/>
                <Route path="/react" component={Reactjs}/>
                <Route path="/node" component={Node}/>
                <Route path="/mongodb" component={MongoDB}/>
                <Route path="/express" component={Express}/>

            </div>
        </Router>
    );
}

ReactDOM.render(<Root />, document.getElementById('root'));
serviceWorker.unregister();
