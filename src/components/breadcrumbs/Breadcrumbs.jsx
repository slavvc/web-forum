import React from 'react'
import styles from './Breadcrumbs.module.scss'
import classNames from 'classnames/bind'

import Breadcrumb from 'react-bootstrap/Breadcrumb'

import {useHistory} from 'react-router-dom'

const cx = classNames.bind(styles)

// const path = ['Home', 'Stairway', 'Train Station', 'Magadan']

export default function Breadcrumbs(props){
    const {className, path, isTopic} = props
    let history = useHistory()

    return <Breadcrumb className={cx(className, 'root', 'pb-0')}>
        {
            path.map(({id, title}, idx) => (
                <Breadcrumb.Item 
                    key={id}
                    active={isTopic && idx == path.length-1}
                    onClick={()=>{
                        history.push(`/topic/${id}`)
                    }}
                > 
                    {id == 0 ? 'Home' : title} 
                </Breadcrumb.Item>
            ))
        }
    </Breadcrumb>
}