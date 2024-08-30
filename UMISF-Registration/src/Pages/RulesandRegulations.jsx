import React from 'react'
import Button from '../Components/Button'
import Checkbox from '../Components/Checkbox'

export default function RulesandRegulations() {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full ">
      <div className=" w-[800px] mt-4 h-[410px]  flex flex-row  rounded-[44px] shadow-2xl ">
        <div className="w-[440px] h-[410px]  flex-col flex items-center justify-center rounded-tr-[44px] rounded-br-[44px] ">
            
        </div>
        <div className='w-[360px] h-[410px] flex flex-col items-center justify-center rounded-tl-[44px] rounded-bl-[44px]'>
            <div>
                <h1 className='text-xl font-bold'>Rules and Regulations</h1>
            </div>
            <div className='w-[320px] h-[260px]'>
               
            </div>
            <div>
                <Checkbox checkBoxName="I accept rules and regulations"/>
            </div>
            <div className='flex flex-row'>
                <Button buttonName="Back" />
                <Button buttonName="Next" />
            </div>
        </div>
      </div>
    </div>
  )
}
