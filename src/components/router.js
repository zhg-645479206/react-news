import React,{Component} from 'react';
import ReactDOM from 'react-dom';
// import Index from '../index';
import Index from './header';
import List from './list';
import {Router,Route,hashHistory } from 'react-router';


class Luyou extends Component{
    render(){
        return (
            <Router history={hashHistory}>
                <Route component = {Index} path ="/" ></Route>
                <Route component = {List} path ="list" ></Route>
            </Router>
        )
    }
}

ReactDOM.render(<Luyou />, document.getElementById('root'));
// export default Route ;