import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    item: undefined
}

export const products = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addProducts: (state, action) => {
            state.item  = action.payload
        }
    }
})


export function getProductsList(action) {
    return function (dispatch, getState) {
        fetch('/data/inventory.json')
            .then(data => data.json())
            .then(data => {
                console.log(data);
                dispatch(addProducts(data.products))
            } )
    }
}


export default products.reducer
export const {addProducts} = products.actions
