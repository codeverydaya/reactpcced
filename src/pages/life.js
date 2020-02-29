import React,{Component} from 'react';
import { Button, DatePicker,Layout } from 'antd';
import { Redirect} from 'react-router-dom';
import './life.less';

export  default class  Life extends  Component{
    constructor(props){
        super(props);
    }
    render() {
        return(
            <div style={{height:'100%'}}>
                <Layout>
                    <Redirect to="/ui/table"/>
                    <Layout.Sider>Sider</Layout.Sider>
                    <Layout>
                        <Layout.Header>Header</Layout.Header>
                        <Layout.Content>Content</Layout.Content>
                        <Layout.Footer>Footer</Layout.Footer>
                    </Layout>
                </Layout>
            </div>
        )
    }
}
