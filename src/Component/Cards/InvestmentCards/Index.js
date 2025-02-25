import React from 'react'
import './Index.css'

const InvestmentCards = ({Number,heading, description }) => {
    return (
      <div className="tradableCard font-poppins   pl-5 pr-5 pt-8  bg-darkblue flex flex-col gap-4">
        <div className='circle  text-white w-56 h-56 flex flex-col pt-3  whitespace-normal'>
            <div className='font-bold text-2xl'>{Number}</div>
        </div>
        <div className=' text-xl  font-bold text-white text-start '>{heading}</div>
        <div className=' text-sm font-normal text-white text-start pr-2 pb-2 '>{description}</div>
      </div>
    )
  };

export default InvestmentCards
