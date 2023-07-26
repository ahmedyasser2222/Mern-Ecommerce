import { Alert, Snackbar } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setOpen } from "../redux/slices/toastSlice"

const Toast = ({children}) => {
    const { open, mode , text } = useSelector((state) => state.toastSlice)
    const dispatch = useDispatch()
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        dispatch(setOpen(false)) 
        }
  return (
    <>
       <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={mode} sx={{ width: "100%" }}  >
             {text}
        </Alert>
      </Snackbar>
      {children}
    </>
  )
}

export default Toast