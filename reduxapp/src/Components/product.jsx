import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { add } from '../app/slices/CartSlice.js';
import { fetchProducts } from "../app/slices/ProductSlice.js";
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";

const Product = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.MyProductSlice.products);

  useEffect(() => {
    dispatch(fetchProducts()); // ✅ Runs only once when the component mounts
  }, [dispatch]);

  console.log(product);

  const AddToCart = (e) => {
    e.stopPropagation(); 
    const cardDiv = e.target.closest(".card");

    const product = {
      id: cardDiv.getAttribute("data-id"),
      name: cardDiv.querySelector("h2").innerText,
      description: cardDiv.querySelector("p:nth-of-type(1)").innerText,
      price: cardDiv.querySelector("p:nth-of-type(2)").innerText,
      image: cardDiv.querySelector("img").src,
    };

    const actionObject = add(product);
    console.log("Action Object:", actionObject);
    dispatch(actionObject);
  };

  const navigate = useNavigate();

  const CardView = (e) => {
    console.log("Card Clicked");
    const cardDiv = e.target.closest(".card");
    const id = cardDiv.getAttribute("data-id");
    console.log(id);
    navigate(`/product/${id}`); 
  };

  const cards = product.map(e => (
    <div 
      key={e.id} 
      onClick={CardView} 
      data-id={e.id} 
      className="card bg-white shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl cursor-pointer flex flex-col"
    >
      {/* Image Section */}
      <div className="image-container w-full h-[250px] flex justify-center items-center overflow-hidden">
        <img className="w-full transform transition-all duration-300 hover:scale-105 object-cover rounded-t-lg" src={e.images[0]} alt={e.title} />
      </div>

      {/* Content Section with Fixed Height */}
      <div className="p-5 flex flex-col flex-grow">
        <h2 className="text-lg font-bold text-gray-900">{e.title}</h2>
        <p className="text-sm text-gray-600 mt-2 flex-grow">{e.description}</p>
        <p className="text-md font-semibold text-indigo-600 mt-2">Price: ${e.price}</p>

        {/* Button Wrapper to Ensure Alignment */}
        <div className="mt-auto flex justify-center">
          <button 
            onClick={AddToCart} 
            type='submit' 
            className="mt-4 bg-indigo-600 text-white py-2 px-6 rounded-full transition-all duration-300 hover:bg-indigo-800 hover:shadow-md w-full"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  ));

  return (
    <>
      <section className="p-10">
        <h2 className="text-3xl font-bold text-indigo-700 flex items-center gap-2">
          🔐 Our Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
          {cards}
        </div>
      </section>
    </>
  );
};

export default Product;











//MY OWN CODE
// import React, { useState, useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { add } from '../app/slices/CartSlice.js';
// import { fetchProducts } from "../app/slices/ProductSlice.js";
// import { useSelector } from 'react-redux';
// import { useNavigate } from "react-router-dom";
// const Product = () => {
//   const dispatch = useDispatch()
//   const product = useSelector((state) => state.MyProductSlice.products);

  
//   useEffect(() => {
    
//     dispatch(fetchProducts()); // ✅ Runs only once when the component mounts
    
//   }, [dispatch])
//   console.log(product)
  


//   // const [product, setProduct] = useState([]); // 'product' should be lowercase
//   // const string = JSON.stringify(product, null, 2); // Optional: Pretty formatting
//   // useEffect(() => {
//   //   fetch("https://api.escuelajs.co/api/v1/products").then(response => { return response.json() }).then(result => {
//   //     console.log(result)
//   //     setProduct(result)
//   //   })
//   // }, []);
//   // this use effect hook will run only after rendering


//   //Imp Concept to remember:
//   //This case will help me to understand Use Effect Properly
//   // console.log(product)
//   const AddToCart = (e) => {
//     e.stopPropagation(); 
//     console.log(e.target.closest(".card"))
//     const cardDiv = e.target.closest(".card")
//     //  const cardString = cardDiv.outerHTML;

//     //Here we will use dispatch
//     // dispatch(add())
//     // Extract product details
//     const product = {
//       id: cardDiv.getAttribute("data-id"),
//       name: cardDiv.querySelector("h2").innerText,
//       description: cardDiv.querySelector("p:nth-of-type(1)").innerText,
//       price: cardDiv.querySelector("p:nth-of-type(2)").innerText,
//       image: cardDiv.querySelector("img").src,
//     };

//     //action object creator function takes in an json object 
//     const actionObject = add(product);
//     console.log("Action Object:", actionObject);
//     //Now the action object looks like
//     // {type: 'MyCartSlice/add', payload: {…}}


//     dispatch(actionObject)


//   //what does the dispatch function does internally?
//   // the dispatch function does only one thing
//   // it send the current state and action object to a function called
//   // root reducer

//   //This is what root reducer looks like normally 
//   // const rootReducer = (state, action) => {
//   //   return {
//   //     MyFirstCartslicer: cartReducer(state.MyFirstCartslicer, action),
//   //     MyProductSlice: productReducer(state.MyProductSlice, action),
//   //   };
//   // };

//   //However if we use Redux Persist
//     // const rootReducer = (state, action) => {
//   //   return {
//   //     MyFirstCartslicer: PersistcartReducer(state.MyFirstCartslicer, action),
//   //     MyProductSlice: productReducer(state.MyProductSlice, action),
//   //   };
//   // };




//   }
//   const navigate =useNavigate()

//   const CardView =(e)=>{
//     console.log("Card Clicked")
//     // console.log(e.target)
//     const cardDiv = e.target.closest(".card")
//     const id=cardDiv.getAttribute("data-id");
//     console.log(cardDiv.getAttribute("data-id"))
//     navigate(`/product/${id}`); 

//   }
 
//   const cards = product.map(e => (

//     <div key={e.id} onClick={CardView} data-id={e.id} className="card border border-gray-300 mb-4 flex flex-col items-center gap-3 p-5 hover:border-gray-400 hover:cursor-pointer  ">
//       <div className=' w-[100%] min-h-[90%] flex flex-col items-center border-b-1 border-gray-400'>

//         <div className="image-container  w-fit h-70 flex justify-center items-center overflow-hidden">
//           <img className="w-full h-full object-contain rounded-[5px]" src={e.images[0]} alt={e.title} />
//         </div>

//         <h2 className='font-bold'>{e.title}</h2>
//         <p>Description:{e.description}</p>
//         <p>Price: ${e.price}</p>
//       </div>
//       <button onClick={AddToCart} type='submit' className='bg-indigo-600 text-white p-4 rounded-[20px] hover:cursor-pointer hover:bg-indigo-800  '>Add to cart</button>
//     </div>

//   ));
//   //actually product.map returns a array
//   //which looks like cards= [ card1, card2 ,.... ]

//   return (
//     <>
//       <h1 className='bg-indigo-600 mb-4 rounded-[0px] w-[100%] text-white text-1xl p-5'>Your Products</h1>
//       <div className='grid grid-cols-1   h-[70vh] overflow-scroll md:grid-cols-3 gap-5 p-10 mb-5'>
//         {cards}
//       </div>
//     </>
//   );
// };


// export default Product;   