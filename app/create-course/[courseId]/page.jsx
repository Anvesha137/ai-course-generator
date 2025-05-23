"use client";
import React, { useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import { db } from "@/config/db";
import { CourseList, Chapters} from "@/config/schema";
import { eq, and } from "drizzle-orm"; // Import eq and and for conditional queries
import CourseBasicInfo from "./_components/CourseBasicInfo";
import ChapterList from "./_components/ChapterList";
import { Button } from "@/components/ui/button";
import { GenerateChapterContent_AI } from "@/config/AiModel";
import LoadingDialog from "../_components/LoadingDialog";
import service from "@/config/service"
import {useRouter} from 'next/navigation';

const CourseLayout = ({ params }) => {
  const { user } = useUser();
  const [course,setCourse] = React.useState([]);
  const [loading,setLoading]=React.useState(false);
  const router=useRouter();
  useEffect(() => {
    if (params && user) { 
      getCourse();
    }
  }, [params, user]);

  const getCourse = async () => {
    try {
      const result = await db
        .select()
        .from(CourseList)
        .where(
          and(
            eq(CourseList.courseId, params.courseId),
            eq(CourseList.createdBy, user?.primaryEmailAddress?.emailAddress)
          )
        );
        setCourse(result[0]);
      console.log(result);
    } catch (error) {
      console.error("Error fetching course:", error);
    }
  };

  const GenerateChapterContent = async () => {
    setLoading(true);
    const chapters = course?.courseOutput?.course?.chapters;

    if (!chapters || chapters.length === 0) {
      console.error("No chapters found in the course.");
      setLoading(false);
      return;
    }

    // Run all async operations in parallel and collect values
    const chapterValuesPromises = chapters.map(async (Chapter, index) => {
      const PROMPT = 'Explain the concept in Detail on Topic:' + course?.name + ', Chapter:' + Chapter?.name + ', in JSON Format with list of array with field as title, description in detail, Code Example(Code field in <precode> format) if applicable';
      console.log(PROMPT);
      try {
        // Generate video
        let videoId = null;
        const videoResponse = await service.getVideos(`${course?.name}:${Chapter?.name}`);
        videoId = videoResponse[0]?.id?.videoId;
        console.log(videoResponse);

        // Generate chapter content
        const result = await GenerateChapterContent_AI.sendMessage(PROMPT);
        const content = JSON.parse(result?.response?.text());
        console.log("Generated content:", content);

        return {
          chapterId: index,
          courseId: course?.courseId,
          content: content,
          videoId: videoId,
        };
      } catch (e) {
        console.error("Error generating chapter content:", e);
        return null;
      }
    });

    // Wait for all values to be ready
    const chapterValues = (await Promise.all(chapterValuesPromises)).filter(Boolean);

    // Insert all chapters at once
    if (chapterValues.length > 0) {
      try {
        const resp = await db.insert(Chapters).values(chapterValues);
        console.log("Bulk insert resp", resp);
      } catch (e) {
        console.error("Error in bulk insert:", e);
      }
    }

    // Update course publish status after all chapters are processed
    try {
      await db.update(CourseList).set({
        publish: true,
      }).where(eq(CourseList.courseId, course?.courseId));
      router.replace(`/create-course/${course?.courseId}/finish`);
    } catch (e) {
      console.error("Error updating course publish status:", e);
    }

    setLoading(false);
  };

  return (
    <div className='mt-10 px-7 md:px20 lg:px44'>
        <h2 className="font-bold text-center text-2xl">Course Layout</h2>
    

    <LoadingDialog loading={loading} />
    {/* basic info  */}
    <CourseBasicInfo course={course} refreshData={()=>getCourse()}/>

    {/* list of lessons  */}
     <ChapterList course={course} refreshData={()=>getCourse}/>


    <Button onClick={GenerateChapterContent} className='my-10'style={{ backgroundColor: 'oklch(45.7% .24 277.023)' }}  >Generate Course Content   </Button>
    </div>
  )
};

export default CourseLayout;
