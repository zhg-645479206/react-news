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


class PcNewsImageBlock extends Component{

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
            console.log('json',json);
            this.setState({
                news: json
            });
            console.log('setState',this.state.news);
        })
    };

    render(){

        const styleImages = {
            display: 'block',
            width: this.props.imageWidth,
            height: '90px'
        };
        const styleh3 = {
            width: this.props.imageWidth,
            whiteSpace: 'nowarp',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
        };

        let {news} = this.state;
        let newsList = news.length ? news.map((newsItem,index) => (
            <div key={index} className="imageBlock">
                <Link to={`details/${newsItem.uniquekey}`} target="_blank">
                    <div className="custom-image">
                       <img style={styleImages} src={newsItem.thumbnail_pic_s} />
                    </div>
                    <div className="custom-card">
                        <h3 style={styleh3}>{newsItem.title}</h3>
                        <p>{newsItem.author_name}</p>
                    </div>
                </Link>
            </div>
        )) : '没有加载到任何新闻';
   
        return (
            <div className = 'topNewsList'>
                <Card title={this.props.cartTitle} bordered={true} style={{width: this.props.width}}>
                    {newsList}
                </Card>
            </div>
        )
    }
}


export default PcNewsImageBlock ;