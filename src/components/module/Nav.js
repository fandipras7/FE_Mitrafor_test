import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Typography } from 'antd'

const { Title } = Typography

const Nav = ({ link, title }) => {
    return (
        <Link to={link}>
            <Row>
                <Col>
                    <Title level={3} style={{ color: "white" }}>
                        {title}
                    </Title>
                </Col>
            </Row>
        </Link>
    )
}

export default Nav