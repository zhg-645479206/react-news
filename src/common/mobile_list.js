import React,{ Component} from 'react';
import {
    Row,
    Col,
    Icon,
    Button,
    Modal,
    Card,
    Tabs,
    message,
    Carousel
} from 'antd';
import { Router,Route,Link,browserHistory } from "react-router";


class MobileList extends Component{

    constructor(props){
        super(props);
        this.state = {
            news: ''
        };
    };

    componentWillMount(){
        var fechOptions = {
            method : 'GET'
        };
        fetch('http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type='+this.props.type+'&count='+this.props.count,fechOptions).then(
            response =>response.json()
        ).then(json => {
  
            this.setState({
                news: json
            });
      
        })
    };

    render(){

        let {news} = this.state;

        let newsList = news.length ? news.map((newsItem,index) => (
            <section key={index} className = "a_artice list-name special_setion">
                <Link to={`details/${newsItem.uniquekey}`} target="_blank">
                    {newsItem.title}
                    <div className ="a_artical_img" >
                        <img src={newsItem.thumbnail_pic_s} alt={newsItem.uniquekey}/>
                    </div>
                    <div className ="a_artical_info">
                        <div className = 'a_artocal_title'>
                            <span>{newsItem.title}</span>
                        </div>
                        <div className = 'a_artocal_desc'>
                            <div className="a_artocal_desc_l">
                                <span className="a_artocal_type">{newsItem.realtype}</span>
                                <span className="a_artocal_time">{newsItem.date}</span>
                            </div>
                        </div>
                    </div>
                </Link>
            </section>
        )) : '没有加载到任何新闻';

        return (
            <div className = 'topNewsList'>
                <Row>
                    <Col span={24}>
                        {newsList}
                    </Col>
                </Row>
            </div>
        )
    }
}


export default MobileList ;