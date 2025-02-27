import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../slices/CartSlice.js'; 
import productReducer from "../slices/ProductSlice.js"
import storage from "redux-persist/lib/storage"; // ✅ Uses localStorage by default
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: "x",  // 🔑 Unique key for storing data in localStorage
  storage,             // 💾 Where to save the state (localStorage)
  whiteList:["MyFirstCartslicer"]// ✅ Only persist cart reducer
};

const persistedCartReducer = persistReducer(persistConfig, cartReducer);


console.log("Persisted reducer:", persistedCartReducer);

export const store = configureStore({
  reducer: {
    "MyFirstCartslicer" : persistedCartReducer,
    "MyProductSlice":productReducer
  },
})


export const persistor = persistStore(store);





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



  //React Perisist Concept 
  //step 1:
  // const persistConfig = {
  //   key: "x",  //  Unique key to store data in localStorage
  //   storage,             //  Where to save the data (localStorage)
  //   whitelist: ["cartReducer"], //  Only persist 'cart' reducer
  // };

  // const persistedCartReducer = persistReducer(persistConfig, cartReducer);
  
  //then in local storage we have 
  // {
  //   "x": "{\"items\":[{\"id\":1,\"name\":\"Item A\"}]}"
  // }
  
  

  //What Cart Reducer  actually looks like
  // const cartReducer = (state = { items: [] }, action) => {
  //   switch (action.type) {
  //     case "cart/add":
  //       return { ...state, items: [...state.items, action.payload] };
  //     case "cart/remove":
  //       return { ...state, items: state.items.filter(item => item.id !== action.payload) };
  //     default:
  //       return state;
  //   }
  // };



  //after
  // const persistedCartReducer = persistReducer(persistConfig, cartReducer);
  //  modification the modified cart reducer looks like
  // const persistedCartReducer = (state, action) => {
  //   if (action.type === "persist/REHYDRATE") {
  //     //Load saved state from localStorage when the app starts
  //     return { ...state, ...action.payload };
  //   }
  //   //Pass all other actions to the original cartReducer
  //   return cartReducer(state, action);
  // };

//   When we write:
// export const persistor = persistStore(store);
// persistStore internally looks like
// export default function persistStore(store) {
//   // 🔥 1️⃣ Creates a persistor object that controls persistence
//   const persistor = {
//     getState: () => store.getState(),   // ✅ Allows access to Redux state
//     subscribe: store.subscribe,         // ✅ Listens for Redux state changes
//     purge: () => {                      // 🗑 Clears persisted state manually
//       localStorage.removeItem("x");
//     },
//     flush: () => {                       // 💾 Forces state save to storage
//       localStorage.setItem("x", JSON.stringify(store.getState()));
//     }
//   };

//   // 🔥 2️⃣ Reads saved Redux state from storage
//   const savedState = localStorage.getItem("x");

//   if (savedState) {
//     try {
//       // ✅ Convert JSON back to Redux state
//       const parsedState = JSON.parse(savedState);
      
//       // 🔥 3️⃣ Dispatch an action to rehydrate Redux state
//       store.dispatch({
//         type: "persist/REHYDRATE",
//         payload: parsedState
//       });

//     } catch (error) {
//       console.error("Failed to load persisted state", error);
//     }
//   }

//   return persistor; // ✅ Returns the persistor object
// }

  