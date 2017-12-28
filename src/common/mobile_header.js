import React,{Component} from 'react';
import IMG from '../images/news.png';
import {Row, Col ,Menu, Icon,Form,Button,Modal,Tabs,message,Input,Checkbox} from 'antd';
import {Link} from 'react-router';
import '../styles/mobile.css';

const FormItem = Form.Item;
const MenuItem = Menu.Item;
const TabPane = Tabs.TabPane;

class MobildeHeader extends Component{
    constructor(props) {
        super(props);
        this.state = {
            current: 'toutiao',
            modalVisible : false,
            action: 'login',
            hasLogin: false,
            userNickName: '',
            userId: 0
        };
    }

    setModalVisible = value => {
        this.setState({
            modalVisible : value
        })
    }

    handleClick = e => {
        if(e.key == "register"){
            this.setState({
                current: 'register'
            });
            this.setModalVisible(true)
        }else{
            this.setState({
                current: e.key
            });
        }
    }

    login = () => {
        this.setModalVisible(true)
    }

    handleSubmit = e => {

        // 提交
        e.preventDefault();
        let fetchOptions = {
            method: 'GET'
        };
        console.log('window',window);
        let FormData = this.props.form.getFieldsValue();
        console.log('FormData',FormData);
        // fetch('http://newsapi.gugujiangkong.com/Handler.ashx?action=register&username=userName&password=password&r_userName='+
        // FormData.r_userName+'&r_password='+FormData.r_password+'&r_confirmPassword='+FormData.r_confirmPassword,fetchOptions).then(
        fetch('http://newsapi.gugujiankong.com/Handler.ashx?action=register&username=undefined&password=undefined&r_userName=123&r_password=23&r_confirmPassword=23',fetchOptions).then(
            response => response.json()
        ).then(json => {
            this.setState({
                userNickName: json.UserNickName,
                userId: json.UserId
            })
        })

        message.success('请求成功！');
        this.setModalVisible(false);
    }

    render(){
        let {getFieldProps} = this.props.form;
        const userShow = this.state.hasLogin ? <Link>
            <Icon type="inbox"></Icon>
        </Link> : <Icon type="setting" onClick={this.login}></Icon>;

        return(
            <div id="mobile">
                <header>
                    <img src={IMG} alt="logo"/>
                    <span>ReactNews</span>
                    {userShow}
                </header>
                <Modal title="个人中心" wrapClassName="vertical-center-modal" visible={this.state.modalVisible}
                onCancel={()=>this.setModalVisible(false)} onOk={()=>this.setModalVisible(false)} onText='关闭'>
                <Tabs type="line" defaultActiveKey="1">
                <TabPane tab="登陆" key="1">
                        <Form horizontal onSubmit={this.handleSubmit}>
                            <FormItem label="账户">
                                <Input placeholder="请输入账户名" {...getFieldProps('userName')}/>
                            </FormItem>
                            <FormItem label="密码">
                                <Input type="password" placeholder="请输入密码" {...getFieldProps('password')}/>
                            </FormItem>
                            <Button type="primary" htmlType="submit">登陆</Button>
                        </Form>
                    </TabPane>
                    <TabPane tab="注册" key="2">
                    <Form horizontal onSubmit={this.handleSubmit}>
                    <FormItem
                      label="账户"
                    >
                      <Input placeholder="请输入账户名"
                        {...getFieldProps('r_userName')}
                      />
                    </FormItem>
                    <FormItem
                      label="密码"
                    >
                      <Input type="password" placeholder="请输入密码"
                        {...getFieldProps('r_password')}
                      />
                    </FormItem>
                    <FormItem
                    label="确认密码"
                  >
                    <Input type="password" placeholder="请确认输入密码"
                      {...getFieldProps('r_confirmPassword')}
                    />
                  </FormItem>
                    {/**
                       <FormItem>
                         <Checkbox {...getFieldProps('agreement')}>记住我</Checkbox>
                       /FormItem>    
                    **/}

                    <Button type="primary" htmlType="submit">注册</Button>
                  </Form>
                    </TabPane>
                </Tabs>
                </Modal>
            </div>
        )
    }
}

export default MobildeHeader = Form.create({})(MobildeHeader);