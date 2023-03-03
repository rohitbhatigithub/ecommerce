import React, { useState } from 'react'
import { Link } from 'react-router-dom';
function PaymentChackout({checkOutItem}) {

const [cardDetails , setCartDetails] = useState({
  cardNumber : "",
  cvv : "",
  ExpiryDate : ""
})
  const[error , setError] = useState(false)
  const[success , setSuccess] = useState(false)


const checkoutHnadler = (e)=>{
  let name = e.target.name;
  let value = e.target.value;
   setCartDetails((pre)=>{
     return {...pre , [name] : value}
   })
}
const payment = ()=>{
  if(cardDetails.cardNumber.length  < 12 || cardDetails.cvv.length < 3 || cardDetails.ExpiryDate.length === 0){
    setError(true)
  }
  
  else{
    setError(false)
    setSuccess(true)
  }
}
console.log(cardDetails)
  return (
    <div className='checkOut'>
     <div className='navbar'>
     <div className='navbar_heading'>
      <div className='home'><Link to="/"><i class="fa fa-home" aria-hidden="true"></i></Link>
     </div>
      </div>
      <hr></hr>
     </div>

       <div className='checkOut_container'>
        <h3>Payment</h3>
        <hr></hr>
        <lable>Card no.</lable>
            <input type="text" placeholder='0000 0000 0000'   className='input' maxLength="12" 
            name = "cardNumber" onChange={(e)=>checkoutHnadler(e,this)}/>
            {error && cardDetails.cardNumber.length < 12   ? <h4 className='error'>can't empty</h4> : ""}
           <br></br>

        <lable>CVV</lable>
            <input type="text" className='input' maxLength="3" placeholder='000'   name = "cvv" onChange={checkoutHnadler}/>
            {error &&  cardDetails.cvv.length <3  ? <h4 className='error'>can't empty</h4> : ""}
            <br></br>

        <lable>Expiry Date</lable>
        <input type="date" className='input'  name = "ExpiryDate" onChange={checkoutHnadler}/>
        {error && cardDetails.ExpiryDate.length === 0  ? <h4 className='error'>can't empty</h4> : ""}
        <br></br>

        <button type='submit' className='checkOutBtn' onClick={payment}> rs : {checkOutItem}</button>
      
       </div>
       { success ? <h3 className='success'>payment success</h3> : ""}
    </div>
  )
}

export default PaymentChackout;
