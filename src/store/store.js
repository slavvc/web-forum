import {configureStore} from '@reduxjs/toolkit'

import contentReducer from './contentSlice'
import userReducer from './userSlice'

export default configureStore({
    reducer:{
        content: contentReducer,
        user: userReducer
    }
})