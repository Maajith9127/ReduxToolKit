import { createSlice ,createAsyncThunk} from '@reduxjs/toolkit'

// 1️⃣ Define an Async Thunk to Fetch Products
export const fetchProducts = createAsyncThunk(
    "products/fetchProducts",
    async () => {
      const response = await fetch("https://api.escuelajs.co/api/v1/products");
      return response.json(); // Return the JSON response
    }
  );
  


const initialState = {
    products: [],
    status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null, // Store errors if API request fails

}
//Note:initialState-->cant change

export const ProductSlice = createSlice(
    {
    name: 'ProductSlice',
    initialState,
    reducers: {
        
        productfetch:(state,action)=>{
            console.log("Hi there");
            
        }
       
    

    },
    extraReducers: (builder) => {
        builder
          .addCase(fetchProducts.pending, (state) => {
            state.status = "loading";  // Update state when API request starts
          })
          .addCase(fetchProducts.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.products = action.payload; // Store the fetched products
          })
          .addCase(fetchProducts.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message; // Store the error message
          });
      }

})






export const {productfetch } = ProductSlice.actions

export default ProductSlice.reducer;
