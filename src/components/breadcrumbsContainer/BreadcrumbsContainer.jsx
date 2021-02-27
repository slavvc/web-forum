import React from 'react'

import Breadcrumbs from 'Components/breadcrumbs/Breadcrumbs'

import {selectContent} from 'Store/contentSlice'
import {useSelector} from 'react-redux'

export default function(props){
    const {data: {path}, type} = useSelector(selectContent)
    return <Breadcrumbs path={path} isTopic={type=='topic'} {...props}/>
}