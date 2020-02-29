import React, {Component} from 'react';
import { Menu, Icon, Button } from 'antd';
import { NavLink } from 'react-router-dom';
import MenuConfig from '../../config/menuConfig';
import './index.less';

const { SubMenu } = Menu;

export default class Index extends Component {
    constructor(props) {
        super(props)
        this.state={
            menuList:null
        };
    }

    render() {
        return (
            <div  className='menu' >
                <div className='logo'>
                    <img  src='/logo.jpg'/>
                    <h2>天天敲代码</h2>
                </div>
            <Menu
                defaultSelectedKeys={['1']} mode="inline">
               { this.state.menuList}
            </Menu>

            </div>
        );
    }

    //渲染菜单
    renderMenu=(menuList)=>{
       return  menuList.map((item)=>{
            if(item.children){
                return(
                    <SubMenu key={item.key} title={item.title}>
                        {
                            this.renderMenu(item.children)
                        }
                    </SubMenu>
                )
            }else{
                return (
                    <Menu.Item key={item.key}>
                        <NavLink to={item.key}>{item.title}</NavLink>
                    </Menu.Item>
                )
            }
        })
    }

    componentDidMount() {
        const menuList = this.renderMenu(MenuConfig)

        this.setState({
            menuList
        })
    }

}
