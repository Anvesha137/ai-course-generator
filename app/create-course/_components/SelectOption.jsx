import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { UserInputContext } from '@/app/_context/UserInputContext';

function SelectOption() {

    const { userCourseInput, setUserCourseInput } = React.useContext(UserInputContext)

    const handleInputChange = (fieldName, value) => {
        setUserCourseInput(prev => ({
            ...prev,
            [fieldName]: value
        }))
    }
    const handleSelectChange = (fieldName, value) => {
        setUserCourseInput(prev => ({
            ...prev,
            [fieldName]: value
        }))
    }
    return (
        <div className='px-4 sm:px-8 md:px-16 lg:px-32 xl:px-48'>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10'>
                <div>
                    <label className='text-sm'>🎓 Difficulty Level</label>
                    <Select onValueChange={(value) => handleInputChange('Level', value)}
                        defaultValue={userCourseInput?.Level}>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="Beginner">Beginner</SelectItem>
                            <SelectItem value="Intermediate">Intermediate</SelectItem>
                            <SelectItem value="Advance">Advance</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <div>
                    <label className='text-sm'>⏲ Course Duration</label>
                    <Select onValueChange={(value) => handleInputChange('Duration', value)}
                        defaultValue={userCourseInput?.Duration}>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="1 Hour">1 Hour</SelectItem>
                            <SelectItem value="2 Hours  ">2 Hours</SelectItem>
                            <SelectItem value="More than 3 Hours">More than 3 Hours</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <div>
                    <label className='text-sm'>▶️ Add a video</label>
                    <Select onValueChange={(value) => handleInputChange('DisplayVideo', value)}
                        defaultValue={userCourseInput?.DisplayVideo}>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="Yes">Yes</SelectItem>
                            <SelectItem value="No">No</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <div>
                    <label className='text-sm'>📖 No. of chapters</label>
                    <Input
                        type="number"
                        className="h-9 text-lg"
                        defaultValue={userCourseInput?.NoOfChapters}
                        onChange={(event) => handleInputChange('NoOfChapters', Number(event.target.value))}
                        min="1"  // Ensure at least 1 chapter
                    />
                </div>
            </div>
        </div>
    )
}

export default SelectOption