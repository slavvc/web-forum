import React from 'react'
import {BrowserRouter} from 'react-router-dom'

import UserBar from 'Components/UserBar/UserBar'
import Logo from 'Components/Logo/Logo'
import Footer from 'Components/Footer/Footer'

import PageContentContainer from 'Components/PageContentContainer/PageContentContainer'


export default function App(props){


    return <BrowserRouter>
        <Logo/>
        <UserBar/>
        <PageContentContainer/>
        <Footer/>
    </BrowserRouter>
}