import React from 'react'

import PostContainer from 'Components/PostContainer/PostContainer'
import NewPostFormContainer from 'Components/NewPostFormContainer/NewPostFormContainer'

export default function ThreadContent(props){
    const {title, posts, isLoggedIn} = props
    return <div className='mx-2'>
        <h1>{title}</h1>
        {
            posts.map((post, idx) => (
                <PostContainer {...post} key={post.id}/>
            ))
        }
        {
            isLoggedIn
            ? <NewPostFormContainer/>
            : null
        }
    </div>
}