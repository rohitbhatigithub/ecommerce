import React from 'react'
import { Link } from 'react-router-dom';
const Product = ({Product,cartFun}) => {
    
   
  return (
   <div className='box_container'>
   <img src={Product.image} alt="xx" className='img1'/>

   <div className='box_item'>
   <p> <strong>Name </strong> : {Product.title}</p>
   <br></br>
    <p> <strong>Category</strong> : {Product.category}</p>
    <br></br>
    <p> <strong>Price</strong>Price : {Product.price} rs</p><br/>
    </div>
    <p><strong>Description</strong> : {Product.description.slice(0 , 50)}</p><br/>
    <p><strong>rating</strong>: {Product.rating.rate}</p><br/>

    <button className='btn_item' onClick={()=>cartFun(Product)}>
    <div className='addtocart'>
    <div>
     <Link to="/Cart"><i class="fa fa-cart-arrow-down" aria-hidden="true"></i></Link>
     </div>
   <div className='logo_div'><span className='logoName'>Add to Cart</span></div>
   </div>
    </button>

   </div>
  )
}

export default Product
