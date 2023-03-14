import React from 'react'

function Button() {

    const handleClick1 =()=>{
        alert("normal button clicked")
    }

    const handleClick2 =()=>{
        alert("Primary button clicked")
    }
  return (
    <div>
        <button className='btn btn-secondary m-2'
        onClick={handleClick1}>
            Normal button 
        </button>
        <button className='btn btn-primary'
        onClick={handleClick2}>
            Bootstrap Button
        </button>
    </div>
  )
}

export default Button