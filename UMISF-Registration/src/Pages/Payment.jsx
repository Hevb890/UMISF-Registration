import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../Components/Button'
import Payable from '../Components/Payable'

export default function Payment() {
    const navigate = useNavigate() //Navigate Hook

    const handleNextClcik = () => {
      navigate('/finish');
    }
  
    const handleBackClick = () => {
      navigate('/pastperformance')
    }
  return (
    <div className="flex flex-col justify-center items-center w-full h-full ">
        <div className=" w-[800px] mt-4 h-[410px]  flex flex-row  rounded-[44px] shadow-2xl ">
            <div className="w-[440px] h-[410px]  flex-col flex items-center justify-center rounded-tr-[44px] rounded-br-[44px] ">
                {/* Image */}
            </div>
            <div className='w-[360px] h-[410px] flex flex-col items-center justify-center rounded-tl-[44px] rounded-bl-[44px]'>
                <div>
                    <Payable />
                </div>
                <div className='flex flex-row h-[200px] w-full'>
                    <div className='w-[150px] border border-solid border-gray-400 rounded-md m-5'>
                        <p className='text-center text-sm font-bold mt-4 mb-6'>Account Details</p>
                        <p>Lorem Ipsum</p>
                    </div>
                    <div className='w-[180px] text-center border border-solid border-gray-400 rounded-md m-5 p-1'>
                        <p className='text-sm font-bold mt-4 mb-6'>Add Your Transaction Reciept</p>
                        <button className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-2 mr-2">ADD</button>
                    </div>
                </div>
                <div>
                    <Button buttonName="BACK" onClick={handleBackClick}/>
                    <Button buttonName="NEXT" onClick={handleNextClcik}/>
                </div>
            </div>
        </div>
    </div>
  )
}
