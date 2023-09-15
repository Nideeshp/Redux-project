import React from 'react'
import { useDispatch } from 'react-redux'
import { increment, decrement } from '../../../Redux-store/cart'

const Cartafter = ({ cartItem }) => {
  const dispatch = useDispatch();

  return (
    <div className='after'>
      <button className='cartcounter' onClick={() => dispatch(decrement(cartItem.id))}>-</button>
      <div className='counter'>{cartItem.count}</div>
      <button className='cartcounter' onClick={() => dispatch(increment(cartItem.id))}>+</button>
    </div>
  )
}

export default Cartafter
