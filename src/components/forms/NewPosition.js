import { Formik, Form, Field } from 'formik'
import React from 'react'
import Currency from '../controls/Currency'
import Percentage from '../controls/Percentage'
import CurrencyPairSelect from '../controls/CurrencyPairSelect'
import * as Yup from 'yup'
import ValidationError from '../display/ValidationError'
import Select from 'react-select'

const NewPosition = ({ baseCurrency, currencyPairs }) => {
  const initialValues = {
    currencyPair: '',
    portfolioValue: '',
    risk: '',
    entryPrice: '',
    stopLoss: '',
    TP: '',
  }

  const validationSchema = Yup.object().shape({
    currencyPair: Yup.string().required('Required'),
    portfolioValue: Yup.number().required('Required'),
    risk: Yup.number().required('Required'),
    entryPrice: Yup.number().required('Required'),
    stopLoss: Yup.number().required('Required'),
    TP: Yup.number().required('Required'),
  })

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          console.log('submitting ')
          console.log(values)
          // setTimeout(() => {
          //   alert(JSON.stringify(values, null, 2))
          //   setSubmitting(false)
          // }, 400)
        }}
      >
        {({ isSubmitting, setFieldValue, errors }) => (
          <Form>
            <div className='flex mb-3'>
              <div className='w-1/2 pr-4'>
                <div className='my-4'>
                  <label className='mb-1 block' htmlFor='currencyPair'>
                    Currency pair
                  </label>
                  <Field
                    type='text'
                    name='currencyPair'
                    className=' border rounded block w-full'
                    placeholder={'Enter currency pair'}
                    component={CurrencyPairSelect}
                    style={{
                      padding: '6px 10px',
                      borderColor: errors.currencyPair
                        ? 'rgba(231, 121, 117, 1.00)'
                        : '',
                    }}
                  />
                </div>
                <div className='my-4'>
                  <label className='mb-1 block' htmlFor='currencyPair'>
                    Current portfolio value
                  </label>
                  <Field
                    component={Currency}
                    currency={baseCurrency}
                    name='portfolioValue'
                    onChange={setFieldValue}
                    className=' border rounded block w-full'
                    style={{
                      padding: '6px 10px',
                      borderColor: errors.portfolioValue
                        ? 'rgba(231, 121, 117, 1.00)'
                        : '',
                    }}
                  />
                </div>

                <div className='my-4'>
                  <label className='mb-1 block' htmlFor='currencyPair'>
                    Risk
                  </label>
                  <Field
                    type='text'
                    name='risk'
                    maxValue={100}
                    defaultValue={'1'}
                    onChange={setFieldValue}
                    component={Percentage}
                    className=' border rounded block w-full'
                    style={{
                      padding: '6px 10px',
                      borderColor: errors.risk
                        ? 'rgba(231, 121, 117, 1.00)'
                        : '',
                    }}
                  />
                </div>
              </div>

              <div className='w-1/2'>
                <div className='my-4'>
                  <label className='mb-1 block' htmlFor='currencyPair'>
                    Entry price
                  </label>
                  <Field
                    name='entryPrice'
                    onChange={setFieldValue}
                    component={Currency}
                    currency={baseCurrency}
                    className=' border rounded block w-full'
                    style={{
                      padding: '6px 10px',
                      borderColor: errors.entryPrice
                        ? 'rgba(231, 121, 117, 1.00)'
                        : '',
                    }}
                  />
                </div>

                <div className='my-4'>
                  <label className='mb-1 block' htmlFor='currencyPair'>
                    Stop loss
                  </label>
                  <Field
                    name='stopLoss'
                    onChange={setFieldValue}
                    component={Currency}
                    currency={baseCurrency}
                    className=' border rounded block w-full'
                    style={{
                      padding: '6px 10px',
                      borderColor: errors.stopLoss
                        ? 'rgba(231, 121, 117, 1.00)'
                        : '',
                    }}
                  />
                </div>

                <div className='my-4'>
                  <label className='mb-1 block' htmlFor='currencyPair'>
                    Take profit
                  </label>
                  <Field
                    onChange={setFieldValue}
                    component={Currency}
                    currency={baseCurrency}
                    name='TP'
                    className=' border rounded block w-full'
                    style={{
                      padding: '6px 10px',
                      borderColor: errors.TP ? 'rgba(231, 121, 117, 1.00)' : '',
                    }}
                  />
                </div>
              </div>
            </div>

            <button
              type='submit'
              disabled={isSubmitting}
              className='py-2 px-6 bg-green-400 text-white font-bold text-bold hover:shadow-lg rounded'
            >
              Yolo
            </button>
            <button
              type='reset'
              disabled={isSubmitting}
              className='py-2 px-6 ml-3 bg-red-400 text-white font-bold text-bold hover:shadow-lg rounded'
            >
              Reset
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default NewPosition
