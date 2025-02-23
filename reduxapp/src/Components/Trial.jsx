import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement } from '../app/slices/CartSlice.js'
import { store } from '../app/store/store.js'





const Trial = () => {


  const dispatch=useDispatch()

 const RemoveItem =(e)=>{
const actionobject= decrement(e)
//action object looks like 
//{type: 'MyCartSlice/decrement', payload: '15'}
  console.log(e)
  console.log(actionobject)
  dispatch(actionobject)
 }




  
  const cart = useSelector((state)=>state.MyFirstCartslicer)
  // console.log(cart.value)
  const CartProducts=cart.value
  const cards =CartProducts.map((e)=>{
    // console.log(e,e.id,e.name,e.image,e.price,e.description)
    return(

    <div key={e.id} data-id={e.id} className="card border w-[50%] border-gray-400  mb-4 flex flex-col items-center gap-3 p-5 rounded-[20px] ">
    <img className='rounded-[25px]' src={e.image} alt={e.name} width="150px" height="150px" />
    <h2 className='font-bold'>{e.name}</h2>
    <p>Description:{e.description}</p>
    <p>Price: ${e.price}</p>
    <button onClick={()=>RemoveItem(e.id)}  type='button' className='bg-indigo-600 text-white p-4 rounded-[20px] hover:cursor-pointer hover:bg-indigo-800  '>Remove from cart</button>
  </div>
    )


  })
  // console.log(cards)

  //example 1:
//state.MyFirstCartslicer=cartReducer(initilState, { type: "@@INIT" }
//example 2:
//state.MyFirstCartslicer=cartReducer(initalState, { type: "cart/add", payload: { id: 2, name: "New Item" } )
// console.log(cart.value[0].name)

// const item=cart.value[0].name
  



  return (
    <div className='flex flex-col items-center'>
      <h1 className='bg-indigo-600 mb-4 rounded-[0px] w-[100%] text-white text-1xl p-2'>Your Cart</h1>
     {cards}
    </div>
  )
}

export default Trial

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
//   MyFirstCartslicer: cartReducer(initialState, { type: "@@INIT" }) //  Redux calls the reducer to set initial state
// };
//reducer usually takes in two paramtres 1)state 2)action type and returns the modified state