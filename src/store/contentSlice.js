import {createSlice} from '@reduxjs/toolkit'

const slice = createSlice({
    name: 'content',
    initialState: {
        type: 'topic',
        data: {
            topics: [],
            threads: [],
            title: '',
            path: []
        }
    },
    reducers: {
        setContent: (_, action) => action.payload
    }
})


export const {setContent} = slice.actions

export function selectContent(state){
    return state.content
}

const apiUrl = process.env.NODE_ENV == 'development' 
    ? 'http://127.0.0.1:8000' 
    : ''

export function getTopic(id){
    return function(dispatch){
        fetch(`${apiUrl}/api/topic/${id}`)
        .then(data=>data.json())
        .then(json=>{
            dispatch(setContent(json))
        })
    }
}

export function getThread(id){
    return function(dispatch){
        fetch(`${apiUrl}/api/thread/${id}`)
        .then(data=>data.json())
        .then(json=>{
            dispatch(setContent(json))
        })
    }
}

export default slice.reducer