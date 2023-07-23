import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    open : false ,
    mode  : "success",
    text : ""
}

export const toastSlice = createSlice({
    name : "toast",
    initialState,
    reducers : {
        setOpen : (state,action) => {
            state.open = action.payload
        },
        setToast : (state,action) => {
            state.open = action.payload.open
            state.mode = action.payload.mode
            state.text = action.payload.text
        }
    }
})

export const { setToast, setOpen } = toastSlice.actions
export default toastSlice.reducer


