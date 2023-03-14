
import React from 'react'

function Products() {

    const products =  [
        { title: 'Cabbage', isFruit: false, id: 1 },
        { title: 'Garlic', isFruit: false, id: 2 },
        { title: 'Apple', isFruit: true, id: 3 },
      ];

     const listOfProducts = products.map(product =>{
        return (
            <li key={product.id} 
            style={{color:product.isFruit ? 'red':'green'}}
            >{product.title}</li>

        )
     }) 

  return (
    <div>
        {listOfProducts}
    </div>
  )
}

export default Products