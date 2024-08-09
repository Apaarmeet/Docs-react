import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";

function Card() {
  return (
    <div className='relative w-60 h-72 rounded-[50px] bg-zinc-900/90 text-white px-7 py-10 overflow-hidden'>
        <FaRegFileAlt />
        <p className='text-sm leading-tight mt-5 font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        <div className='footer absolute bottom-0 bg-sky-200 w-full py-3 left-0'> 
            <div>
                <h5>.4mb</h5>
            </div>
        </div>
    </div>
  )
}

export default Card