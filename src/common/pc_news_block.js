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


class PcNewsBlock extends Component{

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
            <li key={index} >
                <Link to={`details/${newsItem.uniquekey}`} target="_blank">
                    {newsItem.title}
                </Link>
            </li>
        )) : '没有加载到任何新闻';

        return (
            <div className = 'topNewsList'>
                <Card>
                    <ul>
                        {newsList}
                    </ul>
                </Card>
            </div>
        )
    }
}


export default PcNewsBlock ;