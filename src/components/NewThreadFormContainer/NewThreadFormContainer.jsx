import React, { useRef } from 'react'
import {useSelector, useDispatch} from 'react-redux'

import {selectToken} from 'Store/userSlice'
import {selectId, getTopic} from 'Store/contentSlice'

import NewThreadForm from 'Components/NewThreadForm/NewThreadForm'

export default function NewThreadFormContainer(props){
    const {className} = props
    const titleRef = useRef(null)
    const isVeganRef = useRef(null)
    const topicId = useSelector(selectId)
    const token = useSelector(selectToken)
    const dispatch = useDispatch()
    return <NewThreadForm
        className={className}
        titleRef={titleRef}
        isVeganRef={isVeganRef}
        onAdd={async ()=>{
            const titleElem = titleRef.current
            const isVeganElem = isVeganRef.current
            if(titleElem !== null && isVeganElem !== null){
                const title = titleElem.value
                const isVegan = isVeganElem.checked
                
                const response = await fetch(
                    '/api/thread',
                    {
                        method: 'POST',
                        body: new URLSearchParams({
                            parent_id: topicId,
                            title: title,
                            is_vegan: isVegan
                        }),
                        headers: {
                            authorization: `bearer ${token}`
                        }
                    }
                )
                if(response.status == 204){
                    dispatch(getTopic(topicId))
                    titleElem.value = ''
                    isVeganElem.checked = false
                }
            }
            
        }}
    />
}