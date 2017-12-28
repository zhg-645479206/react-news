import React,{ Component } from 'react';
// import Button from 'antd';
// import 'antd/dist/antd.min.css';


class BodyIndex extends Component{
    constructor(){
        super();    // 调用基类的所有的初始化方法
        this.state = {userName: 'Parry'};
    }
    componentWillMount(){
        console.log('组件将要加载时')
    }
    componentDidMount(){
        console.log('组件加载完成后')
    }
    render(){

        // var userName = 'Parry';
        var boolInput = false;
        var mooc = 'mooc&nbsp;lesson';

        setTimeout(()=>{
            this.setState({
                userName: 'moocNate'
            })
        },4000);

        // 这里是js的注释
        return (
            <div>
                <h2>主题内容</h2>
                {/* <p>{userName==''?'用户还没有登录':'用户名：'+userName}</p> */}
                <p><input type='button' value='默认按钮' disabled={boolInput}/></p>
                {/* 这里是jsx注释 */}
                <p>{mooc}---{this.state.userName}</p>
                <p dangerouslySetInnerHTML={{__html : mooc}}></p>
            </div>
        )
    }
}

export default BodyIndex;

