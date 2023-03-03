import React from 'react'

const Btn = ({data,categoryfilter}) => {
    const category =[...new Set(data.map((item)=>{
        return( (item.category ))}
        ))]

  return (
    <div className='btn-container'>
    {category.map((category , index)=>{
        return (
           <div className='filter-btn' key= {index}>
            <button onClick={(e)=>categoryfilter(e.target.innerHTML)} className='btn' >{category}</button>
           </div>
        )
    })}
    </div>
  )
}

export default Btn
