"use client"
import React, { useEffect } from 'react'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { HiPencilSquare } from "react-icons/hi2";
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from '@/components/ui/button';
import { CourseList } from '@/config/schema';
import { db } from '@/config/db';
import { eq } from 'drizzle-orm';

function EditCOurseBasicInfor  ({course, refreshData}) {

    const [CourseName, setCourseName] = React.useState();
    const [Description, setDescription] = React.useState();


     useEffect(() => {
        setCourseName(course?.courseOutput?.course?.CourseName || '');
        setDescription(course?.courseOutput?.course?.Description || '');
    }, [course]);
    
    const onUpdateHandler= async()=>{
        course.courseOutput.course.CourseName=CourseName;
        course.courseOutput.course.Description=Description;
        const result = await db.update(CourseList).set({
            courseOutput: course?.courseOutput
        }).where(eq(CourseList?.id,course?.id))
        .returning({id:CourseList.id})
        refreshData(true);

    }

  return (
    <div><Dialog>
  <DialogTrigger><HiPencilSquare /></DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Edit Course Title and Description</DialogTitle>
      <DialogDescription>
        <div className='mt-3'>
            <label >Course Title</label>
            <Input defaultValue={course?.courseOutput?.course?.CourseName || course?.name}
            onChange={(event)=>setCourseName(event?.target.value)}
            />

        </div>
        <div>
            <label >Course Description</label>
            <Textarea defaultValue={course?.courseOutput?.course?.Description} 
            onChange={(event)=>setDescription(event?.target.value)}/>
        </div>
      </DialogDescription>
    </DialogHeader>
    <DialogFooter>
        <DialogClose>
            <Button onClick={onUpdateHandler} style={{ backgroundColor: 'oklch(45.7% .24 277.023)' }}> Update</Button>
        </DialogClose>
    </DialogFooter>
  </DialogContent>
</Dialog>
</div>
  )
}

export default EditCOurseBasicInfor