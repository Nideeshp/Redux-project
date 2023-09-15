import products from '../../api/products.json';
import './Productslist.css'
import { useSelector } from 'react-redux';
import Cartbuttons from './cartButtons';

const ProductList = () => {

    const {cartList}=useSelector((state)=>state.cart)
    console.log(cartList)

  return (
    <div className='container'>
        {products?.map((product, key) => (
            <div className="main-container" key={key}>
                <img src={product?.image} alt={product?.title} />
                <h3>
                    {product?.title}
                </h3>
                <Cartbuttons product={product.id}/>
            </div>
        ))}
    </div>
  );
}

export default ProductList;
