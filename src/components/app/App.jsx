import React from 'react'
import styles from './App.module.scss'
import classNames from 'classnames/bind'

import {BrowserRouter} from 'react-router-dom'

import UserBar from 'Components/UserBar/UserBar'
import Logo from 'Components/Logo/Logo'
import Footer from 'Components/Footer/Footer'

import PageContentContainer from 'Components/PageContentContainer/PageContentContainer'


const cx = classNames.bind(styles)

const user = undefined
// const user = { name: 'Димас' }

export default function App(props){


    return <BrowserRouter>
        <Logo/>
        <UserBar userInfo={user}/>
        <PageContentContainer/>
        <Footer/>
    </BrowserRouter>
}