import React from 'react'
import Image from 'next/image'
import { UserButton } from '@clerk/nextjs'

const Header = () => {
  return (
    <div className='flex justify-between items-center p-5 shadow-sm'>
        <Image src={'/sLOGO.png'} width={140} height={100} />
        <UserButton />
    </div>
  )
}

export default Header