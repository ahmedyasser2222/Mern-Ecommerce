import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    user : {
        name : ""
    },
    authenticated : false
}


export const userSlice = createSlice({
    name : "user",
    initialState,
    reducers : {
        setUser : (state,action) =>{
             state.user = action.payload
             state.authenticated = true
        },
        logout : (state) => {
            state.data = { name : ""}
            state.authenticated = false
        }
    }
})

export const { setUser, logout } = userSlice.actions
export default userSlice.reducer


