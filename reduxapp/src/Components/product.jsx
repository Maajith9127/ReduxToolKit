import React, { useState, useEffect } from 'react';

const Product = () => {
  const [product, setProduct] = useState([]); // 'product' should be lowercase
  const string = JSON.stringify(product, null, 2); // Optional: Pretty formatting

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products").then(response => { return response.json() }).then(result => {
      console.log(result)
      setProduct(result)
    })



  }, []);

  const cards = product.map(e => (
  
<div key={e.id} className="card border border-gray-400  mb-4 flex flex-col items-center gap-3 p-5 rounded-[20px] ">
    <img className='rounded-[25px]' src={e.images[0]} alt={e.title} width="150px" height="150px" />
    <h2 className='font-bold'>{e.title}</h2>
    <p>Description:{e.description}</p>
    <p>Price: ${e.price}</p>
  </div>

  ));







  return (
    <div className='grid grid-cols-2 gap-5'>                
     
      {cards}

    </div>
  ); 
};

export default Product;
