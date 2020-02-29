import React, {Component} from 'react';
import {Row, Col} from 'antd';
import Header from '../components/header';
import Footer from '../components/footer';
import Left from '../components/left';
import Home from '../components/home';

import '../style/common.less';


export default class Admin extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Row className='container'>
                <Col span={3} className='nav-left'>
                    <Left></Left>
                </Col>
                <Col span={21} className='main'>
                    <Header>
                    </Header>
                    <Row className='content'>
                        {this.props.children}
                    </Row>
                    <Footer></Footer>
                </Col>
            </Row>
        );
    }

    componentDidMount() {
    }

}
