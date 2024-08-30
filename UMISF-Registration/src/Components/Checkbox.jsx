import React from 'react'

export default function Checkbox({checkBoxName}) {
  return (
    <div className='flex flex-row'>
      <input type="checkbox" value="Agree"/>
      <p className='ml-2 text-xs'>{checkBoxName}</p>
    </div>
  )
}
