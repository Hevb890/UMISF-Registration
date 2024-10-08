import React from 'react'


export default function Button({buttonName, onClick}) {
  return (
    <button className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-2 mr-2" onClick={onClick}>
      {buttonName}
    </button>

  )
}
