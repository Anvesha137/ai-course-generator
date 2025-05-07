import CategoryList from '@/app/_shared/CategoryList'
import React from 'react'
import Image from 'next/image'

const SelectCategory = () => {
return (
    <div className='grid grid-cols-3 gap-10 px-10 md:px-20'>
            {/* Category List */}
            {CategoryList.map((item, index) => (
                    <div 
                            key={index} 
                            className='flex flex-col p-5 border items-center rounded-xl  hover:bg-blue-50 cursor-pointer'
                    >
                            <Image src={item.icons} width={50} height={50}  />
                            <h2>{item.name}</h2>
                    </div>
            ))}
    </div>
)
}

export default SelectCategory