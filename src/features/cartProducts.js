import { createSlice } from "@reduxjs/toolkit";

const initialState = []

export const cartProducts = createSlice({
    name: 'cartProducts',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const isExistItem = state.find(item => item.id === action.payload.id)
            if (!isExistItem) {
                const newItemCart = {...action.payload, picked: true}
                state.push(newItemCart) 
            }
            
            
        },
        removeFromCart: (state, action) => {
            return state = state.filter(item=> item.id != action.payload)
        },
        addQuantity: (state, action) => {
            const { id, value } = action.payload
            const selectedItem = state.find(item => item.id == id)
            if (selectedItem) {
                selectedItem.quantity = value
            }
        }
    }
})

export default cartProducts.reducer
export const {addToCart, removeFromCart, addQuantity} = cartProducts.actions