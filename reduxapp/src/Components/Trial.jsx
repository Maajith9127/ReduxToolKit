import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement } from '../app/slices/CartSlice.js'

const Trial = () => {
  const dispatch = useDispatch()

  const RemoveItem = (e) => {
    const actionObject = decrement(e)
    // action object looks like 
    // {type: 'MyCartSlice/decrement', payload: '15'}
    console.log(e)
    console.log(actionObject)
    dispatch(actionObject)
  }

  const cart = useSelector((state) => state.MyFirstCartslicer)
  const CartProducts = cart.value

  const cards = CartProducts.length > 0 ? CartProducts.map((e) => (
    <div 
      key={e.id} 
      data-id={e.id} 
      className="card bg-white border border-gray-200 shadow-lg rounded-xl p-6 w-full md:w-[70%] lg:w-[50%] flex flex-col items-center transform transition-all duration-300 hover:shadow-2xl hover:scale-105"
    >
      {/* Product Image */}
      <img className='rounded-lg shadow-md w-40 h-40 object-cover' src={e.image} alt={e.name} />

      {/* Product Details */}
      <div className="text-center mt-4">
        <h2 className='text-xl font-bold text-gray-900'>{e.name}</h2>
        <p className="text-gray-600 mt-2 text-sm px-4">{e.description}</p>
        <p className="text-indigo-700 font-semibold text-lg mt-2">💲{e.price}</p>
      </div>

      {/* Remove Button */}
      <button 
        onClick={() => RemoveItem(e.id)} 
        type='button' 
        className='mt-4 bg-red-600 text-white py-2 px-6 rounded-lg text-lg font-semibold transition-all duration-300 hover:bg-red-800 hover:shadow-lg active:scale-95'
      >
        ❌ Remove from Cart
      </button>
    </div>
  )) : (
    <div className="text-center text-gray-500 text-lg mt-10">
      🛒 Your cart is empty. Add some products!
    </div>
  );

  return (
    <div className='flex flex-col items-center p-8 bg-gray-100 min-h-screen'>
      {/* Cart Header */}
      <h1 className='bg-indigo-600 mb-6 w-full text-white text-3xl text-center py-4 font-bold shadow-md rounded-md'>
        🛍️ Your Cart
      </h1>

      {/* Cart Items */}
      <div className="w-full flex flex-col items-center gap-6">
        {cards}
      </div>
    </div>
  )
}

export default Trial

// Point to be noted:
// as soon as  we write
// export const store = configureStore({
//   reducer: {
//     "MyFirstCartslicer" : cartReducer
//   },
// })
// then internally redux toolkit creates a global variable state (which we can use in all the components which are wrapped around with the Provider) 
// like state the one below
// const state = {
//   MyFirstCartslicer: cartReducer(initialState, { type: "@@INIT" }) // Redux calls the reducer to set initial state
// };
// reducer usually takes in two parameters 1) state 2) action type and returns the modified state









































// import React from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// import { decrement } from '../app/slices/CartSlice.js'
// import { store } from '../app/store/store.js'

// const Trial = () => {
//   const dispatch = useDispatch()

//   const RemoveItem = (e) => {
//     const actionobject = decrement(e)
//     //action object looks like 
//     //{type: 'MyCartSlice/decrement', payload: '15'}
//     console.log(e)
//     console.log(actionobject)
//     dispatch(actionobject)
//   }

//   const cart = useSelector((state) => state.MyFirstCartslicer)
//   const CartProducts = cart.value

//   const cards = CartProducts.map((e) => {
//     return (
//       <div key={e.id} data-id={e.id} className="card border border-gray-300 shadow-md w-[90%] md:w-[70%] lg:w-[50%] mb-4 flex flex-col items-center gap-4 p-6 rounded-2xl bg-white transition-transform transform hover:scale-105">
//         <img className='rounded-lg shadow-md' src={e.image} alt={e.name} width="150px" height="150px" />
//         <h2 className='font-bold text-lg text-gray-800'>{e.name}</h2>
//         <p className="text-gray-600 text-sm text-center px-4">Description: {e.description}</p>
//         <p className="text-indigo-700 font-semibold text-lg">Price: ${e.price}</p>
//         <button 
//           onClick={() => RemoveItem(e.id)} 
//           type='button' 
//           className='bg-red-600 text-white font-semibold py-2 px-6 rounded-lg hover:cursor-pointer hover:bg-red-800 transition-colors'
//         >
//           Remove from Cart
//         </button>
//       </div>
//     )
//   })

//   return (
//     <div className='flex flex-col items-center p-6 bg-gray-100 min-h-screen'>
//       <h1 className='bg-indigo-600 mb-6 w-full text-white text-2xl text-center py-3 shadow-md'>
//         Your Cart
//       </h1>
//       {cards}
//     </div>
//   )
// }

// export default Trial

// // Point to be noted:
// // as soon as  we write
// // export const store = configureStore({
// //   reducer: {
// //     "MyFirstCartslicer" : cartReducer
// //   },
// // })
// // then internally redux toolkit creates a global variable  state (which we can use in all the components which are wrapped around with the Provider) 
// // like state the one  below
// // const state = {
// //   MyFirstCartslicer: cartReducer(initialState, { type: "@@INIT" }) //  Redux calls the reducer to set initial state
// // };
// // reducer usually takes in two parameters 1)state 2)action type and returns the modified state
