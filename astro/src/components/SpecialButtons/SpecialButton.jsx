import React from 'react'

export default function SpecialButton({children}) {

  const specialFunction = () => alert('you clicked me!');

  return (
    <button onClick={specialFunction}>
      {children}
    </button>
  )
}