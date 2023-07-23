import React from 'react'

import "./style.scss"

const Rate = ({singleProduct}) => {
  return (
    <div className="rate-product">
        {singleProduct && <span className="text">Rate :</span>}
        <div className="rate">
          <span>3.4</span>
          <img src="https://f.nooncdn.com/s/app/com/noon/design-system/simpleicons/star-filled-v2.svg" />
        </div>
      </div>
  )
}

export default Rate