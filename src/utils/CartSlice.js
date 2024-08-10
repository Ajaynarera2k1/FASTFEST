import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name:"cart",
    initialState:{
        items:[],
    },
    reducers:{
        addToCart: (state,action) => {
              state.items.push(action.payload);
            //   action.payload =  data which is passed in dispatch action
        },
        removeToCart: (state,action) => {
              state.items.pop();
            //   action.payload =  data which is passed in dispatch action
        },
        clearCart: (state,action) => {
              state.items.length = 0;
            //   action.payload =  data which is passed in dispatch action
        },
    },
});

//  {
//      reducer 
//      actions {
                // addEventListener,removeitem.clearcart
// }
//  }

export default CartSlice.reducer;
export const { addToCart, removeToCart, clearCart} = CartSlice.actions;