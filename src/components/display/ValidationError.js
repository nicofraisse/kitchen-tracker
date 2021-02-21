import React from 'react'

const ValidationError = ({ error }) => {
  return <div className='text-red-500 border-black pt-2 absolute'>{error}</div>
}

export default ValidationError
