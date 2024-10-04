import React from 'react'
import PricingComparisonTable from './PricingComparisonTable'
import RawPricing from './RawPricing'

const page = () => {
  return (
    <>
    <section className='pt-20 px-4'>
    <PricingComparisonTable/>
    <RawPricing/>
    </section>
    </>
  )
}

export default page