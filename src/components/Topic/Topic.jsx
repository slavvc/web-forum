import React from 'react'
import styles from './Topic.module.scss'
import classNames from 'classnames/bind'

import folderImage from 'Public/flaticon/folder.svg'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

import {useHistory} from 'react-router-dom'

const cx = classNames.bind(styles)


export default function Topic(props){
    const {
        className, title, lastPost,
         numThreads, numTopics, link
    } = props
    let history = useHistory()
    
    return <Container
        fluid
        className={
            cx('root', className, 'my-1')
        }
        onClick={()=>{
            history.push(`/topic/${link}`)
        }}
    >
        <Row>
            <Col md className={cx('titleSection', 'py-1')}>
                <h1>
                    <img
                        className={cx('folder')}
                        src={folderImage}
                    />
                    {title}
                </h1>
                <p>({numTopics} topics, {numThreads} threads)</p>
            </Col>
            <Col md className={cx('postsSection')}>
                {lastPost}
            </Col>
        </Row>
    </Container>
}