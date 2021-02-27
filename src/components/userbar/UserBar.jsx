import React from 'react'
import styles from './userBar.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

import User from 'Components/user/User'
import BreadcrumbsContainer from 'Components/breadcrumbsContainer/BreadcrumbsContainer'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

export default function(props){
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
            <User userInfo={userInfo}/>
        </Col>
    </Row>
}
