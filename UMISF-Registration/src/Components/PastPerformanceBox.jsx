import React from 'react'


export default function PastPerformanceBox() {
  return (
    <div className='border border-slate-950 rounded-lg p-2 mb-3'>
      <select name="ageGroup" className='border border-slate-950 rounded-lg text-xs w-[100px] p-1 m-1'>
        <option selected>Age Group</option>
        <option value="U-9">Under 9</option>
        <option value="U-11">Under 11</option>
        <option value="U-13">Under 13</option>
        <option value="U-15">Under 15</option>
      </select>
      <select name="achievement" className='border border-slate-950 rounded-lg text-xs w-[120px] p-1'>
        <option selected>Achievement</option>
        <option value="qf">Quarter-Finalist</option>
        <option value="sf/3rd">2nd Runner up / Semi-Finalist</option>
        <option value="runner-up">Runner-up</option>
        <option value="champion">Champion</option>
      </select>
      <br />
      <input type="text" className="text-center w-[230px] rounded-full h-[20px] drop-shadow-lg border border-slate-950 text-xs" placeholder='Tournament Name'/>
    </div>
  )
}
