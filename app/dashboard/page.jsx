import React from 'react'
import { UserButton } from '@clerk/nextjs'  
import AddCourse from './_components/AddCourse'
import UserCourseList from './_components/UserCourseList'

const Dashboard = () => {
  return (
    <div>
      <AddCourse />
      <UserCourseList />
    </div>
  )
}

export default Dashboard