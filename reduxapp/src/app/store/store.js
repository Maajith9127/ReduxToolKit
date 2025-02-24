import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../slices/CartSlice.js'; 
import productReducer from "../slices/ProductSlice.js"
export const store = configureStore({
  reducer: {
    "MyFirstCartslicer" : cartReducer,
    "MyProductSlice":productReducer
  },
})





//FOR MY OWN UNDERSTANDING
//Point to be noted:
//as soon as  we write
// export const store = configureStore({
//   reducer: {
//     "MyFirstCartslicer" : cartReducer
//   },
// })
//then internally redux toolkit creates a global variable  state (which we can use in all the components which are wrapped around with the Provider) 
//like state the one  below
// const state = {
//   MyFirstCartslicer: {
  // value: [],
  //     
  //}
  // MyProductSlice :{
    //products:[],
    // status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
    // error: null, // Store errors if API request fails
  
    //}
    //  //  Redux calls the reducer to set initial state
    // };
    //reducer usually takes in two paramtres 1)state 2)action object and returns the modified state
   
   
   
    // cartReducer(a State, { type: "@@INIT",payload:___ })[the sync reducer],
  // productreducer(a State, { type: "@@INIT",payload:___ })[the sync reducer],