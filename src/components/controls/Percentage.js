import React, { useState } from 'react'
import CurrencyInput from 'react-currency-input-field'

const Percentage = ({
  field,
  onChange,
  className,
  defaultValue,
  maxValue,
  style,
}) => {
  const [currentValue, setCurrentValue] = useState(defaultValue || 0)

  return (
    <CurrencyInput
      placeholder='Enter a percentage'
      className={className}
      defaultValue={defaultValue}
      // decimalSeparator='ok'
      allowDecimals={true}
      suffix='%'
      step={0.1}
      decimalsLimit={1}
      value={currentValue}
      decimalScale={1}
      fixedDecimalLength={1}
      onValueChange={(value) => {
        if (parseInt(value) > maxValue) {
          setCurrentValue(maxValue)
        } else {
          setCurrentValue(value)
          onChange(field.name, value)
        }
      }}
      allowNegativeValue={false}
      style={style}
    />
  )
}

export default Percentage
