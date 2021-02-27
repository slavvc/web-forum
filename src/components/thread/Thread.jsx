import React from 'react'
import styles from './thread.module.scss'
import classNames from 'classnames/bind'

import veganImage from 'Public/flaticon/vegetarian.svg'

const cx = classNames.bind(styles)

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

const veganSign = <img 
    className={cx('vegan')} 
    src={veganImage}
    title="This thread is vegan safe"
/>

export default function(props){
    const {className, title, lastPost, isVegan, numPosts, onClick} = props

    return <Container
        fluid
        className={
            cx('root', className, 'my-1')
        }
        onClick={onClick}
    >
        <Row>
            <Col md className={cx('titleSection', 'py-1')}>
                <h1>
                    {title}
                    {isVegan ? veganSign : null}
                </h1>
                <p>({numPosts} posts)</p>
            </Col>
            <Col md className={cx('postsSection')}>
                {lastPost}
            </Col>
        </Row>
    </Container>
}