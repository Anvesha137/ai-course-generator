"use client"
import CategoryList from '@/app/_shared/CategoryList'
import React from 'react'
import Image from 'next/image'
import { UserInputContext } from '@/app/_context/UserInputContext'

function SelectCategory () {
        const { userCourseInput, setUserCourseInput } = React.useContext(UserInputContext)

        const handleCategoryChange = (category) => {
                setUserCourseInput(prev => ({
                        ...prev,
                        category: category
                }))
        }
        return (
                <div className='px-10 md:px-20'>
                        <h2 className='my-5'>Select the Course Category</h2>
                        <div className='grid grid-cols-3 gap-10 '>
                                {/* Category List */}
                                {CategoryList.map((item, index) => (
                                <div className={`flex flex-col p-5 border items-center rounded-xl  hover:bg-blue-50 
                        cursor-pointer ${userCourseInput?.category==item.name&&'border-[oklch(45.7%_0.24_277.023)] bg-blue-50'}`}
                            onClick={() => handleCategoryChange(item.name)}
                            >
                                                <Image src={item.icons} width={50} height={50} />
                                                <h2>{item.name}</h2>
                                        </div>
                                ))}
                        </div>
                </div>
        )
}

export default SelectCategory