import React from 'react'
import { useDispatch } from 'react-redux'
import { increment, decrement } from '../../../Redux-store/cart'

const Cartafter = ({ cartItem }) => {
  const dispatch = useDispatch();

  return (
    <div className='after-cart'>
      <button className='cartcounterbtn' onClick={() => dispatch(decrement(cartItem.id))}>-</button>
      <div className='cartcounter'>{cartItem.count}</div>
      <button className='cartcounterbtn' onClick={() => dispatch(increment(cartItem.id))}>+</button>
    </div>
  )
}

export default Cartafter
