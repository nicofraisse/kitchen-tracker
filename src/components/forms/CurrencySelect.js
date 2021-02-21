import React, { useState } from 'react'

const CurrencySelect = ({ selectBaseCurrency }) => {
  const [selectedValue, setSelectedValue] = useState('USD')
  return (
    <div>
      <label htmlFor='currency'>Base currency: </label>
      <select
        id='currency'
        className='bg-gray-200'
        onChange={(e) => {
          setSelectedValue(e.target.value)
          selectBaseCurrency(e.target.value)
        }}
        value={selectedValue}
      >
        <option value='USD'>USD</option>
        <option value='CAD'>CAD</option>
        <option value='BTC'>BTC</option>
      </select>
    </div>
  )
}

export default CurrencySelect
