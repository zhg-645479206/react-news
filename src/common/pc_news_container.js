import React,{ Component} from 'react';
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
    Checkbox,
    Carousel
} from 'antd';

import img1 from '../images/carousel_1.jpg';
import img2 from '../images/carousel_2.jpg';
import img3 from '../images/carousel_3.jpg';
import img4 from '../images/carousel_4.jpg';
import PCnewsBlock from './pc_news_block';
import PCnewsImageBlock from './pc_news_img_block';

const FormItem = Form.Item;
const MenuItem = Menu.Item;
const TabPane = Tabs.TabPane;



class PcNewsContainer extends Component{
    render(){

        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            autoPlay: true
        };

        return (
            <div>
                <Row>
                    <Col span={2}></Col>
                    <Col span={20} className = 'container'>
                        <div className = 'leftContainer'>
                            <div className="carousel">
                                <Carousel {...settings}>
                                    <div><img src={img1} alt="img"/></div>
                                    <div><img src={img2} alt="img"/></div>
                                    <div><img src={img3} alt="img"/></div>
                                    <div><img src={img4} alt="img"/></div>
                                </Carousel>
                            </div>
                            <PCnewsImageBlock count={6} type="guoji" width="400px" cartTitle="国际头条" imageWidth="110px"></PCnewsImageBlock>
                        </div>
                        <Tabs class="tabs_news">
                            <TabPane tab="头条新闻" key="1">
                                <PCnewsBlock count={22} type="top" width="100%" bordered="false" />
                            </TabPane>
                            <TabPane tab="国际" key="2">
                                <PCnewsBlock count={10} type="guoji" width="100%" bordered="false" />
                            </TabPane>
                        </Tabs>
                        <div>
                        <PCnewsImageBlock count={8} type="guoji" width="100%" cartTitle="国际新闻" imageWidth="132px"></PCnewsImageBlock>
                        <PCnewsImageBlock count={16} type="yule" width="100%" cartTitle="娱乐新闻" imageWidth="132px"></PCnewsImageBlock>
                        </div>
                    </Col>
                    <Col span={2}></Col>
                </Row>
            </div>
        )
    }
}


export default PcNewsContainer ;