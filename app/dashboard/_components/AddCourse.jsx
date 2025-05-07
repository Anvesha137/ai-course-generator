"use client"
import React, { use } from 'react'
import { useUser } from '@clerk/nextjs'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const AddCourse = () => {
  const { user } = useUser();
  return (
    <div className='flex items-center justify-between'>
      <div>
        <h2 className='text-3xl'>Hello, <span className='font-bold'>{user?.fullName}</span></h2>
        <p className='text-sm text-gray-500'>Create new course with AI, Share with friends and Earn from it</p>
      </div>
      <Link href={'/create-course'} >
        <Button style={{ backgroundColor: 'oklch(45.7% .24 277.023)' }}>+ Create  AI Course </Button>
      </Link>
    </div>
  )
}

export default AddCourse