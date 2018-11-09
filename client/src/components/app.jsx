import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import HelloWorld from './hello';
import GoodbyeWorld from './goodbye';

class Navigation extends Component {

    render() {
        return (
            <Router>
                <Fragment>
                    <div className="d-flex justify-content-center">
                        <Link className="btn btn-danger justify-item-center m-3 d-flex"
                            to="/" >Go Home</Link>
                        <Link className="btn btn-danger justify-item-center m-3 d-flex"
                            to="/" >Hello</Link>
                        <Link className="btn btn-danger justify-item-center m-3 d-flex"
                            to="/goodbye" >Goodbye</Link>
                        {/* <Link className="btn btn-danger justify-item-center m-3 d-flex"
                            to="/chirps" >Chirps</Link> */}
                    </div>
                    <Switch>
                        <Route exact path="/" component={HelloWorld} />
                        <Route path="/goodbye" component={GoodbyeWorld} />
                        {/* <Route path="/chirps" component={Chirps} /> */}
                    </Switch>
                </Fragment>
            </Router>
        )
    }
}

export default Navigation;