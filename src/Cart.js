import React from 'react'
import NavbarCart from './NavbarCart';
import { Link } from 'react-router-dom';
const Cart = ({cartItem,setCartItem,setCheckOutItem}) => {

// QUANTITY INCREMENT.........
if(cartItem.length === 0){
  alert("Cart is empty")
} 
const INCRE_QUANTITY = (item , i)=>{
  setCartItem(
  cartItem.map((value , idx)=>{
       if(i === idx){
         return {...value , quantity : item.quantity + 1}
        }
        return value
      })
      )
    }
    
    
    // QUANTITY DECREMENT.........
    const DECRE_QUANTITY = (item , i)=>{
      setCartItem(
        cartItem.map((value , idx)=>{
          if(i === idx){
            return {...value , quantity : item.quantity - 1}
          }
          return value
        })
        )  
      }
      
      // DELETE CART ........ 
      
      const removeCart = (idx)=>{
        setCartItem(
          cartItem.filter((value , index)=>{
            return idx !== index
          })
          )
        }

        //checkout item  ..........

       const checkoutItem = (item)=>{
         let x = item.price;
         setCheckOutItem(x * item.quantity)
       }
 


  return (
    <div className='flex'>
    <NavbarCart/>
    <div className='allCartItem'>
      {
        cartItem.map((item , i)=>{       
          return(
            <div className='cartItem' key={i}>
            <div className='imgContainer'> 
            <img src={item.image} alt="xx" className='cartImg'/>
            </div>
    <div className='box_item1'>
    <div className='title'>
    <p> <strong>Name </strong> : {item.title.slice(0,10)}</p>
    </div>
   
    <div className='price'>
    <p> <strong>Price</strong> : {item.price} rs</p><br/>
    </div>
   <div className='minusAdd'>
   <div className='counter'>
   Quantity
   <div className='minus'><i class="fa fa-minus-circle" aria-hidden="true" onClick={()=>DECRE_QUANTITY(item , i)}></i></div>
   <div className='inpt'><span>{item.quantity}</span></div>
   <div className='add'><i class="fa fa-plus-circle" aria-hidden="true" onClick={()=>INCRE_QUANTITY(item , i)}></i></div>
   </div>
   <div><i class="fa fa-trash" aria-hidden="true" onClick={()=>removeCart(i)}></i></div>
   </div>
    </div>
   
     <Link to = "/paymentchackout"><button className='checkOutBtn' onClick={()=>checkoutItem(item)}>Checkout</button></Link>
   
            </div>
          )
        })
      }  
    </div>
    </div>
  )
}

export default Cart

