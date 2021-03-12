import {createSlice} from '@reduxjs/toolkit'

const slice = createSlice({
    name: 'content',
    initialState: {
        id: 0,
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

export function selectId(state){
    return state.content.id
}


export function getTopic(id){
    return function(dispatch){
        fetch(`/api/topic/${id}`)
        .then(res=>{
            if(res.status == 200){
                return res
            }else{
                throw 'api error'
            }
        })
        .then(data=>data.json())
        .then(json=>{
            json.id = id
            dispatch(setContent(json))
        })
    }
}

export function getThread(id){
    return function(dispatch){
        fetch(`/api/thread/${id}`)
        .then(res=>{
            if(res.status == 200){
                return res
            }else{
                throw 'api error'
            }
        })
        .then(data=>data.json())
        .then(json=>{
            json.id = id
            dispatch(setContent(json))
        })
    }
}

export default slice.reducer