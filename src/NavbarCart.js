import React from 'react'
import { Link } from 'react-router-dom'
function NavbarCart() {
  return (
   
      <div className='navbar'>
     <div className='navbar_heading'>
      <div className='home'><Link to="/"><i class="fa fa-home" aria-hidden="true"></i></Link>
     </div>
      
      </div>
      <hr></hr>
     </div>
   
  )
}

export default NavbarCart
