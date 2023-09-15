import React from 'react'
import Aftercart from './aftercart'
import Beforecart from './beforecart'
import { useSelector, useDispatch } from 'react-redux'
import { addTocart } from '../../../Redux-store/cart' // Import the correct action

const Cartbuttons = ({ product }) => {
  const dispatch = useDispatch();
  const cartList = useSelector((state) => state.cart.cartList);
  const cartItem = cartList.find((item) => item.id === product.id);

  return (
    <>
      {cartItem ? (
        <Aftercart product={product} cartItem={cartItem} />
      ) : (
        <Beforecart product={product} addToCart={() => dispatch(addTocart(product))} />
      )}
    </>
  )
}

export default Cartbuttons
