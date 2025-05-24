import React from 'react'
import { HiOutlineClock } from "react-icons/hi2";

function ChapterListCard({chapter, index, showMilestones}) {
  return (
    <div>
      {showMilestones && index === 0 && (
        <h3 className="font-semibold text-lg mb-2">Milestones</h3>
      )}
      <div className='grid grid-cols-5 p-4 items-center border-b'>
        <div>
          <h2 className='p-1 bg-primary w-8 h-8 text-white rounded-full text-center'>{index + 1}</h2>
        </div>
        <div className='col-span-4'>
          <h2 className='font-medium'>{chapter?.name}</h2>
          <h2 className='flex items-center gap-2 tex-sm text-primary'>
            <HiOutlineClock /> {chapter?.duration}
          </h2>
        </div>
      </div>
    </div>
  )
}

export default ChapterListCard