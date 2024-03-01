import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addQuantity, removeFromCart } from "../features/cartProducts";
import close from "../assets/close.svg";

export default function Cart({ stateOpen, closeCart }) {
  const cartProducts = useSelector((state) => state.cartProducts);
  const dispatch = useDispatch();
  console.log(cartProducts);

  const [totalCost, setTotalCost] = useState();

  useEffect(() => {
    const price = cartProducts.reduce(function (acc, obj) {
      let quantite = obj.quantity || 1;
      return acc + obj.price * quantite;
    }, 0);
    setTotalCost(price);
  }, [cartProducts, addQuantity]);

  console.log(totalCost);

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className={`absolute top-0 transition-all ${
        stateOpen
          ? " w-full h-[100%] sm:w-[640px] right-0"
          : " scale-0 -right-[900px] "
      }  bg-slate-50  p-10 `}
    >
      {stateOpen && (
        <img
          onClick={closeCart}
          className=" w-5 fixed top-5 right-10 cursor-pointer "
          src={close}
          alt=""
        />
      )}

      <div className=" flex justify-between items-center pb-5 mt-10 mb-10 border-b border-slate-400 ">
        <h2 className=" text-2xl">Shopping Cart</h2>
        <p className=" text-xl">
          {cartProducts.length} {cartProducts.length <= 1 ? "item" : "items"}
        </p>
      </div>

      <div className=" w-full flex flex-col py-4 ">
        {cartProducts.length ? (
          cartProducts.map((item) => (
            <div className=" flex justify-between mb-4">
              <div className=" flex items-center gap-3 ">
                <img
                  className=" w-14"
                  src={`../../public/images/${item.img}.png`}
                  alt=""
                />
                <p>{item.title}</p>
              </div>

              <div className=" flex gap-4">
                <select
                  onChange={(e) =>
                    dispatch(
                      addQuantity({
                        value: parseInt(e.target.value),
                        id: item.id,
                      })
                    )
                  }
                  className=" h-[40px] rounded w-10"
                  name=""
                  id=""
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
                <button
                  onClick={() => dispatch(removeFromCart(item.id))}
                  className=" h-[40px] w-20 bg-teal-500 text-slate-100 rounded"
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>Your cart is empty...</p>
        )}
      </div>

      <div className=" flex flex-col border-t border-slate-400 pt-5 mt-10">
        <div className=" flex justify-between items-center">
          <h4 className=" text-xl font-semibold">TOTAL COST</h4>
          <p className=" text-2xl font-semibold">{totalCost} </p>
        </div>
        <button className=" bg-teal-500 text-slate-100 py-3 rounded my-7">
          Checkout
        </button>
      </div>
    </div>
  );
}
