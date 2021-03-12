import React from 'react'

import Post from 'Components/Post/Post'
import NewPostFormContainer from 'Components/NewPostFormContainer/NewPostFormContainer'

export default function ThreadContent(props){
    const {title, posts, isLoggedIn} = props
    return <div className='mx-2'>
        <h1>{title}</h1>
        {
            posts.map((post, idx) => (
                <Post {...post} key={idx}/>
            ))
        }
        {
            isLoggedIn
            ? <NewPostFormContainer/>
            : null
        }
    </div>
}