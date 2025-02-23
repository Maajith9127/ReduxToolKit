import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { add } from '../app/slices/CartSlice.js';

const Product = () => {
  const [product, setProduct] = useState([]); // 'product' should be lowercase
  const string = JSON.stringify(product, null, 2); // Optional: Pretty formatting

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products").then(response => { return response.json() }).then(result => {
      console.log(result)
      setProduct(result)
    })



  }, []);

  const dispatch = useDispatch()

  const AddToCart =(e)=>{
    console.log(e.target.closest(".card"))
   const  cardDiv =e.target.closest(".card")
  //  const cardString = cardDiv.outerHTML;

    //Here we will use dispatch
    // dispatch(add())
    // Extract product details
    const product = {
      id: cardDiv.getAttribute("data-id"),
      name: cardDiv.querySelector("h2").innerText,
      description: cardDiv.querySelector("p:nth-of-type(1)").innerText,
      price: cardDiv.querySelector("p:nth-of-type(2)").innerText,
      image: cardDiv.querySelector("img").src,
  };

  //action object creator function takes in an json object 

  const actionObject = add(product);
console.log("Action Object:", actionObject); 
//Now the action object looks like
// {type: 'MyCartSlice/add', payload: {…}}
  dispatch(actionObject)

  //dispatch function takes in an appropriate action object and  dispatches it and understands it and sends it to the redux
  //toolkit and the 




  }

  const cards = product.map(e => (
  
<div key={e.id} data-id={e.id} className="card border border-gray-400  mb-4 flex flex-col items-center gap-3 p-5 rounded-[20px] ">
    <img className='rounded-[25px]' src={e.images[0]} alt={e.title} width="150px" height="150px" />
    <h2 className='font-bold'>{e.title}</h2>
    <p>Description:{e.description}</p>
    <p>Price: ${e.price}</p>
    <button onClick={AddToCart} type='submit' className='bg-indigo-600 text-white p-4 rounded-[20px] hover:cursor-pointer hover:bg-indigo-800  '>Add to cart</button>
  </div>

  ));
  //actually product.map returns a array
  //which looks like cards= [ card1, card2 ,.... ]







  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>                
     
      {cards}

    </div>
  ); 
};


export default Product;
