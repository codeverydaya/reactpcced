import React, {Component} from 'react';
import {Row, Col} from 'antd';
import './index.less'

export default class Index extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Row className='header'>
                <Col className='header-title' span={24}>
                    <span>你好！lmy</span>
                </Col>

            </Row>
        );
    }

    componentDidMount() {
    }

}
