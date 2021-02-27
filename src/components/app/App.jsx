import React from 'react'
import styles from './app.module.scss'
import classNames from 'classnames/bind'

import {BrowserRouter} from 'react-router-dom'

import UserBar from 'Components/userbar/UserBar'
import Logo from 'Components/logo/Logo'
import Footer from 'Components/footer/Footer'

import PageContentContainer from 'Components/pageContentContainer/PageContentContainer'


const cx = classNames.bind(styles)

const user = undefined
// const user = { name: 'Димас' }

export default function(props){


    return <BrowserRouter>
        <Logo/>
        <UserBar userInfo={user}/>
        <PageContentContainer/>
        <Footer/>
    </BrowserRouter>
}