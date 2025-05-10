"use client"
import React, { useEffect, useState } from 'react'
import { HiMiniSquares2X2, HiLightBulb, HiClipboardDocumentCheck } from "react-icons/hi2";
import { Button } from '@/components/ui/button'
import SelectCategory from './_components/SelectCategory';
import TopicDescription from './_components/TopicDescription';
import SelectOption from './_components/SelectOption';
import { UserInputContext } from '@/app/_context/UserInputContext';
import {GenerateCourseLayout_AI} from '@/config/AiModel';

function CreateCourse() {
  const StepperOptions = [
    {
      id: 1,
      name: 'Category',
      icon: <HiMiniSquares2X2 />
    },
    {
      id: 2,
      name: 'Topic & Descr',
      icon: <HiLightBulb />
    },
    {
      id: 3,
      name: 'Options',
      icon: <HiClipboardDocumentCheck />
    }
  ]
  const { userCourseInput } = React.useContext(UserInputContext);
  const [loading, setLoading] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    console.log('Current state:', {
      Level: userCourseInput?.Level,
      Duration: userCourseInput?.Duration,
      DisplayVideo: userCourseInput?.DisplayVideo,
      NoOfChapters: userCourseInput?.NoOfChapters,
      isValid: !checkStatus()
    });
  }, [userCourseInput]);

  // used for next button enable or not
const checkStatus = () => {
  // Step 1: Check if userCourseInput exists
  if (!userCourseInput) return true;

  // Step 2: Validate based on active step
  switch (activeIndex) {
    case 0: // Category step
      return !userCourseInput.category;
    case 1: // Topic step
      return !userCourseInput.topic;
    case 2: // Options step
      return (
        !userCourseInput.Level ||
        !userCourseInput.Duration ||
        userCourseInput.DisplayVideo === undefined ||
        !userCourseInput.NoOfChapters ||
        userCourseInput.NoOfChapters < 1
      );
    default:
      return true;
  }
};

const GenerateCourseLayout = async() => {
  setLoading(true);
  const BASIC_PROMPT = 'Generate A Course Tutorial on Following Detail With field as Course Name, Description, Along with Chapter Name, about, Duration: ';
  const USER_INPUT_PROMPT = 'Category: '+ userCourseInput?.category + ', Topic: ' + userCourseInput?.topic + ', Level: ' + userCourseInput?.Level + ', Duration: ' + userCourseInput?.Duration + ', NoOfChapters: ' + userCourseInput?.NoOfChapters + ', in JSON format';
  const FINAL_PROMPT = BASIC_PROMPT + USER_INPUT_PROMPT;
  console.log(FINAL_PROMPT);
  const result= await GenerateCourseLayout_AI.sendMessage(FINAL_PROMPT);
  console.log(result.response?.text()); 
  console.log(JSON.parse(result.response?.text()));
  setLoading(false);
}


  return (
    <div>



      {/* Stepper */}
      <div className='flex flex-col justify-between items-center mt-10'>
        <h2 className='text-4xl font-medium' style={{ color: 'oklch(45.7% .24 277.023)' }}>Create Course</h2>
        <div className='flex mt-10'>
          {StepperOptions.map((items, index) => (
            <div key={items.id} className='flex items-center'>
              <div className='flex flex-col items-center w-[50px] md:w-[100px]'>
                <div className={`bg-gray-200 p-3 rounded-full text-white ${activeIndex >= index ? 'bg-violet-500' : ''}`}>
                  {items.icon}
                </div>
                <h2 className='hidden md:block md:text-sm'>{items.name}</h2>
              </div>
              {index !== StepperOptions.length - 1 && (
                <div className={`h-1 w-[50px] md:w-[100px] rounded-full lg:w-[170px] bg-gray-300 ${activeIndex - 1 >= index ? 'bg-purple-500' : ''
                  }`}></div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className='px-10 md:px-20 lg:px-44 mt-10'>
        {/* Components */}
        {activeIndex == 0 ? <SelectCategory /> :
          activeIndex == 1 ? <TopicDescription /> :
            <SelectOption />}

        {/* Next Previous Button */}
        <div className='flex justify-between mt-10'>
          <Button
            disabled={activeIndex == 0}
            onClick={() => setActiveIndex((prev) => Math.max(prev - 1, 0))}
            style={{ backgroundColor: 'oklch(45.7% .24 277.023)', cursor: 'pointer' }}
          >Previous
          </Button>

          {activeIndex < 2 && (
            <Button
              disabled={checkStatus()}
              onClick={() => setActiveIndex((prev) => Math.min(prev + 1, StepperOptions.length - 1))}
              style={{ backgroundColor: 'oklch(45.7% .24 277.023)', cursor: 'pointer' }}
            >
              Next
            </Button>
          )}

          {activeIndex == 2 && (
            <Button
              disabled={checkStatus()}
              onClick={() => GenerateCourseLayout()}
              style={{ backgroundColor: 'oklch(45.7% .24 277.023)', cursor: 'pointer' }}
            >
              Generate Course Layout
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
export default CreateCourse;