import { configureStore } from "@reduxjs/toolkit"

import userSlice from "./slices/userSlices"
import toastSlice from "./slices/toastSlice"

export const store = configureStore({
    reducer : {
        userSlice,
        toastSlice
    }
})