import {createSlice } from '@reduxjs/toolkit';
const initialState={users:[],};

const UserSlice=createSlice({
    name:'UserSlice',
    initialState,
    reducers:{
        personalInfo:(state,action)=>{
            state.users.push(action.payload);
        },
        updateInfo:(state,action)=>{
            const userUpdate=state.users.find((user)=>user.id===action.payload.id);
            if (userUpdate) {
                Object.assign(userUpdate,action.payload)
            }
            
        }
}
});
export const {personalInfo,updateInfo}=UserSlice.actions;
export default UserSlice.reducer;