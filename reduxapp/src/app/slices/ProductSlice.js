import { createSlice ,createAsyncThunk} from '@reduxjs/toolkit'

// 1️⃣ Define an Async Thunk to Fetch Products
//createAsyncThunk returns an async object creator function
//i.e it returns something like 
// function fetchProducts(dispatch, getState, extraArgument) { ... }

export const fetchProducts = createAsyncThunk(
    "products/fetchProduct",
    async () => {
      const response = await fetch("https://api.escuelajs.co/api/v1/products");
      return response.json(); // Return the JSON response
    }
  );

  

  //three action object that createAsync returns
//   {
//     type: "products/fetchProduct/pending"
//   }

// If API Call is Successful (Fulfilled Action)
// {
//   type: "products/fetchProduct/fulfilled",
//   payload: [ /* Array of fetched products from API */ ]
// }

// If API Call Fails (Rejected Action)
// {
//   type: "products/fetchProduct/rejected",
//   error: "Network Error" // Or any error message from API
// }


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



//
//fetch producst look like
// async function fetchProducts(dispatch, getState, extraArgument) {
//    return  { type: "products/fetchProduct/pending" } // ✅ First action dispatched
//     try {
//         const response = await fetch("https://api.escuelajs.co/api/v1/products");
//         const data = await response.json();
//         return { type: "products/fetchProduct/fulfilled", payload: data }; // ✅ Success action dispatched
//     } catch (error) {
//         return { type: "products/fetchProduct/rejected", error: error.message }// ❌ Error action dispatched
//     }
//  }
 

//IMPORTANT CONCEPT TO UNDERSTAND 
//WHEN WE RUN 
// extraReducers: (builder) => {
//     builder
//       .addCase(fetchProducts.pending, (state) => {
//         state.status = "loading";
//       })
//       .addCase(fetchProducts.fulfilled, (state, action) => {
//         state.status = "succeeded";
//         state.products = action.payload;
//       })
//       .addCase(fetchProducts.rejected, (state, action) => {
//         state.status = "failed";
//         state.error = action.error.message;
//       });
// }



//then internally a lookUpTable object is created
//which looks like 
// const lookupTable = {
//     "products/fetchProduct/pending": (state) => {
//       state.status = "loading";
//     },
//     "products/fetchProduct/fulfilled": (state, action) => {
//       state.status = "succeeded";
//       state.products = action.payload;
//     },
//     "products/fetchProduct/rejected": (state, action) => {
//       state.status = "failed";
//       state.error = action.error.message;
//     }
//   };





export const {productfetch } = ProductSlice.actions

export default ProductSlice.reducer;
