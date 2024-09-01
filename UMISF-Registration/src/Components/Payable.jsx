import React from 'react'

export default function Payable() {
    const totalPayment = '3000'
  return (
    <div className='text-center'>
      <p className='text-xl font-bold'>Total Payable</p>
      <p className='text-[40px] font-black'>Rs {totalPayment}</p>
    </div>
  )
}
