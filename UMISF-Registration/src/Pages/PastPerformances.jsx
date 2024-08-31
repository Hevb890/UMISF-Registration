import React from 'react'
import PastPerformanceBox from '../Components/PastPerformanceBox'
import Button from '../Components/Button'

export default function PastPerformances() {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full ">
      <div className=" w-[800px] mt-4 h-[410px]  flex flex-row  rounded-[44px] shadow-2xl ">
        <div className="w-[440px] h-[410px]  flex-col flex items-center justify-center rounded-tr-[44px] rounded-br-[44px] ">
            {/* Image */}
        </div>
        <div className='w-[360px] h-[410px] flex flex-col items-center justify-center rounded-tl-[44px] rounded-bl-[44px]'>
          <div className='mb-5'>
          <input
              placeholder="SLBA number (*If you have any)"
              className="text-center w-[250px] rounded-full h-[40px] drop-shadow-lg text-xs"
            />
          </div>
          <div className='flex flex-row'>
            <p>Past Performances</p>
            <button className='ml-5'>+</button>
          </div>
          <div className='h-[220px] overflow-auto'>
            <PastPerformanceBox />
           
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
