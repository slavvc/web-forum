import React from 'react'
import cx from 'classnames/bind'

import UserContainer from 'Components/UserContainer/UserContainer'
import BreadcrumbsContainer from 'Components/BreadcrumbsContainer/BreadcrumbsContainer'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

export default function UserBar(props){
    const {className, userInfo} = props
    
    return <Row 
        className={
            cx(
                className, 
                'no-gutters', 
                'mx-2',
                'align-items-center',
                'justify-content-end'
            )
        }
    >
        <Col sm>
            <BreadcrumbsContainer className={cx('breadcrumbs')}/>
        </Col>
        <Col xs="auto">
            <UserContainer/>
        </Col>
    </Row>
}
