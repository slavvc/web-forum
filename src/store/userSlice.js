import {createSlice} from '@reduxjs/toolkit'

const slice = createSlice({
    name: 'user',
    initialState: {
        token: null,
        user: null
    },
    reducers: {
        setToken: (store, action) => {
            const token = action.payload
            store.token = token
        },
        setUser: (store, action) => {
            const user = action.payload
            store.user = user
        }
    }
})


export const {setToken, setUser} = slice.actions

export function selectUser(state){
    return state.user.user
}

export function selectToken(state){
    return state.user.token
}

export function authenticated(token){
    return function(dispatch){
        dispatch(setToken(token))
        fetch('/api/user', {
            method: 'GET',
            headers: {
                authorization: 'bearer ' + token
            }
        })
        .then(res => res.json())
        .then(json => {
            dispatch(setUser(json))
        })
    }
}

export default slice.reducer