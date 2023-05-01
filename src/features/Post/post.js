import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    id: "",
    address: "",
    phoneNumber: "",
    username: "",
    fullName: "",
    email: "",
    price: "",
    password:"",
    buyerAccountId:"",
    quantity:"",
    cartProduct: [],
    SubTotal:""
} 

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded(state, action) {
    state.id=action.payload
    },
    getAddress(state,action){
      state.address=action.payload
    },
    getPrice(state,action){
      state.price=action.payload
    },
    getEmail(state,action){
      state.email=action.payload
    },
    getPhoneNumber(state,action){
      state.phoneNumber=action.payload
    },
    getUsername(state,action){
      state.username=action.payload
    },
    getPassword(state,action){
      state.password=action.payload
    },
    getBuyerAccountID(state,action){
      state.buyerAccountId=action.payload
    },
    getQuantity(state,action){
      state.quantity=action.payload
    },
    getSubTotal(state,action){
      state.SubTotal=action.payload
    }


  }
})

export const { postAdded, getAddress, getPrice, getEmail, getFullName, getPhoneNumber, getUsername, getPassword,getBuyerAccountID,getQuantity, getSubTotal} = postsSlice.actions

export default postsSlice.reducer;