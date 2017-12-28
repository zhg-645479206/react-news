import React,{ Component } from 'react';
import {Button} from 'antd';
import 'antd/dist/antd.min.css';

class Header extends Component{
    render(){
        return (
            <header>
                <h1>这里是头部</h1>
                <Button type="primary">Primary</Button>
                <Button>Default</Button>
                <Button type="dashed">Dashed</Button>
                <Button type="danger">Danger</Button>
            </header>
        )
    }
}

export default Header;

