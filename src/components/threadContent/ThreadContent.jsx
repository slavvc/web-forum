import React from 'react'

import Post from 'Components/post/Post'
import NewPostForm from 'Components/newPostForm/NewPostForm'

export default function(props){
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