import React from 'react'

function Button({...props}) {
  return (
    <button onClick={handleClick}>{props}</button>
  )
}

export default Button