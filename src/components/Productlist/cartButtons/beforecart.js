import React from 'react'
import './cartbuttons.css'
import { useDispatch } from 'react-redux'
import { addTocart } from '../../../Redux-store/cart'

const Beforecart = ({product}) => {

  const dispatch=useDispatch()

  return (
    <div className='before-cart'>
    <button className='addcart' onClick={()=>dispatch(addTocart(product))}>Add cart</button>
  
</div>
  )
}

export default Beforecart
