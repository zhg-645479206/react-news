import React , { Component } from 'react';
import PCHeader from './pc_header';
import PCFooter from './pc_footer';
import PcNewsContainer from './pc_news_container';


class PCIndex extends Component{
    render(){
        return (
            <div>
                <PCHeader></PCHeader>
                <PcNewsContainer></PcNewsContainer>
                <PCFooter></PCFooter>
            </div>
        )
    }
}

export default PCIndex;