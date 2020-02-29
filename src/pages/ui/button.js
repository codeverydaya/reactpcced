import React, {Component} from 'react';
import {Card,Button} from 'antd';

export default class QButton extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
            <Card title="Buttons" >

                <Button type="primary">Primary</Button>
                <Button>Default</Button>
                <Button type="dashed">Dashed</Button>
                <Button type="danger">Danger</Button>
                <Button type="link">Link</Button>

            </Card>
                <Card title="Buttons" >
                    <Button shape="circle" icon="search" />
                    <Button icon="search">Search</Button>
                    <Button type="dashed" shape="circle" icon="search" />
                    <Button type="dashed" icon="search">
                        Search
                    </Button>
                </Card>
            </div>
        );
    }

    componentDidMount() {
    }

}
