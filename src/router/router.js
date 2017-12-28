import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,hashHistory } from 'react-router';
import Index from '../common/root';
import 'antd/dist/antd.min.css';

class Root extends Component{
    render(){
        return (
            <div>
                <Index></Index>
            </div>
        )
    }
}

ReactDOM.render(<Root />, document.getElementById('root'));