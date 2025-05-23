import React, { useEffect } from 'react'
import {Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogClose, DialogFooter} from '@/components/ui/dialog';
import {HiPencilSquare} from 'react-icons/hi2';
import {Input} from '@/components/ui/input';
import {Textarea} from '@/components/ui/textarea';
import {Button} from '@/components/ui/button';
import {CourseList} from '@/config/schema';
import {db} from '@/config/db';
import {eq} from 'drizzle-orm';

function EditChapters  ({course,index, refreshData})   {

    const Chapters=course?.courseOutput?.course?.chapters;
    const [ChapterName, setChapterName]=React.useState();
    const [About, setAbout]=React.useState();

    useEffect(()=>{
        setChapterName(Chapters[index].ChapterName);
        setAbout(Chapters[index].About)
    },[course])
    const onUpdateHandler=async()=>{

      course.courseOutput.course.chapters[index].name=ChapterName;
      course.courseOutput.course.chapters[index].about=About;

      const result = await db.update(CourseList).set({
                  courseOutput: course?.courseOutput
              }).where(eq(CourseList?.id,course?.id))
              .returning({id:CourseList.id})
              refreshData(true);
              
    }
  return (
    <Dialog>
  <DialogTrigger><HiPencilSquare /></DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Edit Chapter</DialogTitle>
      <DialogDescription>
         <div className='mt-3'>
            <label >Course Title</label>
            <Input defaultValue={Chapters[index].name}
            onChange={(event)=>setChapterName(event?.target.value)}
            />

        </div>
        <div>
            <label >Course Description</label>
            <Textarea defaultValue={Chapters[index].about}
            onChange={(event)=>setAbout(event?.target.value)}/>
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

  )
}

export default EditChapters