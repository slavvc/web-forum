import React, {useEffect} from 'react'

import {selectContent, getTopic, getThread} from 'Store/contentSlice'
import {useDispatch, useSelector} from 'react-redux'
import {useRouteMatch} from 'react-router-dom'

import PageContent from 'Components/PageContent/PageContent'

export default function PageContentContainer(props){
    const match = useRouteMatch({
        path: ['/topic/:id', '/thread/:id']
    })
    const path = match ? match.path : '/'

    const dispatch = useDispatch()

    useEffect(()=>{
        switch(path){
            case '/':
                dispatch(getTopic(0))
                break
            case '/topic/:id':
                dispatch(getTopic(
                    match.params.id
                ))
                break
            case '/thread/:id':
                dispatch(getThread(
                    match.params.id
                ))
                break
        }
        
    }, [match?.url])

    const content = useSelector(selectContent)

    return <PageContent {...content}/>
}