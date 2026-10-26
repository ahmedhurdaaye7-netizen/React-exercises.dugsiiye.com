import { useState } from "react";

function ShopingCart(){

  const[productName,setProductName] = useState('');
  const[productPrice,setProductPrice] = useState('');
  const[products,setProducts]  = useState([])
  function handleADD(){
   if(productName.trim()!=='' && productPrice.trim()!== ''){
        const newProducts = {
         id: Date.now(),
         name:productName,
         price:  parseFloat(productPrice),
         quantity: 1
        } 
        setProducts([...products,newProducts])
        setProductName('')
        setProductPrice('')
   }
   
  }

  function removeProduct(id){
   const updatedProduct = products.filter(product => product.id !== id)
    setProducts(updatedProduct)

  }

  return(
   <div>
       <h2>SIMple shopping cart</h2>

      <div>
        <h3>add  a product</h3>
        <input type="text" 
        placeholder="product name"
         onChange={(e)=>setProductName(e.target.value)}
        value={productName}

        />
        <input type="number"
         placeholder="price"
         onChange={(e)=>setProductPrice(e.target.value)}
        value={productPrice}
         
         />
        <button onClick={handleADD}>add to cart</button>
      </div>
      <div>
        <h2>products in cart</h2>
        <ul>
          {

            products.length > 0 ? (
                    
                      <div>
                        {
                          products .map(product=>(
                            <li key={product.id}>
                               <strong>{product.name}</strong>  - ${product.price.toFixed(2)}

                               <div>
                                quantitiy: 
                                <button>-</button>
                                {product.quantity}
                                <button>+</button>
                               </div>
                               <button onClick={()=>removeProduct(product.id)}>remove</button>
                            </li>
                          ))
                        }
                      </div>
            ): <p> cart is empty</p>

          }
           </ul>
         
      </div>
       
   </div>

  )

}
export default ShopingCart;


