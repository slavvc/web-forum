import React from 'react'

import Post from 'Components/Post/Post'
import NewPostForm from 'Components/NewPostForm/NewPostForm'

export default function ThreadContent(props){
    const {title, posts} = props
    return <div className='mx-2'>
        <h1>{title}</h1>
        {
            posts.map((post, idx) => (
                <Post {...post} key={idx}/>
            ))
        }
        <NewPostForm/>
    </div>
}