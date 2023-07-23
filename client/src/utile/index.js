import React from 'react'
import GetUserDetails from './GetUserDetails'
import Toast from './Toast'

const index = ({children}) => {
  return (
    <Toast>
     <GetUserDetails>
        {children}
     </GetUserDetails>
    </Toast>
  )
}

export default index