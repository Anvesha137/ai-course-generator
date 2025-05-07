import React from 'react'
import { HiMiniSquares2X2,HiLightBulb,HiClipboardDocumentCheck } from "react-icons/hi2";

const CreateCourse = () => {
  const StepperOptions=[
    {
    id:1,
    name:'Category',
    icon:<HiMiniSquares2X2 />
    }, 
    {
      id:2,
      name:'Topic & Descr',
      icon:<HiLightBulb />
      },
      {
        id:3,
        name:'Options',
        icon:<HiClipboardDocumentCheck />
        } 
]
  return (
    <div>
     {/* Stepper */}
      <div className='flex flex-col  justify-between items-center mt-10'>
          <h2 className='text-4xl font-medium' style={{ color: 'oklch(45.7% .24 277.023)' }} >Create Course</h2>
          <div className='flex mt-10'>
            {StepperOptions.map((items,index)=>(
              <div className='flex items-center'>
                 <div className='flex flex-col items-center w-[50px] md:w-[100px]'>
                  <div className='bg-gray-200 p-3 rounded-full text-white'>
                  {items.icon}
                  </div>
                  <h2 className='hidden md:block md:text-sm'>{items.name}</h2>
                </div>
                { index!=StepperOptions?.length-1 &&<div className='h-1 w-[50px] md:w-[100px] rounded-full lg:w-[170px] bg-gray-300'></div>}
                </div>
            ))}
          </div>
        </div>
      
      {/* Components */}

      {/* Next Previous Button  */}
    </div>
  )
}

export default CreateCourse