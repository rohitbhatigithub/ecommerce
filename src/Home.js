import React, { useEffect, useState } from 'react'
import Product from './Product'
import Navbar from './Navbar'
import Btn from './Btn';
import Loading from './Loading';

const Home = ({setCartItem,cartItem}) => {
 const[data ,setData] = useState([]);
    const[FilterData ,setFilterData] = useState([]);
    const [setDataLength] = useState();
    const [loading , setLoading] = useState(false);
 



   const fetch123 = async ()=>{
    try{
      setLoading(true)
      let data = await fetch("https://fakestoreapi.com/products");
        let res = await data.json();
        setLoading(false)
        setData(res);
        setFilterData(res);
        setDataLength(res.length)

    }catch(error){
      setLoading(false)
      console.log(error)
    }      
    }
   
    useEffect(()=>{
        fetch123()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    // loding effect.........
    if(loading){
      return <Loading/>
    }
    
    const categoryfilter = (E)=>{
   // eslint-disable-next-line array-callback-return
   const btnFilter =  data.filter((item)=>{
    
     if(E=== item.category){
       return (item)
     }
    })
     setFilterData(btnFilter)
  }

  
 const cartFun = (item)=>{
    // eslint-disable-next-line array-callback-return
    data.filter((value)=>{
      if(value.category.name === item.category.name){
        setCartItem([...cartItem, {...item, quantity : 1}]);
       }
    })
     
  }

  return (
    <div className='App'>
    
    <Navbar cartItem={cartItem}/>
   <Btn data={data} categoryfilter={categoryfilter}/>
    
    <div className='box'>
     {
          FilterData.map((value, i)=>{
        return(
          <div key={i}>
         <Product Product={value} cartFun={cartFun}/>
         </div>
        )
      })
     }
    </div>
   
    </div>
  )
}

export default Home;
