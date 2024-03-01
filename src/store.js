import { configureStore } from "@reduxjs/toolkit";
import products from "./features/products";
import cartProducts from "./features/cartProducts";



export const store = configureStore({
    reducer: {
        products,
        cartProducts
    }
})