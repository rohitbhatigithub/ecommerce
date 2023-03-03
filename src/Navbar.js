import React from 'react'
import { Link } from 'react-router-dom';
import './App.css'
const Navbar_Button = ({cartItem}) => {
  return (
    <div className='navbar'>
     <div className='navbar_heading'>
      <div className='home'><Link to="/"><i class="fa fa-home" aria-hidden="true"></i></Link>
     </div>
      
       <div>
        <span className='web_name'>ecommerce</span>
       </div>
    
      <div className='cart cartitem'>
      <Link to="cart"><i class="fa fa-cart-arrow-down" aria-hidden="true"></i> <div className='count'>{cartItem && cartItem.length}</div></Link>
     
      </div>
      </div>
      <hr></hr>
     </div>
   
  )
}

export default Navbar_Button;