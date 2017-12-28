import React, {Component} from 'react';
import {
    Row,
    Col,
    Menu,
    Icon,
    Form,
    Button,
    Modal,
    Tabs,
    message,
    Input,
    Checkbox
} from 'antd';
import {Link , browserHistory } from 'react-router';
import newsLogo from '../images/news.png';
import '../styles/pc.css';

const FormItem = Form.Item;
const MenuItem = Menu.Item;
const TabPane = Tabs.TabPane;

class PCHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 'toutiao',
            modalVisible: false,
            action: 'login',
            hasLogin: true,
            userNickName: '',
            userId: 0
        };
    }

    setModalVisible = value => {
        this.setState({modalVisible: value})
    }

    handleClick = e => {
        if (e.key == "register") {
            this.setState({current: 'register'});
            this.setModalVisible(true)
        } else {
            this.setState({current: e.key});
        }
    }

    handleSubmit = e => {

        // 提交
        e.preventDefault();
        let fetchOptions = {
            method: 'GET'
        };
        let FormData = this
            .props
            .form
            .getFieldsValue();
        console.log('FormData', FormData);
        // fetch('http://newsapi.gugujiangkong.com/Handler.ashx?action=register&username
        // =userName&password=password&r_userName='+
        // FormData.r_userName+'&r_password='+FormData.r_password+'&r_confirmPassword='+
        // F ormData.r_confirmPassword,fetchOptions).then(
        fetch('http://newsapi.gugujiankong.com/Handler.ashx?action=register&username=undefined&' +
                    'password=undefined&r_userName=123&r_password=23&r_confirmPassword=23',
            fetchOptions)
            .then(response => response.json())
            .then(json => {
                // json.UserNickName
                this.setState({userNickName: '海阔天空', userId: json.UserId, hasLogin : true})
            })

        message.success('请求成功！');
        this.setModalVisible(false);
    }

    goback = () => {
        this.setState({
            hasLogin : false
        })
    }

    // goUser = () => {
    //     browserHistory.push('/usercenter')
    // }

    render() {

        let {getFieldProps} = this.props.form;
        const userShow = this.state.hasLogin
            ? <Menu.Item key="logout" className="register">
                    <Button type="primary">{this.state.userNickName}</Button>&nbsp;&nbsp;
                    <Link to="/usercenter" target="_blank">
                        <Button type="dashed">个人中心</Button>
                    </Link>&nbsp;&nbsp;
                    <Button type="ghost" onClick={this.goback}>退出</Button>
                </Menu.Item>
            : <Menu.Item key="register" className="register">
                <Icon type="appstore"/>注册/登陆
            </Menu.Item>;

        return (
            <header>
                <Row>
                    <Col span={2}></Col>
                    <Col span={4}>
                        <a href='/' className="logo">
                            <img src={newsLogo} alt="logo"/>
                            <span>ReactNews</span>
                        </a>
                    </Col>
                    <Col span={16}>
                        <Menu
                            mode="horizontal"
                            onClick={this.handleClick}
                            selectedKeys={[this.state.current]}>
                            <Menu.Item key="toutiao">
                                <Icon type="appstore"></Icon>头条
                            </Menu.Item>
                            <Menu.Item key="yule">
                                <Icon type="appstore"></Icon>娱乐
                            </Menu.Item>
                            <Menu.Item key="tiyu">
                                <Icon type="appstore"></Icon>体育
                            </Menu.Item>
                            <Menu.Item key="keji">
                                <Icon type="appstore"></Icon>科技
                            </Menu.Item>
                            <Menu.Item key="guonei">
                                <Icon type="appstore"></Icon>国内
                            </Menu.Item>
                            {userShow}
                        </Menu>

                        <Modal
                            title="个人中心"
                            wrapClassName="vertical-center-modal"
                            visible={this.state.modalVisible}
                            onCancel={() => this.setModalVisible(false)}
                            onOk={() => this.setModalVisible(false)}
                            onText='关闭'>
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
                                        <FormItem label="账户">
                                            <Input placeholder="请输入账户名" {...getFieldProps('r_userName')}/>
                                        </FormItem>
                                        <FormItem label="密码">
                                            <Input type="password" placeholder="请输入密码" {...getFieldProps('r_password')}/>
                                        </FormItem>
                                        <FormItem label="确认密码">
                                            <Input
                                                type="password"
                                                placeholder="请确认输入密码"
                                                {...getFieldProps('r_confirmPassword')}/>
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

                    </Col>
                    <Col span={2}></Col>
                </Row>
            </header>
        )
    }
}

export default PCHeader = Form.create({})(PCHeader);