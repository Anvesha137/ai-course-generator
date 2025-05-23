import React from 'react'
import { HiMiniClock,HiOutlineCheckCircle } from "react-icons/hi2";
import EditChapters from './EditChapters';

function ChapterList({ course, refreshData}) {
    console.log('abcd',course)
    return (
        <div className="mt-3">
            <h2 className="text-left font-medium text-xl">Chapters</h2>
            <div className="mt-2 flex flex-col items-start">
                {course?.courseOutput?.Chapters?.map((Chapter, index) => (
                    <div className='border p-5 rounded-lg shadow-md mb-4 w-full flex items-center justify-between' key={index}>
                        <div className="flex items-center gap-2">
                            <h2
                                className="h-10 w-10 flex-none text-white rounded-full text-center p-2"
                                style={{ backgroundColor: 'oklch(45.7% .24 277.023)' }}
                            >
                                {index + 1}
                            </h2>
                            <div className="flex flex-col">
                                <h2 className="font-medium text-lg">{Chapter?.ChapterName}  
                                        <EditChapters course={course} index={index} refreshData={refreshData}/> </h2>
                                <p className="text-md text-gray-600">{Chapter?.About || Chapter?.about}</p>
                                <p
                                    className="flex gap-2 items-center text-sm"
                                    style={{ color: 'oklch(45.7% .24 277.023)' }}
                                >
                                    <HiMiniClock />
                                    {Chapter?.Duration}
                                </p>
                            </div>
                        </div>
                        <HiOutlineCheckCircle className='text-4xl text-gray-300 mt-2 flex-none'/>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ChapterList;