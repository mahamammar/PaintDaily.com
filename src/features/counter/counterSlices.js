import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    value: 0,
}
export const counterSlice = createSlice({
    name:'counter',
    initialState,
    reducers:{
        increment:(state)=>{
            state.value +=1
        },
        IncrementByID:(state)=>{
            state.value +=1
        },
        incrementByAmount:(state,action)=>{
            state.value+=action.payload
        }

    }

})
export const {increment,IncrementByID,incrementByAmount,getUserData,postAdded} = counterSlice.actions
export default counterSlice.reducer