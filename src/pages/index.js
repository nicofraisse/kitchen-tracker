import React, { useState } from 'react'
import '../css/index.scss'
import { Widget } from 'binance-fiat-widget'
import NewPosition from '../components/forms/NewPosition'
import CurrencySelect from '../components/forms/CurrencySelect'

const IndexPage = () => {
  const [baseCurrency, setBaseCurrency] = useState('USD')

  return (
    <main>
      <div className='p-10 md:p-20 min-h-screen bg-gray-200'>
        <div className='absolute top-4 right-10'>
          <CurrencySelect selectBaseCurrency={(c) => setBaseCurrency(c)} />
        </div>
        <h1 className='text-4xl text-center mb-5'>Kitchen Tracker 👨🏽‍🍳</h1>

        <div className='mx-auto p-8 bg-white shadow-2xl rounded-xl max-w-md my-10'>
          <h2 className='text-2xl mb-1'>New position</h2>

          <NewPosition baseCurrency={baseCurrency} />
        </div>

        <div className='mx-auto p-8 bg-white shadow-2xl rounded-xl max-w-md my-10'>
          <h2 className='text-2xl text-center mb-3'>📊 Performance</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            officiis, facere alias ea maxime quidem quae, provident totam rem
            veniam laudantium itaque saepe voluptas nihil, quo incidunt labore
            modi quos.
          </p>
        </div>
      </div>
    </main>
  )
}

export default IndexPage
