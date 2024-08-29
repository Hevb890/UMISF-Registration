import React from 'react'

export default function Gender() {
  return (
    <div className='genderBox'>
      <p>Gender</p>
      <form action="">
        <input type="radio" name='gender' value="Male" /> Male 
        <input type="radio" name='gender' value="Female" /> Female
      </form>
    </div>
  )
}
