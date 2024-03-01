import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../features/cartProducts';
import check from '../assets/check.svg'


export default function ProductCard({ id, img, title, price }) {

  const dispatch = useDispatch()
  const products = useSelector(state => state.products)
  const cartProducts = useSelector((state) => state.cartProducts);
  console.log(cartProducts);
  

  const selectedProduct = products.item.find(item => item.id === id)
  const itemCart = cartProducts.find(item => item.id === id)
  console.log(itemCart);
  
  
  // useEffect(() => {
    
  // }, [])
  
  

 
  

  return (
    <div className=" w-[230px] h-[350px] bg-slate-100  rounded flex flex-col justify-between shadow-lg  ">
      <img className=' rounded transition hover:scale-105' src={`../../public/images/${img}.png`} alt="" />
      <div className=' flex flex-col gap-3'>
        <h3 className=' text-xl'>{title}</h3>
        <p>{price} </p>
      </div>
      

      <button onClick={() => {
        dispatch(addToCart(selectedProduct))
        // !itemCart && animCart();
      } }
        className={` ${itemCart ? 'text-slate-50 bg-teal-400' : 'text-slate-700 bg-slate-50 border' } py-1  flex justify-center`}>
        {itemCart ?
          <img className=' w-5 ' src={check} />
          : 'Add to cart'
      }
      </button>
    </div>
  );
}
