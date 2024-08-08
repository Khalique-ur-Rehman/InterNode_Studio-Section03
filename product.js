import React from 'react'
import ProductData from './productdata'
import './style.css'
function product() {
  return (
    <>
    <div className='container'>
      {
        ProductData.map((curElm)=>{
return(<>
<div className='box'>
    <div className='contant'>
<div className='img-box'>
    <img src={curElm.img}alt={curElm.title}></img>
</div>
<div className='detail'>
    <div className='info'>
        <h3>{curElm.title}</h3>
        <p>Rs {curElm.price}</p>
    </div>
    <button>upload</button>
</div>
    </div>
</div>
</>)
        } )
      }
    </div>
    </>
  )
}

export default product
