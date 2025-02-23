import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: [],
}
//Note:initialState-->cant change

export const CartSlice = createSlice({
    name: 'MyCartSlice',
    initialState,
    reducers: {
        add: (state, action) => {
            console.log('Hey the add does');
            // console.log(action.payload);
            // console.log(state);
            state.value.push(action.payload); 
         
        },
        decrement: (state, action) => {
            console.log('Hey the decrement does');
            console.log(action.payload, state);
            state.value = state.value.filter(item => item.id !== action.payload);

        },

    },
})

// Action creators are generated for each case reducer function
export const { add, decrement } = CartSlice.actions

export default CartSlice.reducer;
//This is what the reducer fn looks like
// cartReducer(a State, { type: "@@INIT",payload:____ })