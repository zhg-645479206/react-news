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
    Checkbox,
    Carousel,
    Upload,
    Card
} from 'antd';
const TabPane = Tabs.TabPane;

class PcUser extends Component {
    constructor(){
        super();
        this.state = {
            visible: false,
            previewImage:'',
            userConllection: []
        }
    }
    render() {

        const props = {
            action: 'http://newsapi.gugujiangkong.com/handler.ashx',
            handers: {
                'Access-Control-Allow-Origin': "*"
            },
            listType: 'picture-card',
            defaultFieldList: [
                {
                    uid: -1,
                    name: 'xx.png',
                    state: 'done',
                    url: 'http://pic36.photophoto.cn/20150804/0017029458743174_b.jpg',
                    thumburl: 'http://pic36.photophoto.cn/20150804/0017029458743174_b.jpg'
                }
            ],
            onPreview: (file) => {
                this.setState({previewImage:file.url,visible: true});
            }
        };

        let {userConllection} = this.state;
        let userConllectionlist  = userConllection.length ? userConllection.map((item,index) => (
            <Card key={index} title={item.uniquekey}>
                <p>{item.title}</p>
            </Card>
        )) : '您还没有收藏任何的新闻' ;

        return (
            <Row>
                <Col span={2}></Col>
                <Col span={20}>
                    <Tabs>
                        <TabPane tab="我的收藏列表" key="1">
                            <div>
                                {userConllectionlist}
                            </div>
                        </TabPane>
                        <TabPane tab="我的评论列表" key="2"></TabPane>
                        <TabPane tab="头像设置" key="3">

                            <div>
                                <Upload {...props}>
                                    <Button type="ghost">
                                        <Icon type="upload"/>
                                        点击上传
                                    </Button>
                                    <div className="ant-upload-text"></div>
                                </Upload>  
                                <Modal title="图片展示" visible={this.state.visible} footer={null}
                                onOk={this.handleOk} onCancel={this.handleCancel}
                              >
                                    <img src={this.state.previewImage} alt="预览"/>
                              </Modal>
                            </div>

                        </TabPane>
                    </Tabs>
                </Col>
                <Col span={2}></Col>
            </Row>
        )
    }
}

export default PcUser;