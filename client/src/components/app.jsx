import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Chirper from './Chirper';
import Details from './Details';
import Edit from './Edit';

class Navigation extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <React.Fragment>
            <Router>
                <Fragment>
                    <div className="d-flex justify-content-center">
                        <Link className="btn btn-danger justify-item-center m-3 d-flex"
                            to="/" >C H I R P E R -- H O M E</Link>
                    </div>
                    <Switch>
                        <Route exact path="/" component={Chirper} />
                        <Route exact path="/chirps/:id" component={Details} />
                        <Route path="/chirps/:id/edit" component={Edit} />
                    </Switch>
                </Fragment>
            </Router>
            </React.Fragment>
        )
    }
}

export default Navigation;