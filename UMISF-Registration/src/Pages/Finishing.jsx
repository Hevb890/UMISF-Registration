import React from 'react'
import CheckImg from '../assets/checked.png'
import Button from '../Components/Button'

export default function Finishing() {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full ">
        <div className=" w-[800px] mt-4 h-[410px]  flex flex-row  rounded-[44px] shadow-2xl ">
            <div className="w-[360px]  h-[410px]  rounded-bl-[44px] rounded-tl-[44px]">
                {/* Image */}
            </div>
            <div className="w-[440px] h-[410px]  flex-col flex items-center justify-center rounded-tr-[44px] rounded-br-[44px] ">
                <div className='text-center'>
                    <p className='text-xl font-bold'>Thank You For Registering</p>
                    <p className='text-3xl font-black'>UMISF 2025</p>
                </div>
                <div>
                    <img src={CheckImg} className="h-[180px] m-3"/>
                </div>
                <div className='flex flex-col'>
                    <Button buttonName="ENTER A ANOTHER ENTRY" />
                    <Button buttonName="FINISH" />
                </div>
            </div>
        </div>
    </div>
  )
}
