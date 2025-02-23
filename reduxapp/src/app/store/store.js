import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../slices/CartSlice.js'; 

export const store = configureStore({
  reducer: {
    "MyFirstCartslicer" : cartReducer
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
//   MyFirstCartslicer: cartReducer(a State, { type: "@@INIT" }) //  Redux calls the reducer to set initial state
// };
//reducer usually takes in two paramtres 1)state 2)action type and returns the modified state