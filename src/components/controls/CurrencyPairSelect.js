import React, { useState, useEffect } from 'react'
import Select from 'react-select'
import axios from 'axios'

const CurencyPairSelect = () => {
  const [selectedOption, setSelectedOption] = useState(null)
  const [options, setOptions] = useState([])

  useEffect(() => {
    axios.get('https://www.binance.us/api/v3/exchangeInfo').then((data) => {
      console.log(data)
      const currencies = data.data.symbols.map((symbol) => symbol.baseAsset)
      const uniqCurrencies = [...new Set(currencies)]
      setOptions(
        uniqCurrencies.sort().map((c) => {
          return { value: c, label: `${c}/BTC` }
        })
      )
    })
  }, [])

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption)
    console.log(`Option selected:`, selectedOption)
  }
  return (
    <Select
      value={selectedOption}
      onChange={handleChange}
      options={options}
      className='Select-control'
    />
  )
}

export default CurencyPairSelect
