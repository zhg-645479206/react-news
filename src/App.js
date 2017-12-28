import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import ComponentHeader from './components/header';
import ComponentFooter from './components/footer';
import ComponentBody from './components/body';
import { Button } from 'antd';

import 'antd/dist/antd.min.css'; // 或者 antd/lib/button/style/css 加载 css 文件

class App extends Component {

  alertOne(){
    alert(133)
  }

  render() {
    var component = <ComponentHeader/>;
    return (
      <div>
        {component}
        <ComponentBody/>
        <ComponentFooter/>
        <Button type="primary" onClick={this.alertOne.bind(this)}>Button</Button>
      </div>
    );
  }
}

export default App;
