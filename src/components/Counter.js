import React, { useState } from 'react'
import Button from './Button';

function Counter({count,onClick}) {
    
  return (
    <div>
        <button className={`btn ${count>0?'btn-primary':'btn-info'} m-2`}
        onClick={onClick}>
            count:- {count}
        </button>
    </div>
  )
}

export default Counter