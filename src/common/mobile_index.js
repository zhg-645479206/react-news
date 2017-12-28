import React, {Component} from 'react';
import MobileHeader from './mobile_header';
import {Tabs, Carousel} from 'antd';
import MobileFooter from './mobile_footer';
import MobileList from './mobile_list';

import img1 from '../images/carousel_1.jpg';
import img2 from '../images/carousel_2.jpg';
import img3 from '../images/carousel_3.jpg';
import img4 from '../images/carousel_4.jpg';

const TabPane = Tabs.TabPane;

class MobileIndex extends Component {
    render() {

        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            autoPlay: true
        };

        return (
            <div>
                <MobileHeader></MobileHeader>
                <Tabs>
                    <TabPane tab="头条" key="1">
                        <div className="carousel">
                            <Carousel {...settings}>
                                <div><img src={img1} alt="img"/></div>
                                <div><img src={img2} alt="img"/></div>
                                <div><img src={img3} alt="img"/></div>
                                <div><img src={img4} alt="img"/></div>
                            </Carousel>
                        </div>
                        <MobileList count={20} type="top"></MobileList>
                    </TabPane>
                    <TabPane tab="社会" key="2">
                        <MobileList count={20} type="shehui"></MobileList>
                    </TabPane>
                    <TabPane tab="国内" key="3">
                        <MobileList count={20} type="guonei"></MobileList>
                    </TabPane>
                    <TabPane tab="国际" key="4">
                        <MobileList count={20} type="guoji"></MobileList>
                    </TabPane>
                    <TabPane tab="娱乐" key="5">
                        <MobileList count={20} type="yule"></MobileList>
                    </TabPane>
                </Tabs>

                <MobileFooter></MobileFooter>
            </div>
        )
    }
}

export default MobileIndex;