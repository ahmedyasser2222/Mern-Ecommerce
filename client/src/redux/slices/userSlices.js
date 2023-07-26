import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    user : {
        name : "",
        cart : [],
    },
    cartProductsNum : 0,
    authenticated : false
}

export const userSlice = createSlice({
    name : "user",
    initialState,
    reducers : {
        setUser : (state,action) =>{
             state.user = action.payload
             state.authenticated = true
             state.cartProductsNum = action.payload.cart.length
        },
        logout : (state) => {
            state.data = { name : ""}
            state.authenticated = false
        },
        incrementCartproduct : (state) =>{
            state.cartProductsNum++;
        },
        decrementCartproduct : (state) =>{
            state.cartProductsNum--;
        }
    }
})

export const { setUser, logout, incrementCartproduct, decrementCartproduct } = userSlice.actions
export default userSlice.reducer


