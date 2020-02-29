import React, {Component} from 'react';
import {Row, Col} from 'antd';
import './index.less'

export default class Index extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='home'>
                天天敲代码管理平台
            </div>
        );
    }

    componentDidMount() {
    }

}
