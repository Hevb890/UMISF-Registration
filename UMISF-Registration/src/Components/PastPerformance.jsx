import React from 'react'
import './PastPerformance.css'

export default function PastPerformance() {
  return (
    <div className='pastPerformanceContainer'>
        <div className='pastPerformanceSubContainer'>
            <div className='ageGroup'>
                <select name="age">
                    <option value="U9">Under-9</option>
                    <option value="U11">Under-11</option>
                    <option value="U13">Undere-13</option>
                    <option value="U15">Under-15</option>
                </select>
            </div>
            <div className='achievement'>
                <select name="achievement">
                    <option value="Champion">Champion</option>
                    <option value="Runner-up">Runner-up</option>
                    <option value="Semi-Finalist">2nd Runner-up / Semi-Finalist</option>
                    <option value="Quarter-Finalist">Quarter-Finalist</option>
                </select>
            </div>
        </div>
        
        <div className='tournamentName'>
            <input type="text" />
        </div>
    </div>
  )
}
