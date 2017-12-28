import React, {Component} from 'react';
import PCIndex from './pc_index';
import MobilleIndex from './mobile_index';
import MediaQuery from 'react-responsive';
import PcUser from './pc_user';
import {Router, Route, hashHistory} from 'react-router';

class Root extends Component {

    render() {
        return (
            <div>
                <MediaQuery query="(min-device-width: 1224px)">
                    <Router history={hashHistory}>
                        <Route component={PCIndex} path="/"></Route>
                        {/**<Route component={} path="/"></Route>**/}
                        <Route component={PcUser} path="/usercenter"></Route>
                    </Router>
                </MediaQuery>
                <MediaQuery query="(max-device-width: 1224px)">
                    <Router history={hashHistory}>
                        <Route component={MobilleIndex} path="/"></Route>
                    </Router>
                </MediaQuery>
            </div>

        )
    }
}

export default Root;