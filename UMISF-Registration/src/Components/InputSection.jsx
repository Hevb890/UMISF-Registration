import React from 'react'
import './InputSection.css'

export default function InputSection() {
  return (
    <div className='inputSectionMainWrap'>
      <form action="#" method='POST'>
        <p>Enter Your Email</p>
        <div className='inputBox'>
            <input type="text" />
        </div>
      </form>
    </div>
  )
}
