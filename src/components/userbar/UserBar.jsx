import React from 'react'
import styles from './UserBar.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

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
                // 'root', 
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
