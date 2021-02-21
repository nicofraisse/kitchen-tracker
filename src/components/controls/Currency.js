import React from 'react'
import CurrencyInput from 'react-currency-input-field'

const Currency = ({ field, className, currency, onChange, style }) => {
  return (
    <CurrencyInput
      placeholder='Enter amount'
      className={className}
      allowDecimals={true}
      prefix={currency + ' '}
      step={1}
      decimalsLimit={10}
      onValueChange={(value) => onChange(field.name, value)}
      allowNegativeValue={false}
      style={style}
    />
  )
}

export default Currency
