import {configureStore} from '@reduxjs/toolkit';
import UserSlice from '../slices/UserSlice';
import userAuth from '../slices/userAuth';
import SongSlice from '../slices/SongSlice'

export const store=configureStore({
    reducer:{
        auth:UserSlice,
        authAction:userAuth,
        song:SongSlice,
    }
})