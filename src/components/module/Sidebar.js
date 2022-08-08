import React from "react";
import { Layout } from "antd";
import Nav from "./Nav";
import style from "./sidebar.module.css"

const { Sider, Content } = Layout;

const Sidebar = ({ children }) => {
    return (
        <Layout>
            <Sider className={style.menuBar}>
                <Nav link="/"
                    title="Home"
                ></Nav>
                <Nav
                    link="/about"
                    title="About"
                />
                <Nav
                    link="/contact"
                    title="Contact"
                />
            </Sider>
            <Layout>
                <Content className={style.contents}>{children}</Content>
            </Layout>
        </Layout>
    )
}

export default Sidebar