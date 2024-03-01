import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsList } from "../features/products";
import ProductCard from "./ProductCard";
import cart from "../assets/cart.svg";
import Cart from "./Cart";

export default function ProductsList() {
  const products = useSelector((state) => state.products);
  const cartProducts = useSelector((state) => state.cartProducts);
  const dispatch = useDispatch();

  console.log(products.item);

  const [cartOpen, setCartOpen] = useState(false);
  const cartNumberIcon = useRef();

  if (!products.item) {
    dispatch(getProductsList());
  }

  function stopPropagation(e) {
    e.stopPropagation();
  }
    
    function closeCart() {
        setCartOpen(false)
    }

  return (
    <div
      onClick={() => closeCart()}
      className=" w-screen md:w-[80%] md:mx-auto  p-14 m1"
    >
      <div className=" flex justify-between">
        <h1 className=" text-2xl text-slate-800">Our Products</h1>
        <div className=" relative">
          <div className=" absolute -right-3 bg-teal-600 flex justify-center items-center rounded-lg w-6">
            <p ref={cartNumberIcon} className=" text-slate-50 text-sm">
              {cartProducts.length}{" "}
            </p>
          </div>

          <img
            onClick={(e) => {
              stopPropagation(e);
              setCartOpen(true);
            }}
            className=" w-10 cursor-pointer"
            src={cart}
            alt=""
          />
        </div>
      </div>

      <div className="w-full grid justify-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7 py-10 ">
        {products.item &&
          products.item.map((item) => (
            <ProductCard
              key={item.id}
              img={item.img}
              title={item.title}
              price={item.price}
              id={item.id}
            />
          ))}
      </div>

          
          <Cart
              stateOpen={cartOpen}
              closeCart={closeCart}
          
          />
          
      
    </div>
  );
}
