import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';
import { MENU_LIST } from './constants';
import './style.less';

const { Sider, Header, Content } = Layout;
const { SubMenu } = Menu;

const MenuBar = ({ selectedKey }) => {
    const renderMenuGroup = ({
        key,
        title,
        subMenuList,
        targetUrl
    }) => {
        if (subMenuList && subMenuList.length > 0) {
            return (
                <SubMenu title={title} key={key}>
                    {subMenuList.map(subMenu => renderMenuGroup(subMenu))}
                </SubMenu>  
            );
        }
        return (
            <Menu.Item key={key}>
                <Link to={targetUrl}>{title}</Link>
            </Menu.Item>
        )
    };

    return (
        <Menu
            mode="inline"
            theme={'dark'}
            selectedKeys={selectedKey}
            className="menu-options"
        >
            {MENU_LIST.map((menu) => renderMenuGroup(menu))}
        </Menu>
    );
}

const PageLayout = ({ title, children, selectedKey, ...rest }) => {
    const [collapsed, setCollapsed] = useState(true);

    const toggle = () => setCollapsed(!collapsed);

    return (
        <Layout className="page-layout">
            <Sider trigger={null} collapsible collapsed={collapsed} width={300}>
                <MenuBar selectedKey={selectedKey} />
            </Sider>
            <Layout>
                <Header>
                    <React.Fragment>
                        <Icon 
                            className="trigger"
                            type={collapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={toggle}
                        />
                        <div className={'header-title'}>{title}</div>
                    </React.Fragment>
                </Header>
                <Content style={{padding: '15px'}} {...rest}>
                    {children}
                </Content>
            </Layout>
        </Layout>
    );
}

export default PageLayout;
