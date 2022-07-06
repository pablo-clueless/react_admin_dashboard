import React from 'react'

const Button = ({ bgColor, borderRadius, color, size, text }) => {
  return (
    <button type='button' style={{background: bgColor, color, borderRadius}} className={`text-${size} px-3 py-2 hover:drop-shadow-xl`}>
      {text}
    </button>
  )
}

export default Button