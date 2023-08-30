import React from 'react'
import './Loading.css'

import loading from '../img/loading.svg'

function Loading() {
  return (
    <div className='loader-container'>
        <img className='loader' src={loading} alt='Loading' />
    </div>
  )
}

export default Loading