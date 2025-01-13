import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../Components/Button'

export default function RulesandRegulations() {
  const [consent, setConsent] = useState(false);
  const navigate = useNavigate();

  const handleChange = () => {
    console.log('Current consent value:', consent); // Debugging
    setConsent(!consent);
    console.log('Updated consent value:', !consent);
  }

  const handleNextClcik = () => {
    if(consent){
      navigate('/ageregister');
    }else{
      alert("Please Accept Rules and Regulations")
    }
  }

  const handleBackClick = () => {
    navigate('/selection');
  }
  return (
    <div className="flex flex-col justify-center items-center w-full h-full ">
      <div className=" w-[800px] mt-4 h-[410px]  flex flex-row  rounded-[44px] shadow-2xl ">
        <div className="w-[440px] h-[410px]  flex-col flex items-center justify-center rounded-tr-[44px] rounded-br-[44px] ">
            {/* Image */}
        </div>
        <div className='w-[360px] h-[410px] flex flex-col items-center justify-center rounded-tl-[44px] rounded-bl-[44px]'>
            <div>
                <h1 className='text-xl font-bold'>Rules and Regulations</h1>
            </div>
            <div className='w-[320px] h-[260px]'>
               
            </div>
            <div>
                <input type="checkbox" id="check_box" value={consent} onChange={handleChange}/>
                <label className='ml-2 text-xs' for="check_box">I accept rules and regulations</label>
            </div>
            <div className='flex flex-row'>
                <Button buttonName="Back" onClick={handleBackClick}/>
                <Button buttonName="Next" onClick={handleNextClcik}/>
            </div>
        </div>
      </div>
    </div>
  )
}
